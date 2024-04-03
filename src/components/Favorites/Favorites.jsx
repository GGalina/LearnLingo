import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { useColor } from '../../context/ColorContext';
import { useAuth } from '../../context/AuthContext';
import { TeachersList } from '../TeachersList/TeachersList';
import { getFavoriteTeachersAPI} from '../../services/firebaseAPI';
import {
  Container,
  LoadMore
} from './Favorites.styled';

export const Favorites = () => {
    const { isLoggedIn } = useAuth();
    const { selectedColor } = useColor();
    const [teachers, setTeachers] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [lastFetched, setLastFetched] = useState(null);
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

    useEffect(() => {
        const fetchFavoriteTeachers = async () => {
            try {
                if (isLoggedIn) {
                    setIsLoading(true);
                    const initialTeachers = await getFavoriteTeachersAPI(null);
                    setTeachers(initialTeachers);

                    if (initialTeachers.length > 0) {
                        const lastFetchedValue = initialTeachers[initialTeachers.length - 1].id;
                        setLastFetched(lastFetchedValue);
                    } else {
                        setHasMore(false);
                    }
                }
            } catch (error) {
                console.error('Error fetching initial teachers:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFavoriteTeachers();
    }, []);

    const loadMoreTeachers = async () => {
        try {
            setIsLoading(true);

            if (lastFetched === null || lastFetched === undefined) {
                console.error('Error fetching teachers: lastFetched is null or undefined');
                return;
            }

            const newTeachers = await getFavoriteTeachersAPI(teachers[teachers.length - 1].id);

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
    <Container>
      <TeachersList teachers={teachers} isDesktop={isDesktop} />
      {!isLoading && hasMore && (
        <LoadMore $selcolor={selectedColor} type="button" onClick={loadMoreTeachers}>
          Load more
        </LoadMore>
      )}
      {isLoading && <Loader />}
    </Container>
  );
};
