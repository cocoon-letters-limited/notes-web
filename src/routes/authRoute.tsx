import ForgotPassword from "pages/auth/forgotPassword";
import Login from "pages/auth/login";
import ResetPassword from "pages/auth/resetPassword";
import Signup from "pages/auth/signup";
import SignupSuccessful from "pages/auth/signup-successful";
import VerifyEmail from "pages/auth/verify-email";
import Error404 from "pages/error404";

export const loginRoute = {
  path: "signup",
  element: <Signup />,
  errorElement: <Error404 />,
};

export const signupRoute = {
  path: "login",
  element: <Login />,
  errorElement: <Error404 />,
};

export const signupSuccessfulRoute = {
  path: "signup-successful",
  element: <SignupSuccessful />,
  errorElement: <Error404 />,
};

export const verifyEmailRoute = {
  path: "verify-email",
  element: <VerifyEmail />,
  errorElement: <Error404 />,
};

export const forgotPasswordRoute = {
  path: "forgot-password",
  element: <ForgotPassword />,
  errorElement: <Error404 />,
};

export const resetPasswordRoute = {
  path: "reset-password",
  element: <ResetPassword />,
  errorElement: <Error404 />,
};

export default {
  loginRoute,
  signupRoute,
  signupSuccessfulRoute,
  verifyEmailRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
};
