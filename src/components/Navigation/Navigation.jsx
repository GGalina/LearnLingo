import { IoHomeOutline } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';
import { RiGraduationCapLine } from "react-icons/ri";
import { useColor } from '../../context/ColorContext';
import { NavContainer, NavigationLink } from "./Navigation.styled";

export const Navigation = () => {
  const { selectedColor } = useColor();
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      {isTablet && (
        <NavContainer>
          <NavigationLink to='/' selcolor={selectedColor}>Home</NavigationLink>
          <NavigationLink to='/teachers' selcolor={selectedColor}>Teachers</NavigationLink>
        </NavContainer>
      )}

      {!isTablet && (
        <NavContainer>          
          <NavigationLink to='/' selcolor={selectedColor}>
            <IoHomeOutline stroke='#121417' />
              Home
          </NavigationLink>

          <NavigationLink to='/teachers' selcolor={selectedColor}>
            <RiGraduationCapLine fill='#121417' />
              Teachers
          </NavigationLink>
        </NavContainer>
      )}
    </>
  );
};