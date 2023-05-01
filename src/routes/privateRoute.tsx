import DashboardLayout from "components/layouts/dashboardLayout";
import Dashboard from "pages/dashboard";
import Notification from "pages/notification";
import Error404 from "pages/error404";
import Notes from "pages/notes";
import Equipment from "pages/equipment/index";
import EquipmentProfileLaypout from "pages/equipment/equipmentProfile";
import ViewNoteDetails from "pages/notes/viewNoteDetails";
import Material from "pages/material";
import MaterialProfile from "pages/material/materialProfile";
import Maintenance from "pages/maintenance";
import CreateMaintenance from "pages/maintenance/createMaintenance";
import Workforce from "pages/workforce";
import EquipmentList from "pages/equipment/EquipmentList";
import WorkoforceLIst from "pages/workforce/workforceList";
import ManpowerLayout from "pages/workforce/layout";
import MaintenanceDetails from "pages/maintenance/maintenanceDetails";

const privateRoute = {
  path: "/",
  element: <DashboardLayout />,
  errorElement: <Error404 />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "notifications",
      element: <Notification />,
    },
    {
      path: "notes",
      element: <Notes />,
    },
    {
      path: "notes/:slug",
      element: <ViewNoteDetails />,
    },
    {
      path: "manpower",
      element: <Workforce />,
      children: [
        {
          path: "",
          element: <WorkoforceLIst />,
        },
        {
          path: "ManpowerLayout",
          element: <ManpowerLayout />,
        },
      ],
    },
    {
      path: "equipment",
      element: <Equipment />,
      children: [
        {
          path: "",
          element: <EquipmentList />,
        },
        {
          path: "equipment-bio",
          element: <EquipmentProfileLaypout />,
        },
      ],
    },
    {
      path: "material",
      element: <Material />,
    },
    {
      path: "material/:slug",
      element: <MaterialProfile />,
    },
    {
      path: "maintenance",
      element: <Maintenance />,
    },
    {
      path: "maintenance/:slug",
      element: <MaintenanceDetails />,
    },
    {
      path: "maintenance/create",
      element: <CreateMaintenance />,
    },
  ],
};

export default privateRoute;
