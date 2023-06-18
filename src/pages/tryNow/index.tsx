import ButtonGroup from "components/elements/button";
import Spinner from "components/elements/spinner";
import { Formik, FormikErrors } from "formik";
import { useAppDispatch } from "hooks/useAppDispatch";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TryForFreeAPI } from "store/tryforfree/tryforfree.slice";

type Props = {
  name: string;
  email: string;
  // password: string;
  companyName: string;
  companySize: number;
  billingAddress: string;
  reason: string;
  industry: string;
};

function Trynow() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const planDataList = useSelector((state: any) => state.planList);

  const initialValues: Props = {
    name: "",
    email: "",
    // password: "",
    companyName: "",
    companySize: 0,
    billingAddress: "",
    reason: "",
    industry: "",
  };

  const validate = (values: Props) => {
    const errors: FormikErrors<Props> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  };

  return (
    <div className="container mx-auto p-2">
      <button
        onClick={() => navigate("/")}
        type="button"
        className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <p>back</p>
      </button>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          await dispatch(TryForFreeAPI(values));
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
            <div className="mt-5">
              <div className="grid md:grid-cols-2 md:gap-6 ">
                <div className="">
                  <p className="block mb-2 text-sm font-medium text-gray-900 ">
                    Full Name
                  </p>
                  <input
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    required
                  />
                </div>
                <div className="">
                  <p className="block mb-2 text-sm font-medium text-gray-900 ">
                    Email
                  </p>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    required
                  />
                  <p className="text-red-500">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
                {/* <div className="">
                  <p className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </p>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    required
                  />
                </div> */}
                <div className="">
                  <p className="block mb-2 text-sm font-medium text-gray-900 ">
                    Company size
                  </p>
                  <input
                    type="number"
                    id="companySize"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    name="companySize"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.companySize}
                    required
                  />
                </div>
                <div className="">
                  <p className="block mb-2 text-sm font-medium text-gray-900 ">
                    Industry
                  </p>
                  <input
                    type="industry"
                    id="industry"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.industry}
                    required
                  />
                </div>
                <div className="">
                  <p className="block mb-2 text-sm font-medium text-gray-900 ">
                    Company Name
                  </p>
                  <input
                    type="companyName"
                    id="companyName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.companyName}
                    required
                  />
                </div>
                <div className="">
                  <p className="block mb-2 text-sm font-medium text-gray-900 ">
                    Billing Address
                  </p>
                  <input
                    type="billingAddress"
                    id="billingAddress"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.billingAddress}
                    required
                  />
                </div>
              </div>
              <div className="mt-3">
                <p className="block mb-2 text-sm font-medium text-gray-900 ">
                  Tell us your reasons
                </p>
                <textarea
                  id="reason"
                  rows={4}
                  cols={50}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.reason}
                  required
                />
              </div>
              <div className="grid-cols-7 gap-2 grid">
                <button
                  type="button"
                  className=" mt-3 w-full bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
             text-sm px-5 py-2.5 mr-3 dark:bg-gray-400 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Cancel
                </button>
                <ButtonGroup
                  type="submit"
                  title={isSubmitting ? <Spinner /> : " Request access"}
                  disabled={isSubmitting}
                />
                {/* <button
                  type="button"
                  className="text-white w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
             text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Request access
                </button> */}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Trynow;
