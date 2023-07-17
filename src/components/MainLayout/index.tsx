import { FC, ReactNode } from "react";
import cx from "classnames";

import { Button, Container } from "..";
import styles from "./styles.module.scss";

type MainLayoutProps = FC<{
  children: ReactNode;
}>;

export const MainLayout: MainLayoutProps = ({ children }) => {
  return (
    <>
      <header
        className={cx({
          [styles.absolute]: window.location.pathname === "/",
        })}
      >
        <Container>
          <div className={cx(styles.header)}>
            <div>
              <img src="images/logo.png" alt="logo" />
            </div>

            <nav>
              <a href="#" className={styles.selected}>
                Home
              </a>
              <a href="#">Explore</a>
              <a href="#">Pricing</a>
              <a href="#">Contact Us</a>
            </nav>

            <div>
              <Button variant="text">Login</Button>
              <Button variant="secondary">Get Started</Button>
            </div>
          </div>
        </Container>
      </header>
      <main>{children}</main>
    </>
  );
};
