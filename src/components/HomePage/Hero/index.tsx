import { Typography } from "../../Typography";
import HeroSearchBar from "./SearchBar";
import HeroSolarSystem from "./SolarSystem";
import styles from "./styles.module.scss";

export const HomePageHero = () => {
  return (
    <div className={styles.hero}>
      <HeroSolarSystem />
      <div className={styles.content}>
        <Typography tag="h1">
          Unleash Your Inner Hero with Unbeatable Tech Deals!
        </Typography>
        <Typography variant="subHeading1">
          Ignite Your Digital Odyssey. Unleash the Power of Innovation with
          Unbeatable Deals. Enter the Realm of Endless Possibilities and Conquer
          Your Tech Dreams
        </Typography>
        <HeroSearchBar />
      </div>
    </div>
  );
};
