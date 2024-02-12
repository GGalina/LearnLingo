import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  padding-top: 14px;
  padding-bottom: 14px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 28px;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 16px;
  padding: 14px;
  color: #121417;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  display: flex;
  gap: 8px;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    padding: 14px 7px;
  }

  @media (min-width: 1280px){
    padding: 14px;
  }

  @media (max-width: 767px) {
    &.active {
      width: 100%;
      background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
      border: 1px solid ${({ $selcolor }) => $selcolor || '#F4C550'};
      border-radius: 12px;
    }
  }

  @media (min-width: 768px) {
    &.active {
      color: ${({ $selcolor }) => $selcolor || '#121417'};
    }
  }
`;