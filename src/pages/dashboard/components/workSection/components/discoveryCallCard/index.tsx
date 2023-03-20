import ProfileIcon from "components/svg/profileIcon";
import React from "react";

const Card = () => {
  return (
    <div className="flex relative w-full">
      <div className="w-8 h-8 rounded-full bg-black" />
      <div className="absolute top-12 left-3.5">
        <svg
          width="2"
          height="246"
          viewBox="0 0 2 246"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0V246"
            stroke="#B1BFD9"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </div>
      <div className="pl-4 flex-1 pb-6">
        <div className="flex flex-row flex-wrap justify-between items-center">
          <p className="font-bold text-sm-15 lg:text-base text-[#230B34]">
            Discovery Call
          </p>
          <p className="flex items-center bg-[#EFEFEF] rounded-3xl text-xs text-black py-2 px-3 font-medium">
            <span>
              <ProfileIcon />
            </span>
            <span className="pl-1">Adeola Tighana</span>
          </p>
        </div>
        <div className="mt-4">
          <p className="text-primary font-bold text-sm-15 lg:text-base">
            David Adedeji
          </p>
          <p className="mt-1 text-[#051738] text-sm lg:text-sm-15">11:23</p>

          <div className="mt-3 flex flex-wrap flex-row gap-2">
            <div className="text-[8px] text-[#051738] font-bold rounded-3xl bg-[#C9EBFF] py-2 px-3">
              Wisdom Odogwu
            </div>
            <div className="text-[8px] text-[#051738] font-bold rounded-3xl bg-[#C9EBFF] py-2 px-3">
              Wisdom Odogwu
            </div>
            <p className="mt-1 text-[10px] lg:text-xs text-[#051738]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec sit
              non congue nulla. Felis dui sit curabitur lorem. Ultrices
              consequat scelerisque ultricies quis id. Enim eget viverra egestas
              nunc, sit elementum urna. Vitae amet, sed neque magna viverra
              neque nec aliquet aliquam. Blandit duis consequat, arcu duis nibh
              elit, tortor dignissim ac. Mauris amet morbi nunc, in dictum
              vitae. Magnis nunc, aenean aene
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiscoveryCallCard = () => {
  return (
    <div className="bg-white rounded-xl h-[27rem] overflow-auto px-6 pt-6">
      <Card />
      <Card />
    </div>
  );
};

export default DiscoveryCallCard;
