import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import PlaceJson from '../data/json.json'
import Header from '../components/Header'
import { Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux'
import {changeRoute} from '../app/Slice/nav'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import User from '../data/user.json'
import {login} from '../app/Slice/login'
import StarRatings from 'react-star-ratings';


export default function MoreDetail() {
  const username=JSON.parse(localStorage.getItem('username'));
  const isAuth=useSelector((state) => state.login.isAuth)
  const navigate=useNavigate()
  
  const { id } = useParams();

    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeRoute('Place'))
    dispatch(login(User[parseInt(username.id)-1]))
  },[])
  if(isAuth==false){
    return navigate('/login')
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
              <div className='text-5xl italic text-center md:text-left py-5  items-center'><p>{n.title}</p></div>
              <div className="detail  ml-[10%] md:ml-0 w-[60%] md:w-[70%] text-md py-2 font-thin text-left md:text-left">{n.detail}
              </div>
              <div className="asterra text-xl font-thin py-1 ml-[10%] md:ml-0">Star : &nbsp;
              <StarRatings
        rating={parseInt(n.star)}
        starDimension="20px"
        starSpacing="3px"
        starRatedColor='yellow'
      />
              </div>
              <div className="price text-xl font-thin py-1 ml-[10%] md:ml-0">Price : {n.price}</div>
              <div className="place text-xl font-thin py-1 ml-[10%] md:ml-0">Place : {n.location}</div>
              <div className="phone text-xl font-thin py-1 ml-[10%] md:ml-0">Phone : {n.phone}</div>
              <Link to='/Place'><p className='text-2xl italic text-center ml-[10%] md:ml-0 md:text-left py-5 flex items-center text-gray-500'>Back <i class="fa-solid fa-backward mt-2 ml-4"></i></p></Link>
  
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
  <div className=" md:ml-32 m-auto  py-10 mt-10  min-h-[85vh] sm:mt-10">
              <div className='text-5xl italic text-center md:text-left py-5  items-center'>{n.title}</div>
              <div className="ml-[10%] md:ml-0 w-[60%] md:w-[70%] text-md py-2 font-thin text-left md:text-left">{n.detail}
              </div>
              <div className="place text-xl font-thin py-1 ml-[10%] md:ml-0">Place : {n.location}</div>
              <Link to='/Place'><p className='text-2xl italic text-left ml-[10%] md:ml-0 md:text-left py-5 flex items-center text-gray-500'>Back <i class="fa-solid fa-backward mt-2 ml-4"></i></p></Link>
  
          </div>
          </Fragment>
      )
    }
  })
  return (
    <Fragment>
      <Header />
      <div className="bodya block md:flex md:items-center min-h-[85vh] ">
        
        {item}
      </div>
    </Fragment>
  )
}
