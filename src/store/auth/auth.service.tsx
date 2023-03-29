/* eslint-disable class-methods-use-this */
import axios from "../../axiosClient";

/**
 * Auth Service
 */
class AuthService {
  login = async (payload: any) => {
    return axios.post("/auth/login", payload);
  };

  register = async (payload: any) => {
    return axios.post("/auth/signup", payload);
  };

  verifyEmail = async (payload: any) => {
    return axios.post("/auth/verify-email", payload);
  };

  resendVerificationEmail = async (payload: any) => {
    return axios.post("/auth/resend-verification-mail", payload);
  };

  forgotPassword = async (payload: any) => {
    return axios.post("/auth/forgot-password", payload);
  };

  resetPassword = async (payload: any) => {
    return axios.post("/auth/reset-password", payload);
  };
}

const AuthApi = new AuthService();

export default AuthApi;
