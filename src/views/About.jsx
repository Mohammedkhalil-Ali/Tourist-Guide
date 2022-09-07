import React, { Fragment } from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function About() {

  const isAuth=useSelector((state) => state.login.isAuth)
  const navigate=useNavigate()
  
  if(isAuth==false){
    return (<div className='flex justify-center items-center h-screen w-screen'>
      <p className='text-8xl text-sky-600' onClick={()=>{navigate('/login')}}>Sorry</p>
      </div>)
  }
  return (
    <Fragment>
        <Header />
        <div className='block m-auto md:m-0 md:flex h-[85vh] md:justify-evenly md:items-center'>
        <div className="datakan md:ml-8">
          <p className='text-4xl text-center md:text-left font-thin text-green-500 mt-10'>Tourist Guide</p><br />
          <p className='text-2xl text-center md:text-left  font-thin text-slate-400 mt-4 w-[100%] md:w-[70%]'>In our Website you maght now about alot of hotel  motel places and malls, click here to know
            abut all our service and offers</p>
            <p className='text-2xl text-center md:text-left  font-thin text-slate-600'>You can follow us in sicial media</p>
            <p className='text-center md:text-left'>
            <i class="fa-brands fa-facebook text-blue-500 text-4xl p-2 mt-2"></i>
            <i class="fa-brands fa-instagram text-orange-500 text-4xl p-2 mt-2"></i>
            <i class="fa-brands fa-youtube text-red-500 text-4xl p-2 mt-2"></i>
            <i class="fa-brands fa-twitter text-sky-500 text-4xl p-2 mt-2"></i>
            <i class="fa-brands fa-snapchat text-yellow-300 text-4xl p-2 mt-2"></i>
            </p>
        </div>
          <div className="map ml-[10%] mt-10 md:mr-20">
<Map />
          </div>
        </div>
    </Fragment>
  )
}
