import { createBrowserRouter } from "react-router-dom";
import publicRoute from "./publicRoute";
import privateRoute from "./privateRoute";
import {
  loginRoute,
  signupRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
} from "./authRoute";

const router = createBrowserRouter([
  publicRoute,
  loginRoute,
  signupRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
  privateRoute,
]);

export default router;
