import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ColorBox = ({ title, color }: any) => {
  return (
    <div
      className={`border  border-blue-950 bg-full bg-[${color}] ${color} p-3 text-center`}
    >
      {title}
    </div>
  );
};
const CustomAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inline-flex  w-full">
      <div>
        <button
          type="button"
          className=" rounded-full m-2 p-3 bg-[#E0EBFF]"
          onClick={() => setIsOpen((x) => !x)}
        >
          {!isOpen ? <RemoveIcon /> : <AddIcon />}
        </button>
      </div>

      <div className="w-full ">
        <div className="border p-2  col-span-5 boder  border-blue-950">
          <div className="flex justify-between p-3">
            <div>
              <span className="text-[#8F9BB1]">Hazard</span> : Dropped object
            </div>
            <div>
              Initial likelihood:
              <span className="text-[#054CD6] ml-2">
                Certain <ArrowDropDownIcon />
              </span>
            </div>
          </div>
        </div>

        {!isOpen && (
          <div className="ease-in-out delay-150 duration-300 -translate-y-1  grid grid-cols-5 grid-rows-6">
            <div className="border-r border-l  border-blue-950 bg-full pt-8 row-span-2 text-center justify-center">
              <p>Lidikelihood</p>
            </div>
            <div className="border-r  border-blue-950 bg-full col-span-4 text-center p-3">
              <p>Harm severity</p>
            </div>
            <div className="border-r border-t  border-blue-950 bg-full pt-2 text-center">
              Negligible
            </div>
            <ColorBox title="Marginal" />
            <ColorBox title=" Critical" />
            <ColorBox title=" Catastrophic" />
            <ColorBox title=" Certain" />
            <ColorBox title="High" color="bg-[#FFB27A]" />
            <ColorBox title="High" color="bg-[#FFB27A]" />
            <ColorBox title="Very high" color="bg-[#FF7A7A]" />
            <ColorBox title="Very high" color="bg-[#FF7A7A]" />
            <ColorBox title="Possible" color="bg-[white]" />
            <ColorBox title="Medium" color="bg-[#FCFF7A]" />
            <ColorBox title="High" color="bg-[#FFB27A]" />
            <ColorBox title="High" color="bg-[#FFB27A]" />
            <ColorBox title="Very high" color="bg-[#FF7A7A]" />
            <ColorBox title="Unlikely" color="" />
            <ColorBox title="Low" color="bg-[#CEFFCD]" />
            <ColorBox title="Very high" color="bg-[#FCFF7A]" />
            <ColorBox title="Very high" color="bg-[#FF7A7A]" />
            <ColorBox title="Very high" color="bg-[#FF7A7A]" />
            <ColorBox title="Rare" color="bg-[white]" />
            <ColorBox title="Low" color="bg-[#CEFFCD]" />
            <ColorBox title="Very high" color="bg-[#FF7A7A]" />
            <ColorBox title="Low" color="bg-[#CEFFCD]" />
            <ColorBox title="Very high" color="bg-[#FF7A7A]" />
            <ColorBox title="Very high" color="bg-[white]" />
            <ColorBox title="Eliminated" color="bg-[#CDE1FF] col-span-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomAccordion;
