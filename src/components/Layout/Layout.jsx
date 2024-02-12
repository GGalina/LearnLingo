import React, { lazy, Suspense } from 'react';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useModal } from '../../context/ModalContext';
import { ColorProvider } from '../../context/ColorContext';
import { ModalProvider } from '../../context/ModalContext';
import { AuthProvider } from '../../context/AuthContext';

const LoginModal = lazy(() => import('../LoginModal/LoginModal').then(module => ({ default: module.LoginModal })));
const RegistrationModal = lazy(() => import('../RegistrationModal/RegistrationModal').then(module => ({ default: module.RegistrationModal })));

export const Layout = ({ children }) => (
  <AuthProvider>

      <ColorProvider>
      <ModalProvider>
          <Header />
          <Suspense fallback={<Loader />}>
            {children}
            <Outlet />
          <ModalRenderer />

          </Suspense>
        </ModalProvider>
      </ColorProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
       />
  </AuthProvider>
);

const ModalRenderer = () => {
  const { modalType } = useModal();

  return (
    <>
      {modalType === 'login' && <LoginModal />}
      {modalType === 'register' && <RegistrationModal />}
    </>
  );
};
