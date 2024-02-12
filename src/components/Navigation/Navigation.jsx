import { IoHomeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';
import { RiGraduationCapLine } from "react-icons/ri";
import { useColor } from '../../context/ColorContext';
import { useAuth } from "../../context/AuthContext";
import { NavContainer, NavigationLink } from "./Navigation.styled";

export const Navigation = ({ onClickClose }) => {
  const { selectedColor } = useColor();
  const { isLoggedIn } = useAuth();
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const handleLinkClick = () => {
    onClickClose();
  };

  return (
    <>
      {isTablet && !isLoggedIn && (
        <NavContainer>
          <NavigationLink to='/' $selcolor={selectedColor}>Home</NavigationLink>
          <NavigationLink to='/teachers' $selcolor={selectedColor}>Teachers</NavigationLink>
        </NavContainer>
      )}

      {isTablet && isLoggedIn && (
        <NavContainer>
          <NavigationLink to='/' $selcolor={selectedColor}>Home</NavigationLink>
          <NavigationLink to='/teachers' $selcolor={selectedColor}>Teachers</NavigationLink>
          <NavigationLink to='/favorites' $selcolor={selectedColor}>Favorites</NavigationLink>
        </NavContainer>
      )}

      {!isTablet && !isLoggedIn && (
        <NavContainer>          
          <NavigationLink to='/' $selcolor={selectedColor} onClick={handleLinkClick}>
            <IoHomeOutline stroke='#121417' />
              Home
          </NavigationLink>

          <NavigationLink to='/teachers' $selcolor={selectedColor} onClick={handleLinkClick}>
            <RiGraduationCapLine fill='#121417' />
              Teachers
          </NavigationLink>
        </NavContainer>
      )}

      {!isTablet && isLoggedIn && (
        <NavContainer>          
          <NavigationLink to='/' $selcolor={selectedColor} onClick={handleLinkClick}>
            <IoHomeOutline stroke='#121417' />
              Home
          </NavigationLink>

          <NavigationLink to='/teachers' $selcolor={selectedColor} onClick={handleLinkClick}>
            <RiGraduationCapLine fill='#121417' />
              Teachers
          </NavigationLink>

          <NavigationLink to='/favorites' $selcolor={selectedColor} onClick={handleLinkClick}>
            <IoIosHeartEmpty fill='#121417' />
              Favorites
          </NavigationLink>
        </NavContainer>
      )}
    </>
  );
};