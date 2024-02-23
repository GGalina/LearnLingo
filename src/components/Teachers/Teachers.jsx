import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { useColor } from '../../context/ColorContext';
import { fetchTeachers } from '../../services/firebaseAPI';
import { TeachersList } from '../TeachersList/TeachersList';
import {
    TeachersContainer,
    LoadMore
} from './Teachers.styled';

export const Teachers = () => {
    const { selectedColor } = useColor();
    const [teachers, setTeachers] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [lastFetched, setLastFetched] = useState(null);
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

    const loadMoreTeachers = async () => {
        try {
            setIsLoading(true);

            if (lastFetched === null || lastFetched === undefined) {
                console.error('Error fetching teachers: lastFetched is null or undefined');
                return;
            }

            const newTeachers = await fetchTeachers(lastFetched);

            if (newTeachers.length > 0) {
                setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers]);
                setLastFetched(newTeachers[newTeachers.length - 1].id);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            throw new Error(error);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        const fetchInitialTeachers = async () => {
            try {
                setIsLoading(true);
                const initialTeachers = await fetchTeachers(null);
                setTeachers(initialTeachers);
                
                if (initialTeachers.length > 0) {
                    const lastFetchedValue = initialTeachers[initialTeachers.length - 1].id;
                    setLastFetched(lastFetchedValue);
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                throw new Error(error)
            } finally {
                setIsLoading(false);
            }
        };
        fetchInitialTeachers();
    }, []);

    return (
        <TeachersContainer>
            <TeachersList teachers={teachers} isDesktop={isDesktop} />
                {hasMore && (
                    <LoadMore $selcolor={selectedColor} type="button" onClick={loadMoreTeachers}>
                        Load more
                    </LoadMore>
                )}
            {isLoading && <Loader />}
        </TeachersContainer>
    );
};
