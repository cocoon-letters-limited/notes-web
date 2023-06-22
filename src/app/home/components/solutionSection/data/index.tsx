import { competenceDevelopmentCentreData } from "./competenceDevelopmentCentreData";
import { maintenanceManagementData } from "./maintenanceManagementData";
import { safetyManagementData } from "./safetyManagementData";
import { supplyChainNetworkData } from "./supplyChainNetworkData";

export const data = [
    {
        textColor: "#E2BE2A",
        backgroundColor: "#FAF9F1",
        title: 'Maintenance Management System',
        listData: maintenanceManagementData
    },
    {
        textColor: "#61C4BF",
        backgroundColor: "#EBFAFA",
        title: 'Safety Management System',
        listData: safetyManagementData
    },
    {
        textColor: "#C773AF",
        backgroundColor: "#FDF4FA",
        title: 'Competence Development Centre',
        listData: competenceDevelopmentCentreData
    },
    {
        textColor: "#054CD6",
        backgroundColor: "#F1F5FF",
        title: 'Supply Chain Network',
        listData: supplyChainNetworkData
    },
]