import { BusinessData, EnterpriseData, facilityData } from "./priceData";

function Pricing() {
  return (
    <div>
      <div className="text-center p-20 ">
        <p className="text-4xl font-bold text-blue-700">Our pricing</p>
      </div>

      <div className="md:grid md:grid-cols-3  container mx-auto gap-10 mb-20">
        <div className="w-full  p-4 bg-white shadow-lg rounded-lg  sm:p-8 dark:white dark:border-gray-700">
          <h5 className="mb-4 text-xl text-center  font-medium text-gray-500 dark:text-gray-400">
            Facility
          </h5>
          <div className="flex justify-center items-baseline text-blue-700 ">
            <span className="text-3xl font-extrabold tracking-blue-700">
              $5,000 Upfront + $40/Users
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700  mt-10 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
          <ul className="space-y-5 my-7">
            {facilityData.map((data) => (
              <li key={data.id}>
                <strong className="text-xl">{data.title}</strong>
                <ul>
                  {data.list.map((listItem) => (
                    <li
                      key={listItem.id}
                      className="flex justify-between  mt-3 "
                    >
                      <p className="text-blue-700">{listItem.itemTitle}</p>
                      <p>{listItem.itemValue}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <ul className="space-y-5 my-7">
            {/* <li className="flex space-x-3">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                20GB Cloud storage
              </span>
            </li>
            <li className="flex space-x-3 line-through decoration-gray-500">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Check icon</title>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Sketch Files
              </span>
            </li> */}
          </ul>
        </div>
        <div className="w-full  p-4 bg-blue-700 shadow-lg rounded-lg  sm:p-8 dark:white dark:border-gray-700">
          <h5 className="mb-4 text-xl text-center  font-medium text-white dark:text-gray-400">
            Business
          </h5>
          <div className="flex justify-center items-baseline text-white ">
            {/* <span className="text-2xl font-semibold">$</span>  */}
            <span className="text-3xl font-extrabold tracking-blue-700">
              $10,000 Upfront + $100/User/Month
              {/* <span className="text-2xl font-semibold">$</span> */}
            </span>
            <span className="ml-1 text-xl font-normal text-white dark:text-gray-400">
              /month
            </span>
          </div>
          <button
            type="button"
            className="text-blue-700 bg-white hover:bg-blue-700 focus:ring-4 mt-10 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
          <ul className="space-y-5 my-7">
            {BusinessData.map(
              (dataFac: { id: number; title: string; list: Array<any> }) => (
                <li key={dataFac.id}>
                  <strong className="text-xl text-white">
                    {dataFac.title}
                  </strong>
                  {dataFac.list.map(
                    (listItem: {
                      id: number;
                      itemTitle: string;
                      itemValue: string;
                    }) => (
                      <ul
                        key={listItem.id}
                        className="flex justify-between text-white mt-3 text-white"
                      >
                        <p>{listItem.itemTitle}</p>
                        <p>{listItem.itemValue}</p>
                      </ul>
                    ),
                  )}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="w-full  p-4 bg-white shadow-lg rounded-lg  sm:p-8 dark:white dark:border-gray-700">
          <h5 className="mb-4 text-xl text-center  font-medium text-gray-500 dark:text-gray-400">
            Enterprise
          </h5>
          <div className="flex justify-center items-baseline text-blue-700 ">
            <span className="text-3xl font-extrabold tracking-blue-700">
              {/* $5,000 Upfront + $40/Users */}
              Contact Sales
            </span>
            {/* <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span> */}
          </div>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700  mt-10 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
          <ul className="space-y-5 my-7">
            {EnterpriseData.map((data) => (
              <li key={data.id}>
                <strong className="text-xl mt-10 ">{data.title}</strong>
                <ul className="mt-5">
                  {data.list.map((listItem) => (
                    <li
                      key={listItem.id}
                      className="flex justify-between  mb-2 "
                    >
                      <div className="flex">
                        <p className="text-blue-700">{listItem.itemTitle}</p>
                      </div>
                      <p>{listItem.itemValue}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
