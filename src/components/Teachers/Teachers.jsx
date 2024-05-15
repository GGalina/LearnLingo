import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { Filter } from '../Filter/Filter';
import { useMediaQuery } from 'react-responsive';
import { useColor } from '../../context/ColorContext';
import { fetchTeachersAPI, fetchAllTeachersAPI } from '../../services/firebaseAPI';
import { TeachersList } from '../TeachersList/TeachersList';
import {
  LoadMore,
  NoResults,
  TeachersContainer,
} from './Teachers.styled';

export const Teachers = () => {
    const batchSize = 4;
    const [page, setPage] = useState(1);
    const { selectedColor } = useColor();
    const [teachers, setTeachers] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [lastFetched, setLastFetched] = useState(null);
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
    const [filteredTeachers, setFilteredTeachers] = useState([]);
    const [filters, setFilters] = useState({
        language: '',
        level: '',
        price: '',
    });

    useEffect(() => {
        const fetchInitialTeachers = async () => {
          try {
              setIsLoading(true);
              
              const initialTeachers = await fetchTeachersAPI(null);
              setTeachers(initialTeachers);

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
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching teachers:', error);
        } finally {
            setIsLoading(false);
        }
    };
  
    const handleFilterChange = async (filters) => {
      try {
        setPage(1);
        setIsLoading(true);
        setFilters(filters);
        setTeachers([]); // Reset teachers array
        setHasMore(true); // Reset hasMore flag
        setLastFetched(null); // Reset lastFetched value

        const allTeachers = await fetchAllTeachersAPI();

        const filteredTeachers = allTeachers.filter((teacher) => {
          let match = true;

          if (filters.language !== undefined && !teacher.languages.includes(filters.language)) {
            match = false;
          }

          if (filters.level !== undefined && filters.level !== '' && !teacher.levels.includes(filters.level)) {
            match = false;
          }

          if (filters.price !== undefined && filters.price !== '') {
            const priceRange = parseInt(filters.price);
            const teacherPrice = parseInt(teacher.price_per_hour);

            if (teacherPrice < priceRange || teacherPrice >= priceRange + 10) {
              match = false;
            }
          }

          return match;
        });

        setFilteredTeachers(filteredTeachers);

        if (filteredTeachers.length > 0 && filteredTeachers.length > 4) {
          setTeachers(filteredTeachers.slice(0, batchSize));
        } else if (filteredTeachers.length > 0 && filteredTeachers.length <= 4) {
          setTeachers(filteredTeachers);
          setHasMore(false);
        } else if (filteredTeachers.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error handling filter change:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const loadMoreFilteredTeachers = () => {
      const nextPage = page + 1;

      if (filteredTeachers.length > nextPage * batchSize) {
          setTeachers(filteredTeachers.slice(0, nextPage * batchSize));
          setPage(nextPage);
      } else {
          setHasMore(false);
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
      {filteredTeachers.length === 0 && teachers.length === 0 && !isLoading && (
        <NoResults>Sorry, no teachers found matching the selected criteria</NoResults>
      )}
    </TeachersContainer>
  );
};
