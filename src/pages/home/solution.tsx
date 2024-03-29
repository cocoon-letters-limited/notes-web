// import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import img from "assets/notesectionimage.jpeg";
import {
  CompetenceDevelopmentCentreData,
  Isolation,
  ReportData,
  RiskAssessment,
  SafetyMap,
  SupplyChainNetworkData,
  WorkData,
  ePTWData,
} from "./solutionData";

function AccordionCustom({
  title,
  discription,
}: {
  title: string;
  discription: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3">
      <div className="flex justify-between ">
        <p> {title}</p>
        <button type="submit" onClick={() => setOpen(!open)}>
          <ExpandMoreIcon />
        </button>
      </div>
      <div>
        {open && <p className="text-left text-gray-500">{discription}</p>}
      </div>
    </div>
  );
}

const Solution = () => {
  // const [ePTW] = useState(ePTWData);
  return (
    <div>
      <div id="features" className="text-center md:p-10 p-5">
        <p className="md:text-4xl font-bold text-blue-600">
          Take total control
        </p>
        <p className="text-gray-400 m-5 md:text-base text-xs">
          Optimize Asset Management with Enhanced Visibility and Control.
        </p>
      </div>

      <div className="md:container md:mx-auto ">
        <div>
          <div className="md:grid md:grid-cols-3 gap-5 ">
            <div>
              <img
                className=" md:w-50 object-contain w-screen rounded bg-black "
                src={img}
                alt="product"
                sizes=""
              />
            </div>

            <div className="md:grid md:ml-10 ml-4">
              <div className=" md:border-r-2   md:mb-5">
                <h5 className="text-6xl font-extrabold text-[#F0E915] ">01</h5>
                <p className="md:text-2xl pt-5 md:pb-5">
                  Maintenance Management System
                </p>
                <p className="text-gray-700 md:text-base text-xs md:pr-2">
                  Streamline maintenance processes and extend the productive
                  lifespan of your assets.
                </p>
              </div>
              <div className=" md:border-r-2 mt-10 mb-5">
                <h5 className="text-6xl font-extrabold text-[#60C5BF]">02</h5>
                <p className="md:text-2xl pt-5 md:pb-5">
                  Safety Management System
                </p>
                <p className="text-gray-700 md:text-base text-xs  md:pr-2">
                  Manage permits and enhance safety processes across your entire
                  organization.
                </p>
              </div>
            </div>

            <div className="md:grid  ">
              <div className="md:ml-10 ml-5 mb-5">
                <h5 className="text-6xl font-extrabold text-[#C773AF] ">03</h5>
                <p className="md:text-2xl pt-5 md:pb-5">
                  Competence Development Centre{" "}
                </p>
                <p className="text-gray-700 md:text-base text-xs">
                  {" "}
                  Accelerate growth with personalized learning and skills
                  development programs.
                </p>
              </div>

              <div className="md:m-10 m-5 mb-5">
                <h5 className="text-6xl font-extrabold text-[#054CD6] ">04</h5>
                <p className="md:text-2xl pt-5 md:pb-5">
                  B-2-B Supply Chain Network
                </p>
                <p className="text-gray-700 md:text-base text-xs">
                  Optimize procurement and fulfilment with efficient vendor,
                  OEM, and service provider connections.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center md:p-20 pt-10 ">
            <p className="md:text-4xl font-bold " id="Taketotalcontrol">
              Maintenance Management System
            </p>
          </div>

          <div className="md:grid md:grid-cols-4 md:gap-6 p-5 md:p-0">
            <div className=" text-center rounded mb-10 overflow-hidden  md:p1-5 shadow-lg bg-[#FAF9F1]">
              <div className="md:px-3 md:py-6">
                <p className=" md:text-2xl m-2  text-[#E2BE2A]"> Asset</p>
                <AccordionCustom
                  title="People"
                  discription=" Boost productivity by optimizing workforce, task and performance management"
                />
                <AccordionCustom
                  title="Machines"
                  discription="  Efficiently manage equipment lifecycle and maintenance to maximize 
                  uptime and ROI."
                />
                <AccordionCustom
                  title="Materials"
                  discription="Reduce inventory costs and improve efficiency with optimized 
                  material handling processes."
                />
              </div>
            </div>
            <div className="mb-10 text-center rounded overflow-hidden  shadow-lg bg-[#FAF9F1]">
              <div className="md:px-3 md:py-6">
                <p className=" md:text-2xl m-2 text-[#E2BE2A]">Maintenance</p>
                <AccordionCustom
                  title="Preventive"
                  discription=" Minimize equipment failure and unplanned disruptions with 
                  proactive maintenance strategies."
                />
                <AccordionCustom
                  title="Predictive:"
                  discription=" Ensure equipment reliability with state-of-the-art sensors and AIpowered data analysis."
                />
                <AccordionCustom
                  title="Prescriptive"
                  discription="Optimize maintenance procedures with historic data and machine 
                  learning models."
                />
              </div>
            </div>
            <div className=" mb-10 text-center rounded overflow-hidden  shadow-lg  bg-[#FAF9F1]">
              <div className="md:px-3 md:py-6">
                <p className=" md:text-2xl m-2 text-[#E2BE2A]"> Work </p>
                {WorkData.map((data) => (
                  <AccordionCustom
                    key={data.id}
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
            <div className=" mb-10 text-center rounded overflow-hidden  shadow-lg bg-[#FAF9F1]">
              <div className="md:px-3 md:py-6">
                <p className=" md:text-2xl m-2 text-[#E2BE2A]"> Report</p>
                {ReportData.map((data) => (
                  <AccordionCustom
                    key={data.id}
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center md:p-20 p-3 ">
            <p className="md:text-4xl font-bold ">Safety Management System</p>
          </div>

          <div className="md:grid md:grid-cols-4 md:gap-6 p-5 md:p-0">
            <div className=" text-center mb:10 w-100 rounded overflow-hidden bg-[#EBFBFA]   shadow-lg ">
              <div className="md:px-3 md:py-6">
                <p className=" md:text-2xl m-2 text-green-800">ePTW</p>
                {ePTWData.map((data) => (
                  <AccordionCustom
                    key={data.id}
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
            <div className=" text-center mb:10 w-100 rounded overflow-hidden  md:mt-0 mt-10 mb-10 md:mb-0 bg-[#EBFBFA]  shadow-lg ">
              <div className="md:px-3 md:py-6">
                <p className=" md:text-2xl m-2 text-green-800">
                  Risk Assessment
                </p>
                {RiskAssessment.map((data) => (
                  <AccordionCustom
                    key={data.id}
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
            <div className=" text-center mb:10 w-100 rounded overflow-hidden bg-[#EBFBFA] mb-10 md:mb-0  shadow-lg ">
              <div className="md:px-3 md:py-6">
                <p className=" md:text-2xl m-2 text-green-800">Isolation</p>
                {Isolation.map((data) => (
                  <AccordionCustom
                    key={data.id}
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
            <div className=" text-center mb:10 w-100 rounded overflow-hidden bg-[#EBFBFA]  shadow-lg ">
              <div className="md:px-3 md:py-6">
                <p className=" md:text-2xl m-2 text-green-800">Safety Map</p>
                {SafetyMap.map((data) => (
                  <AccordionCustom
                    key={data.id}
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center md:p-20 p-5">
            <p className="md:text-4xl font-bold ">
              Competence Development Centre
            </p>
          </div>

          <div className="md:grid md:grid-cols-4 md:gap-6 p-5 md:p-0">
            {CompetenceDevelopmentCentreData.map((cards) => (
              <div
                key={cards.id}
                className=" text-center mb:10 w-100 mb-10 rounded overflow-hidden  shadow-lg bg-[#FDF4FA]"
              >
                <div className="px-3 py-6">
                  <p className=" md:text-2xl mb-2 text-[#C773AF]">
                    {cards.cardTitle}
                  </p>
                  {cards.itemList.map((data: any) => (
                    <AccordionCustom
                      key={data.id}
                      title={data.title}
                      discription={data.description}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center md:p-20 ">
            <p className="md:text-4xl font-bold ">Supply Chain Network</p>
          </div>

          <div className="md:grid md:grid-cols-4 md:gap-6 p-5 md:p-0">
            {SupplyChainNetworkData.map((cards) => (
              <div
                key={cards.id}
                className=" text-center mb:10 w-100 rounded overflow-hidden  mb-10 shadow-lg "
                style={{ background: "#F1F5FF" }}
              >
                <div className="px-3 py-6">
                  <p className=" md:text-2xl mb-2 text-[#054CD6]">
                    {cards.cardTitle}
                  </p>
                  {cards.itemList.map((data: any) => (
                    <AccordionCustom
                      key={data.id}
                      title={data.title}
                      discription={data.description}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
