/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => ({ min: -2000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => ({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
function Bio() {
    
    return (
        <div>
            <div className='bg-gray-100 p-10 flex rounded-lg'>
                <div className='w-3/4'>
                    <p className='font-semibold'>Owing depatment</p>
                    <p>Transactions</p>
                </div>

                <div className='w-3/4'>
                    <p className='font-semibold'>Owing depatment</p>
                    <p>Transactions</p>
                </div>

                <div className='w-3/4'>
                    <p className='font-semibold'>Owing depatment</p>
                    <p>Transactions</p>
                </div>
                <p>Icon</p>
            </div>

            <div className='bg-gray-100 w-full rounded-lg mt-5 h-80 p-5'>
                <Line options={options} data={data} />
            </div>

            <div className='w-full grid-cols-2 grid gap-5 mt-5'>
            <div className='bg-gray-100 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <p className='font-normal text-2xl'>Schedule</p>
                    </div>
           
 
                </div>
                <div className='bg-gray-100 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <p className='font-normal text-2xl'>Notes</p>
                        <button className='w-fit px-3 bg-blue-700 text-white rounded-lg'>New</button>
                    </div>
                    <div className='p-3 bg-white rounded-lg mt-4'>
                        <div className='border-l-8 border-fuchsia-600 pl-3'>
                            <div className='flex'>
                                <p className='font-medium text-1xl mr-5'>Use of Metal plates</p>
                                <span className="bg-fuchsia-600  text-white  text-xs font-medium  px-2.5 py-1 rounded-full dark:bg-blue-900 dark:text-white">Lesson note</span>
                            </div>
                            <small className='text-gray-400'>27th of August, 2021</small>
                            <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus euismod </p>
                        </div>
                    </div>
                    <div className='p-3 bg-white rounded-lg mt-4'>
                        <div className='border-l-8 border-fuchsia-600 pl-3'>
                            <div className='flex'>
                                <p className='font-medium text-1xl mr-5'>Use of Metal plates</p>
                                <span className="bg-fuchsia-600  text-white  text-xs font-medium  px-2.5 py-1 rounded-full dark:bg-blue-900 dark:text-white">Lesson note</span>
                            </div>
                            <small className='text-gray-400'>27th of August, 2021</small>
                            <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus euismod </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Bio