import { Formik, FormikErrors } from "formik";
import Spinner from "components/elements/spinner";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import { useAppDispatch } from "hooks/useAppDispatch";
import { resendVerificationEmailAction } from "store/auth/auth.actions";

type Props = {
  email: string;
};

type PageProps = {
  handleToggleShowForm?: () => void;
};

const ResendVerificationForm = ({ handleToggleShowForm }: PageProps) => {
  const dispatch = useAppDispatch();

  const initialValues: Props = {
    email: "",
  };

  const validate = (values: Props) => {
    const errors: FormikErrors<Props> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  return (
    <div className="pt-8 lg:pt-12">
      <p className="text-sm-15 lg:text-base mb-12">
        Enter the email resend verification link
      </p>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          const payload = {
            ...values,
          };

          // Resend Email APi call
          await dispatch(resendVerificationEmailAction(payload));

          actions.setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <InputGroup
              type="email"
              label="Email"
              placeholder="Enter email address"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email && errors.email}
            />

            <div className="mt-6 space-y-6 lg:space-y-8">
              <ButtonGroup
                type="submit"
                title={isSubmitting ? <Spinner /> : "Resend Verification Email"}
                disabled={isSubmitting}
              />
              <div className="text-center">
                <button
                  type="button"
                  className="mt-2 text-red-600 underline underline-offset-4 focus:outline-none text-sm-15 lg:text-base font-semibold"
                  onClick={handleToggleShowForm}
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ResendVerificationForm;
