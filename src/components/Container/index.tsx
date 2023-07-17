import { FC, ReactNode } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

type ContainerProps = FC<{
  children: ReactNode;
  className?: string;
}>;

export const Container: ContainerProps = ({
  children,
  className,
  ...props
}) => (
  <div className={cx(styles.container, className)} {...props}>
    {children}
  </div>
);
