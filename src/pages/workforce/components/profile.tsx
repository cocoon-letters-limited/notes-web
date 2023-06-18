import React from "react";
import Img from "assets/images/webp/profile.webp";
import QRCodeImg from "assets/images/svg/qrcode.svg";

function Profile() {
  return (
    <div className="w-full lg:w-3/12 bg-white rounded-xl px-3 md:px-4 pt-8 pb-12">
      <div className="text-center">
        <div className="relative mx-auto w-7/12 rounded-[70px] flex flex-col items-center">
          <img src={Img} alt="" />
          <div className="absolute right-0 bottom-0">
            <img src={QRCodeImg} alt="" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-base lg:text-lg font-bold text-default">
            Metal Sheet MS488478
          </h2>

          <div className="mx-auto flex justify-center mt-4 lg:mt-6">
            <p className="rounded-full bg-primary py-2 px-4 text-white font-semibold text-sm">
              @EBM2392
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F7FB] rounded-lg mt-12 mx-auto px-4 pt-4 pb-6">
        <h3 className="font-semibold text-sm-15 lg:text-base">Work history</h3>

        <ol className="relative text-gray-500 border-l-4 mt-5 border-[#B1BFD9]  ">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-50 rounded-full -left-2 ring-2 ring-[#054CD6] " />
            <p className="font-medium leading-tight text-black text-xs">
              Burglary Welding (5/1/21)
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-50 rounded-full -left-2 ring-2 ring-blue-600 " />
            <p className="font-medium leading-tight text-black  text-xs">
              Server Supervision (5/1/21)
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-50 rounded-full -left-2 ring-2 ring-blue-600 " />
            <p className="font-medium leading-tight text-black   text-xs">
              Compressive Servicing (5/1/21)
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Profile;
