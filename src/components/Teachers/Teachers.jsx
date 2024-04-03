import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { useColor } from '../../context/ColorContext';
import { fetchTeachersAPI, fetchFilteredTeachersAPI } from '../../services/firebaseAPI';
import { Filter } from '../Filter/Filter';
import { TeachersList } from '../TeachersList/TeachersList';
import {
  LoadMore,
  TeachersContainer
} from './Teachers.styled';

export const Teachers = () => {
    const { selectedColor } = useColor();
    const [teachers, setTeachers] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [lastFetched, setLastFetched] = useState(null);
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

    const [filters, setFilters] = useState({
        language: '',
        level: '',
        price: '',
    });

    useEffect(() => {
        const fetchInitialTeachers = async () => {
          try {
              console.log('we tt')
              setIsLoading(true);
              
              const initialTeachers = await fetchTeachersAPI(null);
              setTeachers(initialTeachers);
              console.log(initialTeachers);

                if (initialTeachers.length > 0) {
                    const lastFetchedValue = initialTeachers[initialTeachers.length - 1].id;
                    setLastFetched(lastFetchedValue);
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                console.error('Error fetching initial teachers:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInitialTeachers();
    }, []);

    const loadMoreTeachers = async () => {
        try {
            setIsLoading(true);

            if (lastFetched === null || lastFetched === undefined) {
                console.error('Error fetching teachers: lastFetched is null or undefined');
                return;
            }

            const newTeachers = await fetchTeachersAPI(teachers[teachers.length - 1].id);

            if (newTeachers.length > 0) {
                setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers]);
                setLastFetched(newTeachers[newTeachers.length - 1].id);
            } else {
                // No more teachers to load
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching teachers:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFilterChange = async (newFilters) => {
  try {
    setFilters(newFilters);
    setTeachers([]); // Reset teachers array
    setHasMore(true); // Reset hasMore flag
    setLastFetched(null); // Reset lastFetched value

    const filteredTeachers = await fetchFilteredTeachersAPI(4, newFilters);

    if (filteredTeachers.length > 0) {
      setTeachers(filteredTeachers);
      setLastFetched(filteredTeachers[filteredTeachers.length - 1].id);
    } else {
      setHasMore(false);
    }
  } catch (error) {
    console.error('Error handling filter change:', error);
    // Handle error as needed
  }
};


    // const handleFilterChange = async (newFilters) => {
    //     setFilters(newFilters);
    //     setTeachers([]); // Reset teachers array
    //     setHasMore(true); // Reset hasMore flag
    //     setLastFetched(null); // Reset lastFetched value

    //     let allTeachers;
    //     // Fetch initial set of data
    //     allTeachers = await fetchFilteredTeachersAPI(null, 4); // Fetch a larger set initially

    //     // Apply first filter
    //     if (newFilters.language) {
    //         allTeachers = allTeachers.filter((teacher) => teacher.languages.includes(newFilters.language));
    //     }

    //     // Apply second filter
    //     if (newFilters.level) {
    //         allTeachers = allTeachers.filter((teacher) => teacher.levels.includes(newFilters.level));
    //     }

    //     if (newFilters.price) {
    //         // Define price categories
    //         const priceCategories = {
    //             '10': [0, 19],
    //             '20': [20, 29],
    //             '30': [30, 39],
    //             '40': [40, 49]
    //             // Add more categories as needed
    //         };

    //         // Filter based on price categories
    //         const [minPrice, maxPrice] = priceCategories[newFilters.price];
    //         allTeachers = allTeachers.filter(
    //             (teacher) => teacher.price_per_hour >= minPrice && teacher.price_per_hour <= maxPrice
    //         );
    //     }

    //     // Update state with the filtered data
    //     setTeachers((prevTeachers) => [...prevTeachers, ...allTeachers.slice(0, 4)]);
    //     setLastFetched(allTeachers[allTeachers.length - 1]?.id);
    // }





const loadMoreFilteredTeachers = async () => {
  try {
      setIsLoading(true);

      if (lastFetched === null || lastFetched === undefined) {
        console.error('Error fetching teachers: lastFetched is null or undefined');
        return;
      }

      const newTeachers = await fetchTeachersAPI(teachers[teachers.length - 1].id);
      
      if (newTeachers.length > 0) {
        setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers]);
        setLastFetched(newTeachers[newTeachers.length - 1].id);
      } else {
        // No more teachers to load
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching teachers:', error);
    } finally {
      setIsLoading(false);
    }
};


  return (
    <TeachersContainer>
      <Filter onFilterChange={handleFilterChange} />
      <TeachersList teachers={teachers} isDesktop={isDesktop} />
      {!isLoading && hasMore && (
        <LoadMore $selcolor={selectedColor} type="button" onClick={filters.language || filters.level || filters.price ? loadMoreFilteredTeachers : loadMoreTeachers}>
          Load more
        </LoadMore>
      )}
      {isLoading && <Loader />}
    </TeachersContainer>
  );
};
