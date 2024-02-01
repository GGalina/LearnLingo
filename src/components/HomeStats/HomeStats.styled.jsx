import styled from 'styled-components';

export const Container = styled.div`
    min-width: 320px;
    min-height: 530px;
    margin-left: auto;
    margin-right: auto;
    background: 
        url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='${({ $selcolor }) => encodeURIComponent($selcolor || '#FFFFFF')}' stroke-width='4' stroke-dasharray='15%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e") bottom center no-repeat;
    background-color: #FFFFFF;


    @media (min-width: 480px) {
        width: 480px; 
    }

    @media (min-width: 768px) {
        width: 568px;
    }
`;

