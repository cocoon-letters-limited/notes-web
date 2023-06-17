import AuthLayout from "components/layouts/authLayout";
import { useNavigate, useLocation } from "react-router-dom";
import LoginImage from "assets/images/webp/login.webp";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import { useAppDispatch } from "hooks/useAppDispatch";
import { Formik, FormikErrors } from "formik";
import Spinner from "components/elements/spinner";
import { resetPasswordAction } from "store/auth/auth.actions";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

type Props = {
  token: string;
  newPassword: string;
  retypePassword: string;
};

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [token, setToken] = useState("");

  useEffect(() => {
    if (location?.search) {
      const tokenString = location?.search?.replace("?token=", "");
      setToken(tokenString);
    } else {
      toast.error("Invalid token. Try re-initiate the forgot password");
      navigate("/forgot-password");
    }
  }, [location, navigate]);

  const initialValues: Props = {
    token: "",
    newPassword: "",
    retypePassword: "",
  };

  const validate = (values: Props) => {
    const errors: FormikErrors<Props> = {};

    if (
      !values.newPassword ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
        values.newPassword,
      )
    ) {
      errors.newPassword =
        "Must be 8 characters long or more. Atleast 1 uppercase, 1 number and special character";
    }

    if (
      !values.retypePassword ||
      values.newPassword !== values.retypePassword
    ) {
      errors.retypePassword = "Password do not match";
    }

    return errors;
  };

  return (
    <AuthLayout image={LoginImage} linkTitle="Login" linkUrl="/login">
      <div className="mt-16 lg:mt-20">
        <p className="text-base lg:text-lg mb-12 font-semibold">
          Reset Password
        </p>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            const payload = {
              newPassword: values.newPassword,
              token,
            };

            // Forgot password APi call
            await dispatch(resetPasswordAction(payload, navigate));

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
                type="password"
                label="Enter New Password"
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.newPassword &&
                  touched.newPassword &&
                  errors.newPassword
                }
              />

              <InputGroup
                type="password"
                label="Confirm Password"
                name="retypePassword"
                value={values.retypePassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.retypePassword &&
                  touched.retypePassword &&
                  errors.retypePassword
                }
              />

              <div className="mt-6 space-y-6 lg:space-y-8">
                <ButtonGroup
                  type="submit"
                  title={isSubmitting ? <Spinner /> : "Reset Password"}
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

export default ResetPassword;
