/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Video1img from "assets/images/webp/dev_centre/video1.webp";
import Video2img from "assets/images/webp/dev_centre/video2.webp";
import Video3img from "assets/images/webp/dev_centre/video3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";

type CardProps = {
  image?: string;
};

const Card = ({ image }: CardProps) => {
  return (
    <div className="relative">
      <div className="">
        <img src={image || Video1img} alt="Slider 1" />
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          type="button"
          className="focus:outline-none rounded-lg bg-primary text-white font-semibold px-6 py-2"
        >
          Join
        </button>
      </div>
    </div>
  );
};

const LiveTrainingListSlider = () => {
  const data = [
    {
      id: 1,
      img: Video1img,
    },
    {
      id: 2,
      img: Video2img,
    },
    {
      id: 3,
      img: Video3img,
    },
    {
      id: 4,
      img: Video2img,
    },
    {
      id: 5,
      img: Video1img,
    },
    {
      id: 6,
      img: Video3img,
    },
  ];

  return (
    <div className="mb-6">
      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="px-12"
      >
        {data?.map((datum) => (
          <SwiperSlide key={datum?.id}>
            <Card image={datum?.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LiveTrainingListSlider;
