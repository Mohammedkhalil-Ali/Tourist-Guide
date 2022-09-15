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
import { Link } from 'react-router-dom';
import {login} from '../app/Slice/login'
import Swal from 'sweetalert2';
import StarRatings from 'react-star-ratings';

export default function ServiceDetail() {
  const username=JSON.parse(localStorage.getItem('username'));
    const isAuth=useSelector((state) => state.login.isAuth)
    const navigate=useNavigate()
    
    
  const pointUser=useSelector((state) => state.login.point)

  var { id } = useParams();
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(changeRoute('Service'))
    dispatch(login(User[parseInt(username.id)-1]))
  },[])
  if(isAuth==false){
    return navigate('/login')
  }

    var buyOffer =(ntitle,nimageone,ncity,ndashkandn,category)=>{
      var dt = new Date();
      dt.setDate(dt.getDate());
      let text1 = dt.toString();
      var dtfive = new Date();
      dtfive.setDate(dtfive.getDate()+5);
      let text2 = dtfive.toString();

        if(pointUser>=100){
            const datanwe={
                userid:parseInt(username.id),
                title:ntitle,
                imageone:nimageone,
                city:ncity,
                dashkandn:ndashkandn,
                category:category,
                katyKrdraw:text1,
                katyBasarchun:text2
            }
            User[parseInt(username.id)-1].point=pointUser-100
            Krdrawakan.push(datanwe)
            dispatch(pointKam(100))
            Swal.fire(
              'Successfuly',
              'Your service has been successfuly bought',
              'success'
            )
        }else{
          Swal.fire(
            'Error!',
            'Your point below 100 sorry',
            'error'
          )
        }
    }
  

  
  const item=PlaceJson.filter(n=>n.id==id).map(n=>{
    if(n.category=='hotel' || n.category=='motel'){
      return(
        <Fragment>
        <div className="coursel m-auto md:ml-5 rounded-md md:mb-24 md:mt-2">
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
  <div className="datakan md:ml-32 m-auto  py-10 mt-10  min-h-[85vh] sm:mt-10">
              <div className='text-5xl italic text-center md:text-left py-5'>{n.title}</div>
              <div className="detail  ml-[10%] md:ml-0 w-[60%] md:w-[70%] text-md py-2 font-thin text-left md:text-left">{n.detail}
              </div>
              <div className="asterra text-xl font-thin py-1 ml-[10%] md:ml-0">Star : &nbsp; <StarRatings
        rating={parseInt(n.star)}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor='yellow'
      /> </div>
              <div className="price text-xl font-thin py-1 ml-[10%] md:ml-0">Price : {n.price}</div>
              <div className="place text-xl font-thin py-1 ml-[10%] md:ml-0">Place : {n.location}</div>
              <div className="phone text-xl font-thin py-1 ml-[10%] md:ml-0">Phone : {n.phone}</div>
              
                {/* event=>buyOffer(event,n.title,n.imageone,n.city,n.price,n.dashkandn,n.category) */}
              <div className="phone bg-blue-600 w-60 text-white text-center rounded-md mt-4 cursor-pointer text-xl font-thin py-1 ml-[10%] md:ml-0" onClick={
                ()=>{
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, I buy it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      buyOffer(n.title,n.imageone,n.city,n.dashkandn,n.category)
                    }
                  })
                }
              }>Buy Offer 100 Point</div>
              <Link to='/Service'><p className='text-2xl italic text-center ml-[10%] md:ml-0 md:text-left py-5 flex items-center text-gray-500'>Back <i class="fa-solid fa-backward mt-2 ml-4"></i></p></Link>
  
          </div>
          </Fragment>
      )

    }else if(n.category=='mall' || n.category=='place'){
      return(
        <Fragment>
  
        <div className="coursel m-auto md:ml-5 rounded-md md:mb-24 md:mt-2">
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
  <div className="md:ml-32 m-auto  py-10 mt-10  min-h-[85vh] sm:mt-10">
              <div className='text-5xl italic '>{n.title}</div>
              <div className="detail w-[70%] text-md py-2 font-thin">{n.detail}
              </div>
              <div className="place text-xl font-thin py-1">Place : {n.location}</div>
              <div className="phone bg-blue-600 w-60 text-white text-center rounded-md mt-4 cursor-pointer text-xl font-thin py-1 ml-[10%] md:ml-0"
               onClick={
                ()=>{
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, I buy it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      buyOffer(n.title,n.imageone,n.city,n.dashkandn,n.category)
                    }
                  })
                }
              }>Buy Offer 100 Point</div>
              <Link to='/Service'><p className='text-2xl italic text-center ml-[10%] md:ml-0 md:text-left py-5 flex items-center text-gray-500'>Back <i class="fa-solid fa-backward mt-2 ml-4"></i></p></Link>


  
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
