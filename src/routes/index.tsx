import { createBrowserRouter } from "react-router-dom";
import publicRoute from "./publicRoute";
import privateRoute from "./privateRoute";
import {
  loginRoute,
  signupRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
  signupSuccessfulRoute,
} from "./authRoute";

const router = createBrowserRouter([
  publicRoute,
  loginRoute,
  signupRoute,
  signupSuccessfulRoute,
  forgotPasswordRoute,
  resetPasswordRoute,
  privateRoute,
]);

export default router;
