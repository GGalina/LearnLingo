import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    width: inherit;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 22px;
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding-left: 14px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const LogIn = styled.button`
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 16px;
    color: #121417;
    cursor: pointer;
    border: none;
    background-color: inherit;
`;

export const Register = styled.button`
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    background-color: #121417;
    border-radius: 12px;
    padding: 14px 39px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid #121417;
    outline: none;

    &:hover {
        transform: scale(1.05);
    }
`;