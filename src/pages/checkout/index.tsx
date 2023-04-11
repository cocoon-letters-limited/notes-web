import React, { useEffect } from "react";
import scrollToTop from "utils/scrollToTop";
import CheckoutSection from "./components/checkoutSection";

const Checkout = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <CheckoutSection />
    </div>
  );
};

export default Checkout;
