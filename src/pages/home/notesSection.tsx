import { Rating } from "@mui/material";
import production2 from "assets/Production2.png";
import { useState } from "react";

const noteList: Array<{
  id: number;
  image: string;
  username: string;
  subtitle: string;
  description: string;
}> = [
  {
    id: 1,
    image: "string",
    username: "Tokunbo Odebunmi",
    subtitle: "(Health & Safety Manager)",
    description: `Since implementing the NoteOpX Safety Management System,
     our organization has seen a drastic reduction in accidents and incidents. 
     The user-friendly interface and customizable features have allowed us to tailor the program to our specific needs. Highly recommend!`,
  },
  {
    id: 2,
    image: "string",
    username: "Alex Zoric",
    subtitle: "(Offshore Asset Manager)",
    description: `Thanks to this software, we now have full control over our
    maintenance processes. Approvals that used to take days now
    take minutes with its streamlined digital authorization tool.
    NoteOpX has reduced our downtime and saved us costs, making it
    an essential tool for our business.`,
  },
  {
    id: 3,
    image: "string",
    username: "Sheik Sameer Mohammed",
    subtitle: "(Condition Monitoring Specialist)",
    description: `Ever since we implemented NoteOpX, we've seen a significant reduction in unexpected equipment downtime. The ability to identify and address potential failures before they occur has been a game-changer for our operations."`,
  },
  {
    id: 1,
    image: "string",
    username: "Funmi Ogbue",
    subtitle: "(HR Specialist)",
    description: `NoteOpX has been able to help us identify areas of improvement for our employees and 
    provide targeted training programs that have led to a significant boost in their skills and 
    productivity. It has revolutionized our approach to workforce development.`,
  },
  {
    id: 2,
    image: "string",
    username: "Toye Ariyo",
    subtitle: "(Facility Owner)",
    description: `Since implementing NoteOpX software, we have gained unparalleled visibility into our 
    operations, allowing us to make informed decisions and build operational resilience. It has 
    transformed the way we do business.`,
  },
  {
    id: 3,
    image: "string",
    username: "Pekun Smith",
    subtitle: "(Procurement Manager)",
    description: `Managing our supply chain has never been easier since we started using this software. 
    From procurement to payment, everything is streamlined and efficient. NoteOpX is worth 
    every penny we paid for it!""`,
  },
];

function NotesSection() {
  const [isSelected, setIsSelected] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // State to keep track of the start index of the visible elements
  const array = noteList; // Sample array of elements
  const visibleElements = 3; // Number of elements to show on screen at a time

  const handleNextClick = () => {
    // Increment the start index by 1, wrapping around to 0 if it exceeds the array length
    setStartIndex((startIndex + 1) % array.length);
    setIsSelected(true);
  };

  const handlePrevClick = () => {
    // Decrement the start index by 1, wrapping around to the end of the array if it goes below 0
    setStartIndex((startIndex - 1 + array.length) % array.length);
    setIsSelected(false);
  };
  return (
    <div
      className="md:pt-20 md:mt-20 md:pb-20 h-fix pb-10"
      style={{ background: " #F1F5FF" }}
    >
      <div className=" mb:p-0 md:container md:mx-auto">
        <div className="flex justify-between">
          <p className="md:text-3xl  font-bold text-blue-600 md:p-0 p-5  text-sm ">
            NoteOpX is loved by users
          </p>
          <div className="flex md:mt-0 mt-5 mr-5 md:mr-0">
            <button
              onClick={handlePrevClick}
              type="button"
              className={`
               rounded-full md:p-3 w-fit p-2 h-fit border-2 
               ${
                 !isSelected
                   ? "border-blue-700 text-blue-700 "
                   : "border-gray-400 text-gray-400 "
               }  
               flex  mr-5 
               items-center justify-center`}
              style={{ background: " #EAEFF8" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="fill-current md:w-6 md:h-6 w-4 h-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </button>
            <button
              onClick={handleNextClick}
              type="button"
              className={` 
                rounded-full md:p-3 w-fit p-2 h-fit border-2 
              ${
                isSelected
                  ? "border-blue-700 text-blue-700 "
                  : "border-gray-400 text-gray-400 "
              }  flex  
               items-center justify-center`}
              style={{ background: " #EAEFF8" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="fill-current  md:w-6 md:h-6 w-4 h-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:grid grid-cols-3 gap-10 md:mt-10 mt-5  ">
          {array.slice(startIndex, startIndex + visibleElements).map((note) => (
            <div
              key={note.id}
              className="rounded-lg p-2  md:m-0 m-5 shadow-lg bg-white"
            >
              <div className="md:px-3 md:py-6 py-3">
                <div className="flex ">
                  <img
                    className="rounded-full md:h-10 h-8 md:mt-0 mt-2 md:mr-0 mr-3 w-8 object-none md:w-10"
                    src={production2}
                    alt="product"
                    sizes=""
                  />
                  <div className="md:ml-5 md:mt-0 mt-2">
                    <p className="md:text-1xl font-semibold text-sm">
                      {note.username}
                    </p>
                    <p className="text-slate-400 md:text-base text-sm">
                      {note.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 mt-3 mb-3 md:text-base text-xs">
                  {note.description}
                </p>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Notes.propTypes = {}

export default NotesSection;
