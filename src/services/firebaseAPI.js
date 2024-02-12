import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from './firebaseConfig';
import { toast } from 'react-toastify';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

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
