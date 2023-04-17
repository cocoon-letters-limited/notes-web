import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import React from "react";
import { BusinessData, facilityData } from "./priceData";

function Pricing() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className="text-center md:p-20 ">
        <p className="md:text-4xl font-bold text-blue-700">Our pricing</p>
        <div>
          <span>Monthly</span>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span>Annualy</span>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3  container mx-auto gap-10 p-4 md:p-0 mb-20">
        <div className="w-full  p-3 bg-white shadow-lg rounded-lg  sm:p-4 dark:white dark:border-gray-700">
          <h5 className="mb-4 text-2xl  text-center text-blue-700 font-bold">
            Standart
          </h5>
          <p className="text-center text-[#969696]">
            The national average cost of buying coin easy.
          </p>
          <div className="flex mt-2 justify-center items-baseline text-blue-700 ">
            <span className=" font-extrabold tracking-blue-700">
              {`$${!checked ? 5000 * 1 : 5000 * 12} Upfront + 
              $${!checked ? 40 * 1 : 400 * 12}/Users`}
            </span>
            <small className="ml-1   text-gray-500 dark:text-gray-400">
              / {!checked ? "Monthly" : "Annualy"}
            </small>
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
        <div className="w-full mt-5 mb-5  p-4 bg-blue-700 shadow-lg rounded-lg  sm:p-6 dark:white dark:border-gray-700">
          <h5 className="mb-4 text-xl text-center  font-medium text-white dark:text-gray-400">
            Business
          </h5>
          <p className="text-center text-gray-200">
            The national average cost of buying coin easy.
          </p>
          <div className="flex justify-center items-baseline text-white ">
            {/* <span className="text-2xl font-semibold">$</span>  */}
            <span className=" mt-2 font-extrabold tracking-blue-700">
              ${!checked ? 10000 * 1 : 10000 * 12} Upfront + $
              {!checked ? 100 * 1 : 100 * 12} /User/{" "}
              <span className=" font-semibold">
                {" "}
                {!checked ? "Monthly" : "Annualy"}
              </span>
            </span>
            {/* <span className="ml-1 text-xl font-normal text-white dark:text-gray-400">
              /month
            </span> */}
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
        <div className="w-full  p-4 grid place-items-center bg-white shadow-lg rounded-lg  sm:p-6 dark:white dark:border-gray-700">
          <div>
            <h5 className="mb-4 text-2xl  text-center text-blue-700 font-bold">
              Premium+
            </h5>
            <p className="text-center text-[#969696]">
              The national average cost of buying coin easy.
            </p>
            <p className=" text-center text-5xl px-20 py-5 text-blue-700 font-bold ">
              Specially crafted for you
            </p>

            <Link to="/trynow">
              <button
                type="button"
                className="text-white bg-blue-600  mt-10 hover:bg-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Contact Sales
              </button>
            </Link>
          </div>

          {/* <ul className="space-y-5 my-7">
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
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
