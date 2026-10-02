import styles from "./Stack.module.scss";
import { getStyle } from "../../lib/getStyle/getStyle";

export const Stack = ({
  children,
  className,
  direction, //column
  align, //center, end
  justify, //between, center
  gap, //8, 16, 24, 32
  tag = "div", //section, article, aside, main, nav, header
  wrap,
  max,
  ...otherProps
}) => {
  const directionClasses = {
    row: styles.directionRow,
    column: styles.directionColumn,
  };

  const alignClasses = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
  };

  const justifyClasses = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    between: styles.justifyBetween,
  };

  const mapGap = {
    8: styles.gap8,
    16: styles.gap16,
    24: styles.gap24,
    32: styles.gap32,
  };

  const mapStackTag = {
    main: "main",
    div: "div",
    section: "section",
    article: "article",
  };

  const mode = {
    [styles.max]: max,
    [styles.wrap]: wrap,
  };

  const additional = [
    directionClasses[direction],
    alignClasses[align],
    justifyClasses[justify],
    gap && mapGap[gap],
    className,
  ];

  const Tag = mapStackTag[tag] || "div";

  return (
    <Tag className={getStyle(styles.flex, mode, additional)} {...otherProps}>
      {children}
    </Tag>
  );
};
