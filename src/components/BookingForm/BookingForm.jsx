import { useId, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";

import { Btn, TextField, DatePickerField } from "components/UI";
import css from "./BookingForm.module.css";

const formFields = [
  {
    name: "name",
    field: "text",
    placeholder: "Name*",
    required: true,
    hideErrors: true,
    rules: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  },
  {
    name: "email",
    field: "text",
    placeholder: "Email*",
    hideErrors: true,
    rules: Yup.string().trim().email().required("Required"),
  },
  {
    name: "date",
    field: "date",
    placeholder: "Booking date*",
    hideErrors: true,
    rules: Yup.string().trim().required("Required"),
  },
  {
    name: "comment",
    field: "text",
    as: "textarea",
    rows: 4,
    cols: 50,
    hideErrors: true,
    placeholder: "Comment",
    rules: Yup.string().trim().max(512, "Too long!"),
    style: { height: 82 },
  },
];

const formInputComponent = (props) => {
  switch (props.field) {
    case "text":
      return <TextField {...props} />;
    case "date":
      return <DatePickerField {...props} />;
    default:
      return null;
  }
};

const validationSchema = Yup.object().shape(
  formFields.reduce(
    (schema, { name, rules }) => ({ ...schema, [name]: rules }),
    {}
  )
);

const BookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = formFields.reduce(
    (fields, field) => ({ ...fields, [field.name]: field.value || "" }),
    {}
  );

  const formSchema = formFields.map(({ value, rules, ...field }) => ({
    ...field,
    id: useId(),
  }));

  const handleSubmit = async (values, actions) => {
    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    setIsLoading(false);
    actions.resetForm();

    toast.success("Form submitted successfully!");
  };

  return (
    <div>
      <div className={css.heading}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form} noValidate autoComplete="off">
          {formSchema.map((field) => (
            <div key={field.id}>
              {formInputComponent({
                ...field,
              })}
            </div>
          ))}
          <Btn
            style={{ margin: "16px auto 0px" }}
            type="submit"
            loading={isLoading}
          >
            Send
          </Btn>
        </Form>
      </Formik>

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default BookingForm;
