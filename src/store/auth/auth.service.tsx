/* eslint-disable class-methods-use-this */
import axios from "../../axios";

/**
 * Auth Service
 */
class AuthService {
  login = async (payload: any) => {
    return axios.post("/login", payload);
  };
}

const AuthApi = new AuthService();

export default AuthApi;
