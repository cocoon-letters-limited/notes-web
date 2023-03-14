/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import React from "react";

const Home = () => {
  // eslint-disable-next-line react/self-closing-comp
  return (
    <div>
      <div className="bg-gray-400 h-48 flex items-center justify-center z-0">
        <div>
          <div>
            <p> Make your assets do much more in one place </p>
            <p>
              The ability to build systems that resist, absorb, recover from, or
              adapt to an adverse occurrence during operation that may cause
              harm, destruction, or loss of the ability to perform
              mission-related functions.
            </p>
          </div>
        </div>
      </div>
      <img
        className="z-40 ml-4 mt-0 h-10 bg-yellow-400"
        src="./../../assets/images/Production 1.png"
        alt="product"
        sizes=""
      />

      <div className="text-center">
        <p className="text-4xl font-bold text-blue-600">
          Our Solution for your business
        </p>
        <p>
          We make it easy for users to use our platform, that's why we provide
          this benefit.
        </p>
      </div>
    </div>
  );
};

export default Home;
