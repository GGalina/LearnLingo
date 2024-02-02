import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;

    border: 1px solid #F8F8F8;
    border-radius: 30px;
    background-color: #F8F8F8;
    padding: 98px 0 98px 64px;

    @media (min-width: 480px) {
        width: 480px; 
    }

    @media (min-width: 768px) {
        width: 767px;
    }

    @media (min-width: 1280px) {
        width: 720px;
        height: 530px;
    } 
`;

export const Title = styled.h1`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 48px;
    line-height: 56px;
    color: #121417;
    margin-bottom: 38px;
`;

export const Accent = styled.span`
    font-family: 'Roboto-Italic', sans-serif;
    font-size: 48px;
    color: #121417;
`;

export const BackgroundAccent = styled.span`
    display: inline-flex; 
    align-items: flex-end;
    border: 1px solid ${({ $selcolor }) => $selcolor || '#F4C550'}; 
    border-radius: 8px;
    background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
    margin: 0 12px;
`;

export const Descr = styled.p`
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 16px;
    line-height: 22px;
    color: #121417;
    margin-bottom: 64px;
`;

export const NavigationLink = styled(NavLink)`
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: #121417;
    padding: 16px 88px;
    border: 1px solid ${({ $selcolor }) => $selcolor || '#F4C550'};
    border-radius: 12px;
    background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
    transition: transform 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`;

