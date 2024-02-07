import { LoaderContainer,  LoadingText } from './Loader.styled';
import { Bars } from 'react-loading-icons';
import { useColor } from '../../context/ColorContext';

export const Loader = () => {
    const { selectedColor } = useColor();
    return (
        <LoaderContainer>
            <Bars fill={selectedColor} stroke={selectedColor} />
            <LoadingText>Loading...</LoadingText>
        </LoaderContainer>
    );
};