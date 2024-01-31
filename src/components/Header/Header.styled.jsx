import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 32px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 480px) {
        width: 480px; 
    }
 
    @media (min-width: 768px) {
        width: 768px;
        padding: 20px 42px;
    }

    @media (min-width: 1280px) {
        width: 1280px;
        padding: 20px 128px;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-grow: 0.50; 
    justify-content: space-between;
    align-items: center;
`;

export const SlideMenu = styled.div`
    width: ${({ isOpen }) => (isOpen ? '0' : '250px')};
    height: 100vh;
    position: absolute;
    top: 0;
    right:  0;

    padding: 20px 10px;
    background-color: #FFFFFF;
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
    transition: width 0.7s ease-in-out; 
    z-index: 1000;
    overflow: hidden;
`;



export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  min-height: 100vh;
  min-width: 320px;
`;

// Rest of your styled components...
export const CloseIcon = styled.div`
    width: 100%;
 display: flex;
 justify-content: flex-end;
`;

export const MenuWrapper = styled.div`
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     height: 100%;
     padding: 32px 20px;
     
`;

export const BackdropOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Ensure the overlay is above other content */
`;


