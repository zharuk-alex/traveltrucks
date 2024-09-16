import clsx from "clsx";
import css from "./Btn.module.css";
import { Loader } from "components/UI";

const Btn = ({
  variant = "main",
  className,
  children,
  onClick,
  loading,
  disabled,
  ...restProps
}) => {
  return (
    <button
      className={clsx(css[variant], className)}
      onClick={onClick}
      {...restProps}
      disabled={disabled ?? loading}
    >
      <div className={clsx(!!loading && css.hiddenChild)}>{children}</div>
      {loading && (
        <div className={css.loader}>
          <Loader
            visible={true}
            color="grey"
            secondaryColor="white"
            height={28}
            width={28}
          />
        </div>
      )}
    </button>
  );
};

export default Btn;
