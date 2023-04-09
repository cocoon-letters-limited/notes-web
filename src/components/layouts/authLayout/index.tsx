import React, { ReactElement } from "react";
import Logo from "assets/NOTEOPX.png";
import { Link } from "react-router-dom";

type Props = {
  image: string | undefined;
  linkTitle: string;
  linkUrl: string;
  children: ReactElement;
};
const AuthLayout = ({ children, image, linkTitle, linkUrl }: Props) => {
  return (
    <section className="relative font-serif">
      <div className="flex flex-row w-full min-h-screen">
        <div className="w-full lg:w-6/12 xl:w-5/12 px-4 md:px-12 lg:px-12 xl:px-20 2xl:px-24 pt-8 md:pt-12 xl:pt-24 pb-24 lg:pb-28">
          <div className="w-5/12 md:w-4/12 lg:w-6/12">
            <span className="sr-only">NOTE Enterprise Asset Management</span>
            <img src={Logo} alt="Note EAM Software logo" />
          </div>
          <div className="text-right md:-mt-10">
            <Link
              to={linkUrl}
              className="text-lg lg:text-xl font-bold text-primary underline underline-offset-3"
            >
              {linkTitle}
            </Link>
          </div>

          <div className="mt-8 lg:mt-12 font-serif">{children}</div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-7/12 hidden lg:block">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
