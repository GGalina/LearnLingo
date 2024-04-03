import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;

    @media (min-width: 480px) {
        max-width: 480px;
        padding: 20px;
    }

    @media (min-width: 768px) {
        max-width: 768px;
        padding: 20px;
    }

    @media (min-width: 1280px) {
        max-width: 1280px;
        padding: 0 64px;
    }
`;

export const HeroWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
`;