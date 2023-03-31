/* eslint-disable import/prefer-default-export */
export const ReportData: Array<{
  id: number;
  title: string;
  description: string;
}> = [
  {
    id: 41,
    title: "Notes",
    description:
      "Collaborative tool for sharing and learning from asset and operation experiences.",
  },
  {
    id: 42,
    title: "Dashboard:",
    description:
      "Gain full visibility of assets and operations with real-time dashboard insights.",
  },
  {
    id: 43,
    title: " Notification",
    description:
      "Stay updated on subscribed assets/operations and sign documents when required.",
  },
];

export const WorkData: Array<{
  id: number;
  title: string;
  description: string;
}> = [
  {
    id: 51,
    title: " Agenda",
    description:
      "Plan, track and manage maintenance task in real-time with ease.",
  },
  {
    id: 52,
    title: "Calendar",
    description:
      "Efficiently schedule work and monitor progress with our calendar tool.",
  },
  {
    id: 53,
    title: "Highlight",
    description:
      "Stay on top of key events with asset-specific daily highlights",
  },
];

export const ePTWData: Array<{
  id: number;
  title: string;
  description: string;
}> = [
  {
    id: 54,
    title: " Hot Work",
    description:
      "Certify hot work permits in alignment with best practices with digital signatures.",
  },
  {
    id: 55,
    title: "Cold Work",
    description:
      "Raise and certify cold work permits with digital signatures and custom templates.",
  },
  {
    id: 56,
    title: "Certificates",
    description:
      "Create and certify safety certificates with custom templates according to standard practices.",
  },
];

export const RiskAssessment: Array<{
  id: number;
  title: string;
  description: string;
}> = [
  {
    id: 54,
    title: " Hazard",
    description:
      "Identify potential work hazards with our comprehensive hazard analysis  feature.",
  },
  {
    id: 55,
    title: "Controls",
    description:
      " Mitigate potential hazards with our intelligent control recommendation model.",
  },
  {
    id: 56,
    title: "Matrix",
    description:
      " Minimize risk with our hazard assessment matrix and safety benchmarking tool.",
  },
];

export const Isolation: Array<{
  id: number;
  title: string;
  description: string;
}> = [
  {
    id: 54,
    title: " Types",
    description:
      "Create, track and report every safety isolation types and events aligned  with industry-best practice.",
  },
  {
    id: 55,
    title: "Points",
    description:
      " Create, track and report every safety isolation point and record with  ease.",
  },
  {
    id: 56,
    title: "LOTO",
    description:
      "  Digitally ensure the security of isolation events with our Log Out/Tag Out feature.",
  },
];

export const SafetyMap: Array<{
  id: number;
  title: string;
  description: string;
}> = [
  {
    id: 54,
    title: " Active ePTW",
    description:
      " Monitor all active safety permits on a real-time comprehensive  map of your facility.",
  },
  {
    id: 55,
    title: "Hazardous Areas",
    description:
      " Ensure continues oversight of your facility by tracking live  activities in hazardous areas.",
  },
  {
    id: 56,
    title: "Gas Monitoring",
    description:
      "  Continuously track the emission of dangerous gasses and your carbon footprint.",
  },
];

export const CompetenceDevelopmentCentreData: Array<{
  id: number;
  cardTitle: string;
  itemList: Array<{ id: number; title: string; description: string }>;
}> = [
  {
    id: 57,
    cardTitle: "Course",
    itemList: [
      {
        id: 59,
        title: "Trainers",
        description:
          "Equip your workforce with the latest industry practices through expertled training.",
      },
      {
        id: 58,
        title: "Attendees",
        description:
          "Assign relevant training to your team with our customizable training module.",
      },
      {
        id: 60,
        title: "Schedule",
        description:
          "Efficiently plan employee training with our automated training scheduler. ",
      },
    ],
  },
  {
    id: 61,
    cardTitle: "Learning Path",
    itemList: [
      {
        id: 62,
        title: "Define",
        description:
          "Create personalized employee training paths based on competence and growth potential.",
      },
      {
        id: 63,
        title: "Modify",
        description:
          "Adapt the learning paths of employees to changing needs and new realities.",
      },
      {
        id: 64,
        title: "Track",
        description:
          "Keep tabs with your team’s learning progress and skills development with ease.",
      },
    ],
  },
  {
    id: 65,
    cardTitle: "Training",
    itemList: [
      {
        id: 66,
        title: "Live",
        description:
          "Join interactive training sessions with industry experts in real-time.",
      },
      {
        id: 67,
        title: "Recorded",
        description:
          "Flexible training available on-demand for self-passed learning.",
      },
      {
        id: 68,
        title: "Community",
        description:
          "Connect and learn with peers and colleagues using our collaborative  learning framework.",
      },
    ],
  },
  {
    id: 69,
    cardTitle: "Assessment",
    itemList: [
      {
        id: 70,
        title: "Create",
        description:
          "Automate assessments and generate results with customizable standards.",
      },
      {
        id: 71,
        title: "Undertake",
        description:
          "Assess employee knowledge and evaluate progress with subject specific tests.",
      },
      {
        id: 72,
        title: "Certificate",
        description:
          "Automatically generate certificates upon the completion of training  programs.",
      },
    ],
  },
];

export const SupplyChainNetworkData: Array<{
  id: number;
  cardTitle: string;
  itemList: Array<{ id: number; title: string; description: string }>;
}> = [
  {
    id: 1,
    cardTitle: "Marketplace",
    itemList: [
      {
        id: 2,
        title: "  Vendor",
        description:
          "Connect with verified vendors and service providers for efficient transactions.",
      },
      {
        id: 3,
        title: " Listings",
        description:
          " Access comprehensive product and service listings from accredited  vendors.",
      },
      {
        id: 4,
        title: "Review",
        description:
          "Gain insights into vendors’ rating and performance record across all orders.",
      },
    ],
  },
  {
    id: 10,
    cardTitle: "Procurement",
    itemList: [
      {
        id: 12,
        title: " Request ",
        description:
          " Make material / service request to your preferred vendor or market and receive proposals.",
      },
      {
        id: 13,
        title: "Query ",
        description:
          " Securely communicate with vendors for targeted procurement data and insights.",
      },
      {
        id: 14,
        title: "Tender",
        description:
          "Automatically select the best proposals based on criteria you define.",
      },
    ],
  },

  {
    id: 22,
    cardTitle: "Orders",
    itemList: [
      {
        id: 21,
        title: "Contract",
        description:
          "  Easily draft and sign contract agreements with trackable terms and conditions.",
      },
      {
        id: 23,
        title: "Invoice",
        description:
          " Vendors can create customized invoices and co - sign digitally for  seamless transactions.",
      },
      {
        id: 24,
        title: "Delivery",
        description:
          "Track lead time, shipping, and delivery updates and manage material reception.",
      },
    ],
  },
  {
    id: 30,
    cardTitle: "Finance",
    itemList: [
      {
        id: 31,
        title: "Budget",
        description:
          "  Manage budget and prioritize spending to maintain financial liquidity at  all times.",
      },
      {
        id: 32,
        title: "Modes",
        description:
          "Switch between standard and frugal spending modes based of economic  realities.",
      },
      {
        id: 33,
        title: "Payment",
        description:
          " Effortlessly pay vendors and staff in any currency from one platform.",
      },
    ],
  },
];

// {
//     title: " ",
//     description:
//       "",
//   },
//   {
//     title: "",
//     description:
//       "",
//   },
//   {
//     title: "",
//     description:
//       ",
//   },
