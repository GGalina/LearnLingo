import Laptop from '../../assets/images/Mac.png';
import GirlFace from '../../assets/images/GirlFace.png';
import { useColor } from '../../context/ColorContext';
import { Container, Girl, Mac } from './HomeImg.styled';

export const HomeImg = () => {
    const { selectedColor } = useColor();
  
    return (
        <Container $selcolor={selectedColor}>
            <Girl src={GirlFace} alt="Happy girl"/>
            <Mac src={Laptop} alt="Macbook"/>
        </Container>
    );
};