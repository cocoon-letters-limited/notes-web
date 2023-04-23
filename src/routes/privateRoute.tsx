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
      path: "equipment",
      element: <Equipment />,
      children: [
        {
          path: "equipment-profile",
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
  ],
};

export default privateRoute;
