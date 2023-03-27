import { success, error, clear } from "store/alert/alert.actions";
import type { AppThunk } from "store/store";
import store from "store";
import AuthApi from "./auth.service";

export const login =
  (payload: any): AppThunk =>
  async (dispatch) => {
    dispatch(clear());

    try {
      const response = await AuthApi.login(payload);

      if (response?.data?.success) {
        const data = response?.data?.data;
        store.set("noTE_accessToken", data?.token);
        store.set("noTE_user", data);
        dispatch(success("Welcome to iNOTE EAM Dashboard"));
      }
    } catch (err) {
      console.log(err);
      dispatch(error("Failed"));
    }

    return payload;
  };

export const register =
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
