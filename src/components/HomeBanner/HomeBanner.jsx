import { useColor } from '../../context/ColorContext';
import {
    Descr,
    Title,
    Accent,
    Container,
    NavigationLink,
    BackgroundAccent
} from './HomeBanner.styled';

export const HomeBanner = () => {
    const { selectedColor } = useColor();
  
    return (
        <Container>
            <Title>Unlock your potential with the best 
                <BackgroundAccent $selcolor={selectedColor}><Accent>language</Accent></BackgroundAccent>
                 tutors
            </Title>
            <Descr>
                Embark on an Exciting Language Journey with Expert Language Tutors:
                Elevate your language proficiency to new heights
                by connecting with highly qualified and experienced tutors.
            </Descr>
            <NavigationLink to='/teachers' $selcolor={selectedColor}>Get started</NavigationLink>
        </Container>
    );
};