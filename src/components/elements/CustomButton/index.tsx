const CustomButton = ({
  title,
  buttonStyleType,
}: {
  title: string;
  buttonStyleType: "outline" | "plain-gray" | "solid";
}) => {
  return (
    <div>
      {buttonStyleType === "outline" && (
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          {title}
        </button>
      )}
      {buttonStyleType === "plain-gray" && (
        <button
          type="button"
          className=" bg-[#E4EAF6] hover:bg-blue-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#E4EAF6] dark:hover:bg-blue-100 focus:outline-none dark:focus:ring-blue-100"
        >
          {title}
        </button>
      )}
      {buttonStyleType === "solid" && (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {title}
        </button>
      )}
    </div>
  );
};

export default CustomButton;
