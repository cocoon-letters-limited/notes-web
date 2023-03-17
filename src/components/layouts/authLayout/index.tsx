import React, { ReactElement } from "react";
import Logo from "assets/images/svg/logo/eam_logo.svg";
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
        <div className="w-full lg:w-5/12 px-4 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-24 pb-24 lg:pb-28">
          <div className="">
            <span className="sr-only">NOTE Enterprise Asset Management</span>
            <img src={Logo} alt="Note EAM Software logo" />
          </div>
          <div className="text-right md:-mt-6">
            <Link
              to={linkUrl}
              className="text-lg lg:text-xl font-bold text-primary underline underline-offset-3"
            >
              {linkTitle}
            </Link>
          </div>

          <div className="mt-8 lg:mt-12 font-serif">{children}</div>
        </div>
        <div className="w-full lg:w-7/12 hidden lg:block">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
