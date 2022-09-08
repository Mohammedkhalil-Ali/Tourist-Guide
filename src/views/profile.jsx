import React, { Fragment } from 'react'
import Header from '../components/Header'
import User from '../data/user.json'
import { useSelector,useDispatch } from 'react-redux';
import {login} from '../app/Slice/login'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Profile() {
    const dispatch = useDispatch();
    const [time,setTime]=useState(false)
    const username=JSON.parse(localStorage.getItem('username'));
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    var dat3=new Date(username.lasttime)
    // const k='2022-9-9'
    // var dat3=new Date(k)
    var dat4=new Date(current_date)
    

    // if(dat4>dat3){
    //     return "dweneya";
    // }else if(dat3>dat4){
    //     return 'mawyaty';
    // }
    function updateDate(){
        User[parseInt(username.id)-1].lasttime=current_date
        User[parseInt(username.id)-1].point=parseInt(username.point)+10
        setTime(true)
        dispatch(login(User[parseInt(username.id)-1]))
    }
  return (
    <Fragment>
        <Header />
        <div className='h-[85vh] block md:flex md:justify-start md:items-center'>
            <div className="image text-center">
                <img src={`${username.UserImage}`} alt="" srcset="" className='w-40 md:w-80 h-40 md:h-80 m-auto mt-5 md:ml-4 rounded-full object-fill mb-4' />
                Update Profile
            </div>
            <div className="zanyaryakan md:ml-32 text-center md:text-left mt-2">
                <div className='text-2xl font-thin italic'>Name : {username.userName}</div> 
                <div className='text-2xl font-thin italic'>Email : {username.email}</div> 
                <div className='text-2xl font-thin italic'>Password : {username.password}</div> 
                <div className='text-2xl font-thin italic'>Point : {username.point}</div> 
                {
                    dat4>dat3 ?<div className='bg-blue-600 text-center w-80 text-lg m-auto mt-2 cursor-pointer text-white p-2 rounded-md' onClick={updateDate}>Claim Point</div>:<div className='bg-gray-600 text-center text-lg m-auto mt-2 cursor-pointer w-80 text-white p-2 rounded-md'>Claim Point</div>
                }
                 
            </div>
        </div>
    </Fragment>
  )
}
