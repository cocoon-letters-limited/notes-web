import { toast } from "react-hot-toast";
import { error } from "store/alert/alert.actions";

const errorHandler = (err: any, dispatch: any) => {
  const errorMessage =
    err?.response?.data?.message || "Something is wrong! Try again later!";

  toast.error(errorMessage);
  dispatch(error(errorMessage));
};

export default errorHandler;
