import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Header from '../components/Header'
import PlaceJson from '../data/json.json'
import { useSelector, useDispatch } from 'react-redux'
import {changeRoute} from '../app/Slice/nav'
import { useNavigate } from 'react-router-dom';
import User from '../data/user.json'
import {login} from '../app/Slice/login'

export default function Place() {
  const username=JSON.parse(localStorage.getItem('username'));
  const isAuth=useSelector((state) => state.login.isAuth)
  const navigate=useNavigate()
  const [filt,setFilt]=useState(false)
  let [pagin,setPagin]=useState('1')
  let [min,setmin]=useState(0)
  let [max,setmax]=useState(6)
  let [place,setPlace]=useState('all')
  let [city,setCity]=useState('all')
  var item ;
  

  const isactive = useSelector((state) => state.nav.nav)
    const dispatch = useDispatch()
    function ChangeActive(name){
      dispatch(changeRoute(name))
  }
  items(min,max)
  useEffect(()=>{
    dispatch(changeRoute('Place'))
    dispatch(login(User[parseInt(username.id)-1]))
  })
  if(isAuth==false){
    return navigate('/login')
  }
  function items(min,max){
    if(place=='all'){
      if(city=='all'){
         item = PlaceJson.filter(w=>w.id>min && w.id<=max).map(((w)=> {
          return(
            <div className="card w-72">
                  <div className="image overflow-hidden rounded-md ">
                    <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                  </div>
                  <div className="title text-center text-lg italic">{w.title}</div>
                  <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                  <Link to={`/moredetail/${w.id}`} onClick={()=>ChangeActive('Place')}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
                </div>
          )
        }))
      }else{
        item = PlaceJson.filter(name=>name.city==city).map(((w)=> {
          return(
            <div className="card w-72">
                  <div className="image overflow-hidden rounded-md ">
                    <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                  </div>
                  <div className="title text-center text-lg italic">{w.title}</div>
                  <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                  <Link to={`/moredetail/${w.id}`} onClick={()=>ChangeActive('Place')}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
                </div>
          )
        }))
      }
      
    }else if(city=='all'){
      if(place=='all'){
        item = PlaceJson.map(((w)=> {
          return(
            <div className="card w-72">
                  <div className="image overflow-hidden rounded-md ">
                    <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                  </div>
                  <div className="title text-center text-lg italic">{w.title}</div>
                  <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                  <Link to={`/moredetail/${w.id}`} onClick={()=>ChangeActive('Place')}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
                </div>
          )
        }))
      }else{
        item = PlaceJson.filter(name=>name.category==place).map(((w)=> {
          return(
            <div className="card w-72">
                  <div className="image overflow-hidden rounded-md ">
                    <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                  </div>
                  <div className="title text-center text-lg italic">{w.title}</div>
                  <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                  <Link to={`/moredetail/${w.id}`} onClick={()=>ChangeActive('Place')}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
                </div>
          )
        }))
      }
     
    
    }else{
      item = PlaceJson.filter(name=>name.city==city).filter(name=>name.category==place).map(((w)=> {
        return(
          <div className="card w-72">
                <div className="image overflow-hidden rounded-md ">
                  <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                </div>
                <div className="title text-center text-lg italic">{w.title}</div>
                <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                <Link to={`/moredetail/${w.id}`} onClick={()=>ChangeActive('Place')}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
              </div>
        )
      }))
    }
  }
  function changeplace(name){
    setPlace(name)
    items()
  }
  function changecity(name){
    setCity(name)
    items()
  }
  const activePaginate=(event,name,num1,num2)=>{
    setPagin(name)
    setmin(num1)
    setmax(num2)
    items(min,max)
  }
 
  function changeFilter(){
    setFilt(!filt)
  }

  return (
    <Fragment>
        <Header />
        <div className="block m-auto md:flex md:justify-center">

        
        <div className="fiter m-auto md:m-0 md:block w-72 md:min-h-[85vh] overflow-hidden">
          <div className="filterakan border mt-3 md:ml-5 text-green-600">
            <p className='py-4 text-center text-xl text-green-600 border-b' onClick={changeFilter}>Filter <i class="fa-solid fa-angle-up ml-2 md:hidden"></i></p>

            <div className={`${filt ? 'h-fit md:min-h-[65vh]':'h-0  md:min-h-[65vh]'}  transition-all duration-1000` }>
            <div className=' w-72 '>
              <div className='ml-5 py-4'>
                <p className='mx-4 text-xl pb-1'>Places</p>
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changeplace('all')}><div className={`mx-4 w-3 h-3  border border-green-600 ${place=='all'?'bg-green-600':'bg-white'}`}></div> All </div>
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changeplace('hotel')}><div className={`mx-4 w-3 h-3  border border-green-600 ${place=='hotel'?'bg-green-600':'bg-white'}`}></div> Hotel </div>
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changeplace('motel')}><div className={`mx-4 w-3 h-3  border border-green-600 ${place=='motel'?'bg-green-600':'bg-white'}`}></div> Motel </div>
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changeplace('place')}><div className={`mx-4 w-3 h-3  border border-green-600 ${place=='place'?'bg-green-600':'bg-white'}`}></div> Places </div>
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changeplace('mall')}><div className={`mx-4 w-3 h-3  border border-green-600 ${place=='mall'?'bg-green-600':'bg-white'}`}></div> Mall </div>
              </div>
            </div>

            <div className=" w-72">
              <div className="ml-5 py-4">
                <p className='mx-4 text-xl pb-1'>Cities</p>
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changecity('all')}><div className={`mx-4 w-3 h-3  border border-green-600 ${city=='all'?'bg-green-600':'bg-white'}`}></div> All </div>
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changecity('Sulemani')}><div className={`mx-4 w-3 h-3  border border-green-600 ${city=='Sulemani'?'bg-green-600':'bg-white'}`}></div> Sulemani </div>
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changecity('Hawler')}><div className={`mx-4 w-3 h-3  border border-green-600 ${city=='Hawler'?'bg-green-600':'bg-white'}`}></div> Hawler </div>
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changecity('Duhok')}><div className={`mx-4 w-3 h-3  border border-green-600 ${city=='Duhok'?'bg-green-600':'bg-white'}`}></div> Duhok </div>
              </div>
            </div>
            </div>
            
          </div>

        </div>

        <div className="md:ml-8 mt-3 flex justify-center"> 
          <div className="hamukartakan grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-6 gap-5 items-center justify-end">
{item}
          </div>
        </div>
        </div> 
        {place=='all'&&city=='all'?<div className="paginage flex justify-center mt-5 gap-1 mb-2">
          <div className={`${pagin=='1'?'bg-slate-200 text-blue-500 shadow-xl':'bg-blue-500 text-white'} 1 w-12 h-12 cursor-pointer rounded-full flex justify-center items-center`} onClick={event=>activePaginate(event,'1',0,6)}>1</div>
          <div className={`${pagin=='2'?'bg-slate-200 text-blue-500 shadow-xl':'bg-blue-500 text-white'} 2 w-12 h-12 cursor-pointer rounded-full flex justify-center items-center`} onClick={event=>activePaginate(event,'2',6,12)}>2</div>
          <div className={`${pagin=='3'?'bg-slate-200 text-blue-500 shadow-xl':'bg-blue-500 text-white'} 3 w-12 h-12 cursor-pointer rounded-full flex justify-center items-center`} onClick={event=>activePaginate(event,'3',12,18)}>3</div>
        </div>:''}
    </Fragment>
  )
}
