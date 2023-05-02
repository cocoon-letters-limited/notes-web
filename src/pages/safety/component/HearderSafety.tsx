import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

function HearderSafety() {
  return (
    <div>
      <div className="grid-cols-5 gap-1 grid">
        <div className="col-span-3">
          <button
            type="button"
            className="focus:outline-none flex border border-[#054CD6] items-center px-3 py-3 space-x-3 text-sm-10 lg:text-base text-primary rounded-lg font-semibold"
          >
            <span>Attach Risk Assessment</span>
            <span>
              <FileUploadOutlinedIcon />
            </span>
          </button>
        </div>
        <p className="text-right">Status: Issued</p>
        <p className="text-left">Risk assessment No: RA102322</p>
      </div>
    </div>
  );
}

export default HearderSafety;
