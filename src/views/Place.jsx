import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Header from '../components/Header'
import PlaceJson from '../data/json.json'

export default function Place() {
  let [place,setPlace]=useState('all')
  let [city,setCity]=useState('all')
  var item ;
  items()

  function items(){
    if(place=='all'){
      if(city=='all'){
         item = PlaceJson.map(((w)=> {
          return(
            <div className="card">
                  <div className="image overflow-hidden rounded-md ">
                    <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                  </div>
                  <div className="title text-center text-lg italic">{w.title}</div>
                  <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                  <Link to={`/moredetail/${w.id}`}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
                </div>
          )
        }))
      }else{
        item = PlaceJson.filter(name=>name.city==city).map(((w)=> {
          return(
            <div className="card">
                  <div className="image overflow-hidden rounded-md ">
                    <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                  </div>
                  <div className="title text-center text-lg italic">{w.title}</div>
                  <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                  <Link to={`/moredetail/${w.id}`}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
                </div>
          )
        }))
      }
      
    }else if(city=='all'){
      if(place=='all'){
        item = PlaceJson.map(((w)=> {
          return(
            <div className="card">
                  <div className="image overflow-hidden rounded-md ">
                    <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                  </div>
                  <div className="title text-center text-lg italic">{w.title}</div>
                  <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                  <Link to={`/moredetail/${w.id}`}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
                </div>
          )
        }))
      }else{
        item = PlaceJson.filter(name=>name.category==place).map(((w)=> {
          return(
            <div className="card">
                  <div className="image overflow-hidden rounded-md ">
                    <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                  </div>
                  <div className="title text-center text-lg italic">{w.title}</div>
                  <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                  <Link to={`/moredetail/${w.id}`}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
                </div>
          )
        }))
      }
     
    
    }else{
      item = PlaceJson.filter(name=>name.city==city).filter(name=>name.category==place).map(((w)=> {
        return(
          <div className="card">
                <div className="image overflow-hidden rounded-md ">
                  <img src={`${w.imageone}`} alt="" className='w-72 h-72 hover:scale-125 transition-all duration-700 '/>
                </div>
                <div className="title text-center text-lg italic">{w.title}</div>
                <div className="title py-2 text-md italic"><i class="ml-1 fa-solid fa-building text-sky-400"></i> {w.category} <i class="ml-2 fa-solid fa-location-dot text-sky-400"></i> {w.city}</div>
                <Link to={`/moredetail/${w.id}`}><div className="title cursor-pointer text-lg text-center border-none rounded-md text-white py-1 bg-blue-500 w-full italic">More Detail</div></Link>
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

  return (
    <Fragment>
        <Header />
        <div className="flex">

        
        <div className="fiter w-72 min-h-[85vh] overflow-hidden">
          <div className="filterakan border mt-3 ml-5 text-green-600">
            <p className='py-4 text-center text-xl text-green-600 border-b'>Filter</p>

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
                <div className='flex items-center text-md py-1 cursor-pointer' onClick={()=>changecity('duhok')}><div className={`mx-4 w-3 h-3  border border-green-600 ${city=='duhok'?'bg-green-600':'bg-white'}`}></div> Duhok </div>
              </div>
            </div>
            
          </div>

        </div>

        <div className="ml-8 mt-3"> 
          <div className="hamukartakan grid grid-cols-3 gap-10">
{item}
          </div>
        </div>
        </div> 
    </Fragment>
  )
}
