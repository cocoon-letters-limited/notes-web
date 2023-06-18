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
import MaintenanceWorkOrder from "pages/maintenance/maintenanceWorkOrder";
// import Safety from "pages/safety";
// import DevCentre from "pages/devCentre";
import CreateCourse from "pages/devCentre/devCentreDetails/createCourse";
import CreateAssessment from "pages/devCentre/devCentreDetails/createAssessment";
import SatetyLayout from "pages/safety/safetyList";
import RiskAssessment from "pages/safety/RiskAssessment";
import Permit from "pages/safety/PERMIT";
import IsolationCertificate from "pages/safety/createCertification/IsolationCertificate";
import SystemsIsolation from "pages/safety/createCertification/SystemsIsolation/SystemsIsolation";
import SystemsIsolationDetail from "pages/safety/createCertification/SystemsIsolation/SystemsIsolationDetail";
import RadiographyPermit from "pages/safety/createCertification/radiographyPermit";
import ConfinedCertificate from "pages/safety/createCertification/ConfinedCertificate";
import Vendor from "pages/vendor";
import VendorDetails from "pages/vendor/vendorDetails";
import VendorCreateOrder from "pages/vendor/vendorCreateOrder";
import VendorItemDetails from "pages/vendor/vendorItemDetails";
import MaterialCreate from "pages/material/materialCreate";
import Schedule from "pages/schedule";
// import DevCentreDetails from "pages/devCentre/devCentreDetails";

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
      path: "Permit",
      element: <Permit />,
    },
    {
      path: "safety",
      children: [
        {
          path: "",
          element: <SatetyLayout />,
        },
        {
          path: "risk-assessment",
          element: <RiskAssessment />,
        },
        {
          path: "radiographyPermit",
          element: <RadiographyPermit />,
        },
        {
          path: "confined-certificate",
          element: <ConfinedCertificate />,
        },
        {
          path: "systems-isolation",
          element: <SystemsIsolation />,
        },
        {
          path: "systems-isolation-detail",
          element: <SystemsIsolationDetail />,
        },
        {
          path: "isolation-certification",
          element: <IsolationCertificate />,
        },
      ],
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
      path: "machine",
      element: <Equipment />,
      children: [
        {
          path: "",
          element: <EquipmentList />,
        },
        {
          path: "machine-bio",
          element: <EquipmentProfileLaypout />,
        },
      ],
    },
    {
      path: "material",
      element: <Material />,
    },
    {
      path: "material/create",
      element: <MaterialCreate />,
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
    {
      path: "maintenance/:slug/work-order",
      element: <MaintenanceWorkOrder />,
    },
    {
      path: "dev-centre",
      // element: <DevCentre />,
    },
    {
      path: "dev-centre/:slug",
      // element: <DevCentreDetails />,
    },
    {
      path: "schedule/",
      element: <Schedule />,
    },
    {
      path: "dev-centre/create-course",
      element: <CreateCourse />,
    },
    {
      path: "dev-centre/create-assessment",
      element: <CreateAssessment />,
    },

    {
      path: "marketplace",
      element: <Vendor />,
    },
    {
      path: "/create-order",
      element: <VendorCreateOrder />,
    },
    {
      path: "marketplace/:slug",
      element: <VendorDetails />,
    },
    {
      path: "marketplace/:slug/items/:ordersId",
      element: <VendorItemDetails />,
    },
  ],
};

export default privateRoute;
