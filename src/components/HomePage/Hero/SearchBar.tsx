import { Button } from "../../Button";

import styles from "./styles.module.scss";

const HeroSearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input placeholder="Explore in a tone of signals" />
      <Button variant="secondary">Search</Button>
    </div>
  );
};

export default HeroSearchBar;
