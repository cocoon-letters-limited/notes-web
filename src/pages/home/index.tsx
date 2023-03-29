import React from "react";
import Hearder from "./hearder";
import Solution from "./solution";
import Pricing from "./pricing";
import NotesSection from "./notesSection";
import Collaboration from "./collaboration";

const Home = () => {
  return (
    <div className="">
      <Hearder />
      <Solution />
      <NotesSection />
      <Collaboration />
      <Pricing />
    </div>
  );
};

export default Home;
