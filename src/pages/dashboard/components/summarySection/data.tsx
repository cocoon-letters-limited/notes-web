import FlagIcon from "components/svg/flagIcon";
import ConfirmIcon from "components/svg/confirmIcon";
import DowntimeIcon from "components/svg/downtimeIcon";
import BillingIcon from "components/svg/billingIcon";
import ToolIcon from "components/svg/toolIcon";
import IngotIcon from "components/svg/ingotIcon";
import StatIcon from "components/svg/statIcon";

const summaryData = [
  {
    summaryTitle: "Production",
    summaryData: [
      {
        id: 1,
        color: "#F16B40",
        icon: <FlagIcon />,
        name: "Expected output",
        value: "300",
        unit: "MW",
        status: "",
      },
      {
        id: 2,
        color: "#4C78E8",
        icon: <ConfirmIcon />,
        name: "Actual output",
        value: "32",
        unit: "MW",
        status: "increase",
      },
      {
        id: 3,
        color: "#F52E1B",
        icon: <DowntimeIcon />,
        name: "Downtime",
        value: "123",
        unit: "hrs",
        status: "decrease",
      },
      {
        id: 4,
        color: "#16F62C",
        icon: <BillingIcon />,
        name: "Billing",
        value: "35674",
        unit: "Barrels",
        status: "increase",
      },
    ],
  },
  {
    summaryTitle: "Maintenance",
    summaryData: [
      {
        id: 1,
        color: "#224280",
        icon: <ToolIcon />,
        name: "Reactive/Planned",
        value: "8/4",
        unit: "",
        status: "decrease",
      },
      {
        id: 2,
        color: "#F52E1B",
        icon: <ToolIcon />,
        name: "Work Order Backlog",
        value: "35",
        unit: "",
        status: "decrease",
      },
      {
        id: 3,
        color: "#E84CD8",
        icon: <ToolIcon />,
        name: "Work Order Compliance",
        value: "72%",
        unit: "",
        status: "increase",
      },
      {
        id: 4,
        color: "#16F62C",
        icon: <ToolIcon />,
        name: "Out of Service Equipment",
        value: "13",
        unit: "",
        status: "decrease",
      },
    ],
  },
  {
    summaryTitle: "Assets",
    summaryData: [
      {
        id: 1,
        color: "#F16B40",
        icon: <IngotIcon />,
        name: "Machine: Total/active",
        value: "8/4",
        unit: "",
        status: "decrease",
      },
      {
        id: 2,
        color: "#4C78E8",
        icon: <IngotIcon />,
        name: "Material: Total/awaiting delivery",
        value: "35/20",
        unit: "",
        status: "decrease",
      },
      {
        id: 3,
        color: "#E84CD8",
        icon: <IngotIcon />,
        name: "Manpower:Total crew/workers on premises",
        value: "50%",
        unit: "",
        status: "increase",
      },
      {
        id: 4,
        color: "#16F62C",
        icon: <IngotIcon />,
        name: "Transfer log",
        value: "13",
        unit: "",
        status: "decrease",
      },
    ],
  },
  {
    summaryTitle: "Finance",
    summaryData: [
      {
        id: 1,
        color: "#F16B40",
        icon: <StatIcon />,
        name: "Budget:/Actual",
        value: "$3k/$4k",
        unit: "",
        status: "decrease",
      },
      {
        id: 2,
        color: "#4C78E8",
        icon: <StatIcon />,
        name: "Income/Expenditure",
        value: "$15k/$10k",
        unit: "",
        status: "decrease",
      },
      {
        id: 3,
        color: "#E84CD8",
        icon: <StatIcon />,
        name: "Operation cost",
        value: "$9k",
        unit: "",
        status: "increase",
      },
      {
        id: 4,
        color: "#16F62C",
        icon: <StatIcon />,
        name: "Maintenance cost",
        value: "$250",
        unit: "",
        status: "increase",
      },
    ],
  },
];

export default summaryData;
