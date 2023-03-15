import AuthLayout from "components/layouts/authLayout";
import React from "react";
import LoginImage from "assets/images/webp/login.webp";
import InputGroup from "components/elements/input";

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
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
