import CategoryIcon from "components/svg/categoryIcon";
import DevCentreIcon from "components/svg/devCentreIcon";
import FinanceIcon from "components/svg/financeIcon";
import HierarchyIcon from "components/svg/hierarchyIcon";
import MachineIcon from "components/svg/machineIcon";
import MaintenanceIcon from "components/svg/maintenanceIcon";
import ManpowerIcon from "components/svg/manpowerIcon";
import MarketplaceIcon from "components/svg/marketplaceIcon";
import MaterialIcon from "components/svg/materialIcon";
import NotesIcon from "components/svg/notesIcon";
import NotificationIcon from "components/svg/notificationIcon";
import SafetyIcon from "components/svg/safetyIcon";
import ScheduleIcon from "components/svg/scheduleIcon";

const menuData = [
  {
    section: "dashboard",
    menu: [
      {
        id: 1,
        icon: <CategoryIcon />,
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        id: 2,
        icon: <NotificationIcon />,
        title: "Notifications",
        url: "/notifications",
      },
      {
        id: 3,
        icon: <NotesIcon />,
        title: "Notes",
        url: "/notes",
      },
    ],
  },
  {
    section: "assets",
    menu: [
      {
        id: 1,
        icon: <MachineIcon />,
        title: "Machine",
        url: "/equipment",
      },
      {
        id: 2,
        icon: <MaterialIcon />,
        title: "Material",
        url: "/material",
      },
      {
        id: 3,
        icon: <ManpowerIcon />,
        title: "Manpower",
        url: "/manpower",
      },
    ],
  },
  {
    section: "work",
    menu: [
      {
        id: 1,
        icon: <ScheduleIcon />,
        title: "Schedule",
        url: "/schedule",
      },
      {
        id: 2,
        icon: <MaintenanceIcon />,
        title: "Maintenance",
        url: "/maintenance",
      },
      {
        id: 3,
        icon: <SafetyIcon />,
        title: "Safety",
        url: "/safety",
      },
    ],
  },

  {
    section: "hierarchy",
    menu: [
      {
        id: 1,
        icon: <HierarchyIcon />,
        title: "Hierarchy",
        url: "/hierarchy",
      },
    ],
  },

  {
    section: "finance",
    menu: [
      {
        id: 1,
        icon: <FinanceIcon />,
        title: "Finance",
        url: "/finance",
      },
      {
        id: 2,
        icon: <MarketplaceIcon />,
        title: "Marketplace",
        url: "/marketplace",
      },
      {
        id: 3,
        icon: <DevCentreIcon />,
        title: "Dev centre",
        url: "/dev-centre",
      },
    ],
  },
];

export default menuData;
