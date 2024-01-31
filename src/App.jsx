import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';
import { Header } from './components/Header/Header';
import { ColorProvider } from './context/ColorContext';
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const TeachersPage = lazy(() => import('./pages/TeachersPage').then(module => ({ default: module.TeachersPage })));


const App = () => {
  return (
    <ColorProvider>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </ColorProvider>
  );
};

export default App;
