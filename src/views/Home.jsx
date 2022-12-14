import React, { Fragment, useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {changeRoute} from '../app/Slice/nav'
import User from '../data/user.json'
import {login} from '../app/Slice/login'
import { Navigate } from "react-router-dom"

export default function Home() {

  const username=JSON.parse(localStorage.getItem('username'));
  const navigate=useNavigate()
  const isAuth=useSelector((state) => state.login.isAuth)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(changeRoute('Home'))
    dispatch(login(User[parseInt(username.id)-1]))
  })
  if(isAuth==false){
    return <Navigate replace to="/login"   />
  }
  return (
    <Fragment>
        <Header />
        
        <div className="datakan m-auto md:flex md:items-center md:justify-between h-[85vh] z-20">
          <div className='relative md:w-[70%] w-full flex justify-center md:flex md:justify-start'>
          <div className="wena image mt-4 ml-4
           flex justify-start items-center  border-2 rounded-full border-dashed w-[250px] sm:w-[350px] sm:h-[55vh] h-[250px]">



            
            <div className="square w-6 h-6 rounded-sm hover:rotate-45 hover:scale-125 hover:bg-gray-400 duration-700 absolute top-[26%] transition-all -rotate-[20deg] bg-gray-300"></div>
            <div className="circle w-6 h-6 rounded-full  hover:scale-125 hover:bg-gray-400 duration-700 absolute -right-[1%] md:top-[30%] top-[26%] transition-all bg-gray-300"></div>
           
<div className="image mt-4 ml-4 absolute transition-all duration-[80s]
           border-2 rounded-full border-solid w-[65%] h-[65%] top-[12%] right-[18%]">
            <div className="triangle hover:rotate-45 hover:scale-125 hover:border-b-gray-400 duration-700 absolute top-[88%] right-[55%] md:top-[90%] md:right-[63%] -rotate-[70deg] md:-rotate-[65deg]"></div>
</div>

        
          </div>
          <div className="absolute top-[40%] left-[45%] md:top-36 md:left-40">
<img src={require('../assets/image/touristguide.png')} className='w-16 h-16 md:w-20 md:h-20 rounded-full -scale-x-100 hover:scale-150 cursor-pointer transition-all duration-700' alt="" srcset="" />
 
</div>
         
          </div>
          <div className="nusin mt-4 md:mt-0 text-center md:text-left md:text-xl lg:text-2xl text-black lg:ml-24 md:ml-12 w-full  z-20">
            <p>Wellcome to <span class="text-green-600 text-2xl">Tourist Guide</span></p>
            <p>From this website you can get acquainted with all hotels, motels, malls and tourist attractions in Kurdistan, Join us and enjoy our unique services for tourists</p> <br />
            <p className='m-auto md:m-0 text-green-600 text-xl rounded-md text-center sm:text-left cursor-pointer'><Link to='/service'> More Service <i class="fa-solid fa-arrow-right"></i></Link></p>
          </div>
        </div>
         </Fragment>
  )
}
