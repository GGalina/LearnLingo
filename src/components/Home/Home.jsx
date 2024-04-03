import { HomeImg } from "../HomeImg/HomeImg";
import { useMediaQuery } from "react-responsive";
import { HomeStats } from "../HomeStats/HomeStats";
import { HomeBanner } from "../HomeBanner/HomeBanner";
import { HomeContainer, HeroWrapper } from "./Home.styled";

export const Home = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <>
      {!isDesktop && (
        <HomeContainer>
          <HomeBanner />
          <HomeImg />
          <HomeStats />
        </HomeContainer>
      )}

      {isDesktop && (
        <HomeContainer>
          <HeroWrapper>
            <HomeBanner />
            <HomeImg />
          </HeroWrapper>
          <HomeStats />
        </HomeContainer>
      )}
    </>
  );
};