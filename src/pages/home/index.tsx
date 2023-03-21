/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

// import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import Notes from 'pages/notes';
import React from "react";
import Hearder from "./hearder";
import Solution from "./solution";
import Pricing from "./pricing";
import NotesSection from "./notesSection";

const Home = () => {
  return (
    <div className="">
      <Hearder></Hearder>
      <Solution></Solution>
      <NotesSection></NotesSection>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
