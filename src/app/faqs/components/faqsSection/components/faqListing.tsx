"use client"

import { ReactElement, useState } from "react";

interface FaqData {
  id: number;
  question: string;
  answer: string | ReactElement;
}

type FaqListingProps = {
  faqs: Array<any>;
};

const FaqListing = ({ faqs }: FaqListingProps) => {
  const [show, setShow] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<FaqData>();

  const handleToggle = (data: FaqData) => {
    setSelectedFaq(data);
    setShow(data.id !== selectedFaq?.id || !show);
  };

  return (
    <div className="mt-6 lg:mt-8 divide-[#E8E8E8] divide-y">
      {faqs?.map((data) => (
        <button
          type="button"
          onClick={() => handleToggle(data)}
          key={data.id}
          className="block w-full text-left focus:outline-none ring-0 focus:ring-0 pt-4 pb-4 lg:pt-6 lg:pb-6"
        >
          <div className="flex flex-row justify-between items-center">
            <p className="w-11/12 text-textColor font-medium md:font-semibold text-sm-15 lg:text-base xl:text-lg">
              {data.question}
            </p>

            <div className="flex-1 flex justify-end px-3">
              {selectedFaq?.id === data.id && show ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
                    fill="#054CD6"
                  />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="#054CD6" />
                </svg>
              )}
            </div>
          </div>

          {/* FAQ Answer */}
          {selectedFaq?.id === data.id && show && (
            <div className="mt-6">
              <p className="text-sm-15 leading-6 lg:text-base lg:leading-7 xl:text-lg xl:leading-7 text-textColor">
                {data.answer}
              </p>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default FaqListing;