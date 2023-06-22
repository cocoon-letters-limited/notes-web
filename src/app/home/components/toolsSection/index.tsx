import Image, { StaticImageData } from 'next/image'
import React from 'react'
import SAPImage from "../../../../../public/images/svg/tools/sap.webp";
import StripeImage from "../../../../../public/images/svg/tools/stripe.webp";
import ESRIImage from "../../../../../public/images/svg/tools/esri.webp";
import SiemensImage from "../../../../../public/images/svg/tools/siemens.webp";
import IBMImage from "../../../../../public/images/svg/tools/ibm.webp";
import MastercardImage from "../../../../../public/images/svg/tools/mastercard.webp";
import VisaImage from "../../../../../public/images/svg/tools/visa.svg";
import YokogawaImage from "../../../../../public/images/svg/tools/yokogawa.webp";
import VideoSection from '../videoSection';

interface ToolsCardProps {
    src: string | StaticImageData;
}

const ToolsCard = ({ src }: ToolsCardProps) => {
    return <div className='mb-4 lg:mb-6 mr-3 lg:mr-4 bg-white px-4 lg:px-5 py-3 rounded-[10px] hover:scale-105 transition-all ease-out duration-200 flex items-center justify-center'>
        <Image src={src} alt="Tools" className='w-11/12 lg:w-11/12 xl:w-full mx-auto' />
    </div>
}

interface ToolsListItem {
    title: string;
}

const ToolsListItem = ({ title }: ToolsListItem) => {
    return <li className='flex items-center'>
        <span>
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.653381" width="40" height="40" rx="20" fill="#E6ECFF" />
                <path d="M18.82 22.9076L27.246 14.4807L28.5431 15.7769L18.82 25.5L12.9864 19.6663L14.2825 18.3701L18.82 22.9076Z" fill="#1052DA" />
            </svg>
        </span>
        <span className='pl-4 lg:pl-5'>{title}</span>
    </li>
}

const ToolsSection = () => {
    return (
        <section className={`relative w-full bg-[#F1F5FF]`}>
            <VideoSection />
            <div className='container px-4 md:px-8 xl:px-4 mx-auto relative -top-16 md:-top-32 lg:-top-28 pb-16 md:pb-16'>
                <div className='w-full md:w-10/12 lg:w-8/12 xl:w-6/12'>
                    <div className='grid grid-cols-3 md:flex md:flex-row md:flex-wrap'>
                        <ToolsCard src={SAPImage} />
                        <ToolsCard src={StripeImage} />
                        <ToolsCard src={VisaImage} />
                        <ToolsCard src={ESRIImage} />
                        <ToolsCard src={MastercardImage} />
                        <ToolsCard src={IBMImage} />
                        <ToolsCard src={SiemensImage} />
                        <ToolsCard src={YokogawaImage} />
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='flex flex-wrap flex-row justify-between'>
                        <div className='w-full md:w-6/12 lg:w-6/12'>
                            <p className='text-default text-base lg:text-lg font-semibold'>Tools for</p>
                            <h2 className='w-10/12 mt-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
                                Continuous Asset Integrity
                            </h2>
                            <p className='mt-6 text-default text-base lg:text-lg lg:leading-8'>
                                Unlock the power of reliable assets from our range of advance technologies
                                designed to ensure the wellbeing of all enterprise assets and prolong
                                their productive life-span.
                            </p>
                        </div>
                        <div className='mt-8 md:mt-0 w-full md:w-5/12 xl:w-4/12 self-end'>
                            <ul className='text-base lg:text-lg text-default font-medium space-y-4'>
                                <ToolsListItem title='Criticality Ranking' />
                                <ToolsListItem title='Advanced Analytics' />
                                <ToolsListItem title='Condition Monitoring' />
                                <ToolsListItem title='Health, Safety, Environment' />
                                <ToolsListItem title='Digital Process Authorization' />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default ToolsSection