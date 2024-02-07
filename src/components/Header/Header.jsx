import { useState, useEffect, useCallback } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const openSideMenu = () => {
    setIsMenuOpen(true);
  };

  const closeSideMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []); 

  const handleMenuClick = (e) => {
    if (e.currentTarget === e.target) {
      closeSideMenu();
    }
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.keyCode === 27) {
        closeSideMenu();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [closeSideMenu]);

  return (
    <Container>
      <HeaderContainer>
        <Logo />
        {isTablet && (
          <HeaderWrapper>
            <Navigation  />
            <Auth />
          </HeaderWrapper>
        )}

        {!isTablet &&
          <>
            {!isMenuOpen &&
              <GiHamburgerMenu onClick={openSideMenu} />
            }
          </>
        }

        {!isTablet && isMenuOpen && (
          <BackdropOverlay className="backdrop" onClick={handleMenuClick}>
            <SlideMenu >
              <CloseIcon className="close-icon">
                <IoMdClose onClick={closeSideMenu} />
              </CloseIcon>
              <MenuWrapper>
                <Navigation onClickClose={closeSideMenu}/>
                <Auth onClickClose={closeSideMenu}/>
              </MenuWrapper>
            </SlideMenu>
          </BackdropOverlay>
        )}
      </HeaderContainer>
    </Container>
  );
};
