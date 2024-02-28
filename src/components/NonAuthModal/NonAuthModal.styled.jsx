import styled from 'styled-components';

export const ModalContainer = styled.div`
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 30px;
    padding: 20px 20px 64px 64px;
    position: relative;

    @media (min-width: 480px) {
        width: 480px; 
    }
 
    @media (min-width: 768px) {
        width: 566px;
    }

    @media (min-width: 1280px) {
        width: 566px;
    }
`;

export const CloseIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const Header = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.8px; 
    margin-top: 28px;
    color: #121417;
`;

export const Desc = styled.p`
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 16px;
    line-height: 22px;
    margin-top: 20px;
    margin-bottom: 40px;
    margin-right: 48px;
    color: rgba(18, 20, 23, 0.8);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-right: 44px;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 40px;
`;


export const PasswordContainer = styled.div`
    width: 100%;
    position: relative;
`;

export const Password = styled.input`
    border: 1px solid ${(props) => (props.$haserror ? '#D2042D' : props.$selcolor)};
    border-radius: 12px;
    padding: 16px 18px; 
    width: 100%;

    &:focus {
        border: 2px solid ${(props) => (props.$haserror ? '#D2042D' : props.$selcolor)};
        box-shadow: 0 0 5px rgba(161, 157, 144, 0.7);
    }

    &::placeholder {
        color: #121417;
        font-family: 'Roboto-Regular', sans-serif;
        font-size: 16px;
        line-height: 22px;
    }
`;

export const PasswordErrorMsg = styled.p`
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 12px;
    color: #D2042D;
    position: absolute;
    bottom: -28px;
    left: 9px;

    @media (min-width: 768px) {
        bottom: -14px;
    }
`;

export const EmailWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const Email = styled.input`
    border: 1px solid ${(props) => (props.$haserror ? '#D2042D' : props.$selcolor)};
    border-radius: 12px;
    padding: 16px 18px; 
    width: 100%;
    position: relative;

    &:focus {
        border: 2px solid ${(props) => (props.$haserror ? '#D2042D' : props.$selcolor)};
        box-shadow: 0 0 5px rgba(161, 157, 144, 0.7);
    }

    &::placeholder {
        color: #121417;
        font-family: 'Roboto-Regular', sans-serif;
        font-size: 16px;
        line-height: 22px;
    }
`;

export const EmailErrorMsg = styled.p`
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 12px;
    color: #D2042D;
    position: absolute;
    bottom: -14px;
    left: 9px;
`;

export const NameWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const Name = styled.input`
    border: 1px solid ${(props) => (props.$haserror ? '#D2042D' : props.$selcolor)};
    border-radius: 12px;
    padding: 16px 18px; 
    width: 100%;

    &:focus {
        border: 2px solid ${(props) => (props.$haserror ? '#D2042D' : props.$selcolor)};
        box-shadow: 0 0 5px rgba(161, 157, 144, 0.7);
    }

    &::placeholder {
        color: #121417;
        font-family: 'Roboto-Regular', sans-serif;
        font-size: 16px;
        line-height: 22px;
    }
`;

export const NameErrorMsg = styled.p`
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 12px;
    color: #D2042D;
    position: absolute;
    bottom: -14px;
    left: 9px;
`;

export const SignUpBtn = styled.button`
    background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
    border: 1px solid ${({ $selcolor }) => $selcolor || '#F4C550'};
    border-radius: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    text-align: center;
    color: #121417;
    cursor: pointer;

    font-family: 'Roboto-Bold',sans-serif;
    font-size: 18px;
    line-height: 28px; 
`;