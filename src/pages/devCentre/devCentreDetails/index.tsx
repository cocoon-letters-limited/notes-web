import React from "react";
import GoBackButton from "components/blocks/goBackButton";
import Img from "assets/images/webp/dev_centre/recordDetails.webp";

type OutlineCardProps = {
  title: string;
  description: string;
};

const OutlineCard = ({ title, description }: OutlineCardProps) => {
  return (
    <div className="pb-8 pl-4 md:pl-6 lg:pl-8 relative">
      <div className="absolute -left-1.5 top-2 h-3 w-3 bg-primary rounded-full" />
      <h3 className="text-default text-lg lg:text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm-15 lg:text-base w-full md:w-11/12">
        {description}
      </p>
    </div>
  );
};

const DevCentreDetails = () => {
  return (
    <section className="relative h-full bg-white px-6 lg:px-8 xl:px-12 pt-6 lg:pt-8 pb-36">
      <div className="flex flex-row flex-wrap justify-between">
        <div className="w-full md:w-6/12 lg:w-7/12">
          <GoBackButton title="Digital Marketing Strategy" />

          <p className="w-full md:w-11/12 mt-6 mb-6 lg:mt-8 text-sm-15 lg:text-base xl:text-lg text-[#4E4B66] lg:leading-7 xl:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            diam elit, quis massa aliquet tortor nisl fermentum. Tristique
            ultrices sagittis amet lacus morbi id. Sit eu congue egestas mi ac.
            Tincidunt pulvinar vitae diam odio ultrices justo. Iaculis vulputate
            molestie sed integer neque leo. Amet venenatis, lectus dolor
            suspendisse in. Magna aenean massa, scelerisque nullam. Tristique
            nulla cursus sit leo egestas eget vel eget. Tristique vulputate in
            risus amet id amet, scelerisque tellus.
          </p>

          <div className="relative block mt-8 border-l border-[#CFD2E4]">
            <OutlineCard
              title="Introduction"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis diam
                elit, quis massa aliquet tortor nisl fermentum. Tristique ultrices
                sagittis amet lacus morbi id. Sit eu congue egestas mi ac."
            />
            <OutlineCard
              title="Work backwards"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis diam
                elit, quis massa aliquet tortor nisl fermentum. Tristique ultrices
                sagittis amet lacus morbi id. Sit eu congue egestas mi ac."
            />
            <OutlineCard
              title="Your teaser phase"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis diam
                elit, quis massa aliquet tortor nisl fermentum. Tristique ultrices
                sagittis amet lacus morbi id. Sit eu congue egestas mi ac."
            />
            <OutlineCard
              title="Your promotion phase"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis diam
                elit, quis massa aliquet tortor nisl fermentum. Tristique ultrices
                sagittis amet lacus morbi id. Sit eu congue egestas mi ac."
            />
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-5/12">
          <div className="md:pl-6 lg:pl-8">
            <img src={Img} alt="Details" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevCentreDetails;
