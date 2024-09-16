import clsx from "clsx";
import css from "./Btn.module.css";

const Btn = ({
  variant = "main",
  className,
  children,
  onClick,
  loading,
  ...restProps
}) => {
  return (
    <button
      className={clsx(css[variant], className)}
      onClick={onClick}
      {...restProps}
    >
      {children}
      {loading && "..."}
    </button>
  );
};

export default Btn;
