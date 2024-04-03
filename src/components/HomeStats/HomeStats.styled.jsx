import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    background-color: #FFFFFF;
    background: 
        url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='${({ $selcolor }) => encodeURIComponent($selcolor || '#FFFFFF')}' stroke-width='4' stroke-dasharray='15%2c 15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e") bottom center no-repeat;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    gap: 50px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (min-width: 1280px) {
        width: 100%;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
    } 
`;

export const StatsWrapper = styled.div`
    display: flex;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
`;

export const Stats = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 20px;
    line-height: 32px;
    color: #121417;

     @media (min-width: 480px) {
       font-size: 28px;
    }

    @media (min-width: 768px) {
        font-size: 28px;
    }

    @media (min-width: 1280px) {
        font-size: 28px;
    } 
`;

export const StatsDesc = styled.p`
    display: inline-block;
    width: 97px;
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 14px;
    line-height: 18px;
    color: rgba(18, 20, 23, 0.70); 
`;

