import styled from 'styled-components';

export const ModalContainer = styled.div`
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 30px;
    padding: 20px 20px 64px 20px;
    position: relative;
    max-width: 460px;

    @media (min-width: 480px) {
        width: 460px; 
        padding: 40px 40px 64px 40px;
    }
 
    @media (min-width: 768px) {
        width: 566px;
        padding: 40px 40px 64px 40px;
    }

    @media (min-width: 1280px) {
        width: 566px;
        padding: 40px 40px 64px 40px;
    }
`;

export const CloseIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const Header = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.8px; 
    margin-top: 28px;
    color: #121417;
    text-align: center;

    @media (min-width: 1280px) {
        font-size: 32px;
        line-height: 48px;
    }
`;


export const Desc = styled.p`
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 16px;
    line-height: 22px;
    margin-top: 20px;
    margin-bottom: 40px;
    color: rgba(18, 20, 23, 0.8);
`;

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Btn = styled.button`
    background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
    border: 1px solid ${({ $selcolor }) => $selcolor || '#F4C550'};
    border-radius: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    width: 155px;
    text-align: center;
    color: #121417;
    cursor: pointer;

    font-family: 'Roboto-Bold',sans-serif;
    font-size: 18px;
    line-height: 28px; 
`;