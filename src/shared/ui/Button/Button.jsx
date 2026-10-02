import styles from "./Button.module.scss";
import { getStyle } from "../../lib/getStyle/getStyle";
import { Ellipsis } from "lucide-react";

export const Button = ({
  children,
  className,
  color = "primary", //primary | secondary | outline | transparent | disabled
  circle,
  cta,
  loading,
  disabled,
  ...otherProps
}) => {
  const colorClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
    transparent: styles.transparent,
    disabled: styles.diesabled,
  };

  const mode = {
    [styles.circle]: circle,
    [styles.cta]: cta,
    [styles.disabled]: disabled || loading,
  };

  const additional = [colorClasses[color], className];
  return (
    <>
      <button
        className={getStyle(styles.button, mode, additional)}
        disabled={disabled || loading}
        {...otherProps}
      >
        {loading ? <Ellipsis className={styles.loader} /> : children}
        {!cta && !loading && <span className={styles.underLine} />}
      </button>
    </>
  );
};
