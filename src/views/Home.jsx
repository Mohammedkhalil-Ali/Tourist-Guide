import React, { Fragment } from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
    <Fragment>
        <Header />
        <div className="wena fixed w-[45%] -right-52 grid grid-cols-2 gap-10 transition-all top-80">
        <img src={require("../assets/image/a.png")} className='w-32 h-32 ml-32 rounded-full' alt="" srcset="" />
        <img src={require("../assets/image/b.png")} className='w-32 h-32 rounded-full' alt="" srcset="" />
        <img src={require("../assets/image/g.jpg")} className='w-32 h-32 mb-2 rounded-full -rotate-[20deg]' alt="" srcset="" />
        <img src={require("../assets/image/d.jpg")} className='w-32 h-32 mb-2 ml-40 rounded-full rotate-[40deg]' alt="" srcset="" />
        <img src={require("../assets/image/e.jpg")} className='w-32 h-32 mt-2 rounded-full -rotate-[120deg]' alt="" srcset="" />
        <img src={require("../assets/image/f.jpg")} className='w-32 h-32 ml-40 mt-2 rounded-full rotate-[140deg]' alt="" srcset="" />
        <img src={require("../assets/image/g.jpg")} className='w-32 h-32 ml-32 rounded-full rotate-180' alt="" srcset="" />
        <img src={require("../assets/image/h.jpg")} className='w-32 h-32 rounded-full rotate-180' alt="" srcset="" />
        </div>
        <div className="datakan flex items-center h-[85vh]">
          <div className="image">
            <img src={require("../assets/image/touristguide.png")} className='w-80 h-96 -scale-x-100' alt="" srcset="" />
          </div>
          <div className="nusin text-3xl text-black ml-72 z-50">
            <p>Wellcome to <span class="text-green-600 text-3xl">Tourist Guide</span></p>
            <p>In our Website you maght now about alot of hotel <br /> motel,place and malls, click here to know <br />
            abut all our service and offers</p>
            <p className='bg-green-600 text-white text-xl w-48 mt-4 p-2 rounded-md text-center cursor-pointer'>More Service</p>
          </div>
        </div>
         </Fragment>
  )
}
