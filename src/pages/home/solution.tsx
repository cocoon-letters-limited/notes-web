/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */

import rectangle1059 from 'assets/Rectangle1059.png';


const Solution = () => {
  // eslint-disable-next-line react/self-closing-comp
  return  <div>
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
  </div>
}

export default Solution