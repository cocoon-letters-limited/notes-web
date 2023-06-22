import Image from 'next/image'
import React from 'react'
import AvatarImage from "../../../../../../public/images/svg/avatar.svg"

const StarIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5245 3.46352C11.6741 3.00287 12.3259 3.00287 12.4755 3.46353L14.3574 9.25532C14.4243 9.46133 14.6163 9.60081 14.8329 9.60081H20.9228C21.4071 9.60081 21.6085 10.2206 21.2167 10.5053L16.2899 14.0848C16.1146 14.2122 16.0413 14.4379 16.1082 14.6439L17.9901 20.4357C18.1398 20.8963 17.6125 21.2794 17.2207 20.9947L12.2939 17.4152C12.1186 17.2878 11.8814 17.2878 11.7061 17.4152L6.77931 20.9947C6.38745 21.2794 5.86021 20.8963 6.00989 20.4357L7.89176 14.6439C7.9587 14.4379 7.88537 14.2122 7.71012 14.0848L2.78333 10.5053C2.39147 10.2206 2.59286 9.60081 3.07722 9.60081H9.16708C9.38369 9.60081 9.57567 9.46133 9.6426 9.25532L11.5245 3.46352Z" fill="#EF7420" />
</svg>


const TestimonyCard = ({
    name,
    role,
    text,
    image,
}: {
    name: string,
    role: string,
    text: string,
    image?: string,
}) => {
    return (
        <div className='bg-white rounded-2xl border border-[#EAEAEA] px-4 lg:px-6 pt-6 pb-8'>
            <div className='flex flex-row items-center'>
                <div className=''>
                    <Image src={AvatarImage} width={100} height={100} className='w-14 rounded-full' alt="" />
                </div>
                <div className='flex-1 pl-4'>
                    <p className='font-bold text-base md:text-lg text-default'>
                      {name}
                    </p>
                    <p className='mt-1 text-textColor text-sm md:text-sm-15'>{role}</p>
                </div>
            </div>
            <div className='mt-6'>
                <p className='text-textColor text-sm md:text-sm-15 lg:leading-7'>
                   {text}
                </p>
            </div>
            <div className='mt-6 flex flex-row'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
        </div>
    )
}

export default TestimonyCard