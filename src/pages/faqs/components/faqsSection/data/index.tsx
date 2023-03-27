import accountFaqsData from "./accountFaqsData";
import healthFaqsData from "./healthFaqsData";
import learningChainFaqsData from "./learningFaqsData";
import maintenanceFaqsData from "./maintenanceFaqsData";
import supplyChainFaqsData from "./supplyChainFaqsData";

const faqsData = [
  {
    id: 1,
    title: "Account",
    faqs: accountFaqsData,
  },
  {
    id: 2,
    title: "Maintenance",
    faqs: maintenanceFaqsData,
  },
  {
    id: 3,
    title: "Health & Safety",
    faqs: healthFaqsData,
  },
  {
    id: 4,
    title: "Supply-Chain",
    faqs: supplyChainFaqsData,
  },
  {
    id: 5,
    title: "Learning & Development",
    faqs: learningChainFaqsData,
  },
];

export default faqsData;
