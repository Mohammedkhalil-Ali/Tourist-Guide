import React, { Fragment } from 'react'
import Header from '../components/Header'
import User from '../data/user.json'
import { useSelector,useDispatch } from 'react-redux';
import {login} from '../app/Slice/login'
import {pointZyad} from '../app/Slice/login'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {changeRoute} from '../app/Slice/nav'
import Swal from 'sweetalert2';

export default function Profile() {
    const dispatch = useDispatch();
    const [time,setTime]=useState(false)
    const [showModal,setshowModal]=useState(false)
    const [link,setLink]=useState('')
    const username=JSON.parse(localStorage.getItem('username'));
    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    var dat3=new Date(username.lasttime)
    // const k='2022-9-9'
    // var dat3=new Date(k)
    var dat4=new Date(current_date)
    const isAuth=useSelector((state) => state.login.isAuth)
  const navigate=useNavigate()

  useEffect(()=>{
    dispatch(changeRoute('Profile'))
    dispatch(login(User[parseInt(username.id)-1]))
  },[])

  if(isAuth==false){
    return navigate('/login')
  }
  
    // if(dat4>dat3){
    //     return "dweneya";
    // }else if(dat3>dat4){
    //     return 'mawyaty';
    // }
    function updatePro(){
      User[parseInt(username.id)-1].UserImage=link
      dispatch(login(User[parseInt(username.id)-1]))
      setshowModal(false)
      Swal.fire(
        'Successfuly',
        'Your profile has been successfuly updated',
        'success'
      )
  }
  
    function updateDate(){
        User[parseInt(username.id)-1].lasttime=current_date
        User[parseInt(username.id)-1].point=parseInt(username.point)+10
        setTime(true)
        dispatch(login(User[parseInt(username.id)-1]))
        dispatch(pointZyad())
    }
  return (
    <Fragment>
        <Header />
        {showModal?<div className="updateProfile fixed w-screen h-screen bg-slate-400 bg-opacity-50 flex justify-center items-center">
          <div className="form bg-white rounded-md  p-4">
          <div className="remove flex items-center justify-between"><p className='text-xl'>Update</p><i class="fa-solid fa-xmark text-red-600 text-4xl text-right cursor-pointer" onClick={()=>(setshowModal(!showModal))}></i></div>
            <input type="text" className='border-none outline-none bg-slate-200 rounded-md p-3 w-96'  placeholder='Put image adress link' onChange={(e)=>setLink(e.target.value)} />
            <div className="bt w-full p-2 rounded-md cursor-pointer bg-blue-400 text-white text-center mt-2" onClick={updatePro}>Update Profile Picture</div>
          </div>
        </div>:''}
        <div className='h-[85vh] block md:flex md:justify-start md:items-center'>
            <div className="image text-center">
                <img src={`${username.UserImage}`} alt="" srcset="" className='w-40 md:w-80 h-40 md:h-80 m-auto mt-5 md:ml-4 rounded-full object-fill mb-4' />
                <p className="text-center text-lg cursor-pointer"  onClick={()=>(setshowModal(!showModal))}>Update Profile</p>
           
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
