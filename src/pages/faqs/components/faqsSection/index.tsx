import faqsData from "./data";
import FaqTitle from "./faqTitle";
import FaqsListing from "./faqListing";

const FaqsSection = () => {
  return (
    <section className="relative">
      <div className="container px-4 lg:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-40 lg:pb-52 relative">
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
          {faqsData.map((faq) => (
            <div key={faq.id} className="mb-24">
              <FaqTitle title={faq.title} />
              <FaqsListing faqs={faq.faqs} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
