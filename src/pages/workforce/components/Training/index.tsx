import { Rating } from "@mui/material";
import WorkForceTraningDetails from "./details";

const list = [
  { name: "ll", id: 1 },
  { name: "ll", id: 1 },
  { name: "ll", id: 1 },
  { name: "ll", id: 1 },
];
function WorkforceTraning() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {list.map((x) => (
            <div
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
                  <h5 className="text-sm  font-semibold tracking-tight">
                    Conquering Digital Marketing
                  </h5>
                  <p className="text-xs">Leslie Alexander {x.name}</p>
                </div>
                <div className="flex  justify-between mt-2.5 mb-5">
                  <Rating size="small" name="simple-controlled" value={4} />
                  <p className="text-xs">3hr 46min</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WorkForceTraningDetails />
    </div>
  );
}

export default WorkforceTraning;
