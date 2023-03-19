import AuthLayout from "components/layouts/authLayout";
import React from "react";
import LoginImage from "assets/images/webp/login.webp";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";

const ResetPassword = () => {
  return (
    <AuthLayout image={LoginImage} linkTitle="Login" linkUrl="/login">
      <div className="mt-16 lg:mt-20">
        <p className="text-sm-15 lg:text-base mb-12">
          Enter the code sent to Wi*****@gmail.com
        </p>
        <form>
          <InputGroup type="password" label="Enter New Password" />

          <InputGroup type="password" label="Confirm Password" />

          <div className="mt-6 space-y-6 lg:space-y-8">
            <ButtonGroup title="Reset Password" />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
