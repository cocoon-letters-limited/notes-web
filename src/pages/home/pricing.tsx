/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react'

function Pricing() {
    return (
        <div>
            <div className='text-center p-20 '>
                <p className="text-4xl font-bold text-blue-700">Our pricing</p>
               
                <label className="relative inline-flex items-center m-4 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    <span className="ml-3 text-sm font-medium ">Yes/No</span>
                </label>
            </div>

            <div className='md:grid grid-cols-3 container mx-auto gap-10 mb-20'>
                <div className="rounded-lg py-2 px-4 shadow-lg bg-white" >
                    <div className="px-6 py-6">
                        <div className='ml-5 mt-3 text-center'>
                            <p className='text-2xl font-semibold text-blue-700'>Standart</p>

                            <p className='text-slate-400 m-5'>The national average cost of buying coin easy.</p>

                            <p className='text-5xl font-semibold text-blue-700 m-5'>$5 <span className='text-slate-400 text-xs'>/month</span></p>

                            <button className="bg-blue-700  text-white w-64 py-3 pr-8 pl-8 px-4 rounded">Select Plan</button>
                        </div>

                        <div className='flex mt-5'>
                            <button className=" rounded-full h-8 w-8 bg-blue-700 text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                            </button>
                            <p className='m-1 ml-5'>Secure and encrypted integration</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg py-2 px-4 shadow-lg bg-blue-700 text-white" >
                    <div className="px-6 py-6">
                        <div className='ml-5 mt-3 text-center'>
                            <p className='text-2xl font-semibold text-white-700'>Standart</p>

                            <p className='text-slate-400 m-5'>The national average cost of buying coin easy.</p>

                            <p className='text-5xl font-semibold text-white m-5'>$5 <span className='text-slate-400 text-xs'>/month</span></p>

                            <button className="bg-white  text-blue-700 w-64 py-3 pr-8 pl-8 px-4 rounded">Select Plan</button>
                        </div>

                        <div className='flex mt-5'>
                            <button className=" rounded-full h-8 w-8 text-blue-700 bg-white flex items-center justify-center">
                                {/* <svg className="fill-current w-3 h-3  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                            </button>
                            <p className='m-1 ml-5'>Secure and encrypted integration</p>
                        </div>


                    </div>
                </div>

                <div className="rounded-lg py-2 px-4 shadow-lg bg-white" >
                    <div className="px-6 py-6">
                        <div className='ml-5 mt-3 text-center'>
                            <p className='text-2xl font-semibold text-blue-700'>Standart</p>

                            <p className='text-slate-400 m-5'>The national average cost of buying coin easy.</p>

                            <p className='text-5xl font-semibold text-blue-700 m-5'>$5 <span className='text-slate-400 text-xs'>/month</span></p>

                            <button className="bg-blue-700  text-white w-64 py-3 pr-8 pl-8 px-4 rounded">Select Plan</button>
                        </div>

                        <div className='flex mt-5'>
                            <button className=" rounded-full h-8 w-8 bg-blue-700 text-white flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                            </button>
                            <p className='m-1 ml-5'>Secure and encrypted integration</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricing