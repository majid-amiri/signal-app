import { FC, ReactNode } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

type ButtonProps = FC<{
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
}>;

export const Button: ButtonProps = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button className={cx(styles.button, styles[variant])} {...props}>
      {children}
    </button>
  );
};
