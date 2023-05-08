import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Link } from "react-router-dom";

function HearderSafety() {
  return (
    <div>
      <div className="grid-cols-7 gap-1 grid">
        <div className="col-span-4">
          <Link
            to="/safety/risk-assessment"
            type="button"
            className="focus:outline-none flex w-fit border border-[#054CD6] items-center px-3 py-3 space-x-3 text-sm-10 lg:text-base text-primary rounded-lg font-semibold"
          >
            <span>Attach Risk Assessment</span>
            <span>
              <FileUploadOutlinedIcon />
            </span>
          </Link>
        </div>
        <p className="text-right">Status: Issued</p>
        <p className="text-left col-span-2 pl-5">
          Risk assessment No: RA102322
        </p>
      </div>
    </div>
  );
}

export default HearderSafety;
