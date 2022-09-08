import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import PlaceJson from '../data/json.json'
import User from '../data/user.json'
import Krdrawakan from '../data/krdrawakan.json'
import Header from '../components/Header'
import { Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux'
import {pointKam} from '../app/Slice/login'
import { useNavigate } from 'react-router-dom';
import {changeRoute} from '../app/Slice/nav'

export default function ServiceDetail() {
    const isAuth=useSelector((state) => state.login.isAuth)
    const navigate=useNavigate()
    
    
  const pointUser=useSelector((state) => state.login.point)

  const [showmodal,setModal]=useState(false)
  const [showmodalKrdra,setModalKrdra]=useState(false)
  const username=JSON.parse(localStorage.getItem('username'));
  var { id } = useParams();
  var dt = new Date();
  const dispatch = useDispatch()
  dt.setDate(dt.getDate());
  var dtfive = new Date();
  dtfive.setDate(dtfive.getDate()+5);
  useEffect(()=>{
    dispatch(changeRoute('Service'))
  },[])
  if(isAuth==false){
    return (<div className='flex justify-center items-center h-screen w-screen'>
      <p className='text-8xl text-sky-600' onClick={()=>{navigate('/login')}}>Sorry Not Authenticated Click Here</p>
      </div>)
  }
  function removeModal(){
    setModal(false)
  }
  function removeModalKrdrawak(){
    setModalKrdra(false)
  }
    function buyOffer(){
        if(pointUser>=100){
            const datanwe={
                userid:parseInt(username.id),
                serviceid:id,
                katyKrdraw:dt,
                katyBasarchun:dtfive
            }
            User[parseInt(username.id)-1].point=pointUser-100
            Krdrawakan.push(datanwe)
            setModalKrdra(true)
            dispatch(pointKam(100))
        }else{
            setModal(true)
        }
    }
  

  
  const item=PlaceJson.filter(n=>n.id==id).map(n=>{
    if(n.category=='hotel' || n.category=='motel'){
      return(
        <Fragment>
            {showmodal?<div className="modal fixed z-30 flex justify-center items-center bg-opacity-20 bg-black h-screen w-screen">
                <div className='bg-green-400 p-4 text-white rounded-md'>
                    <div className="remove flex justify-between"><p className='text-2xl'>Warning</p><i class="fa-solid fa-xmark text-red-600 text-4xl text-right cursor-pointer" onClick={removeModal}></i></div>
                    <p>Doesn't Have enough Point to buy this offer</p>
                </div>
            </div>:''}
            {showmodalKrdra?<div className="modal fixed z-30 flex justify-center items-center bg-opacity-20 bg-black h-screen w-screen">
                <div className='bg-green-400 p-4 text-white w-80 rounded-md'>
                    <div className="remove flex justify-between items-center"><p>Successfully you bought</p><i class="fa-solid fa-xmark text-red-600 text-4xl text-right cursor-pointer" onClick={removeModalKrdrawak}></i></div>
                </div>
            </div>:''}
        <div className="coursel  md:ml-5 rounded-md md:mb-24 mb-14">
            <Carousel className='md:w-[30vw] w-[80%] mx-[10%] mb-10 mt-5 h-[30vh] border-none hover:border-none rounded-md' 
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              autoPlay={true}
              showStatus={false}
              infiniteLoop={true}
              interval={3000}
              >
                      <div>
                          <img src={n.imageone} className='w-[80%] h-[40vh] border-none hover:border-none rounded-md' />
                      </div>
                      <div>
                          <img src={n.imagetwo} className='w-[80%] h-[40vh] border-none hover:border-none rounded-md'/>   
                      </div>
                      <div>
                          <img src={n.imagethree} className='w-[80%] h-[40vh] border-none hover:border-none rounded-md'/>
                      </div>
                      <div>
                          <img src={n.imagefour} className='w-[80%] h-[40vh] border-none hover:border-none rounded-md'/>
                      </div>
                  </Carousel>
  
          </div>
  <div className="datakan md:ml-32 md:mb-16 py-10 mt-10">
              <div className='text-5xl italic text-center md:text-left py-5'>{n.title}</div>
              <div className="detail  ml-[10%] md:ml-0 w-[60%] md:w-[70%] text-xl py-2 font-thin text-left md:text-left">{n.detail}
              </div>
              <div className="asterra text-xl font-thin py-1 ml-[10%] md:ml-0">Star : {n.star}</div>
              <div className="price text-xl font-thin py-1 ml-[10%] md:ml-0">Price : {n.price}</div>
              <div className="place text-xl font-thin py-1 ml-[10%] md:ml-0">Place : {n.city}</div>
              <div className="phone text-xl font-thin py-1 ml-[10%] md:ml-0">Phone : {n.phone}</div>
              <div className="phone bg-blue-600 w-60 text-white text-center rounded-md mt-4 cursor-pointer text-xl font-thin py-1 ml-[10%] md:ml-0" onClick={buyOffer}>Buy Offer 100 Point</div>
  
          </div>
          </Fragment>
      )

    }else if(n.category=='mall' || n.category=='place'){
      return(
        <Fragment>
            {showmodalKrdra?<div className="modal fixed z-30 flex justify-center items-center bg-opacity-20 bg-black h-screen w-screen">
                <div className='bg-green-400 p-4 text-white w-80 rounded-md'>
                    <div className="remove flex justify-between items-center"><p>Successfully you bought</p><i class="fa-solid fa-xmark text-red-600 text-4xl text-right cursor-pointer" onClick={removeModalKrdrawak}></i></div>
                </div>
            </div>:''}

            {showmodal?<div className="modal fixed z-30 flex justify-center items-center bg-opacity-20 bg-black h-screen w-screen">
                <div className='bg-green-400 p-4 text-white rounded-md'>
                    <div className="remove flex justify-between"><p className='text-2xl'>Warning</p><i class="fa-solid fa-xmark text-red-600 text-4xl text-right cursor-pointer" onClick={removeModal}></i></div>
                    <p>Doesn't Have enough Point to buy this offer</p>
                </div>
            </div>:''}
        <div className="coursel md:ml-5 rounded-md md:mb-20">
            <Carousel className='w-[30vw] h-[30vh] border-none hover:border-none rounded-md' 
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              autoPlay={true}
              showStatus={false}
              infiniteLoop={true}
              interval={3000}
              >
                      <div>
                          <img src={n.imageone} className='w-80 h-[40vh] border-none hover:border-none rounded-md' />
                      </div>
                      <div>
                          <img src={n.imagetwo} className='w-80 h-[40vh] border-none hover:border-none rounded-md'/>   
                      </div>
                      <div>
                          <img src={n.imagethree} className='w-80 h-[40vh] border-none hover:border-none rounded-md'/>
                      </div>
                      <div>
                          <img src={n.imagefour} className='w-80 h-[40vh] border-none hover:border-none rounded-md'/>
                      </div>
                  </Carousel>
  
          </div>
  <div className="datakan ml-32 mb-16">
              <div className='text-5xl italic '>{n.title}</div>
              <div className="detail w-[70%] text-xl py-2 font-thin">{n.detail}
              </div>
              <div className="place text-xl font-thin py-1">Place : {n.city}</div>
              <div className="phone bg-blue-600 w-60 text-white text-center rounded-md mt-4 cursor-pointer text-xl font-thin py-1 ml-[10%] md:ml-0" onClick={buyOffer}>Buy Offer 100 Point</div>

  
          </div>
          </Fragment>
      )
    }
  })
  return (
    <Fragment>
      <Header />
      <div className="bodya block md:flex md:items-center h-[85vh] ">
        
        {item}
      </div>
    </Fragment>
  )
}
