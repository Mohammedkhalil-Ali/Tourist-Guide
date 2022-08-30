import React, { Fragment } from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
    <Fragment>
        <Header />
        
        <div className="datakan m-auto md:flex md:items-center md:justify-between h-[85vh] z-20">
          <div className="wena image mt-4 ml-4 relative
           flex justify-start items-center  border-2 rounded-full border-dashed w-[25%] h-[63%]">
            
            <div className="square w-6 h-6 rounded-sm hover:rotate-45 hover:scale-125 hover:bg-gray-400 duration-700 absolute top-[26%] transition-all -rotate-[20deg] bg-gray-300"></div>
            <div className="circle w-6 h-6 rounded-full  hover:scale-125 hover:bg-gray-400 duration-700 absolute -right-[1%] top-[30%] transition-all bg-gray-300"></div>
            <div className=" hidden w-10/12 md:grid md:grid-cols-2  md:gap-10 transition-all ">
        {/* <img src={require("../assets/image/e.jpg")} className='w-20 h-20 md:w-32 md:h-32 mt-2 rounded-full -rotate-[120deg]' alt="" srcset="" />
        <img src={require("../assets/image/f.jpg")} className='w-20 h-20 md:w-32 md:h-32 ml-20 md:ml-40 mt-2 rounded-full rotate-[140deg]' alt="" srcset="" />
        <img src={require("../assets/image/g.jpg")} className='w-20 h-20 md:w-32 md:h-32 ml-20 md:ml-32 rounded-full rotate-180' alt="" srcset="" />
        <img src={require("../assets/image/h.jpg")} className='w-20 h-20 md:w-32 md:h-32 rounded-full rotate-180' alt="" srcset="" /> */}
</div>
<div className="image mt-4 ml-4 absolute transition-all duration-[80s]
           border-2 rounded-full border-dashed w-[50%] h-[50%] top-[20%] right-[25%]">
            <div className="triangle hover:rotate-45 hover:scale-125 hover:border-b-gray-400 duration-700 absolute top-[90%] right-[40%] -rotate-90"></div>
</div>

        
          </div>
          <div className="nusin mt-4 md:mt-0 text-center md:text-left md:text-xl lg:text-3xl text-black md:mr-24  z-20">
            <p>Wellcome to <span class="text-green-600 text-3xl">Tourist Guide</span></p>
            <p>In our Website you maght now about alot of hotel <br /> motel,place and malls, click here to know <br />
            abut all our service and offers</p>
            <p className='bg-green-600 m-auto md:m-0 md:mt-5 text-white text-xl w-48 mt-4 p-2 rounded-md text-center cursor-pointer'>More Service</p>
          </div>
        </div>
         </Fragment>
  )
}
