import { useMediaQuery } from 'react-responsive';
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useColor } from '../../context/ColorContext';
import { useModal } from '../../context/ModalContext';
import { LogOutAPI } from "../../services/firebaseAPI";
import {
  LogIn,
  Tooltip,
  Register,
  LogOutElement,
  TruncatedName,
  AuthContainer,
  LoginContainer,
  LogOutContainer,
  WelcomeContainer
} from "./Auth.styled";

export const Auth = ({ onClickClose }) => {
  const { selectedColor } = useColor();
  const { openLoginModal, openRegisterModal } = useModal();
  const { isLoggedIn, registeredUserName, userLogOut} = useAuth();
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const handleModalClick = (modalType) => {
    if (modalType === 'login') {
      openLoginModal();
    } else if (modalType === 'register') {
      openRegisterModal();
    }
    document.body.classList.add('no-scroll');

    if (!isTablet) {
      onClickClose();
    }
  };

  const handleLogOut = async() => {
    try {
      await LogOutAPI();
      userLogOut();
      localStorage.clear();
    } catch (error) {
      throw new Error(error);
    }
  };
 
  return (
    <>
      {!isLoggedIn && (
      <AuthContainer>
        <LoginContainer onClick={() => handleModalClick('login')}>
          <FiLogIn stroke={selectedColor} />
          <LogIn>Log in</LogIn>
        </LoginContainer>
        <Register onClick={() => handleModalClick('register')}>Registration</Register>
      </AuthContainer>
      )}

      {isLoggedIn && (
        <AuthContainer>
          <WelcomeContainer>   
            <TruncatedName>
              Welcome,{' '}
              {registeredUserName && registeredUserName.length > 7 ? (
                <>
                  {registeredUserName.slice(0, 7)}...`
                  <Tooltip>{registeredUserName}</Tooltip>
                </>
              ) : (
                registeredUserName
              )}!
            </TruncatedName>
          </WelcomeContainer>
        <LogOutContainer>
          <FiLogOut stroke={selectedColor} />
          <LogOutElement onClick={handleLogOut}>Log Out </LogOutElement>
        </LogOutContainer>
        </AuthContainer>
      )}
    </>
  );
};