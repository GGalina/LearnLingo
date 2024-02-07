import React, {
createContext,
useState,
useContext
} from 'react';

const ModalContext = createContext();

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export const ModalProvider = ({ children }) => {
    const [modalType, setModalType] = useState(null);

    const openLoginModal = () => {
        setModalType('login');
    };

    const openRegisterModal = () => {
        setModalType('register');
    };

    const closeModal = () => {
        setModalType(null);
    };

    return (
        <ModalContext.Provider
            value={{ modalType, openLoginModal, openRegisterModal, closeModal }}
        >
            {children}
        </ModalContext.Provider>
    );
};