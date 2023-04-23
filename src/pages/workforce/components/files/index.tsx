import React from "react";

function Workfocefiles() {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      <div className="bg-[#F6F7FB] rounded-lg ">
        <ul>
          <li className="py-3 bg-blue-700 text-white px-3">icon files</li>
          <li className="py-3   px-3">icon files</li>
        </ul>
        <div className="m-3">
          <p className="text-xs">2.3 gbleft</p>
        </div>
      </div>

      <div className="bg-[#F6F7FB] grid grid-cols-4 col-span-3 rounded-lg">
        <div className="text-center p-4">
          <div>icon</div>
          <p className="text-xs">Playfair.pdf</p>
        </div>
        <div className="text-center">
          <p>icon</p>
          <p>Druids. pdf</p>
        </div>
      </div>
    </div>
  );
}

export default Workfocefiles;
