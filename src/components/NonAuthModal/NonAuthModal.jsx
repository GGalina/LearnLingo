import { useEffect } from "react";
import { IoMdClose } from 'react-icons/io';
import { Backdrop } from "../Backdrop/Backdrop";
import { useModal } from '../../context/ModalContext';
import { useColor } from '../../context/ColorContext';
import {
    Btn,
    Desc,
    Header,
    Wrapper,
    CloseIcon,
    BtnContainer,
    ModalContainer
} from './NonAuthModal.styled';

export const NonAuthModal = () => {
    const { selectedColor } = useColor();
    const { openLoginModal, openRegisterModal, closeModal } = useModal();

    const handleModalClick = (modalType) => {
        if (modalType === 'login') {
            openLoginModal();
        } else if (modalType === 'register') {
            openRegisterModal();
        }
        document.body.classList.add('no-scroll');
    };

    const handleClose = () => {
        closeModal();
        document.body.classList.remove('no-scroll');
    };

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.keyCode === 27) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEscKey);
        return () => {
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [closeModal]);

    return (
    <Backdrop onClick={handleClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseIcon>
                <IoMdClose style={{ width: '32px', height: '32px' }} onClick={handleClose} />
            </CloseIcon>
            <Header>Please register or log in to continue.</Header>
                <Desc>Looks like you are not logged in. Please login or register to enjoy all the functionality of LearnLingo.</Desc>
                <BtnContainer>
                    <Wrapper onClick={() => handleModalClick('login')}>
                        <Btn $selcolor={selectedColor}>Log In</Btn>
                    </Wrapper>
                    <Wrapper onClick={() => handleModalClick('register')}>
                        <Btn $selcolor={selectedColor} >Registration</Btn>
                    </Wrapper>
                </BtnContainer>
        </ModalContainer>
    </Backdrop>
    );
};
