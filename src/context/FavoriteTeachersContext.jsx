import { auth } from '../services/firebaseAPI';
import React, {
    useState,
    useEffect,
    useContext,
    createContext 
} from 'react';
import {
    addToFavoritesAPI,
    removeFromFavoritesAPI,
    getFavoriteTeachersAPI,
} from '../services/firebaseAPI';

const FavoriteTeachersContext = createContext();

export const useFavoriteTeachers = () => useContext(FavoriteTeachersContext);

export const FavoriteTeachersProvider = ({ children }) => {
    const [ , setUserId] = useState(null);
    const [favoriteTeachers, setFavoriteTeachers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const teachers = await getFavoriteTeachersAPI();
                setFavoriteTeachers(teachers);

            } catch (error) {
                console.error('Error fetching favorite teachers:', error);
                
            }  finally {
                setIsLoading(false); 
            }
        };

        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserId(user.uid);
                fetchData();
            } else {
                setUserId(null);
                setFavoriteTeachers([]);
            }
        });

        return () => unsubscribe(); 
    }, []);

    const addToFavorites = async (teacherId) => {
        try {
            await addToFavoritesAPI(teacherId);
            const teachers = await getFavoriteTeachersAPI();
            setFavoriteTeachers([...teachers]);
        } catch (error) {
            console.error('Error adding to favorites:', error);
        }
    };


    const removeFromFavorites = async (teacherId) => {
        try {
            await removeFromFavoritesAPI(teacherId);
            setFavoriteTeachers(prevTeachers => prevTeachers.filter(teacher => teacher.id !== teacherId));
        } catch (error) {
            console.error('Error removing from favorites:', error);
        }
    };

    const isFavorite = (teacherId) => {
        return favoriteTeachers.some(teacher => teacher.id === teacherId);
    };

    return (
        <FavoriteTeachersContext.Provider
            value={{ favoriteTeachers, addToFavorites, removeFromFavorites, isFavorite, isLoading }}
        >
            {children}
        </FavoriteTeachersContext.Provider>
    );
};
