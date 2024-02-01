import React, { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Outlet } from 'react-router-dom';
import { ColorProvider } from '../../context/ColorContext';

export const Layout = ({ children }) => (
    <ColorProvider>
        <Header />
        <Suspense fallback={<Loader />}>
            {children}
            <Outlet />
        </Suspense>
    </ColorProvider>
);
