import AuthLayout from "components/layouts/authLayout";
import React from "react";
import SignupImage from "assets/images/webp/signup.webp";
import InputGroup from "components/elements/input";
import SelectGroup from "components/elements/select";
import ButtonGroup from "components/elements/button";

const Signup = () => {
  return (
    <AuthLayout image={SignupImage} linkTitle="Login" linkUrl="/login">
      <div>
        <form>
          <InputGroup
            type="text"
            label="Company name"
            placeholder="Enter company name"
          />
          <SelectGroup
            label="Description"
            placeholder="Select area of specialization"
            options={[
              {
                label: "Engineering",
                value: "Engineering",
              },
            ]}
          />

          <InputGroup
            type="email"
            label="Email"
            placeholder="Enter email address"
          />
          <InputGroup
            type="email"
            label="Recovery Email"
            placeholder="Enter recovery email address"
          />
          <InputGroup
            type="password"
            label="Password"
            placeholder="Enter password"
          />
          <InputGroup
            type="password"
            label="Re-enter password"
            placeholder="Re-enter password"
          />

          <div className="mt-6 space-y-6 lg:space-y-8">
            <ButtonGroup title="Sign Up" />
            <ButtonGroup title="Sign up with PLUG" buttonStyleType="outline" />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
