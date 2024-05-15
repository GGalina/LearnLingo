import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const TeachersPage = lazy(() => import('./pages/TeachersPage').then(module => ({ default: module.TeachersPage })));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage').then(module => ({ default: module.FavoritesPage })));

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/teachers" element={<Layout />}>
        <Route index element={<TeachersPage />} />
      </Route>
      <Route path="/favorites" element={<Layout />}>
        <Route index element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
