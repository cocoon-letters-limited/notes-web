import React from "react";
import Hearder from "./hearder";
import Solution from "./solution";
// import Pricing from "./pricing";
import SaveMore from "./savemore";
// import NotesSection from "./notesSection";

const Home = () => {
  return (
    <div className="">
      <Hearder />
      <Solution />
      {/* <NotesSection /> */}
      <SaveMore />
      {/* <Pricing /> */}
    </div>
  );
};

export default Home;
