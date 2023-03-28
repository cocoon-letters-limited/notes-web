import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import LoginImage from "assets/images/webp/login.webp";
import AuthLayout from "components/layouts/authLayout";
import { verifyEmailAction } from "store/auth/auth.actions";
import VerifyLoading from "./components/verifyLoading";
import VerifyFailed from "./components/verifyFailed";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  const verifyEmail = async (value: string) => {
    setLoading(true);
    setStatus("");
    try {
      const payload = {
        token: value,
      };

      const resp: any = await dispatch(verifyEmailAction(payload, navigate));
      if (!resp?.data?.success) {
        setStatus("failed");
      }
      setLoading(false);
    } catch (er: any) {
      setStatus("failed");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location?.search) {
      const tokenString = location?.search?.replace("?token=", "");

      verifyEmail(tokenString);
    } else {
      setStatus("failed");
      setLoading(false);
    }
  }, [location]);

  return (
    <AuthLayout image={LoginImage} linkTitle="Login" linkUrl="/login">
      <div className="mt-16 lg:mt-20">
        {loading && <VerifyLoading />}

        {status === "failed" ? <VerifyFailed /> : ""}
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
