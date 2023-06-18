import { Rating } from "@mui/material";

const Row = () => {
  return (
    <div className="grid grid-cols-5 gap-6 rounded-xl py-6 px-6 text-sm overflow-x-auto text-center border-b border-[#F6F7FB]">
      <p className="">Adeniji Victor</p>
      <p className="">CAT Contractors</p>
      <div>
        <Rating name="simple-controlled" value={4} />
      </div>
      <div>
        <button
          type="button"
          className="text-xs text-[#16F62C] px-3 border-[#16F62C] border-2 py-1 bg-[#C9FFCE] "
        >
          Fit
        </button>
      </div>
      <div>
        <button
          type="button"
          className="text-xs text-[#F92F1B] px-3 border-[#F92F1B] border-2 py-1 bg-[#FFDADF] "
        >
          Holiday
        </button>
      </div>
    </div>
  );
};

function Relationships() {
  return (
    <div>
      <div>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-l-lg hover:bg-blue-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
          >
            Departments
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border-t border-b border-blue-700 hover:bg-blue-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
          >
            Workgroups
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-r-md hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
          >
            Handover notes
          </button>
        </div>
        <div className="mt-6 lg:mt-8">
          <div className="grid grid-cols-5 gap-6 bg-primary rounded-xl py-5 px-6 text-white text-sm overflow-x-auto text-center">
            <p className="">Name</p>
            <p className="">Role</p>
            <p className="">Rating</p>
            <p className="">Status</p>
            <p className="">Condition</p>
          </div>
          <div className="">
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Relationships;
