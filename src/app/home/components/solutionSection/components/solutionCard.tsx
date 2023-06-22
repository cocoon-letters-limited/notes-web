"use client"
import React, { useState } from 'react'

const SolutionCard = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            <div className="flex justify-between">
                <p className='text-sm-15 lg:text-base text-default'>{title}</p>
                <svg className="w-6 h-6" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
            </div>
            <div>
                {open && <p className="pt-2 pb-2 text-left text-textColor text-sm lg:text-sm-15 leading-6 lg:leading-6">
                    {description}
                </p>}
            </div>
        </div>
    )
}

export default SolutionCard