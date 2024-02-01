import { useColor } from '../../context/ColorContext';
import { Container } from './HomeStats.styled';


export const HomeStats = () => {
    const { selectedColor } = useColor();
  
    return (
        <Container $selcolor={selectedColor}>

        </Container>
    );
};