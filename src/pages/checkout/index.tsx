import React, { useEffect } from "react";
import CheckoutSection from "./components/checkoutSection";

const Checkout = () => {
  useEffect(() => {
    document.querySelector(".checkout")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="checkout">
      <CheckoutSection />
    </div>
  );
};

export default Checkout;
