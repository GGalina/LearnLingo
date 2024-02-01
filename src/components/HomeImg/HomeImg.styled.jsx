import styled from 'styled-components';

export const Container = styled.div`
    min-width: 320px;
    min-height: 530px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    border: 1px solid ${({ $selcolor }) => $selcolor || '#F4C550'}; 
    border-radius: 30px;
    background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
    position: relative;
    display: flex;

    @media (min-width: 480px) {
        width: 480px; 
    }

    @media (min-width: 768px) {
        width: 568px;
    }
`;

export const Girl = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
`;

export const Mac = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
`;
