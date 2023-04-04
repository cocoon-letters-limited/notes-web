import React from "react";
import InputGroup from "components/elements/input";
import SelectGroup2 from "components/elements/select2";

const CheckoutForm = () => {
  const className =
    "mt-3 text-textColor block px-5 h-14 lg:h-16 text-sm md:text-sm-15 lg:text-base w-full rounded-md bg-[#F8F8F8] placeholder-textColor focus:outline-none";

  return (
    <div className="mt-8 lg:mt-12">
      <h3 className="text-black font-semibold text-lg lg:text-xl xl:text-2xl">
        Customer Details
      </h3>
      <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <InputGroup
          type="text"
          labelColor="text-[#707070]"
          label="Full Name"
          placeholder=""
          name="fullName"
          className={className}
        />
        <InputGroup
          type="text"
          labelColor="text-[#707070]"
          label="Company Name"
          placeholder=""
          name="companyName"
          className={className}
        />
        <SelectGroup2
          labelColor="text-[#707070]"
          label="Industry"
          name="industry"
          className={className}
          options={[
            {
              label: "Finance",
              value: "Finance",
            },
          ]}
        />
        <InputGroup
          type="text"
          labelColor="text-[#707070]"
          label="Company size"
          placeholder="0-500"
          name="companyName"
          className={className}
        />
        <InputGroup
          type="email"
          labelColor="text-[#707070]"
          label="Company Email"
          placeholder="0-500"
          name="companyEmail"
          className={className}
        />
        <InputGroup
          type="text"
          labelColor="text-[#707070]"
          label="Billing Address"
          placeholder=""
          name="billingAddress"
          className={className}
        />

        <SelectGroup2
          labelColor="text-[#707070]"
          label="Plan"
          name="plan"
          className={className}
          options={[
            {
              label: "STANDARD",
              value: "STANDARD",
            },
          ]}
        />

        <InputGroup
          type="text"
          labelColor="text-[#707070]"
          label="Users"
          placeholder=""
          name="users"
          className={className}
        />

        <SelectGroup2
          labelColor="text-[#707070]"
          label="Payment Plan"
          name="paymentPlan"
          className={className}
          options={[
            {
              label: "Monthly",
              value: "Monthly",
            },
          ]}
        />

        <SelectGroup2
          labelColor="text-[#707070]"
          label="Duration"
          name="duration"
          className={className}
          options={[
            {
              label: "3 Years",
              value: "3 Years",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CheckoutForm;
