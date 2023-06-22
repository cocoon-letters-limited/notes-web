import Image from 'next/image'
import React from 'react'
import SolutionImage from "../../../../../public/images/webp/solution.webp"
import SolutionsList from './components/solutionsList'
import SolutionRow from './components/solutionRow'

const SolutionSection = () => {
    return (
        <section id="features" className={`relative w-full bg-white`}>
            <div className='container px-4 md:px-8 xl:px-4 mx-auto pt-24 md:pt-28'>
                <div className='w-full mx-auto text-center'>
                    <h2 className='w-10/12 md:w-full mx-auto text-primary text-3xl md:text-3xl lg:text-4xl font-extrabold'>
                        Our Solution For Your Business
                    </h2>
                    <p className='mt-4 text-base lg:text-lg text-textColor'>
                        Optimize Asset Management with Enhanced Visibility and Control
                    </p>
                </div>
                <div className='mt-16 lg:mt-24 flex flex-row flex-wrap'>
                    <div className=' md:w-6/12 lg:w-4/12'>
                        <Image src={SolutionImage} alt="Solution" />
                    </div>
                    <SolutionsList />
                </div>

                <div id="solutions" className='mt-20 lg:mt-24'>
                   <SolutionRow />
                </div>
            </div>
        </section>
    )
}

export default SolutionSection