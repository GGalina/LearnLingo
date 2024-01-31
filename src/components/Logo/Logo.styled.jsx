import styled from 'styled-components';

export const LogoContainer = styled.div`
    display: flex;
    gap: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
`;

export const LogoImg = styled.span`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(to bottom, #338AF3 50%, #FFDA44 50%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    
`;

export const LogoTitle = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 24px;    
    color: #211417;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;