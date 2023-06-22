import React from 'react'
import SolutionCard from './solutionCard'
import { data } from '../data'

const SolutionRow = () => {
    return (
        <div className=''>
            {data?.map(datum =>
                <div key={datum?.title} className='relative mb-20 lg:mb-24'>
                    <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-default">
                        {datum?.title}
                    </h3>

                    <div className="mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 xl:gap-x-6 gap-y-6 items-start">
                        {
                            datum?.listData?.map(item => <div
                                key={item?.id}
                                className={`rounded-[9px] px-6 pt-6 pb-8`}
                                style={{background: datum?.backgroundColor}}
                            >
                                <h4 className={`text-xl lg:text-2xl font-bold text-center text-[${datum?.textColor}]`}>
                                    {item?.cardTitle}
                                </h4>
                                <div className='mt-6 space-y-4'>
                                    {item?.itemList?.map((i) => <SolutionCard
                                        key={i?.id}
                                        title={i?.title}
                                        description={i?.description}
                                    />)}
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            )}
        </div>

    )
}

export default SolutionRow