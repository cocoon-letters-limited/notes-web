import React, { ReactElement } from "react";
import style from "./style.module.css";

type ContactInfoProps = {
  icon: ReactElement;
  text: string | ReactElement;
};

const ContactInfo = ({ icon, text }: ContactInfoProps) => {
  return (
    <p className="flex items-start">
      <span className="w-6 pt-2">{icon}</span>
      <span className="flex-1 pl-2">{text}</span>
    </p>
  );
};

const TopSection = () => {
  return (
    <section className="relative bg-[#3B69E6]">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-32 lg:pb-40 relative">
        <div className="flex flex-row flex-wrap justify-between">
          <div className="w-full md:w-6/12 lg:w-5/12 pr-0 md:pr-4 lg:pr-0">
            <div className="flex flex-row items-start">
              <div className="w-3 md:w-4 h-4 md:h-5 bg-[#FFC700]" />
              <div className="pl-2 md:pl-4 -mt-1 md:-mt-3 flex-1">
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                  Reach out to us
                </h1>
              </div>
            </div>

            <div className="mt-6 lg:mt-8 text-sm-15 leading-7 lg:text-base lg:leading-7 xl:text-lg xl:leading-7 text-white space-y-4 md:pl-9">
              <ContactInfo
                text="hello@noteopx.com"
                icon={
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 21 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 1.875C20.5 0.84375 19.6 0 18.5 0H2.5C1.4 0 0.5 0.84375 0.5 1.875V13.125C0.5 14.1562 1.4 15 2.5 15H18.5C19.6 15 20.5 14.1562 20.5 13.125V1.875ZM18.5 1.875L10.5 6.5625L2.5 1.875H18.5ZM18.5 13.125H2.5V3.75L10.5 8.4375L18.5 3.75V13.125Z"
                      fill="white"
                    />
                  </svg>
                }
              />
              <ContactInfo
                text="+234 90 4480 8294, +234 70 6454 2162"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.575 2.29167C3.625 3.03333 3.75 3.75833 3.95 4.45L2.95 5.45C2.60833 4.45 2.39167 3.39167 2.31667 2.29167H3.575ZM11.7917 12.3083C12.5 12.5083 13.225 12.6333 13.9583 12.6833V13.925C12.8583 13.85 11.8 13.6333 10.7917 13.3L11.7917 12.3083ZM4.375 0.625H1.45833C1 0.625 0.625 1 0.625 1.45833C0.625 9.28333 6.96667 15.625 14.7917 15.625C15.25 15.625 15.625 15.25 15.625 14.7917V11.8833C15.625 11.425 15.25 11.05 14.7917 11.05C13.7583 11.05 12.75 10.8833 11.8167 10.575C11.7333 10.5417 11.6417 10.5333 11.5583 10.5333C11.3417 10.5333 11.1333 10.6167 10.9667 10.775L9.13333 12.6083C6.775 11.4 4.84167 9.475 3.64167 7.11667L5.475 5.28333C5.70833 5.05 5.775 4.725 5.68333 4.43333C5.375 3.5 5.20833 2.5 5.20833 1.45833C5.20833 1 4.83333 0.625 4.375 0.625Z"
                      fill="white"
                    />
                  </svg>
                }
              />
              <ContactInfo
                text="0700-NOTEOPX"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.575 2.29167C3.625 3.03333 3.75 3.75833 3.95 4.45L2.95 5.45C2.60833 4.45 2.39167 3.39167 2.31667 2.29167H3.575ZM11.7917 12.3083C12.5 12.5083 13.225 12.6333 13.9583 12.6833V13.925C12.8583 13.85 11.8 13.6333 10.7917 13.3L11.7917 12.3083ZM4.375 0.625H1.45833C1 0.625 0.625 1 0.625 1.45833C0.625 9.28333 6.96667 15.625 14.7917 15.625C15.25 15.625 15.625 15.25 15.625 14.7917V11.8833C15.625 11.425 15.25 11.05 14.7917 11.05C13.7583 11.05 12.75 10.8833 11.8167 10.575C11.7333 10.5417 11.6417 10.5333 11.5583 10.5333C11.3417 10.5333 11.1333 10.6167 10.9667 10.775L9.13333 12.6083C6.775 11.4 4.84167 9.475 3.64167 7.11667L5.475 5.28333C5.70833 5.05 5.775 4.725 5.68333 4.43333C5.375 3.5 5.20833 2.5 5.20833 1.45833C5.20833 1 4.83333 0.625 4.375 0.625Z"
                      fill="white"
                    />
                  </svg>
                }
              />

              <ContactInfo
                text={
                  <>Call lines are open 08:00 to 17:00 WAT, Mondays – Fridays</>
                }
                icon={
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8273 0.208008H3.25591C1.47734 0.208008 0.041626 1.42619 0.041626 2.93528V17.4807C0.041626 18.9898 1.47734 20.208 3.25591 20.208H11.8273C13.6059 20.208 15.0416 18.9898 15.0416 17.4807V2.93528C15.0416 1.42619 13.6059 0.208008 11.8273 0.208008ZM12.8988 15.6626H2.18448V2.93528H12.8988V15.6626ZM9.68448 18.3898H5.39877V17.4807H9.68448V18.3898Z"
                      fill="white"
                    />
                  </svg>
                }
              />

              <ContactInfo
                text={
                  <>
                    3/4TH Floor, Polystar Building 3, <br />
                    Remi Olowude Street, Lekki, Lagos State, Nigeria
                  </>
                }
                icon={
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.54163 0.416992C3.3952 0.416992 0.041626 3.54699 0.041626 7.41699C0.041626 12.667 7.54163 20.417 7.54163 20.417C7.54163 20.417 15.0416 12.667 15.0416 7.41699C15.0416 3.54699 11.6881 0.416992 7.54163 0.416992ZM2.18448 7.41699C2.18448 4.65699 4.58448 2.41699 7.54163 2.41699C10.4988 2.41699 12.8988 4.65699 12.8988 7.41699C12.8988 10.297 9.81305 14.607 7.54163 17.297C5.31305 14.627 2.18448 10.267 2.18448 7.41699Z"
                      fill="white"
                    />
                    <path
                      d="M7.54161 9.91699C9.02094 9.91699 10.2202 8.7977 10.2202 7.41699C10.2202 6.03628 9.02094 4.91699 7.54161 4.91699C6.06227 4.91699 4.86304 6.03628 4.86304 7.41699C4.86304 8.7977 6.06227 9.91699 7.54161 9.91699Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div className="mt-8 md:mt-0 w-full md:w-6/12">
            <form className="w-full">
              <textarea
                className={`w-full py-4 px-4 lg:py-6 lg:px-6 rounded-md placeholder:text-white text-white text-base lg:text-lg font-medium focus:outline-none ring-0 focus:ring-0 resize-none ${style.input}`}
                placeholder="Write message"
                rows={10}
              />

              <div className="flex flex-row flex-wrap">
                <div className="w-full md:w-8/12 mt-4 lg:mt-6">
                  <input
                    type="email"
                    placeholder="Email address"
                    className={`w-full py-4 px-4 lg:py-6 lg:px-6 rounded-md placeholder:text-white text-white text-base lg:text-lg font-medium focus:outline-none ring-0 focus:ring-0 ${style.input}`}
                  />
                </div>
                <div className="w-full md:w-4/12 mt-4 lg:mt-6 md:pl-4 lg:pl-6">
                  <button
                    type="button"
                    className="w-full py-4 px-4 lg:py-6 lg:px-6 bg-[#0E388B] rounded-md text-white text-base lg:text-lg font-medium focus:outline-none ring-0 focus:ring-0"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
