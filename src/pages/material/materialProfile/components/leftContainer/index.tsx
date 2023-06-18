import React from "react";
import Img from "assets/images/webp/profile.webp";
import QRCodeImg from "assets/images/svg/qrcode.svg";
import ButtonGroup from "components/elements/button";

type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return (
    <li className="pb-6 flex items-start border-l-2 border-[#B1BFD9]">
      <span className="-ml-[.45rem] h-3 w-3 rounded-full border-2 border-primary bg-white" />
      <span className="-mt-1 pl-2 lg:pl-3 text-sm">{text}</span>
    </li>
  );
};

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

      <div className="bg-[#F6F7FB] rounded-lg mt-12 mx-auto px-4 pt-4 pb-6 lg:pb-12">
        <h3 className="font-semibold text-sm-15 lg:text-base">Usage history</h3>

        <ul className="mt-4 lg:mt-6 text-sm text-[#230B34]">
          <Tag text="Popcorn Mac. Fabrication (5/1/21)" />
          <Tag text="Roofing at Amotan Site (5/1/21)" />
          <Tag text="Burglary Fabrication (5/1/21)" />
        </ul>
      </div>

      <div className="mt-12 space-y-6">
        <ButtonGroup title="Request material" />
        <ButtonGroup buttonStyleType="outline" title="Issue material" />
      </div>
    </div>
  );
};

export default LeftContainer;
