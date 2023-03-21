/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react'
import production2 from 'assets/Production2.png'

function NotesSection() {
  return (
    // eslint-disable-next-line react/self-closing-comp
    <div>
           <div className='pt-20 mt-20 pb-20' style={{ background: ' #F1F5FF' }}>

<div className=" mb:p-0 md:container md:mx-auto" >
  <div className='flex justify-between'>
    <p className='text-5xl font-bold text-blue-600'>
      NOTE is loved by users
    </p>
    <div className='flex'>
    <button className=" rounded-full p-5 border-2 border-gray-400   flex text-gray-400 mr-5 items-center justify-center" style={{ background: ' #EAEFF8' }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current w-8 h-8  ">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>

    </button>
    <button className=" rounded-full p-5 border-2 border-blue-700  flex text-blue-700 items-center justify-center" style={{ background: ' #EAEFF8' }}>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current w-8 h-8  " >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
    </button>
    </div>

  </div>
  <div className='md:grid grid-cols-3 gap-10 mt-10 '>
    <div className="rounded-lg py-2 px-4 shadow-lg bg-white" >
      <div className="px-6 py-6">
        <div className="flex ">
          <img className="rounded-full h-20 w-20" src={production2} alt="product" sizes="" />
          <div className='ml-5 mt-3'>
            <p className='text-2xl font-semibold'>Briana Patton</p>
            <p className='text-slate-400'>Manager</p>
          </div>
        </div>
        <p className="text-gray-400 mt-5 mb-5 text-xl">Sed mattis est eget penatibus mauris, sed condimentum vitae viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget nisl pellentesque non, porttitor. Vitae et vestibulum ac id. Dui aliquet porttitor libero consequat volutpat eget sed turpis. Feugiat maecenas commodo et morbi morbi gravida.  </p>
        <div className="flex items-center mt-2.5 mb-5">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span> */}
        </div>
      </div>
    </div>
    <div className="rounded-lg py-2 px-4 shadow-lg bg-white" >
      <div className="px-6 py-6">
        <div className="flex ">
          <img className="rounded-full h-20 w-20" src={production2} alt="product" sizes="" />
          <div className='ml-5 mt-3'>
            <p className='text-2xl font-semibold'>Briana Patton</p>
            <p className='text-slate-400'>Manager</p>
          </div>
        </div>
        <p className="text-gray-400 mt-5 mb-5 text-xl">Sed mattis est eget penatibus mauris, sed condimentum vitae viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget nisl pellentesque non, porttitor. Vitae et vestibulum ac id. Dui aliquet porttitor libero consequat volutpat eget sed turpis. Feugiat maecenas commodo et morbi morbi gravida.
        </p>
      </div>
    </div>
    <div className="rounded-lg py-2 px-4 shadow-lg bg-white" >
      <div className="px-6 py-6">
        <div className="flex ">
          <img className="rounded-full h-20 w-20" src={production2} alt="product" sizes="" />
          <div className='ml-5 mt-3'>
            <p className='text-2xl font-semibold'>Briana Patton</p>
            <p className='text-slate-400'>Manager</p>
          </div>
        </div>
        <p className="text-gray-400 mt-5 mb-5 text-xl">Sed mattis est eget penatibus mauris, sed condimentum vitae viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget nisl pellentesque non, porttitor. Vitae et vestibulum ac id. Dui aliquet porttitor libero consequat volutpat eget sed turpis. Feugiat maecenas commodo et morbi morbi gravida.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

// Notes.propTypes = {}

export default NotesSection
