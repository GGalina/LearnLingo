import axios from 'axios';
import "firebase/compat/auth";
import 'firebase/compat/database';
import { toast } from 'react-toastify';
import firebase from "firebase/compat/app";
import { firebaseConfig } from './firebaseConfig';
import {
  getDatabase, ref, get,
  query, orderByChild,
  startAfter, limitToFirst
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
      response.push({ id: childSnapshot.key, ...data });
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