import { HomeBanner } from "../HomeBanner/HomeBanner";
import { HomeImg } from "../HomeImg/HomeImg";
import { HomeStats } from "../HomeStats/HomeStats";


export const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeImg />
      <HomeStats />
    </div>
  );
};