import React from "react";

function SafetyFooter({ submit, cancel }: any) {
  return (
    <div>
      <div className="flex flex-row-reverse space-x-2 ">
        <button
          onClick={cancel}
          type="submit"
          className="ml-2  bg-[#E4EAF6] hover:bg-[#E4EAF6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#E4EAF6] dark:hover:bg-[#E4EAF6] dark:focus:ring-blue-800"
        >
          Cancel
        </button>
        <button
          onClick={submit}
          type="submit"
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SafetyFooter;
