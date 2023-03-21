/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react'
import production2 from 'assets/Production2.png'

function Collaboration() {
  return (
    <div>
           <div className='mt-48'>
        <div className='md:flex '>
          <div className="md:w-1/1 md:pl-32 m-10 mb:p-0 md:container md:mx-auto" >
            <p className='text-6xl text-blue-700  font-bold'>Easy collaborative <br /> Assets team</p>
            <p className='mt-7 mb-7'>More than 10.000 people have tried</p>
            <button className="bg-blue-700 hover:bg-blue-200 mr-3 text-white  font-bold py-3 pr-8 pl-8 px-4 rounded">  Try for free</button>
            <div className='md:grid-cols-2 md:grid'>

              <div className='mt-20 md:m-10'>
                <button className=" rounded-full p-5  flex text-blue-700 items-center justify-center" style={{ background: ' #EAEFF8' }}>
                  <svg className="fill-current w-8 h-8  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                </button>
                <p className='text-3xl mt-5 mb-5'>
                  Instant <br />transactions
                </p>
                <p className='text-2xl text-gray-400'>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>
              </div>
              <div className='mt-20 md:m-10'>
                <button className=" rounded-full p-5  flex text-blue-700 items-center justify-center" style={{ background: ' #EAEFF8' }}>
                  <svg className="fill-current w-8 h-8  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                </button>
                <p className='text-3xl mt-5 mb-5'>
                  Instant <br />transactions
                </p>
                <p className='text-2xl text-gray-400'>Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.</p>
              </div>
            </div>

          </div>

          <img className=" md:w-1/3    rounded" src={production2} alt="product" sizes="" />

        </div>
      </div>
    </div>
  )
}

export default Collaboration