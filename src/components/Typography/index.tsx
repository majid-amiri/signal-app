import { FC, ReactNode } from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

type TypographyProps = FC<{
  children: ReactNode;
  className?: string;
  variant?: "h1" | "subHeading1";
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}>;

export const Typography: TypographyProps = ({
  children,
  className,
  variant = "h1",
  tag = "div",
}) => {
  const Tag = tag;
  return <Tag className={cx(styles[variant], className)}>{children}</Tag>;
};
