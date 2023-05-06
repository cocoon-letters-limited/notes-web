import CustomButton from "components/elements/CustomButton";
import InputGroup from "components/elements/input";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Title from "pages/safety/component/title";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Badge } from "@mui/material";
// import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const RedioBTtn = ({ title, id }: any) => {
  return (
    <div>
      <label htmlFor={id}>
        {title}
        <input
          type="radio"
          className="ml-2"
          name=""
          id=""
          value="checkedValue"
          checked
        />
      </label>
    </div>
  );
};

function Permit() {
  return (
    <>
      <div>
        <Title title="Hot Work (Spark Potential) Permit" />
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div>
          <div className="grid-cols-7 gap-1 grid">
            <div className="col-span-4">
              <Link to="safety/risk-assessment">
                <button
                  type="button"
                  className="focus:outline-none flex border border-[#054CD6] items-center px-3 py-3 space-x-3 text-sm-10 lg:text-base text-primary rounded-lg font-semibold"
                >
                  <span>Attach Risk Assessment</span>
                  <span>
                    <FileUploadOutlinedIcon />
                  </span>
                </button>
              </Link>
            </div>
            <div className="">
              <span className="mr-6"> Status</span>
              <Badge badgeContent={4} color="success" />
              <span className="ml-5">Issued</span>
            </div>
            <p className="text-left col-span-2 pl-5">Permit No:102384</p>
          </div>
        </div>
        <div>
          <div className="grid gap-2 mb-6 md:grid-cols-3 mt-2">
            <div className="col-span-1">
              <InputGroup label="Equipment ID:" />
            </div>
            <div className="col-span-2">
              <InputGroup label="Task Description:" />
            </div>
            <div className="col-span-1">
              <InputGroup label="Hazard category:" />
            </div>
            <div className="col-span-2">
              <InputGroup label="Hazard " />
            </div>
            <div className="col-span-3">
              <InputGroup label="Controls" />
            </div>
            <div className="col-span-1">
              <InputGroup label="Cross Referenced Certificates:" />
            </div>
            <div className="col-span-2">
              <InputGroup label="Sanction to test:" />
            </div>
            <div className="col-span-2" />
            <div className="flex flex-row-reverse">
              <CustomButton title="Cancel" buttonStyleType="plain-gray" />
              <CustomButton title="Submit" buttonStyleType="solid" />
            </div>
            <div className="col-span-3">
              <InputGroup label="Add authorization:" />
            </div>
          </div>
          <div className="grid gap-2 mb-6 md:grid-cols-3">
            <div className="col-span-1">
              <p className="font-semibold">Site Gas Test</p>
              <div className="flex justify-between my-2">
                <RedioBTtn title="Flammable" id="1" />
                <RedioBTtn title="Toxic" />
                <RedioBTtn title="Other" />
              </div>

              <InputGroup label="Enter gas name" />
              <p>
                Initialled by Authorised Gas Tester as being within acceptable
                gas test limits:
              </p>
              <p className="text-sm my-2">Initial Test:</p>
              <div className="flex space-x-1 my-3">
                <InsertDriveFileIcon color="error" />
                <p>Initial test 1.pdf</p>
                <ClearIcon color="primary" />
              </div>
              <p className="font-semibold my-2">Re-issue and Return</p>
              <p className="text-xs my-3">Issued 20.03.2023 @ 5:30pm</p>
              <button
                type="button"
                className="text-sm py-2 bg-[#054CD6] px-3 rounded text-white mr-2"
              >
                Issue
              </button>
              <button
                type="button"
                className="text-sm py-2 bg-[#DCE8FF] px-3 rounded text-[#054CD6] mr-2"
              >
                Return
              </button>
            </div>
            <div className="col-span-2">
              <p className="font-semibold mb-2">Issue</p>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                    style={{ color: "#054CD6" }}
                    defaultChecked
                  />
                }
                label="I, Area Authority, declare that all hazards have been identified and all specified control measures are in place and it is now safe for the work specified on the WP to be performed."
              />
              <br />
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: "#054CD6" }}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                  />
                }
                label="I, Area Authority, declare that all hazards have been identified and all specified control measures are in place and it is now safe for the work specified on the WP to be performed."
              />
              <br />
              <p className="font-semibold my-2">WP Registry</p>
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: "#054CD6" }}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                  />
                }
                label="Registered in WP Register, all prerequisite controls as verified by the AA are in place. This WP is automatically suspended on activation of the general
                alarm or instruction via the public address system and must be returned to its point of issue prior to recommencement of work."
              />
            </div>
          </div>
          {/* <SelectGroup2
    label=""
    options={[{ label: "Worksite Location", value: "" }]}
  /> */}
          <div className="flex flex-row-reverse space-x-2 ">
            <button
              type="submit"
              className="ml-2  bg-[#E4EAF6] hover:bg-[#E4EAF6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#E4EAF6] dark:hover:bg-[#E4EAF6] dark:focus:ring-blue-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Permit;
