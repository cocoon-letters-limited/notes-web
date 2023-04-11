import React, { useState } from "react";
import appIcon from "assets/payment_logos/Apple-Pay-and-Google-Pay.png";
import stripeLogo from "assets/payment_logos/Stripe_Logo.png";
import appleLogo from "assets/payment_logos/Google-Pay.png";
import PaymentForm from "./paymentForm";

const paymentOptions = [
  {
    id: 1,
    icon: "",
    title: "Credit/Debit cards",
    isSelected: false,
  },
  {
    id: 2,
    icon: "",
    title: "Bank Transfers",
    isSelected: false,
  },
  {
    id: 3,
    icon: "payment",
    title: "Credit/Debit cards",
    isSelected: false,
  },
  {
    id: 4,
    icon: appIcon,
    title: "",
    isSelected: false,
  },
  {
    id: 5,
    icon: stripeLogo,
    title: "",
    isSelected: false,
  },
  {
    id: 6,
    icon: appleLogo,
    title: "",
    isSelected: false,
  },
];
const CheckoutPaymentMethods = () => {
  const [paymentList, setPayment] = useState(paymentOptions);

  function selectMethod(id: number, newValue: any) {
    const newItems = paymentList.map((item: any) => {
      if (item.id === id) {
        return { ...item, isSelected: newValue };
      }
      return { ...item, isSelected: false };
    });
    setPayment(newItems);
  }

  return (
    <div className="mt-8 lg:mt-12">
      <h3 className="text-black font-semibold text-lg lg:text-xl xl:text-2xl">
        Choose payment method
      </h3>
      <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-6 gap-x-6">
        {paymentList.map((payment) => (
          <button
            key={payment.id}
            type="button"
            onClick={() => selectMethod(payment.id, true)}
            className={`${
              payment.isSelected ? "border-blue-700 bg-blue-100" : ""
            } text-gray-900  hover:bg-gray-100 border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2`}
          >
            <img src={payment.icon} alt="" />
            {payment.title}
          </button>
        ))}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 mt-4">
        <PaymentForm />
        <ul className="max-w-md bg-blue-50  ml-5 md:mt-0 mt-5 h-fit">
          <li className="px-3 sm:py-2 bg-blue-700 text-white">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Subtotal</p>
              </div>
              <div className="inline-flex items-center">$2367</div>
            </div>
          </li>
          <li className="px-3 sm:py-2 ">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Tax</p>
              </div>
              <div className="inline-flex items-center text-base ">$2367</div>
            </div>
          </li>
          <li className="px-3 sm:py-2 ">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Plan</p>
              </div>
              <div className="inline-flex items-center text-base ">
                Standard
              </div>
            </div>
          </li>
          <li className="px-3 sm:py-2 ">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">Total</p>
              </div>
              <p className="inline-flex items-center text-base ">$40.00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutPaymentMethods;
