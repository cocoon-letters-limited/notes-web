import Link from "next/link";
import React from "react";

const TopSection = () => {

    return (
        <section className="relative bg-[#3B69E6]">
            <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-14 md:pt-16 lg:pt-20 pb-20 lg:pb-24 relative">
                <div className="flex flex-col lg:flex-row flex-wrap lg:items-center">
                    <div className="">
                        <Link href="/blog"
                            className="flex items-center text-sm-15 lg:text-base text-white"
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
                                        d="M4.77142 7.07851L10.2079 1.75796L8.7748 0.355413L0.891693 8.07041L8.7748 15.7854L10.2079 14.3829L4.77142 9.06231H17.1079V7.07851H4.77142Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            <span className="pl-2">Back</span>
                        </Link>
                    </div>
                    <div className="flex-1 pt-4 lg:pt-0 pl-0 lg:pl-12">
                        <h1 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
                            The Business of Branding
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSection;