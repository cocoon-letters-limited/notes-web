import { Link } from "react-router-dom";
import { BusinessData, EnterpriseData, facilityData } from "./priceData";

function Pricing() {
  return (
    <div>
      <div className="text-center md:p-20 ">
        <p className="md:text-4xl font-bold text-blue-700">Our pricing</p>
      </div>

      <div className="md:grid md:grid-cols-3  container mx-auto gap-10 p-4 md:p-0 mb-20">
        <div className="w-full  p-4 bg-white shadow-lg rounded-lg  sm:p-8 dark:white dark:border-gray-700">
          <h5 className="mb-4 text-xl text-center  font-medium text-gray-500 dark:text-gray-400">
            Facility
          </h5>
          <div className="flex justify-center items-baseline text-blue-700 ">
            <span className="md:text-1xl font-extrabold tracking-blue-700">
              $5,000 Upfront + $40/Users
            </span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <Link
            to="/checkout?subscriptionType=facility"
            className="text-white bg-blue-600 hover:bg-blue-900  mt-10 dark:focus:ring-blue-900 font-medium 
            rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </Link>
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
                      <small className="text-blue-700">
                        {listItem.itemTitle}
                      </small>
                      <small>{listItem.itemValue}</small>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full mt-5 mb-5  p-4 bg-blue-700 shadow-lg rounded-lg  sm:p-8 dark:white dark:border-gray-700">
          <h5 className="mb-4 text-xl text-center  font-medium text-white dark:text-gray-400">
            Business
          </h5>
          <div className="flex justify-center items-baseline text-white ">
            {/* <span className="text-2xl font-semibold">$</span>  */}
            <span className="text-1xl font-extrabold tracking-blue-700">
              $10,000 Upfront + $100/User/Month
              {/* <span className="text-2xl font-semibold">$</span> */}
            </span>
            <span className="ml-1 text-xl font-normal text-white dark:text-gray-400">
              /month
            </span>
          </div>
          <Link
            to="/checkout?subscriptionType=business"
            className="text-blue-700 bg-white mt-10 hover:bg-graye-100  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </Link>
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
                        <small>{listItem.itemTitle}</small>
                        <small>{listItem.itemValue}</small>
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
            {/* <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span> */}
          </div>
          <Link to="/trynow">
            <button
              type="button"
              className="text-white bg-blue-600  mt-10 hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </Link>

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
                        <small className="text-blue-700">
                          {listItem.itemTitle}
                        </small>
                      </div>
                      <small>{listItem.itemValue}</small>
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
