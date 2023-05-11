/* eslint-disable no-underscore-dangle */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import Spinner from "components/elements/spinner";
import { fetchPLansList } from "store/plan/planList.slice";
// import { Switch } from "@mui/material";

function Pricing() {
  const dispatch = useAppDispatch();
  const planDataList = useSelector((state: any) => state.planList);
  const [checked] = React.useState(false);
  useEffect(() => {
    dispatch(fetchPLansList());
  }, [dispatch]);

  return (
    <div>
      <div className="text-center md:p-20 ">
        <p className="md:text-4xl font-bold text-blue-700">Our pricing</p>
        {/* <div>
          <span>Monthly</span>
          <Switch
            checked={planPrice}
            onChange={() => switchPLan(!planPrice)}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span>Annualy</span>
        </div> */}
      </div>
      {planDataList.loading && (
        <div className="text-center mb-4">
          <Spinner />
        </div>
      )}
      {/* {planDataList.loading && <p>Loading...</p>}
      {planDataList.error && <p>Error</p>} */}
      <div className="md:grid md:grid-cols-3  container mx-auto gap-10 p-4 md:p-0 mb-20">
        {planDataList.plansList.data?.plans.map((data: any) => (
          <div
            key={data.createdAt}
            className={`"w-full  h-full p-4 ${
              data.name === "Facility" ? "bg-blue-700 text-white" : "bg-white"
            }  shadow-lg rounded-lg  sm:p-6 dark:white dark:border-gray-700"`}
          >
            <h5 className="mb-4 text-xl text-center  font-medium  ">
              {data.name}
            </h5>
            <p className="text-center ">{data.description}</p>
            <div
              className={`flex mt-2 justify-center items-baseline text-blue-700 ${
                data.name === "Facility" && "text-white"
              }`}
            >
              <span className=" font-extrabold tracking-blue-700">
                {`${data?.prices?.monthly?.currency} ${
                  data?.prices?.monthly?.upFront
                } Upfront + 
              $${!checked ? 40 * 1 : 400 * 12}/User`}
              </span>
              <small className="ml-1   text-gray-500 dark:text-gray-400">
                / {!checked ? "Monthly" : "Annualy"}
              </small>
            </div>
            <p className="mt-2  text-center">Billed annually.</p>
            <Link
              // eslint-disable-next-line no-underscore-dangle
              to={`/checkout/${data._id}`}
              className={` ${
                data.name !== "Facility"
                  ? "bg-blue-700 text-white"
                  : "bg-white text-blue-700"
              } mt-10   font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center`}
            >
              Choose plan
            </Link>
            <ul className="space-y-5 my-7">
              <li>
                <strong className="text-xl ">Asset</strong>
                {Object.keys(data.feature.asset).map((key) => (
                  <ul className="flex justify-between mt-3 ">
                    <small>{key}</small>
                    <small>Up to {data.feature.asset[key]}</small>
                  </ul>
                ))}
              </li>
              <li>
                <strong className="text-xl ">Dashboard</strong>
                {Object.keys(data.feature.dashboard).map((key) => (
                  <ul className="flex justify-between  mt-3 ">
                    <small>{key}</small>
                    <small>{data.feature.dashboard[key]}</small>
                  </ul>
                ))}
              </li>
              <li>
                <strong className="text-xl ">ePTW</strong>
                <ul className="flex justify-between  mt-3 ">
                  <small>CWP</small>
                  <small>{data.feature.ePTW.CWP}</small>
                </ul>
                <ul className="flex justify-between  mt-3 ">
                  <small>KWP</small>
                  <small>{data.feature.ePTW.HWP}</small>
                </ul>
                <div className="flex justify-between  mt-3 ">
                  <small>RiskAssessment</small>
                  <small>{data.feature.ePTW.riskAssessment}</small>
                </div>
                <ul className="flex justify-between  mt-3 ">
                  <small>PermitTemplate</small>
                  <small>{data.feature.ePTW.permitTemplate}</small>
                </ul>
                {Object.keys(data.feature.ePTW.isolation).map((key) => (
                  <ul className="flex justify-between  mt-3 ">
                    <small>{key}</small>
                    <small>{data.feature.ePTW.isolation[key]}</small>
                  </ul>
                ))}
              </li>
              <li>
                <strong className="text-xl ">Maintenance</strong>
                {Object.keys(data.feature.maintenance).map((key) => (
                  <ul className="flex justify-between  mt-3 ">
                    <small>{key}</small>
                    <small>{data.feature.maintenance[key]}</small>
                  </ul>
                ))}
              </li>
            </ul>
          </div>
        ))}
        {/* <div className="w-full  h-full p-4 bg-blue-700 shadow-lg rounded-lg  sm:p-6 dark:white dark:border-gray-700">
          <h5 className="mb-4 text-xl text-center  font-medium text-white ">
            Business
          </h5>
          <p className="text-center text-gray-200">
            The national average cost of buying coin easy.
          </p>
          <div className="flex justify-center items-baseline text-white ">
            <span className=" mt-2 font-extrabold tracking-blue-700">
              ${!checked ? 10000 * 1 : 10000 * 12} Upfront + $
              {!checked ? 100 * 1 : 100 * 12} /User/{" "}
              <span className=" font-semibold">
                {" "}
                {!checked ? "Monthly" : "Annualy"}
              </span>
            </span>
          </div>
          <p className="mt-2 text-white text-center">Billed annually.</p>
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
                        className="flex justify-between text-white mt-3 "
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
        </div> */}
        <div className="w-fit  p-4 grid  bg-white shadow-lg rounded-lg  text-center sm:p-6 dark:white dark:border-gray-700">
          <div>
            <h5 className="mb-4 text-2xl  text-center text-blue-700 font-bold">
              Enterprise
            </h5>
            <p className="text-center text-[#969696] ">
              The national average cost of buying coin easy.
            </p>
            <p className=" text-center text-5xl mt-20 md:p-16 text-blue-700 font-bold ">
              Specially crafted for you
            </p>

            <Link to="/trynow">
              <button
                type="button"
                className="text-white md:p-2 px-24 py-2 mb-4 rounded-lg bg-blue-600  mt-10 w-fit md:w-full text-center"
              >
                Contact Sales
              </button>
            </Link>
          </div>
          {/*    
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
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
