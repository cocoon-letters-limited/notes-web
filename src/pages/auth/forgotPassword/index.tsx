import AuthLayout from "components/layouts/authLayout";
import React from "react";
import LoginImage from "assets/images/webp/login.webp";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";

const ForgotPassword = () => {
  return (
    <AuthLayout image={LoginImage} linkTitle="Login" linkUrl="/login">
      <div className="mt-16 lg:mt-20">
        <p className="text-sm-15 lg:text-base mb-12">
          Enter the email linked to your account
        </p>
        <form>
          <InputGroup
            type="email"
            label="Email"
            placeholder="Enter email address"
          />

          <div className="mt-6 space-y-6 lg:space-y-8">
            <ButtonGroup title="Request Verification code" />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
