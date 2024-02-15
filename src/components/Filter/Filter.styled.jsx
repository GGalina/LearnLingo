import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        width: 768px;
    }

    @media (min-width: 1280px) {
        width: 1280px;
        padding: 0 64px;
    }
`;

export const HeroWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
`;