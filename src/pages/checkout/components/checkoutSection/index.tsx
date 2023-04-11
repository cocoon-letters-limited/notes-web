import { useNavigate } from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm";
import CheckoutPaymentMethods from "./components/CheckoutPaymentMethods";

type GoBackButtonProps = {
  handleClick: () => void;
};

const GoBackButton = ({ handleClick }: GoBackButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-primary text-sm-15 lg:text-base xl:text-lg flex items-center font-semibold"
    >
      <span>
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.77191 7.0081L10.2084 1.68755L8.77529 0.285009L0.892181 8L8.77529 15.715L10.2084 14.3125L4.77191 8.9919H17.1084V7.0081H4.77191Z"
            fill="#054CD6"
          />
        </svg>
      </span>
      <span className="pl-3">Back</span>
    </button>
  );
};

const CheckoutSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <section className="relative bg-white">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-20 md:pt-24 lg:pt-28 pb-32 lg:pb-40 relative">
        <div className="">
          <GoBackButton handleClick={handleClick} />
        </div>

        <CheckoutForm />
        <CheckoutPaymentMethods />
        <div className="flex flex-row flex-wrap justify-between" />
      </div>
    </section>
  );
};

export default CheckoutSection;
