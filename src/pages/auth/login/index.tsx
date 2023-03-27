import AuthLayout from "components/layouts/authLayout";
import React from "react";
import LoginImage from "assets/images/webp/login.webp";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { Formik, FormikErrors } from "formik";
import { loginAction } from "store/auth/auth.actions";
import Spinner from "components/elements/spinner";

type Props = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues: Props = {
    email: "",
    password: "",
  };

  const validate = (values: Props) => {
    const errors: FormikErrors<Props> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (
      !values.password ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
        values.password,
      )
    ) {
      errors.password =
        "Must be 8 characters long or more. Atleast 1 uppercase, 1 number and special character";
    }

    return errors;
  };

  return (
    <AuthLayout image={LoginImage} linkTitle="Sign up" linkUrl="/signup">
      <div className="mt-16 lg:mt-28">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            const payload = {
              ...values,
            };

            // Signin APi call
            await dispatch(loginAction(payload, navigate));

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
              <InputGroup
                type="password"
                label="Password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password && errors.password}
              />

              <div className="mt-6 space-y-6 lg:space-y-8">
                <ButtonGroup
                  type="submit"
                  title={isSubmitting ? <Spinner /> : "Login"}
                  disabled={isSubmitting}
                />
                <ButtonGroup
                  title="Login with PLUG"
                  buttonStyleType="outline"
                />

                <Link
                  to="/forgot-password"
                  className="mt-4 font-semibold text-primary text-center mx-auto flex justify-center underline underline-offset-4"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default Login;
