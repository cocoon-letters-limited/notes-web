import { createBrowserRouter } from "react-router-dom";
import publicRoute from "./publicRoute";
import privateRoute from "./privateRoute";
import { loginRoute, signupRoute } from "./authRoute";

const router = createBrowserRouter([
  publicRoute,
  loginRoute,
  signupRoute,
  privateRoute,
]);

export default router;
