import React from "react";
import BlogImage from "assets/images/webp/blog.webp";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="">
      <div className="">
        <img src={BlogImage} alt="" />
      </div>
      <div className="bg-primary py-4 px-4 lg:px-6">
        <p className="text-base lg:text-lg text-white">
          The Business of Branding
        </p>
      </div>
      <div className="text-textColor pt-4 text-sm-15 lg:text-base leading-6 lg:leading-7">
        Branding is the powerhouse of a business or enterprise in its entirety
        and it is on this basis that The Giant Creatives came about. The Giant
        Creatives brand is on a purposeful.
      </div>
      <Link
        to="/blog/123"
        className="mt-6 flex flex-wrap items-center font-semibold text-sm-15 lg:text-base text-primary"
      >
        <span>Read More</span>
        <span className="pl-2">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2286 6.75807L7.79209 1.43752L9.2252 0.0349789L17.1083 7.74997L9.2252 15.465L7.79209 14.0624L13.2286 8.74187H0.89209L0.89209 6.75807H13.2286Z"
              fill="#054CD6"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="relative bg-white">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-32 lg:pb-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
