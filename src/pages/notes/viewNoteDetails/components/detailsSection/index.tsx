import React from "react";
import ThumbUpIcon from "components/svg/thumbUpIcon";
import ThumbDownIcon from "components/svg/thumbDownIcon";

const Avatar = () => {
  return (
    <div className="w-full md:w-3/12 flex items-center">
      <div className="w-10 h-10 rounded-full bg-black" />
      <div className="flex-1 pl-3">
        <p className="text-primary font-bold text-sm lg:text-sm-15">
          Wisdom Jerry
        </p>
        <p className="text-xs text-textColor">Sep 1 .</p>
      </div>
    </div>
  );
};

const Tags = () => {
  return (
    <div className="mt-4 md:mt-0 flex-1 flex items-center space-x-3">
      <p className="text-xs lg:text-sm font-bold text-[#051738] bg-[#C9EBFF] rounded-full px-4 py-2">
        Wisdom Odogwu
      </p>
    </div>
  );
};

const DetailsSection = () => {
  return (
    <div className="mt-8 bg-white px-6 lg:px-8 pt-6 pb-24 rounded-lg w-full">
      <div className="flex flex-wrap flex-row">
        <Avatar />
        <Tags />
      </div>

      <div className="mt-6 flex flex-row items-center space-x-4">
        <button type="button" className="flex items-center">
          <span>
            <ThumbUpIcon />
          </span>
          <span className="pl-2">0</span>
        </button>
        <button type="button" className="flex items-center">
          <span>
            <ThumbDownIcon />
          </span>
          <span className="pl-2">0</span>
        </button>
      </div>

      <div className="mt-6">
        <p className="text-[#3F3F3F] text-sm-15 xl:text-base lg:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est
          sapien mi, sed risus amet malesuada semper purus. Non adipiscing
          fermentum praesent elementum diam ultrices tempor. Congue cursus et
          mattis enim, aliquet eget commodo convallis praesent. Ut eu ut commodo
          ut. Risus pellentesque porta porta vehicula sed ullamcorper. Cras vel
          iaculis pharetra commodo. Nec pellentesque sit in arcu mauris. Viverra
          facilisis gravida ipsum est. Faucibus integer rhoncus id elementum
          duis. Enim sem semper et sed mattis sed quam nisi. Gravida vitae sem
          tellus elit. At sit egestas nunc, platea proin dolor in velit id. Odio
          etiam ornare nibh purus. Fermentum aliquet bibendum nunc vulputate
          tellus. Mi suspendisse amet fermentum consequat morbi orci aliquam
          cursus. Volutpat at luctus duis massa nulla massa turpis at imperdiet.
          Venenatis viverra non massa eget integer in faucibus diam viverra.
          Amet turpis et in parturient. Consequat aliquam at volutpat in eu
          faucibus laoreet nunc. Arcu cursus lacinia gravida sollicitudin. Amet
          nunc, eget id aliquam lectus vitae integer ultrices quis. Lobortis
          vestibulum, lorem mattis tristique. Sollicitudin neque vel viverra
          erat viverra sociis blandit. Commodo ac tristique laoreet proin
          imperdiet vitae a urna. Euismod sit ante morbi integer consectetur
          turpis est consequat, in. Fermentum eget cras sapien, pellentesque
          turpis. Turpis dictum hac vitae etiam adipiscing arcu tempor tempor,
          tristique. Dignissim dui purus dui vestibulum augue quis morbi orci,
          posuere. Suscipit turpis suspendisse pellentesque odio proin tellus
          nulla mauris. Porttitor id at diam sed leo fermentum mauris. Nibh
          tristique vitae sit sed lobortis ut quis ornare phasellus. Mauris
          morbi id purus, amet. Vel sed nisi, ultrices in tincidunt. A, est
          cursus in purus arcu sagittis est sit. Id habitant tellus cursus
          suspendisse dictum ac in purus etiam. Ullamcorper purus arcu pulvinar
          magna nisl nisi ipsum lacinia. Aliquet in et lacus faucibus non, id
          semper. Vitae consectetur mauris malesuada in nibh nulla proin mattis
          eu. Montes, leo blandit lorem urna volutpat. Odio dolor, velit varius
          orci sed sit duis pretium. Sed felis vitae lorem augue nibh cras sed
          orci, accumsan. Gravida metus tincidunt feugiat sed. Diam a sapien hac
          sit.
        </p>
      </div>
    </div>
  );
};

export default DetailsSection;
