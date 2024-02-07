import React, { lazy, Suspense } from 'react';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Outlet } from 'react-router-dom';
import { ColorProvider } from '../../context/ColorContext';
import { ModalProvider } from '../../context/ModalContext';
import { useModal } from '../../context/ModalContext';

const LoginModal = lazy(() => import('../LoginModal/LoginModal').then(module => ({ default: module.LoginModal })));
const RegistrationModal = lazy(() => import('../RegistrationModal/RegistrationModal').then(module => ({ default: module.RegistrationModal })));

export const Layout = ({ children }) => (
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
