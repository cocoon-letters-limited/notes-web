import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import rectangle1059 from "assets/Rectangle1059.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import {
  CompetenceDevelopmentCentreData,
  ReportData,
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
  return (
    <Accordion style={{ background: "none", boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography> {title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="text-left text-gray-500">
          {discription}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

const Solution = () => {
  const [Report] = useState(ReportData);
  const [work] = useState(WorkData);
  // const [ePTW] = useState(ePTWData);
  return (
    <div>
      <div className="text-center p-10">
        <p className="text-4xl font-bold text-blue-600">Take total control</p>
        <p className="text-gray-400 m-5">
          Optimize Asset Management with Enhanced Visibility and Control.
        </p>
      </div>

      <div className="md:container md:mx-auto mt-20">
        <div>
          <div className="md:grid md:grid-cols-3  ">
            <div>
              <img
                className="bg-yellow-50 md:w-50 ml-10 mb-10 rounded"
                src={rectangle1059}
                alt="product"
                sizes=""
              />
            </div>

            <div className="md:grid ml-10 ">
              <div className=" md:border-r-2   mb-5">
                <h5 className="text-6xl font-extrabold text-yellow-600 ">01</h5>
                <p className="text-2xl pt-5 pb-5">
                  Maintenance Management System
                </p>
                <p className="text-gray-700">
                  Streamline maintenance processes and extend the productive
                  lifespan of your assets.
                </p>
              </div>
              <div className=" border-r-2 mt-10 mb-5">
                <h5 className="text-6xl font-extrabold text-purple-700 ">01</h5>
                <p className="text-2xl pt-5 pb-5">Safety Management System</p>
                <p className="text-gray-700">
                  Manage permits and enhance safety processes across your entire
                  organization.
                </p>
              </div>
            </div>

            <div className="md:grid  ">
              <div className="ml-10 mb-5">
                <h5 className="text-6xl font-extrabold text-green-700 ">01</h5>
                <p className="text-2xl pt-5 pb-5">
                  Competence Development Centre{" "}
                </p>
                <p className="text-gray-700">
                  {" "}
                  Accelerate growth with personalized learning and skills
                  development programs.
                </p>
              </div>

              <div className="m-10 mb-5">
                <h5 className="text-6xl font-extrabold text-gray-200 ">01</h5>
                <p className="text-2xl pt-5 pb-5">
                  {" "}
                  B-2-B Supply Chain Network
                </p>
                <p className="text-gray-700">
                  Optimize procurement and fulfilment with efficient vendor,
                  OEM, and service provider connections.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center p-20 ">
            <p className="text-4xl font-bold ">Maintenance Management System</p>
          </div>

          <div className="md:grid grid-cols-4 gap-6">
            <div className="max-w-sm text-center rounded overflow-hidden p-7  shadow-lg bg-orange-50">
              <div className="px-6 py-6">
                <p className=" text-3xl mb-2 text-green-800"> Asset</p>
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
            <div className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg bg-orange-50">
              <div className="px-6 py-6">
                <p className=" text-3xl mb-2 text-green-800"> Maintenance</p>
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
            <div className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg bg-orange-50">
              <div className="px-6 py-6">
                <p className=" text-3xl mb-2 text-green-800"> Work </p>
                {work.map((data) => (
                  <AccordionCustom
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
            <div className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg bg-orange-50">
              <div className="px-6 py-6">
                <p className=" text-3xl mb-2 text-green-800"> Report</p>
                {Report.map((data) => (
                  <AccordionCustom
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center p-20 ">
            <p className="text-4xl font-bold ">Safety Management System</p>
          </div>

          <div className="md:grid grid-cols-4 gap-6">
            <div className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg bg-green-50">
              <div className="px-6 py-6">
                <p className=" text-3xl mb-2 text-green-800">ePTW</p>
                {ePTWData.map((data) => (
                  <AccordionCustom
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
            <div className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg bg-green-50">
              <div className="px-6 py-6">
                <p className=" text-3xl mb-2 text-green-800">ePTW</p>
                {ePTWData.map((data) => (
                  <AccordionCustom
                    title={data.title}
                    discription={data.description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="text-center p-20 ">
            <p className="text-4xl font-bold ">Competence Development Centre</p>
          </div>

          <div className="md:grid grid-cols-4 gap-6">
            {CompetenceDevelopmentCentreData.map((cards) => (
              <div className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg bg-green-50">
                <div className="px-6 py-6">
                  <p className=" text-3xl mb-2 text-green-800">
                    {cards.cardTitle}
                  </p>
                  {cards.itemList.map((data: any) => (
                    <AccordionCustom
                      title={data.title}
                      discription={data.description}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center p-20 ">
            <p className="text-4xl font-bold ">Supply Chain Network</p>
          </div>

          <div className="md:grid grid-cols-4 gap-6">
            {SupplyChainNetworkData.map((cards) => (
              <div
                className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg "
                style={{ background: "#F1F5FF" }}
              >
                <div className="px-6 py-6">
                  <p className=" text-3xl mb-2 text-green-800">
                    {cards.cardTitle}
                  </p>
                  {cards.itemList.map((data: any) => (
                    <AccordionCustom
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
