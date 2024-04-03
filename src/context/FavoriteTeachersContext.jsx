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

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserId(user.uid);
                fetchFavoriteTeachers(); 
            } else {
                setUserId(null);
                setFavoriteTeachers([]);
            }
        });

        return unsubscribe;
    }, []);

    const fetchFavoriteTeachers = async () => {
        try {
            const teachers = await getFavoriteTeachersAPI();
            setFavoriteTeachers(teachers);
        } catch (error) {
            console.error('Error fetching favorite teachers:', error);
        }
    };

    const addToFavorites = async (teacherId) => {
        try {
            await addToFavoritesAPI(teacherId);
            setFavoriteTeachers([...favoriteTeachers, { id: teacherId }]); 
        } catch (error) {
            console.error('Error adding to favorites:', error);
        }
    };

    const removeFromFavorites = async (teacherId) => {
        try {
            await removeFromFavoritesAPI(teacherId);
            setFavoriteTeachers(favoriteTeachers.filter(teacher => teacher.id !== teacherId));
        } catch (error) {
            console.error('Error removing from favorites:', error);
        }
    };

    const isFavorite = (teacherId) => {
        return favoriteTeachers.some(teacher => teacher.id === teacherId);
    };

    return (
        <FavoriteTeachersContext.Provider
            value={{ favoriteTeachers, addToFavorites, removeFromFavorites, isFavorite }}
        >
            {children}
        </FavoriteTeachersContext.Provider>
    );
};
