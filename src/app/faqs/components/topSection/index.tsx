import React from "react";
import style from "./style.module.css";

const TopSection = () => {
  return (
    <section className={`relative ${style.bg}`}>
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-24 lg:pb-36 relative">
        <div className="">
          <h1 className="mx-auto text-white text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center">
            Frequently asked questions
          </h1>
        </div>
      </div>
    </section>
  );
};

export default TopSection;