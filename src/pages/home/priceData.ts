export const facilityData: Array<{
  id: number;
  title: string;
  list: Array<{ id: number; itemTitle: string; itemValue: string }>;
}> = [
  {
    id: 89,
    title: "Asset",
    list: [
      {
        id: 1,
        itemTitle: "Manpower ",
        itemValue: "Up to 10",
      },
      {
        id: 2,
        itemTitle: "Machines ",
        itemValue: " Up to 100",
      },
      {
        id: 3,
        itemTitle: "Materials ",
        itemValue: " Up to 1000",
      },
    ],
  },
  {
    id: 29,
    title: " Maintenance",
    list: [
      {
        id: 9,
        itemTitle: "  Work ",
        itemValue: " Unlimited",
      },
      {
        id: 92,
        itemTitle: " Work order lifecycle",
        itemValue: "  Not customizable ",
      },
      {
        id: 91,
        itemTitle: "  Corrective Maintenance ",
        itemValue: "  Yes",
      },
      {
        id: 90,
        itemTitle: "   Preventive Maintenance",
        itemValue: "  Yes",
      },
      {
        id: 95,
        itemTitle: "  Predictive Maintenance",
        itemValue: "  No",
      },
      {
        id: 29,
        itemTitle: "  Prescriptive Maintenance",
        itemValue: "  No",
      },
    ],
  },
  {
    id: 891,
    title: " Dashboard",
    list: [
      {
        id: 893,
        itemTitle: "  Notes ",
        itemValue: " Unlimited",
      },
      {
        id: 894,
        itemTitle: " Agenda",
        itemValue: " Non-editable ",
      },
      {
        id: 89589,
        itemTitle: " Safety Map ",
        itemValue: "  No",
      },
      {
        id: 8949389850,
        itemTitle: "  Calendar",
        itemValue: "  Dynamic",
      },
      {
        id: 89230,
        itemTitle: "  Highlight",
        itemValue: "  Up to 5 Events Daily",
      },
      {
        id: 8911234,
        itemTitle: "  Notification",
        itemValue: "  Yes",
      },
      {
        id: 89390394,
        itemTitle: "  Notification",
        itemValue: "  No",
      },
    ],
  },
  {
    id: 8911111111,
    title: " ePTW",
    list: [
      {
        id: 892223,
        itemTitle: "  HWP ",
        itemValue: " Yes",
      },
      {
        id: 8988,
        itemTitle: " CWP",
        itemValue: " Yes ",
      },
      {
        id: 8945232,
        itemTitle: " Permit Template ",
        itemValue: "  Not customizable",
      },
      {
        id: 389,
        itemTitle: "  Risk Assessment",
        itemValue: "  Yes",
      },
      {
        id: 83459,
        itemTitle: "  Isolation",
        itemValue: "  No",
      },
    ],
  },
];
export const BusinessData: Array<{
  id: number;
  title: string;
  list: Array<{
    id: number;
    itemTitle: string;
    itemValue: string;
    key: string;
  }>;
}> = [
  {
    id: 89,
    title: "Asset",
    list: [
      {
        id: 1,
        itemTitle: "Manpower ",
        itemValue: "Up to 100",
        key: "manpower",
      },
      {
        id: 2,
        itemTitle: "Machines ",
        itemValue: " Up to 1000",
        key: "machines",
      },
      {
        id: 3,
        itemTitle: "Materials ",
        itemValue: " Up to 10000",
        key: "materials",
      },
    ],
  },
  {
    id: 29,
    title: " Maintenance",
    list: [
      {
        id: 9,
        itemTitle: "  Work ",
        itemValue: " Unlimited",
        key: "work",
      },
      {
        id: 92,
        itemTitle: " Work order lifecycle",
        itemValue: "   customizable ",
        key: "work-order-lifecycle",
      },
      {
        id: 91,
        itemTitle: "  Corrective Maintenance ",
        itemValue: "  Yes",
        key: "corrective-maintenance",
      },
      {
        id: 90,
        itemTitle: "   Preventive Maintenance",
        itemValue: "  Yes",
        key: "preventive-maintenance",
      },
      {
        id: 95,
        itemTitle: "  Predictive Maintenance",
        itemValue: "  No",
        key: "predictive-maintenance",
      },
      {
        id: 293,
        itemTitle: "  Prescriptive Maintenance",
        itemValue: "  Yes",
        key: "prescriptive-maintenance",
      },
    ],
  },
  {
    id: 891,
    title: " Dashboard",
    list: [
      {
        id: 893,
        itemTitle: "  Notes ",
        itemValue: " Unlimited",
        key: "notes",
      },
      {
        id: 8949389850,
        itemTitle: "  Calendar",
        itemValue: "  Dynamic",
        key: "calendar",
      },
      {
        id: 89230,
        itemTitle: "  Highlight",
        itemValue: "  Up to 20 Events Daily",
        key: "highlight",
      },
      {
        id: 8911234,
        itemTitle: "  Notification",
        itemValue: "  Yes",
        key: "notification",
      },
      {
        id: 89589,
        itemTitle: " Safety Map ",
        itemValue: "  Yes",
        key: "safety-map",
      },
      {
        id: 894389483984985,
        itemTitle: " Agenda",
        itemValue: " Editable ",
        key: "agenda",
      },
      {
        id: 89390394,
        itemTitle: "  Digital Signatures",
        itemValue: "  Yes",
        key: "digital-signatures",
      },
    ],
  },
  {
    id: 8911111111,
    title: " ePTW",
    list: [
      {
        id: 892223,
        itemTitle: "  HWP ",
        itemValue: " Yes",
        key: "hwp",
      },
      {
        id: 8988,
        itemTitle: " CWP",
        itemValue: " Yes ",
        key: "cwp",
      },
      {
        id: 34,
        itemTitle: " Permit Template",
        itemValue: " Custom ",
        key: "custom",
      },
      {
        id: 35,
        itemTitle: " Risk Assessment",
        itemValue: " Yes",
        key: "risk assessment",
      },
      {
        id: 36,
        itemTitle: " Isolation",
        itemValue: " Yes",
        key: "risk assessment",
      },
      {
        id: 37,
        itemTitle: " + Development Centre",
        itemValue: " Standard",
        key: "standard",
      },
      {
        id: 38,
        itemTitle: " + B-2-B Market Place",
        itemValue: " Standard",
        key: "B-2-B Market Place",
      },
      {
        id: 138,
        itemTitle: " + Finance",
        itemValue: " Standard",
        key: "+Finance",
      },
    ],
  },
];

export const EnterpriseData: Array<{
  id: number;
  title: string;
  list: Array<{ id: number; itemTitle: string; itemValue: string }>;
}> = [
  {
    id: 89,
    title: "Asset",
    list: [
      {
        id: 1,
        itemTitle: "Manpower ",
        itemValue: "Unlimited",
      },
      {
        id: 2,
        itemTitle: "Machines ",
        itemValue: " Unlimited",
      },
      {
        id: 3,
        itemTitle: "Materials ",
        itemValue: " Unlimited",
      },
    ],
  },
  {
    id: 29,
    title: " Maintenance",
    list: [
      {
        id: 9,
        itemTitle: "  Work ",
        itemValue: " Unlimited",
      },
      {
        id: 92,
        itemTitle: " Work order lifecycle",
        itemValue: "  Custom",
      },
      {
        id: 91,
        itemTitle: "  Corrective Maintenance ",
        itemValue: "  Yes",
      },
      {
        id: 90,
        itemTitle: "   Preventive Maintenance",
        itemValue: "  Yes",
      },
      {
        id: 95,
        itemTitle: "  Predictive Maintenance",
        itemValue: "  Yes",
      },
      {
        id: 29,
        itemTitle: "  Prescriptive Maintenance",
        itemValue: "  Yes",
      },
    ],
  },
  {
    id: 891,
    title: " Dashboard",
    list: [
      {
        id: 893,
        itemTitle: "  Notes ",
        itemValue: " Unlimited",
      },
      {
        id: 894,
        itemTitle: " Agenda",
        itemValue: " Editable ",
      },
      {
        id: 89589,
        itemTitle: " Safety Map ",
        itemValue: "  Yes",
      },
      {
        id: 8949389850,
        itemTitle: "  Calendar",
        itemValue: "  Dynamic",
      },
      {
        id: 89230,
        itemTitle: "  Highlight",
        itemValue: "  Up to 50 Events Daily",
      },
      {
        id: 8911234,
        itemTitle: "  Notification",
        itemValue: "  Yes",
      },
      {
        id: 89390394,
        itemTitle: "  Notification",
        itemValue: "  Yes",
      },
    ],
  },
  {
    id: 8911111111,
    title: " ePTW",
    list: [
      {
        id: 892223,
        itemTitle: "  HWP ",
        itemValue: " Yes",
      },
      {
        id: 8988,
        itemTitle: " CWP",
        itemValue: " Yes ",
      },
      {
        id: 8945232,
        itemTitle: " Permit Template ",
        itemValue: " Customizable",
      },
      {
        id: 389,
        itemTitle: "  Risk Assessment",
        itemValue: "  Yes",
      },
      {
        id: 83459,
        itemTitle: "  Isolation",
        itemValue: "  Yes",
      },
      {
        id: 37,
        itemTitle: " + Development Centre",
        itemValue: " Ultimate",
      },
      {
        id: 38,
        itemTitle: " + B-2-B Market Place",
        itemValue: " Ultimate",
      },
      {
        id: 138,
        itemTitle: " + Finance",
        itemValue: " Ultimate",
      },
    ],
  },
];
// export const BusinessData = [
//   {
//     id: 89,
//     title: "Asset",
//     list: [
//       {
//         id: 1,
//         itemTitle: "Manpower ",
//         itemValue: "Up to 100",
//       },
//       {
//         id: 2,
//         itemTitle: "Machines ",
//         itemValue: " Up to 1000",
//       },
//       {
//         id: 3,
//         itemTitle: "Materials ",
//         itemValue: " Up to 10000",
//       },
//     ],
//   },
//   {
//     id: 29,
//     title: " Maintenance",
//     list: [
//       {
//         id: 9,
//         itemTitle: "  Work ",
//         itemValue: " Unlimited",
//       },
//       {
//         id: 92,
//         itemTitle: " Work order lifecycle",
//         itemValue: "   customizable ",
//       },
//       {
//         id: 91,
//         itemTitle: "  Corrective Maintenance ",
//         itemValue: "  Yes",
//       },
//       {
//         id: 90,
//         itemTitle: "   Preventive Maintenance",
//         itemValue: "  Yes",
//       },
//       {
//         id: 95,
//         itemTitle: "  Predictive Maintenance",
//         itemValue: "  No",
//       },
//       {
//         id: 293,
//         itemTitle: "  Prescriptive Maintenance",
//         itemValue: "  Yes",
//       },
//     ],
//   },
//   {
//     id: 891,
//     title: " Dashboard",
//     list: [
//       {
//         id: 893,
//         itemTitle: "  Notes ",
//         itemValue: " Unlimited",
//       },
//       {
//         itemTitle: " Agenda",
//         itemValue: " Editable ",
//       },
//       {
//         id: 89589,
//         itemTitle: " Safety Map ",
//         itemValue: "  Yes",
//       },
//       {
//         id: 8949389850,
//         itemTitle: "  Calendar",
//         itemValue: "  Dynamic",
//       },
//       {
//         id: 89230,
//         itemTitle: "  Highlight",
//         itemValue: "  Up to 20 Events Daily",
//       },
//       {
//         id: 8911234,
//         itemTitle: "  Notification",
//         itemValue: "  Yes",
//       },
//       {
//         id: 89390394,
//         itemTitle: "  Digital Signatures",
//         itemValue: "  Yes",
//       },
//     ],
//   },
//   {
//     id: 8911111111,
//     title: " ePTW",
//     list: [
//       {
//         id: 892223,
//         itemTitle: "  HWP ",
//         itemValue: " Yes",
//       },
//       {
//         id: 8988,
//         itemTitle: " CWP",
//         itemValue: " Yes ",
//       },
//       {
//         id: 8945232,
//         itemTitle: " Permit Template ",
//         itemValue: "   customizable",
//       },
//       {
//         id: 389,
//         itemTitle: "  Risk Assessment",
//         itemValue: "  Yes",
//       },
//       {
//         id: 83459,
//         itemTitle: "  Isolation",
//         itemValue: "  No",
//       },
//       {
//         id: 89455,
//         itemTitle: "  + Development Centre",
//         itemValue: "  Basic",
//       },
//       {
//         id: 890,
//         itemTitle: "  + B-2-B Market Place Standard",
//         itemValue: "  Basic",
//       },
//       {
//         id: 890988,
//         itemTitle: " + Finance",
//         itemValue: "  Standar",
//       },
//     ],
//   },
// ];

export default { BusinessData, facilityData };
