/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import { Pagination } from '@mui/material'
import React from 'react'

function Integrity() {
    return (
        <div>
            <div className='flex justify-between'>
                <p>Live Feed from Sensors for various reading of equipment</p>
                <p>Maintenance</p>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                <div className='shadow rounded-lg mt-3 p-5'>
                    <button className='rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-fuchsia-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <span className='m-2 text-gray-400'>Running Hours</span>
                    <p className='text-fuchsia-600 text-3xl mt-2'>225 hrs</p>
                </div>
                <div className='shadow rounded-lg mt-3 p-5'>
                    <button className='rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-fuchsia-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <span className='m-2 text-gray-400'>Running Hours</span>
                    <p className='text-fuchsia-600 text-3xl mt-2'>225 hrs</p>
                </div>
                <div className='shadow rounded-lg mt-3 p-5'>
                    <button className='rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-fuchsia-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <span className='m-2 text-gray-400'>Running Hours</span>
                    <p className='text-fuchsia-600 text-3xl mt-2'>225 hrs</p>
                </div>
            </div>
            <p className='text-blue-700 my-3'>Create Procedure</p>
            <div className='grid grid-cols-2'>
            <div className=''>
                <div className='flex justify-between my-3'>
                    <p>PM Procedures</p>
                    <Pagination count={3} />
                </div>
                <div className='flex justify-between rounded-lg bg-blue-700 p-5 text-white'>
                 <p>PM Title</p>
                 <p>Pm Status</p>
                 <p>Due Data</p>
                 <p>Icon</p>
                </div>
                <div className='flex justify-between rounded-lg bg-white p-5  shadow my-3'>
                 <p>PM Title</p>
                 <p className='px-3 w-fit border border-2 border-red-400 bg-red-100 rounded-lg text-red-400'>Pm Status</p>
                 <p>Due Data</p>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Integrity