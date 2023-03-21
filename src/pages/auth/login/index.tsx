import AuthLayout from "components/layouts/authLayout";
import React from "react";
import LoginImage from "assets/images/webp/login.webp";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <AuthLayout image={LoginImage} linkTitle="Sign up" linkUrl="/signup">
      <div className="mt-16 lg:mt-28">
        <form>
          <InputGroup
            type="email"
            label="Email"
            placeholder="Enter email address"
          />
          <InputGroup
            type="password"
            label="Password"
            placeholder="Enter password"
          />

          <div className="mt-6 space-y-6 lg:space-y-8">
            <ButtonGroup title="Login" />
            <ButtonGroup title="Login with PLUG" buttonStyleType="outline" />

            <Link
              to="/forgot-password"
              className="mt-4 font-semibold text-primary text-center mx-auto flex justify-center underline underline-offset-4"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
