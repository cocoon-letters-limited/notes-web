import React from "react";
import AuthLayout from "components/layouts/authLayout";
import SignupImage from "assets/images/webp/signup.webp";
import SuccessImage from "assets/images/webp/tick.png";

const SignupSuccessful = () => {
  return (
    <AuthLayout image={SignupImage} linkTitle="Login" linkUrl="/login">
      <div className="pt-8 lg:pt-12 flex flex-col items-center mx-auto text-center">
        <div className="w-8/12 mx-auto">
          <img src={SuccessImage} alt="Success icon" />
        </div>
        <div className="mt-6">
          <p className="text-xl lg:text-2xl font-bold text-primary">
            Registration successful!
          </p>
          <p className="mt-2 text-base lg:text-lg text-textColor">
            Check your email to verify your account
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignupSuccessful;
