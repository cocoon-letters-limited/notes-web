import React from 'react'

interface SolutionCardProps {
    tag: string;
    tagColor?: string;
    title: string;
    description: string;
}

const SolutionCard = ({
    tag,
    tagColor,
    title,
    description
}: SolutionCardProps) => {
    return <div className='md:pl-6 lg:pl-8'>
        <div className={`text-5xl font-extrabold ${tagColor || "text-[#F0E915]"}`}>{tag}</div>
        <div className='mt-6'>
            <h3 className='w-10/12 text-lg md:text-xl lg:text-2xl lg:leading-9 font-bold text-default'>
                {title}
            </h3>
            <p className='mt-4 text-base leading-7 lg:text-lg lg:leading-8 text-textColor'>
                {description}
            </p>
        </div>
    </div>
}

const SolutionsList = () => {
  return (
    <div className='mt-12 lg:mt-0 w-full lg:flex-1 lg:pl-4'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 md:divide-x'>
        <SolutionCard
            tag='01'
            title='Maintenance Management System'
            description='Streamline maintenance processes and extend the productive lifespan of your assets.'
        />
        <SolutionCard
            tag='02'
            tagColor="text-[#60C5BF]"
            title='Competence Development Centre'
            description='Accelerate growth with personalized learning and skills development programs.'
        />
    </div>

    <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 md:divide-x'>
        <SolutionCard
            tag='03'
            tagColor="text-[#C773AF]"
            title='Safety Management System'
            description='Manage permits and enhance safety processes across your entire organization.'
        />
        <SolutionCard
            tag='04'
            tagColor="text-[#054CD6]"
            title='B-2-B Supply Chain Network'
            description='Optimize procurement and fulfillment with efficient vendor, OEM, and service provider connections.'
        />
    </div>
</div>
  )
}

export default SolutionsList