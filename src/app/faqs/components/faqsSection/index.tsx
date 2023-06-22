import FaqListing from "./components/faqListing";
import FaqTitle from "./components/faqTitle";
import faqsData from "./data";

const FaqsSection = () => {
  return (
    <section className="relative">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-20 md:pt-24 lg:pt-28 pb-40 lg:pb-52 relative">
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
          {faqsData.map((faq) => (
            <div key={faq.id} className="mb-20 lg:mb-24">
              <FaqTitle title={faq.title} />
              <FaqListing faqs={faq.faqs} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;