import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 430px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 24px;
    border: 1px solid ${({ $selcolor }) => $selcolor || '#F4C550'}; 
    border-radius: 30px;
    background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
    position: relative;
    display: flex;

    @media (min-width: 480px) {
        min-height: 530px;
    }

    @media (min-width: 768px) {
        min-height: 530px;
    }

    @media (min-width: 1280px) {
        width: 568px;
        min-height: 530px;
    } 
`;

export const Girl = styled.img`
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
`;

export const Mac = styled.img`
    position: absolute;
    bottom: 5px;
    left: 50%;
    max-width: 100%;
    max-height: 100%;
    transform: translateX(-50%);
    overflow: hidden;
    z-index: 1;
`;
