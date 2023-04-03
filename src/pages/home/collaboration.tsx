import production2 from "assets/Production2.png";
import { Link } from "react-router-dom";

const data: Array<{ title: string; description: string; id: number }> = [
  {
    id: 1,
    title: "Standardize operational safety processes",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
  {
    id: 2,
    title: " Extend asset productive lifespan",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
  {
    id: 3,
    title: " Eliminate demand and supply tailback",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
  {
    id: 4,
    title: "Reduce downtime and costs",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
  {
    id: 5,
    title: "Optimize maintenance process",
    description:
      "   Odio euismod lacinia at quis. Amet purus gravida quis blandit  turpis.",
  },
];
function Collaboration() {
  return (
    <div className="md:mt-10">
      <div className=" md:p-0">
        <div className="md:flex ">
          <div className="md:w-1/1 md:pl-32 md:mr-32 p-10 mb:p-0 md:container md:mx-auto ">
            <p className="text-4xl text-blue-700 md:mt-48  font-bold">
              Save more, Make more, <br /> Be more{" "}
            </p>
            <div className="flex mt-5 mb-5">
              <div className="flex">
                <img
                  className="rounded-full object-fill w-8 h-8 "
                  src={production2}
                  alt="product"
                  sizes=""
                />
                <img
                  className="rounded-full w-8 h-8 -ml-2 "
                  src={production2}
                  alt="product"
                  sizes=""
                />
                <img
                  className="rounded-full  w-8 h-8  -ml-2"
                  src={production2}
                  alt="product"
                  sizes=""
                />
                <img
                  className="rounded-full  w-8 h-8  -ml-2"
                  src={production2}
                  alt="product"
                  sizes=""
                />
              </div>
              <small className="md:ml-5 text-sm-15">
                NoteOpX has helped more than 1,000 businesses eliminate waste
                from their operational processes.
              </small>
            </div>
            <Link to="/trynow">
              <button
                type="button"
                className="bg-blue-700 hover:bg-blue-200 mr-3 text-white  font-bold py-3 pr-8 pl-8 px-4 rounded"
              >
                Try for free
              </button>
            </Link>

            <div className="md:grid-cols-2 md:grid md:p-0 p-10 ">
              {data.map((list) => (
                <div className="md:mt-20 mt-5 mb-5 md:m-10" key={list.id}>
                  <button
                    type="button"
                    className=" rounded-full p-5  flex text-blue-700 items-center justify-center"
                    style={{ background: " #EAEFF8" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </button>
                  <p className="text-2xl md:mt-5 md:mb-5">{list.title}</p>
                  <p className=" text-gray-400">
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

export default Collaboration;
