import React from "react";
import teamData from "./components/teamData";
import TeamCard from "./components/teamCard";

const TeamSection = () => {
  return (
    <section className="relative bg-[#F1F5FF]">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-20 md:pt-24 lg:pt-28 pb-20 lg:pb-24 relative">
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto text-center">
          <h2 className="text-primary font-extrabold text-3xl lg:text-4xl xl:text-5xl">
            Meet the Team
          </h2>
          <p className="mx-auto text-center mt-6 lg:mt-8 text-base leading-7 lg:text-xl lg:leading-8 text-textColor">
            The inventing, innovating and doing humans at NoteOPX.
          </p>
        </div>

        <div className="mt-16 lg:mt-20 xl:mt-24 w-full md:w-11/12 mx-auto">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
            {teamData.map((team) => (
              <TeamCard
                key={team.id}
                profilePicture={team?.profilePicture}
                name={team.name}
                role={team.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;