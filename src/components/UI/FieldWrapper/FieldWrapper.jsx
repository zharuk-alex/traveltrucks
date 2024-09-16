import clsx from "clsx";
import css from "./FieldWrapper.module.css";
import { Icon } from "components/UI";
import { useMemo } from "react";

const FieldWrapper = ({
  id,
  label,
  error,
  appendIcon,
  hideErrors,
  onClear,
  value,
  clearable,
  children,
  className,
}) => {
  const clearBtn = useMemo(() => value?.length > 0 && clearable, [value]);

  return (
    <div className={clsx(css.fromControl, className)}>
      {!!label?.length && (
        <label htmlFor={id} className={css.label}>
          {label}
        </label>
      )}
      <div className={clsx(css.group, !!error && css.invalid)}>
        {appendIcon?.length > 0 && (
          <Icon name={appendIcon} className={css.icon} />
        )}
        {children}
        {clearBtn && (
          <Icon
            name="icon-close-circle"
            className={clsx(css.icon, css.clearIcon)}
            onClick={onClear}
          />
        )}
      </div>

      {!!error?.length && !hideErrors && (
        <div className={css.errorMsg}>{error}</div>
      )}
    </div>
  );
};

export default FieldWrapper;
