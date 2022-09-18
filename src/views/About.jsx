import React, { Fragment, useEffect } from 'react'
import Header from '../components/Header'
import Map from '../components/Map'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {changeRoute} from '../app/Slice/nav'
import Foot from '../components/Footer'
import User from '../data/user.json'
import {login} from '../app/Slice/login'
import { Link } from 'react-router-dom';

export default function About() {
  const username=JSON.parse(localStorage.getItem('username'));
  const isAuth=useSelector((state) => state.login.isAuth)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(changeRoute('About'))
    dispatch(login(User[parseInt(username.id)-1]))
  },[])
  let redirect=(em)=>{
    window.location.replace(em)
  }
  if(isAuth==false){
    return navigate('/login')
  }
  return (
    <Fragment>
        <Header />
        <div className='block m-auto md:m-0 md:flex min-h-[80vh] md:justify-evenly md:items-center'>
        <div className="datakan md:ml-8">
          <p className='text-4xl text-center md:text-left font-thin text-green-500 mt-10'>Tourist Guide</p><br />
          <p className='text-2xl text-center md:text-left  font-thin text-slate-400 mt-4 w-[100%] md:w-[70%]'>From this website you can get acquainted with all hotels, motels, malls and tourist attractions in Kurdistan, Join us and enjoy our unique services for tourists</p>
            <p className='text-2xl text-center md:text-left  font-thin text-slate-600'>You can follow us in sicial media</p>
            <p className='text-center md:text-left'>
              <Link to={'/'}><i onClick={()=>{redirect('https://www.facebook.com/')}} class="fa-brands fa-facebook text-blue-500 text-4xl p-2 mt-2"></i></Link>
            
            <Link to={'/'}><i  onClick={()=>{redirect('https://www.instagram.com/')}} class="fa-brands fa-instagram text-orange-500 text-4xl p-2 mt-2"></i></Link>
            <Link to={'/'}><i onClick={()=>{redirect('https://www.youtube.com/')}} class="fa-brands fa-youtube text-red-500 text-4xl p-2 mt-2"></i></Link>
            <Link to={'/'}><i onClick={()=>{redirect('https://www.twitter.com/')}} class="fa-brands fa-twitter text-sky-500 text-4xl p-2 mt-2"></i></Link>
            <Link to={'/'}><i onClick={()=>{redirect('https://www.snapchat.com/')}} class="fa-brands fa-snapchat text-yellow-300 text-4xl p-2 mt-2"></i></Link>
            </p>
        </div>
          <div className="map md:ml-[10%] mt-10 md:mr-20 py-2 ">
            <p className='text-gray-600 text-md py-1 ml-[5%] md:ml-0'>Our Office in Map :</p>
<div className='ml-[5%] md:ml-0 md:w-[400px]'><Map/></div>
          </div>
        </div>
          <footer className='h-[10vh]'>
            <Foot />
          </footer>
    </Fragment>
  )
}
