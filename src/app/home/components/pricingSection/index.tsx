"use client"
import React, { useState } from 'react'
import PriceCard from './components/priceCard'
import PremiumCard from './components/premiumCard'

const PricingSection = () => {
    const [selectData, setSetSelectData] = useState("monthly")

    const standardFeatureListData = [
        { feature: "5 collections" },
        { feature: "Worldwide accessbility" },
        { feature: "25 automation actions" },
        { feature: "Access all features" },
        { feature: "24 hours support" },
        { feature: "Sync accross devices", isDisabled: true },
        { feature: "Share with more 5 users", isDisabled: true },
    ]

    const extendedFeatureListData = [
        { feature: "5 collections" },
        { feature: "Worldwide accessbility" },
        { feature: "25 automation actions" },
        { feature: "Access all features" },
        { feature: "24 hours support" },
        { feature: "Sync accross devices", },
        { feature: "Share with more 5 users", },
    ]

    return (
        <section className={`relative w-full bg-white`}>
            <div className='container px-4 md:px-8 xl:px-4 mx-auto pt-20 md:pt-24 lg:pt-32 pb-28 lg:pb-32'>
                <h2 className="text-center text-primary text-2xl md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight font-extrabold">
                    Our Pricing
                </h2>

                <div className='mt-16 lg:mt-20'>
                    <div className='mx-auto flex justify-center items-center'>
                    <span className="mr-4 lg:mr-6 text-sm-15 lg:text-base font-semibold text-default">Monthly</span>
                        <label htmlFor='selectData' className="relative inline-flex items-center cursor-pointer">
                            <input id="selectData" type="checkbox" onChange={(e) => {
                                if(e.target.checked){
                                    setSetSelectData("yearly")
                                } else {
                                    setSetSelectData("monthly")
                                }
                            }} className="sr-only peer" />
                            <div className="w-16 h-8 bg-[#F2F2FF] peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-[#F2F2FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[8px] after:bg-primary after:border-primary after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                            <span className="ml-4 lg:ml-6 text-sm-15 lg:text-base font-semibold text-default">Yearly</span>
                        </label>
                    </div>

                    <div className='mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <PriceCard
                            title='Standard'
                            price={selectData === "monthly" ? "$5" : "$10"}
                            priceType={selectData === "monthly" ? "month" : "year"}
                            featureList={standardFeatureListData}
                        />
                        <PriceCard
                            isDark
                            title='Extended'
                            price={selectData === "monthly" ? "$12" : "$100"}
                            priceType={selectData === "monthly" ? "month" : "year"}
                            featureList={extendedFeatureListData}
                        />
                        <PremiumCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection