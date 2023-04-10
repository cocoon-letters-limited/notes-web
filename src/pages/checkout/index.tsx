import React, { useEffect } from "react";
import CheckoutSection from "./components/checkoutSection";

const Checkout = () => {
  useEffect(() => {
    document.querySelector("body")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <CheckoutSection />
    </div>
  );
};

export default Checkout;
