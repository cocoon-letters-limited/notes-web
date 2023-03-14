/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

// import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import production1 from 'assets/Production1.png'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import  rectangle1059 from 'assets/Rectangle1059.png';

const Home = () => {
  // eslint-disable-next-line react/self-closing-comp
  return <div>
    <div className='bg-blue-100  ' >
      <div className=''>
        <div className="bg-blue-700 pb-48 pt-20 h-auto  text-center flex justify-center ">
          <div className='w-2/4'>
            <p className='font-bold text-6xl text-white mt-10'> Make your assets do much more in one place </p>
            <p className='text-gray-300 mt-10 mb-10 '>The ability to build systems that resist, absorb, recover from, or adapt to an adverse occurrence during operation that may cause harm, destruction, or loss of the ability to perform mission-related functions.</p>
            <div className=''>
              <button className="bg-white hover:bg-blue-700 mr-3 text-blue-700  font-bold py-3 pr-8 pl-8 px-4 rounded">  Sales Enquiry</button>
              <button className="  font-bold py-2 px-4 rounded inline-flex items-center text-white">
                <span>View Solutions</span>
                <svg className="fill-current w-4 h-4 ml-3 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-center '>
          <img className="bg-yellow-50 w-50 -mt-20 rounded" src={production1} alt="product" sizes="" />
        </div>


        <div className='container mx-auto '>
          <div className='m-10 p-10'>

            <button className="bg-white font-bold py-3  px-6  rounded">  Button</button>


            <div className="grid grid-cols-2 gap-4 mt-10">
              <div>
                <h1 className='font-medium '>Tools</h1>
                <h2 className='text-6xl  mt-3 mb-3 font-bold w-10'>Seamless integration</h2>
                <p className='w-4/5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit..</p>
              </div>
              <div className='grid grid-cols-4 '>
                <ul className="items-center justify-center ">
                  <li className="text-gray-900 font-bold">
                     
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <p>About US</p>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <p>Contact US</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div className='text-center p-10'>
      <p className="text-4xl font-bold text-blue-600">Our Solution for your business</p>
      <p className="text-gray-400">We make it easy for users to use our platform, that's why we provide this benefit.</p>
    </div>

    <div className='container mx-auto mt-20'>
      
        <div className="grid grid-cols-3  ">
          <div>
            <img className="bg-yellow-50 w-50  rounded" src={rectangle1059} alt="product" sizes="" />
          </div>
     
          <div className='grid  '>
            <div className=" border-r-2  pb-5">
              <h5 className='text-6xl font-extrabold text-gray-200 '>01</h5>
              <p className='text-4xl '>CMMS - Computerized Maintenance Management System </p>
              <p className='text-gray-700'>Our Savings account is design to provides principal security and a modest interest...</p>
            </div>
            <div className=" border-r-2 pt-10 pb-5">
              <h5 className='text-6xl font-extrabold text-gray-200 '>01</h5>
              <p className='text-4xl '>CMMS - Computerized Maintenance Management System </p>
              <p className='text-gray-700'>Our Savings account is design to provides principal security and a modest interest...</p>
            </div>
          </div>

          <div className='grid  '>
            <div className="pl-10 pb-5">
              <h5 className='text-6xl font-extrabold text-gray-200 '>01</h5>
              <p className='text-4xl '>CMMS - Computerized Maintenance Management System </p>
              <p className='text-gray-700'>Our Savings account is design to provides principal security and a modest interest...</p>
            </div>
            <div className="p-10 pb-5">
              <h5 className='text-6xl font-extrabold text-gray-200 '>01</h5>
              <p className='text-4xl '>CMMS - Computerized Maintenance Management System </p>
              <p className='text-gray-700'>Our Savings account is design to provides principal security and a modest interest...</p>
            </div>
          </div>
        </div>
    
    </div>
  </div>;
};

export default Home;
