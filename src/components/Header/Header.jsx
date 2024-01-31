import { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from 'react-responsive';
import { Logo } from '../Logo/Logo';
import { Auth } from '../Auth/Auth';
import { Navigation } from '../Navigation/Navigation';
import {
  HeaderContainer, Container,
  HeaderWrapper, SlideMenu,
  CloseIcon, MenuWrapper,
  BackdropOverlay
} from './Header.styled';

export const Header = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (event) => {
    const isLinkOrButton =
      event.target.tagName.toLowerCase() === 'a' ||
      event.target.tagName.toLowerCase() === 'button';

    if (isLinkOrButton) {
      return;
    }

    event.stopPropagation();
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Logo />
        {isTablet && (
          <HeaderWrapper>
            <Navigation />
            <Auth />
          </HeaderWrapper>
        )}

        {!isTablet &&
          <>
            {!isMenuOpen &&
              <GiHamburgerMenu onClick={toggleMenu} />
            }
          </>
        }

        {!isTablet && isMenuOpen && (
          <BackdropOverlay onClick={closeMenu}>
            <SlideMenu onClick={handleMenuClick}>
              <CloseIcon>
                <IoMdClose onClick={toggleMenu} />
              </CloseIcon>
              <MenuWrapper>
                <Navigation />
                <Auth />
              </MenuWrapper>
            </SlideMenu>
          </BackdropOverlay>
        )}
      </HeaderContainer>
    </Container>
  );
};
