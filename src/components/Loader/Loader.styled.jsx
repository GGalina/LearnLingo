import styled from 'styled-components';
import { Bars } from 'react-loading-icons';

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Loading = styled(Bars)`
    height: 3em;
`;

export const LoadingText = styled.h2`
    color: #121417;
`;