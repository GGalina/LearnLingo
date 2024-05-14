import axios from 'axios';
import "firebase/compat/auth";
import 'firebase/compat/database';
import { toast } from 'react-toastify';
import firebase from "firebase/compat/app";
import { firebaseConfig } from './firebaseConfig';
import {
  getDatabase, ref, get, set,
  query, orderByChild,  orderByKey,
  startAfter, limitToFirst, equalTo,
} from 'firebase/database';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export const auth = firebase.auth();

axios.defaults.baseURL = 'https://learnlingo-email-sender-backend.onrender.com';

// --------------------------------Authentification---------------------------------

export const RegisterAPI = async (name, email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await auth.currentUser.updateProfile({ displayName: name });
    const user = auth.currentUser;
    return user.displayName; 
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      toast.error('Email is already in use. Please choose a different email or login');
      throw new Error(error);
    } else {
      toast.error('Registration failed. Please try again.')
      throw new Error(error);
    }
  }
};

export const LoginAPI = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    return user.displayName; 
  } catch (error) {
    if (error.code === 'auth/invalid-credential') {
      toast.error('Email or password is incorect');
      throw new Error(error);
    } else {
      toast.error('Login failed. Please try again.')
      throw new Error(error);
    }
  }
};

export const LogOutAPI = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    toast.error('Something went wrong during logout')
    throw new Error(error);
  }
};

//----------------------------------------------Teachers-------------------------------------------

export const fetchTeachersAPI = async (lastFetched, batchSize = 4) => {
  try {
    const teachersRef = ref(db, 'teachers');
    let teachersQuery;
    if (lastFetched) {
      teachersQuery = query(
        teachersRef,
        orderByChild('id'),
        startAfter(lastFetched),
        limitToFirst(batchSize)
      );
    } else {
      teachersQuery = query(
        teachersRef,
        orderByChild('id'),
        limitToFirst(batchSize)
      );
    }

    const snapshot = await get(teachersQuery);
    const response = [];

    snapshot.forEach((childSnapshot) => {
      const data = childSnapshot.val();
      const id = data.id; 
      response.push({ id, ...data });
    });

    return response;
  } catch (error) {
    toast.error('Error fetching teachers:');
    throw new Error('Error fetching teachers:', error);
  }
};

//----------------------------------------------Booking free trail-------------------------------------------

export const sendEmailApi = async formData => {
  try {
    const { data } = await axios.post('/sendEmail', formData);
    return data.message;
  } catch (error) {
    toast.error('Error sending a Booking request');
    throw new Error('Error sending a Booking request:', error);
  }
};

//----------------------------------------------Favorites-------------------------------------------

export const addToFavoritesAPI = async (teacherId) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error('User is not authenticated.');
    }

    const userId = user.uid;
    const favoritesRef = ref(db, `users/${userId}/favorites`);
    const orderedFavoritesRef = query(favoritesRef, orderByKey());

    const snapshot = await get(orderedFavoritesRef);
    const currentFavorites = snapshot.exists() ? snapshot.val() : [];

    const updatedFavorites = [...currentFavorites, teacherId];
    await set(orderedFavoritesRef, updatedFavorites);
    toast.success('Teacher added to favorites.');
    return updatedFavorites;
  } catch (error) {
    toast.error('Error adding teacher to favorites:', error.message);
    throw new Error(error);
  }
};

export const removeFromFavoritesAPI = async (teacherId) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error('User is not authenticated.');
    }

    const userId = user.uid;
    const favoritesRef = ref(db, `users/${userId}/favorites`);

    const snapshot = await get(favoritesRef);
    if (snapshot.exists()) {
      const favoritesArray = snapshot.val();
      const index = favoritesArray.indexOf(teacherId); // Check if the teacherId exists in the favorites array

      if (index !== -1) {  // Teacher is in favorites, remove it
        favoritesArray.splice(index, 1);
        await set(favoritesRef, favoritesArray); 

        toast('Teacher removed from favorites.');
        return favoritesArray;
      } else {
        toast.info('Teacher is not in favorites.');
      }
    } else {
      toast.info('No favorites found.');
    }
  } catch (error) {
    toast.error('Error removing teacher from favorites:', error.message);
    throw new Error(error);
  }
};

export const getFavoriteTeachersAPI = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error('User is not authenticated.');
    }

    const userId = user.uid;
    const favoritesRef = ref(db, `users/${userId}/favorites`);

    const snapshot = await get(favoritesRef);
    const favoriteTeacherIds = [];

    snapshot.forEach((childSnapshot) => {
      const teacherId = childSnapshot.val();
      favoriteTeacherIds.push(teacherId);
    });

    const teachers = [];

    for (const teacherId of favoriteTeacherIds) {
      const teachersQuery = query(ref(db, 'teachers'), orderByChild('id'), equalTo(teacherId));
      const snapshot = await get(teachersQuery);

      snapshot.forEach((teacherChildSnapshot) => {
        const teacherData = teacherChildSnapshot.val();
        teachers.push(teacherData);
      });
    }
    return teachers;
  } catch (error) {
    toast.error('Error getting favorite teachers:', error.message);
    throw new Error(error);
  }
};

//----------------------------------------------Filters-------------------------------------------

export const fetchAllTeachersAPI = async () => {
  try {
    const teachersRef = ref(db, 'teachers');
    const teachersQuery = query(teachersRef, orderByChild('id'));

    const snapshot = await get(teachersQuery);
    const response = [];

    snapshot.forEach((childSnapshot) => {
      const data = childSnapshot.val();
      const id = data.id; 
      response.push({ id, ...data });
    });

    return response;
  } catch (error) {
    toast.error('Error fetching teachers:');
    throw new Error('Error fetching teachers:', error);
  }
};