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
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || "Something is wrong! Try again later!");
      dispatch(error(errorMessage));
    }

    return payload;
  };

export const signupAction =
  (payload: any, navigate: NavigateFunction): AppThunk =>
  async (dispatch) => {
    dispatch(clear());

    try {
      const response = await AuthApi.register(payload);

      if (response?.data?.success) {
        const data = response?.data?.data;
        store.set("noTE_accessToken", data?.token);
        store.set("noTE_user", data);
        dispatch(success(response?.data?.message));

        navigate("/signup-successful");
      }
    } catch (err: any) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || "Something is wrong! Try again later!");
      dispatch(error(errorMessage));
    }

    return payload;
  };

export const verifyEmailAction =
  (payload: any, navigate: NavigateFunction): AppThunk =>
  async (dispatch) => {
    dispatch(clear());

    try {
      const response = await AuthApi.verifyEmail(payload);

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        dispatch(success(response?.data?.message));
        navigate("/login");
      } else {
        return {
          success: false,
        };
      }
    } catch (err: any) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || "Something is wrong! Try again later!");
      dispatch(error(errorMessage));
    }

    return payload;
  };

export const resendVerificationEmailAction =
  (payload: any): AppThunk =>
  async (dispatch) => {
    dispatch(clear());

    try {
      const response = await AuthApi.resendVerificationEmail(payload);

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        dispatch(success(response?.data?.message));
      }
    } catch (err: any) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || "Something is wrong! Try again later!");
      dispatch(error(errorMessage));
    }

    return payload;
  };

export const forgotPasswordAction =
  (payload: any): AppThunk =>
  async (dispatch) => {
    dispatch(clear());

    try {
      const response = await AuthApi.forgotPassword(payload);

      if (response?.data?.success) {
        toast.success(response?.data?.message);
        dispatch(success(response?.data?.message));
      }
    } catch (err: any) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || "Something is wrong! Try again later!");
      dispatch(error(errorMessage));
    }

    return payload;
  };

export const resetPasswordAction =
  (payload: any, navigate: NavigateFunction): AppThunk =>
  async (dispatch) => {
    dispatch(clear());

    try {
      const response = await AuthApi.resetPassword(payload);

      if (response?.data?.success) {
        dispatch(success(response?.data?.message));
        toast.success(response?.data?.message);
        navigate("/login");
      }
    } catch (err: any) {
      const errorMessage = err?.response?.data?.message;
      toast.error(errorMessage || "Something is wrong! Try again later!");
      dispatch(error(errorMessage));
    }

    return payload;
  };
