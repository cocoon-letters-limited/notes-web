import AuthLayout from "components/layouts/authLayout";
import LoginImage from "assets/images/webp/login.webp";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import { Formik, FormikErrors } from "formik";
import Spinner from "components/elements/spinner";
import { forgotPasswordAction } from "store/auth/auth.actions";
import { useAppDispatch } from "hooks/useAppDispatch";

type Props = {
  email: string;
};

const ForgotPassword = () => {
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
    <AuthLayout image={LoginImage} linkTitle="Login" linkUrl="/login">
      <div className="mt-16 lg:mt-20">
        <p className="text-sm-15 lg:text-base mb-12">
          Enter the email linked to your account
        </p>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            const payload = {
              ...values,
            };

            // Forgot password APi call
            await dispatch(forgotPasswordAction(payload));

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
                  title={isSubmitting ? <Spinner /> : "Submit"}
                  disabled={isSubmitting}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
