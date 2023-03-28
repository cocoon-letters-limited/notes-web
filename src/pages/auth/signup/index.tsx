import AuthLayout from "components/layouts/authLayout";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import SignupImage from "assets/images/webp/signup.webp";
import InputGroup from "components/elements/input";
import SelectGroup from "components/elements/select";
import ButtonGroup from "components/elements/button";
import { Formik, FormikErrors } from "formik";
import { signupAction } from "store/auth/auth.actions";
import Spinner from "components/elements/spinner";

type Props = {
  name: string;
  email: string;
  role: "OPERATOR" | "LINE_SUPERINTENDENT" | "UNIT_SUPERINTENDENT";
  license: string;
  company: string;
  description: { label: string; value: string } | null | undefined;
  recoveryEmail: string;
  pictureUrl?: string;
  password: string;
  retypePassword: string;
};

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues: Props = {
    name: "",
    email: "",
    role: "OPERATOR",
    license: "",
    company: "",
    description: null,
    recoveryEmail: "",
    pictureUrl: "",
    password: "",
    retypePassword: "",
  };

  const validate = (values: Props) => {
    const errors: FormikErrors<Props> = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.license) {
      errors.license = "License number is required";
    }

    if (!values.company) {
      errors.company = "Company name is required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.recoveryEmail) {
      errors.recoveryEmail = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.recoveryEmail)
    ) {
      errors.recoveryEmail = "Invalid email address";
    }

    if (
      !values.password ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
        values.password,
      )
    ) {
      errors.password =
        "Must be 8 characters long or more. Atleast 1 uppercase, 1 number and special character";
    }

    if (!values.retypePassword || values.password !== values.retypePassword) {
      errors.retypePassword = "Password do not match";
    }

    return errors;
  };

  return (
    <AuthLayout image={SignupImage} linkTitle="Login" linkUrl="/login">
      <div>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            const payload = {
              ...values,
              description: values?.description?.value || "",
            };

            // Signin APi call
            await dispatch(signupAction(payload, navigate));

            actions.setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <InputGroup
                type="text"
                label="License ID"
                placeholder="Enter license ID"
                name="license"
                value={values.license}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.license && touched.license && errors.license}
              />
              <InputGroup
                type="text"
                label="Company name"
                placeholder="Enter company name"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.company && touched.company && errors.company}
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
                name="description"
                onChange={(e: any) => {
                  setFieldValue("description", e);
                }}
              />

              <InputGroup
                type="text"
                label="Full Name"
                placeholder="Enter your full name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name && errors.name}
              />

              <InputGroup
                type="email"
                label="Email"
                placeholder="Enter email address"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email && errors.email}
              />
              <InputGroup
                type="email"
                label="Recovery Email"
                placeholder="Enter recovery email address"
                name="recoveryEmail"
                value={values.recoveryEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.recoveryEmail &&
                  touched.recoveryEmail &&
                  errors.recoveryEmail
                }
              />
              <InputGroup
                type="password"
                label="Password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password && errors.password}
              />
              <InputGroup
                type="password"
                label="Re-enter password"
                placeholder="Re-enter password"
                name="retypePassword"
                value={values.retypePassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.retypePassword &&
                  touched.retypePassword &&
                  errors.retypePassword
                }
              />

              <div className="mt-6 space-y-6 lg:space-y-8">
                <ButtonGroup
                  type="submit"
                  title={isSubmitting ? <Spinner /> : "Sign Up"}
                  disabled={isSubmitting}
                />
                <ButtonGroup
                  title="Sign up with PLUG"
                  buttonStyleType="outline"
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default Signup;
