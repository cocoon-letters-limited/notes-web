import Link from 'next/link'
import React from 'react'

type Props = {
    isDark?: boolean;
    title: string;
    subtitle?: string;
    price: string;
    priceType?: string;
    featureList: {
        feature: string;
        isDisabled?: boolean
    }[]
}

const PriceCard = ({
    isDark = false,
    title,
    subtitle,
    price,
    priceType,
    featureList
}: Props) => {
    return (
        <div
            className={`rounded-xl px-4 lg:px-6 pt-8 pb-12 ${isDark ? "bg-primary" : "bg-white"}`}
            style={{ boxShadow: "0px 10px 56px 0px rgba(0, 0, 0, 0.05);" }}
        >
            <h4 className={`text-center font-bold text-xl md:text-2xl ${isDark ? "text-white" : "text-primary"}`}>
                {title}
            </h4>
            <p className={`mt-4 w-9/12 mx-auto text-center text-sm-15 md:text-base ${isDark ? "text-white" : "text-textColor"}`}>
                {subtitle || "Select plan to gain access to a wide range of features on our platform"}
            </p>

            <div className='mt-12 mb-6 text-center'>
                <span className={`text-6xl font-extrabold ${isDark ? "text-white" : "text-primary"}`}>{price}</span>
                <span className={`text-xl ${isDark ? "text-white" : "text-textColor"}`}> /{priceType}</span>
            </div>

            <div className='mt-8'>
                <Link
                    href={`/checkout?plan=${title?.toLowerCase()}&paymentPlan=${priceType}`}
                    className={`py-4 px-8 text-center block w-full rounded-lg font-bold text-sm-15 md:text-base focus:outline-none ${isDark ? "bg-white text-primary" : "bg-primary text-white"}`}>
                    Select Plan
                </Link>
            </div>

            <div className='mt-8'>
                <ul className='space-y-5'>
                    {
                        featureList?.map((item, index) => <li
                            key={index}
                            className={`flex items-center space-x-2 text-sm-15 md:text-base font-semibold 
                            ${isDark ? "text-white" : item.isDisabled ? "text-[#C4C4C4] line-through" : "text-primary"}`}
                        >
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill={isDark ? "white" : item?.isDisabled ? "#C4C4C4" : "#054CD6"} />
                                    <path d="M6.25 10.625L9.25 12.5L13.75 7.5" stroke={isDark ? "#054CD6" : "white"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span>{item?.feature}</span>
                        </li>)
                    }

                </ul>
            </div>
        </div>
    )
}

export default PriceCard