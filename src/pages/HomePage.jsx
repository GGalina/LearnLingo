import React from 'react';
//import { useMediaQuery } from 'react-responsive';
//import { Outlet } from 'react-router-dom';
import { Home } from '../components/Home/Home';

//import { Header } from '../components/Header/Header';
// import { Container } from 'components/Container';

export const HomePage = () => {
 // const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div>
      <Home />
    </div>
  );
};