import React, { Fragment } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import User from '../data/user.json'
import { useSelector,useDispatch } from 'react-redux';
import {login} from '../app/Slice/login'
import { Link } from 'react-router-dom';

export default function Login() {
    const dispatch=useDispatch()
    let [form,setForm]=useState()
    let [error,setError]=useState('')
    const navigate=useNavigate()

    function checkUser(){
        for(let index=0;index<User.length;index++){
            if(User[index].email==form.email&&User[index].password==form.password){
                setError('')
                dispatch(login(User[index]))
                navigate('/');
            }else{
                setError('Error')
            } 
        }
    }

    function loginData(event){
        let value=event.target.value;
        let name=event.target.name;
        setForm((values)=>({...values,[name]:value}))
    }
   
  return (
    <Fragment>
        <div className='w-full h-screen flex justify-center items-center bg-slate-50'>
            <div className="bg-green-200 w-80 px-2 py-4 rounded-md">
                <input type="text" className='w-full h-9 px-3 bg-white rounded-md my-1 outline-none border-none' placeholder='Email' onChange={loginData} name="email"/>
                <input type="text" className='w-full h-9 px-3 bg-white rounded-md my-1 outline-none border-none' placeholder='Password' onChange={loginData} name="password"/>
                <div className="butn w-full cursor-pointer bg-green-500 hover:bg-green-600 transition-all duration-300 flex items-center justify-center py-2 mt-2 text-white text-center h-10 rounded-md" onClick={checkUser}>Login</div>
                <Link to='/signin'><p className='text-center mt-2 text-blue-700' >Sign Up</p></Link>
            </div>
        </div>
    </Fragment>
  )
}
