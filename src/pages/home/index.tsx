/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

// import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import production1 from 'assets/Production1.png'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import production2 from 'assets/Production2.png'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import rectangle1059 from 'assets/Rectangle1059.png';

const Home = () => {
  // eslint-disable-next-line react/self-closing-comp
  return <div className=''>
    <div className='w-full' style={{ background: '#F1F5FF' }} >
      <div className=''>
        <div className="bg-blue-700 pb-48 pt-20 h-auto w-full  text-center flex justify-center ">
          <div className=''>
            <p className='font-bold text-6xl text-white mt-10'> Make your assets do <br /> much more in <span className='text-yellow-400'>  one place </span></p>
            <p className='text-gray-300 mt-10 mb-10 '>The ability to build systems that resist, absorb, recover from, or adapt to an adverse <br /> occurrence during operation that may cause harm, destruction, or loss of the ability to <br />  perform mission-related functions.</p>
            <div className=''>
              <button className="bg-white mr-3 text-blue-700  font-bold py-3 pr-8 pl-8 px-4 rounded">  Sales Enquiry</button>
              <button className="  font-bold py-2 px-4 rounded inline-flex items-center text-white">
                <span>View Solutions</span>


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="fill-current w-4 h-4 ml-3 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </button>
            </div>
          </div>
        </div>
        <div className='md:flex md:justify-center '>
          <img className="bg-yellow-50 md:w-50 -mt-20 rounded" src={production1} alt="product" sizes="" />
        </div>


        <div className='md:container md:mx-auto '>
          <div className='m-10 p-20'>

            <button className="bg-white font-bold py-3  px-6  rounded">  Button</button>


            <div className="md:grid md:grid-cols-2 gap-4 mt-10">
              <div>
                <h1 className='font-medium text-2xl'>Tools</h1>
                <p className='text-6xl  mt-3 mb-3 font-semibold md:w-10'>Seamless integration</p>
                <p className='md:w-4/5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit..</p>
              </div>
              <div className=''>
                <div className='flex md:mt-20'>
                  <button className=" rounded-full h-fill w-fill p-4 text-blue-700 flex items-center justify-center" style={{ background: '#E5ECFF' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </button>
                  <p className='m-3 text-2xl ml-5'>Secure and encrypted integration</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div className='text-center p-10'>
      <p className="text-4xl font-bold text-blue-600">Our Solution for your business</p>
      <p className="text-gray-400 m-5">We make it easy for users to use our platform, that's why we provide this benefit.</p>
    </div>

    <div className='md:container md:mx-auto mt-20'>

      <div>
        <div className="md:grid md:grid-cols-3  ">
          <div>
            <img className="bg-yellow-50 w-50  rounded" src={rectangle1059} alt="product" sizes="" />
          </div>

          <div className='md:grid  '>
            <div className=" md:border-r-2  mb-5">
              <h5 className='text-6xl font-extrabold text-gray-200 '>01</h5>
              <p className='text-2xl pt-5 pb-5'>CMMS - Computerized Maintenance Management System </p>
              <p className='text-gray-700'>Our Savings account is design to provides principal security and a modest interest...</p>
            </div>
            <div className=" border-r-2 mt-10 mb-5">
              <h5 className='text-6xl font-extrabold text-gray-200 '>01</h5>
              <p className='text-2xl pt-5 pb-5'>ISSOW- Integrated Safe System of Work</p>
              <p className='text-gray-700'>Our Savings account is design to provides principal security and a modest interest...</p>
            </div>
          </div>

          <div className='md:grid  '>
            <div className="ml-10 mb-5">
              <h5 className='text-6xl font-extrabold text-gray-200 '>01</h5>
              <p className='text-2xl pt-5 pb-5'>CMMS - Computerized Maintenance Management System </p>
              <p className='text-gray-700'>Our Savings account is design to provides principal security and a modest interest...</p>
            </div>
            <div className="m-10 mb-5">
              <h5 className='text-6xl font-extrabold text-gray-200 '>01</h5>
              <p className='text-2xl pt-5 pb-5'>CMMS - Computerized Maintenance Management System </p>
              <p className='text-gray-700'>Our Savings account is design to provides principal security and a modest interest...</p>
            </div>
          </div>
        </div>

        <div className='text-center p-20 '>
          <p className="text-4xl font-bold ">CMMS - ComputerizedMaintenance <br /> Management System </p>
        </div>

        <div className='md:grid grid-cols-4 gap-6'>
          <div className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg bg-orange-50" >
            <div className="px-6 py-6">
              <div className=" text-3xl mb-2 text-orange-300">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Dashboard Process Map Plant Hierachy
              </p>
            </div>
          </div>
        </div>


        <div className='text-center p-20 '>
          <p className="text-4xl font-bold ">ISSOW- Integrated Safe System of Work</p>
        </div>

        <div className='md:grid grid-cols-4 gap-6'>
          <div className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg bg-green-50" >
            <div className="px-6 py-6">
              <div className=" text-3xl mb-2 text-green-800">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Dashboard Process Map Plant Hierachy
              </p>
            </div>
          </div>
        </div>

        <div className='text-center p-20 '>
          <p className="text-4xl font-bold ">Development Center</p>
        </div>

        <div className='md:grid md:grid-cols-4 md:gap-6'>
          <div className="max-w-sm text-center rounded overflow-hidden p-7 shadow-lg" style={{background:'#FDF4FA'}} >
            <div className="px-6 py-6">
              <div className=" text-3xl mb-2 text-green-200" style={{color: '#C773AF'}}>The Coldest Sunset</div>
              <p className="text-gray-700 text-base">Dashboard Process Map Plant Hierachy
              </p>
            </div>
          </div>
        </div>


      </div>


    </div>

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
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 text-yellow-500 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>

              </span>
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

    <div className='text-center p-20 '>
      <p className="text-4xl font-bold text-blue-700">Our pricing</p>
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
              <svg className="fill-current w-3 h-3  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
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
              <svg className="fill-current w-3 h-3  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
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
              <svg className="fill-current w-3 h-3  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            </button>
            <p className='m-1 ml-5'>Secure and encrypted integration</p>
          </div>
        </div>
      </div>
    </div>

  </div>;
};

export default Home;
