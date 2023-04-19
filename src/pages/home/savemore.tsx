import production2 from "assets/Production2.png";
import badge from "assets/homepageicons/badge.png";
import badge1 from "assets/homepageicons/badge-1.png";
import badge3 from "assets/homepageicons/badge-3.png";
import badge2 from "assets/homepageicons/badge-2.png";
import badge4 from "assets/homepageicons/badge-4.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const data: Array<{
  title: string;
  iconLink: string;
  description: string;
  id: number;
}> = [
  {
    id: 1,
    iconLink: badge,
    title: "Standardize operational safety processes",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
  {
    id: 2,
    iconLink: badge1,
    title: " Extend asset productive lifespan",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
  {
    id: 3,
    iconLink: badge2,
    title: " Eliminate demand and supply tailback",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
  {
    id: 4,
    iconLink: badge3,
    title: "Reduce downtime and costs",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
  {
    id: 5,
    iconLink: badge4,
    title: "Optimize maintenance process",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
];
function SaveMore() {
  const [mainData] = useState(data);
  return (
    <div className="md:mt-10">
      <div className=" md:p-0">
        <div className="md:flex ">
          <div className="md:w-1/1 md:pl-15 md:mr-32 p-10 mb:p-0 md:container md:mx-auto ">
            <p className="md:text-3xl text-blue-700 md:mt-48  font-bold">
              Save more, Make more, Be more
            </p>

            <p className="md:text-base text-sm md:mt-5 mt-2 md:mb-3  ">
              NoteOpX has helped more than 1,000 businesses eliminate waste from
              their operational processes.
            </p>

            <Link to="/trynow">
              <button
                type="button"
                className="bg-blue-700 md:mt-3 hover:bg-blue-200 mr-3
                 text-white text-sm md:text-base font-bold
                  md:py-3 md:pr-8 md:pl-8  p-2 rounded"
              >
                Try for free
              </button>
            </Link>

            <div className="md:grid-cols-2 md:grid gap-3 md:p-0 p-2 md:m-5 ">
              {mainData.map((list) => (
                <div className="md:mt-5 mt-5 mb-5 md:m-2" key={list.id}>
                  <button
                    type="button"
                    className=" rounded-full flex text-blue-700 items-center justify-center"
                    style={{ background: " #EAEFF8" }}
                  >
                    <img src={list.iconLink} className="h-10 w-10" alt="" />
                  </button>
                  <p className="md:text-base text-sm md:mt-5 mt-2 md:mb-3 md:w-52 ">
                    {list.title}
                  </p>
                  <p className=" text-gray-400 md:text-sm text-xs md:w-64">
                    Odio euismod lacinia at quis. Amet purus gravida quis
                    blandit turpis.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            className=" md:w-1/2 object-cover h-auto max-w-full sr-only md:not-sr-only  rounded"
            src={production2}
            alt="product"
            sizes=""
          />
        </div>
      </div>
    </div>
  );
}

export default SaveMore;
