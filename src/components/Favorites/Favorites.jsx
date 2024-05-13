import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { useColor } from '../../context/ColorContext';
import { TeachersList } from '../TeachersList/TeachersList';
import { useFavoriteTeachers } from '../../context/FavoriteTeachersContext';
import { Text, LoadMore, Container } from './Favorites.styled';

export const Favorites = () => {
    const batchSize = 4;
    const [page, setPage] = useState(1);
    const { selectedColor } = useColor();
    const [allTeachers, setAllTeachers] = useState([]);
    const { favoriteTeachers, isLoading } = useFavoriteTeachers();
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

    useEffect(() => {
        setAllTeachers(favoriteTeachers.slice(0, page * batchSize));
    }, [favoriteTeachers, page]);

    const loadMoreTeachers = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <Container>
            {isLoading && <Loader />}

            {!isLoading && favoriteTeachers.length === 0 ? (
                <Text>No favorite teachers found.</Text>
            ) : (
                <>
                    <TeachersList teachers={allTeachers} isDesktop={isDesktop} />
                    {favoriteTeachers.length > allTeachers.length && (
                        <LoadMore $selcolor={selectedColor} type="button" onClick={loadMoreTeachers}>
                            Load more
                        </LoadMore>
                    )}
                </>
            )}
        </Container>
    );
};