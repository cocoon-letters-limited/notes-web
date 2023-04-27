import { Rating } from "@mui/material";
import { useState } from "react";
import WorkForceTraningDetails from "./details";

const list = [
  { name: "ll", id: 1 },
  { name: "ll", id: 3 },
  { name: "ll", id: 2 },
  { name: "ll", id: 5 },
];
function WorkforceTraning() {
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(true);
  };
  return (
    <div>
      {showDetails && (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {list.map((x) => (
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                key={x.id}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
              >
                <div>
                  <img
                    className=" w-full h-52 rounded-t-lg object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWps7mcfhTQLPKFGekJQym7VGXmpCtMUlnblnm7TsxSUdqZ3HR53sx53wy3d7lILVLq84&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="px-5 pb-5 pt-5">
                  <div>
                    <h5 className="text-sm text-left font-semibold tracking-tight">
                      Conquering Digital Marketing
                    </h5>
                    <p className="text-xs text-left">
                      Leslie Alexander {x.name}
                    </p>
                  </div>
                  <div className="flex  justify-between mt-2.5 mb-5">
                    <Rating size="small" name="simple-controlled" value={4} />
                    <p className="text-xs">3hr 46min</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      {!showDetails && <WorkForceTraningDetails onClick={handleClick} />}
    </div>
  );
}

export default WorkforceTraning;
