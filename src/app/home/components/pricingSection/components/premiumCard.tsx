import Link from 'next/link'
import React from 'react'

const PremiumCard = () => {
    return (
        <div
            className={`rounded-xl px-4 lg:px-6 pt-8 pb-12 bg-white`}
            style={{ boxShadow: "0px 10px 56px 0px rgba(0, 0, 0, 0.05);" }}
        >
            <h4 className={`text-center font-bold text-xl md:text-2xl text-primary`}>
                Premium+
            </h4>
            <p className={`mt-4 w-9/12 mx-auto text-center text-sm-15 md:text-base text-textColor`}>
                Contact sales for advanced enterprise feature allowing customization of features needed
            </p>

            <div className='mt-16 mb-20 text-4xl md:text-5xl md:leading-tight text-primary font-extrabold text-center w-10/12 mx-auto'>
            Specially crafted for you
            </div>

            <div className='mt-8'>
                <Link
                    href={`/try-now`}
                    className={`py-4 px-8 text-center block w-full rounded-lg font-bold text-sm-15 md:text-base focus:outline-none bg-primary text-white`}>
                    Contact Sales
                </Link>
            </div>
        </div>
    )
}

export default PremiumCard