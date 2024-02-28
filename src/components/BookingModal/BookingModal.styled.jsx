import styled from 'styled-components';

export const BookingContainer = styled.div`
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 30px;
    padding: 15px 15px 42px 42px;
    position: relative;

    @media (min-width: 480px) {
        padding: 20px 20px 64px 64px;
        width: 480px; 
    }
 
    @media (min-width: 768px) {
        padding: 20px 20px 64px 64px;
        width: 566px;
    }

    @media (min-width: 1280px) {
        padding: 20px 20px 64px 64px;
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
    margin-top: 12px;
    color: #121417;
`;

export const Desc = styled.p`
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 16px;
    line-height: 22px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 48px;
    color: rgba(18, 20, 23, 0.8);
`;

export const Teacher = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
    margin-bottom: 40px;
`;

export const TeacherPhoto = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
`;

export const TeacherWrapper = styled.div`

`;

export const GreyAccent = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: #8A8A89;
`;

export const TeacherName = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #121417;
`;

export const RadioHeader = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 24px;
    line-height: 32px;
    color: #121417;
    margin-right: 64px;
    margin-bottom: 20px;
`;

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RadioLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
`;

export const RadioInput = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
`;

export const RadioIndicator = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(4, 4, 5, 0.2);
    border-radius: 50%;
    background-color: #fff;

    ${RadioInput}:checked + & {
        background-color:  ${({ $selcolor }) => $selcolor || '#F4C550'};
        border-color:  ${({ $selcolor }) => $selcolor || '#F4C550'};
        box-shadow: inset 0 0 0 3px #FFFFFF;
    }
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
    margin-top: 40px;
`;

export const PhoneWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const Phone = styled.input`
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

export const PhoneErrorMsg = styled.p`
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

export const BookBtn = styled.button`
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