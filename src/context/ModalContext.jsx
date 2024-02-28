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
    const [modalData, setModalData] = useState(null);

    const allowedModalTypes = ['login', 'register', 'booking', 'noauth', null];

    const setModalTypeSafe = (newType, newData) => {
        if (allowedModalTypes.includes(newType)) {
            setModalType(newType);
            setModalData(newData);
        } else {
            console.error(`Invalid modalType: ${newType}`);
        }
    };

    const openLoginModal = () => {
        setModalTypeSafe('login');
    };

    const openRegisterModal = () => {
        setModalTypeSafe('register');
    };

    const openBookingModal = (teacher) => {
        setModalTypeSafe('booking', teacher);
    }

    const openNonAuthModal = () => {
        setModalTypeSafe('noauth');
    }

    const closeModal = () => {
        setModalTypeSafe(null);
        setModalData(null); 
    };

    return (
        <ModalContext.Provider
            value={{ modalType, modalData, openLoginModal, openRegisterModal, openBookingModal, openNonAuthModal, closeModal }}
        >
            {children}
        </ModalContext.Provider>
    );
};