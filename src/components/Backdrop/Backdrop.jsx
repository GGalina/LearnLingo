import React from 'react';
import { BackdropContainer } from './Backdrop.styled';

export const Backdrop = ({ onClick, children }) => {
  
  return (
    <BackdropContainer onClick={onClick}>
      {children}
    </BackdropContainer>
  );
};

