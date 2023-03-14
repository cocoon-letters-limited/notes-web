import accountFaqsData from "./accountFaqsData";
import personalFaqsData from "./personalFaqsData";
import verificationFaqsData from "./verificationFaqsData";

const faqsData = [
  {
    id: 1,
    title: "Account",
    faqs: accountFaqsData,
  },
  {
    id: 2,
    title: "Verification",
    faqs: verificationFaqsData,
  },
  {
    id: 3,
    title: "Personal Details",
    faqs: personalFaqsData,
  },
];

export default faqsData;
