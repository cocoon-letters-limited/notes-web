"use client"

import React from 'react'
import style from "./style.module.css"

const TopSection = () => {
    const handleScrollToFeatures = () => {
        document.querySelector("#features")?.scrollIntoView({
            behavior: "smooth",
        });
    };
    const handleScrollToSolutions = () => {
        document.querySelector("#solutions")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section className={`relative w-full ${style.bg}`}>
            <div className='container px-4 md:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-48 md:pb-72 lg:pb-80'>
                <div className='w-full  md:w-8/12 lg:w-7/12 mx-auto'>
                    <h1 className='text-white text-center text-4xl md:text-[2.6rem] md:leading-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight font-extrabold'>
                        <span>Make your assets do much more in </span>
                        <span className='text-[#FFCC00]'>one place</span>
                    </h1>
                    <p className='mt-8 text-sm-15 leading-6 md:text-base md:leading-7 lg:text-lg lg:leading-8 text-white text-center'>
                        Ensure asset reliability and operational excellence with our cutting-edge predictive maintenance
                        and data-driven analytic models for the increased operational
                        efficiency and optimized performance of your high-value physical assets
                        and business workflows.
                    </p>
                    <div className="mt-10 flex flex-row justify-center">
                        <button
                            type="button"
                            onClick={handleScrollToFeatures}
                            className="bg-white text-sm md:text-sm-15 lg:text-base text-primary py-4 px-6 md:px-8 rounded-[9px] font-bold"
                        >
                            Explore Features
                        </button>
                        <button
                            type="button"
                            onClick={handleScrollToSolutions}
                            className="font-bold inline-flex items-center text-white text-sm md:text-sm-15 lg:text-base text-primary py-4 px-6 md:px-8"
                        >
                            <span className='mr-2 lg:mr-3'>View Solutions</span>
                            <svg className='h-3 w-3 lg:h-4 lg:w-4' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2284 7.0081L7.79189 1.68755L9.225 0.285006L17.1081 8L9.225 15.715L7.79189 14.3124L13.2284 8.9919H0.891891L0.891891 7.0081H13.2284Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopSection