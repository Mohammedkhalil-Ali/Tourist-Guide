import React, { Fragment, useEffect } from 'react'
import Header from '../components/Header'
import Services from '../data/json.json'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {changeRoute} from '../app/Slice/nav'
import User from '../data/user.json'
import {login} from '../app/Slice/login'


export default function Service() {
  const username=JSON.parse(localStorage.getItem('username'));
  const isAuth=useSelector((state) => state.login.isAuth)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(changeRoute('Service'))
    dispatch(login(User[parseInt(username.id)-1]))
  },[])
  if(isAuth==false){
    return navigate('/login')
  }
  
  const item = Services.map(((w)=> {
    if(w.dashkandn){
    return(
      <div className="card w-72">
            <div className="image overflow-hidden rounded-md relative">
              <div className="dashkandn bg-red-400 h-96  w-12 absolute -top-20 -right-4 -rotate-45 text-white z-20"><div className='text-center absolute text-white h-10 w-80 top-28 -right-[8rem]  rotate-90 z-20 '>Discount %{w.dashkandn}</div></div>
              <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
            </div>
            <div className="title text-center text-lg italic">{w.title}</div>
            <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
           <Link to={`/servicedetail/${w.id}`} ><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
          </div>
    )
  }
  }))
  return (
    <Fragment>
        <Header />
        <div className="ml-2 mt-3 flex justify-center"> 
          <div className="hamukartakan grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-6 gap-5 items-center justify-end">
{item}
          </div>
        </div>
    </Fragment>
  )
}
