/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from "react";
import production2 from "assets/Production2.png";

function NotesSection() {

  return (
    // eslint-disable-next-line react/self-closing-comp
    <div>
      <div className='md:pt-20 md:mt-20 md:pb-20 h-fix pb-10' style={{ background: ' #F1F5FF' }}>

        <div className=" mb:p-0 md:container md:mx-auto" >
          <div className='flex justify-between'>
            <p className='md:text-5xl font-bold text-blue-600 md:p-0 p-10  text-2xl'>
              NOTE is loved by users
            </p>
            <div className='flex md:mt-0 mt-10 mr-5 md:mr-0'>
              <button className=" 
               rounded-full md:p-5 w-fit h-fit border-2 border-gray-400  
               flex text-gray-400 mr-5 
               items-center justify-center" style={{ background: ' #EAEFF8' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current w-8 h-8  ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>

              </button>
              <button className=" 
               rounded-full w-fit h-fit md:p-5 border-2
               border-blue-700  flex text-blue-700 
               items-center justify-center" style={{ background: ' #EAEFF8' }}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current w-8 h-8  " >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

          </div>
          <div className='md:grid grid-cols-3 gap-10 mt-10 '>
            <div className="rounded-lg py-2 px-4 md:m-0 m-10 shadow-lg bg-white" >
              <div className="px-6 py-6">
                <div className="flex ">
                  <img className="rounded-full h-20 w-20" src={production2} alt="product" sizes="" />
                  <div className='ml-5 mt-3'>
                    <p className='text-2xl font-semibold'>Tokunbo Odebunmi</p>
                    <p className='text-slate-400'>(Health & Safety Manager)</p>
                  </div>
                </div>
                <p className="text-gray-400 mt-5 mb-5 text-xl">
                  Since implementing the NoteOpX Safety Management System, our organization has seen a
                  drastic reduction in accidents and incidents. The user-friendly interface and customizable
                  features have allowed us to tailor the program to our specific needs. Highly recommend!”
                </p>

              </div>
            </div>
            <div className="rounded-lg py-2 px-4  md:m-0 m-10  shadow-lg bg-white" >
              <div className="px-6 py-6">
                <div className="flex ">
                  <img className="rounded-full h-20 w-20" src={production2} alt="product" sizes="" />
                  <div className='ml-5 mt-3'>
                    <p className='text-2xl font-semibold'>Alex Zoric</p>
                    <p className='text-slate-400'>(Offshore Asset Manager)</p>
                  </div>
                </div>
                <p className="text-gray-400 mt-5 mb-5 text-xl">
                  "Thanks to this software, we now have full control over our maintenance processes.
                  Approvals that used to take days now take minutes with its streamlined digital authorization
                  tool. NoteOpX has reduced our downtime and saved us costs, making it an essential tool for
                  our business."
                </p>
              </div>
            </div>
            <div className="rounded-lg py-2  px-4  md:m-0 m-10  shadow-lg bg-white" >
              <div className="px-6 py-6">
                <div className="flex ">
                  <img className="rounded-full h-20 w-20" src={production2} alt="product" sizes="" />
                  <div className='ml-5 mt-3'>
                    <p className='text-2xl font-semibold'>Sheik Sameer Mohammed</p>
                    <p className='text-slate-400'>(Condition Monitoring Specialist)</p>
                  </div>
                </div>
                <p className="text-gray-400 mt-5 mb-5 text-xl">
                  Ever since we implemented NoteOpX, we've seen a significant reduction in unexpected
                  equipment downtime. The ability to identify and address potential failures before they occur
                  has been a game-changer for our operations."         </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Notes.propTypes = {}

export default NotesSection;
