import { useColor } from '../../context/ColorContext';
import {
    Container, StatsWrapper,
    Stats, StatsDesc
} from './HomeStats.styled';


export const HomeStats = () => {
    const { selectedColor } = useColor();
  
    return (
        <Container $selcolor={selectedColor}>
            <StatsWrapper>
                <Stats>32,000 +</Stats>
                <StatsDesc>Experienced tutors</StatsDesc>
            </StatsWrapper>
            <StatsWrapper>
                <Stats>32,000 +</Stats>
                <StatsDesc>5-star tutor reviews</StatsDesc>
            </StatsWrapper>
            <StatsWrapper>
                <Stats>32,000 +</Stats>
                <StatsDesc>Subjects taught</StatsDesc>
            </StatsWrapper>
            <StatsWrapper>
                <Stats>200 +</Stats>
                <StatsDesc>Tutor nationalities</StatsDesc>
            </StatsWrapper>
        </Container>
    );
};