import Login from "pages/auth/login";
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

export default { loginRoute, signupRoute };
