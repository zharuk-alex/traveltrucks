import css from "./TextField.module.css";
import clsx from "clsx";
import { Field, useFormikContext, useField } from "formik";
import FieldWrapper from "../FieldWrapper/FieldWrapper";

const TextField = ({
  name,
  appendIcon,
  className,
  clearable,
  hideErrors,
  ...props
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <FieldWrapper
      value={field.value}
      clearable={clearable}
      appendIcon={appendIcon}
      error={meta.error}
      touched={meta.touched}
      hideErrors={hideErrors}
      onClear={() => setFieldValue(name, "")}
    >
      <Field
        className={clsx(
          css.input,
          props.required && css.required,
          appendIcon && css.hasAppendIcon,
          className
        )}
        {...props}
        {...field}
      />
    </FieldWrapper>
  );
};

export default TextField;
