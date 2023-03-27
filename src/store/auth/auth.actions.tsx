import { success, error, clear } from "store/alert/alert.actions";
import type { AppThunk } from "store/store";
import store from "store";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-hot-toast";
import AuthApi from "./auth.service";

export const loginAction =
  (payload: any, navigate: NavigateFunction): AppThunk =>
  async (dispatch) => {
    dispatch(clear());

    try {
      const response = await AuthApi.login(payload);

      if (response?.data?.success) {
        const data = response?.data?.data;
        store.set("noTE_accessToken", data?.token);
        store.set("noTE_user", data);
        dispatch(success("Welcome to iNOTE EAM Dashboard"));
        toast.success("Welcome to iNOTE EAM Dashboard");

        navigate("/dashboard");
      }
    } catch (err: any) {
      console.log(err);
      toast.error(
        err?.response?.data?.message || "Something is wrong! Try again later!",
      );
      dispatch(error(err?.response?.data?.message));
    }

    return payload;
  };

export const registerAction =
  (payload: any): AppThunk =>
  async (dispatch) => {
    dispatch(clear());

    try {
      const response = await AuthApi.register(payload);

      if (response?.data?.success) {
        const data = response?.data?.data;
        store.set("noTE_accessToken", data?.token);
        store.set("noTE_user", data);
        dispatch(success(response?.data?.message));
      }
    } catch (err) {
      console.log(err);
      dispatch(error("Failed"));
    }

    return payload;
  };
