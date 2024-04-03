import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    background-color: #EEEEEE;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 480px) {
        width: 480px; 
    }

    @media (min-width: 768px) {
        width: 768px;
        padding: 64px 32px;
    }

    @media (min-width: 1280px) {
        width: 1280px;
        padding: 96px 128px;
    }
`;

export const LoadMore = styled.button`
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: #121417;
    border: 1px solid ${({ $selcolor }) => $selcolor || '#F4C550'};
    border-radius: 12px;
    padding: 16px 48px;
    background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
    margin-top: 32px;
    cursor: pointer;

    @media (min-width: 768px) {
        margin-top: 44px;
    }

    @media (min-width: 1280px) {
        margin-top: 64px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;