import React from "react";
import Img from "assets/images/webp/profile.webp";
import QRCodeImg from "assets/images/svg/qrcode.svg";
import ButtonGroup from "components/elements/button";

const LeftContainer = () => {
  return (
    <div className="w-full lg:w-3/12 bg-white rounded-xl px-3 md:px-4 pt-8 pb-12">
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

      <div className="bg-[#F6F7FB] rounded-lg mt-12 mx-auto px-4 pt-4 pb-6">
        <h3 className="font-semibold text-sm-15 lg:text-base">Usage history</h3>

        <ul className="mt-4 lg:mt-6 text-sm text-[#230B34]">
          <li className="pb-4">Popcorn Mac. Fabrication (5/1/21)</li>
          <li className="pb-4">Roofing at Amotan Site (5/1/21)</li>
          <li className="pb-4">Burglary Fabrication (5/1/21)</li>
        </ul>
      </div>

      <div className="mt-12">
        <ButtonGroup title="Request material" />
      </div>
    </div>
  );
};

export default LeftContainer;
