import React from "react";
import { Formik, FormikErrors } from "formik";
import { useParams } from "react-router-dom";
import Spinner from "components/elements/spinner";
import ButtonGroup from "components/elements/button";
import { useAppDispatch } from "hooks/useAppDispatch";
import { InitPayMent } from "store/plan/planList.slice";
// import { useSelector } from "react-redux";

type Props = {
  plan: any;
  email: string;
  noOfUsers: any;
  paymentType: "INITIAL_PAYMENT";
  purpose: "SUBSCRIPTION";
  frequency: "monthly";
};

const CheckoutForm = () => {
  const { subscriptionType } = useParams();
  const dispatch = useAppDispatch();
  // const planDataList = useSelector((state: any) => state.planList);

  const className =
    "mt-3 text-textColor block px-5 h-14 lg:h-16 text-sm md:text-sm-15 lg:text-base w-full rounded-md bg-[#F8F8F8] placeholder-textColor focus:outline-none";
  const initialValues: Props = {
    plan: subscriptionType,
    email: "",
    noOfUsers: "",
    paymentType: "INITIAL_PAYMENT",
    purpose: "SUBSCRIPTION",
    frequency: "monthly",
  };

  const validate = (values: Props) => {
    const errors: FormikErrors<Props> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.noOfUsers) {
      errors.noOfUsers = "Required";
    }

    return errors;
  };

  return (
    <div className="mt-8 lg:mt-12">
      <h3 className="text-black font-semibold text-lg lg:text-xl xl:text-2xl">
        Customer Details
      </h3>
      {/* {planDataList.loading && (
        <div className="text-center mb-4">
          <Spinner />
        </div>
      )} */}
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          await dispatch(InitPayMent(values));
          actions.setSubmitting(false);
        }}
      >
        {({
          values,
          handleSubmit,
          isSubmitting,
          handleChange,
          touched,
          errors,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-6">
              <div>
                <p>Email address</p>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={className}
                />
                <p className="text-red-500">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div>
                <p>Numbers of users</p>
                <input
                  type="text"
                  name="noOfUsers"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.noOfUsers}
                  className={className}
                />
                {/* <p>
                  {errors.noOfUsers && touched.noOfUsers && errors.noOfUsers}
                </p> */}
              </div>
            </div>
            <div className="mt-6 space-y-6 lg:space-y-8">
              <ButtonGroup
                type="submit"
                title={isSubmitting ? <Spinner /> : "Submit"}
                disabled={isSubmitting}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutForm;
