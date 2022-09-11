import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeRoute } from '../app/Slice/nav'
import Data from '../data/krdrawakan.json'
import Place from '../data/json.json'
import Header from '../components/Header'
import User from '../data/user.json'
import {login} from '../app/Slice/login'

export default function MyStore() {
    const username=JSON.parse(localStorage.getItem('username'));
    const isAuth=useSelector((state) => state.login.isAuth)
    const navigate=useNavigate()

    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeRoute('Store'))
    dispatch(login(User[parseInt(username.id)-1]))
  },[])
  if(isAuth==false || localStorage.getItem('isAuthed')!=='true'){
    return navigate('/login')
  }
  var item=Data.filter((m)=>m.userid==username.id).map(l=>{
    var dt = new Date(l.katyKrdraw);
    return(
        <div className="ml-2 mt-3"> 
          <div className="hamukartakan grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-6 gap-5 items-center justify-end">
          <div className="card w-72">
            <div className="image overflow-hidden rounded-md relative">
              <div className="dashkandn bg-red-400 h-96  w-12 absolute -top-20 -right-4 -rotate-45 text-white z-20"><div className='text-center absolute text-white h-10 w-80 top-28 -right-[8rem]  rotate-90 z-20 '>Discount %{l.dashkandn}</div></div>
              <img src={`${l.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
            </div>
            <div className="title text-center text-lg italic">{l.title}</div>
            <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {l.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {l.city}</div>
            <div className="title py-2 text-md italic">Start Time :{l.katyKrdraw}</div>
            <div className="title py-2 text-md italic">Expire Time :{l.katyBasarchun}</div>
          </div>
          </div>
        </div>
    )
  })


    // let itemNwe=Place.filter(f=>f.id==w.kalaka).map((k)=>{
    //     return k.imageone
    // })
//   })

  
  
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
