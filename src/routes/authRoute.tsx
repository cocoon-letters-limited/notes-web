import ForgotPassword from "pages/auth/forgotPassword";
import Login from "pages/auth/login";
import ResetPassword from "pages/auth/resetPassword";
import Signup from "pages/auth/signup";
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
  forgotPasswordRoute,
  resetPasswordRoute,
};
