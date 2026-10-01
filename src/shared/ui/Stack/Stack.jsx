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
    8: "gap8",
    16: "gap16",
    24: "gap24",
    32: "gap32",
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
  console.log(mode);

  const additional = [
    directionClasses[direction],
    alignClasses[align],
    justifyClasses[justify],
    gap && styles[mapGap[gap]],
    className,
  ];
  console.log(additional);

  const Tag = mapStackTag[tag] || "div";

  return (
    <Tag className={getStyle(styles.flex, mode, additional)} {...otherProps}>
      {children}
    </Tag>
  );
};

console.log(styles);
