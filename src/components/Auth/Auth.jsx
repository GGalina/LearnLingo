import { FiLogIn } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';
import { useColor } from '../../context/ColorContext';
import { useModal } from '../../context/ModalContext';
import {
  AuthContainer, LoginContainer,
  LogIn, Register
} from "./Auth.styled";

export const Auth = ({ onClickClose }) => {
  const { selectedColor } = useColor();
  const { openLoginModal, openRegisterModal } = useModal();
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
 
  return (
    <>
      <AuthContainer>
        <LoginContainer onClick={() => handleModalClick('login')}>
          <FiLogIn stroke={selectedColor} />
          <LogIn>Log in</LogIn>
        </LoginContainer>
        <Register onClick={() => handleModalClick('register')}>Registration</Register>
      </AuthContainer>
    </>
  );
};