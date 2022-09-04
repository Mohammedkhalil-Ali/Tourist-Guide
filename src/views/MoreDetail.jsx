import React from 'react'
import { useParams } from "react-router-dom";
import PlaceJson from '../data/json.json'
import Header from '../components/Header'
import { Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function MoreDetail() {
  const { id } = useParams();
  const itemd=PlaceJson.map(n=>n.id==id)
  const item=PlaceJson.filter(n=>n.id==id).map(n=>{
    return(
      <Fragment>
      <div className="coursel ml-5 rounded-md mb-20">
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
            <div className="asterra text-xl font-thin py-1">Star : {n.star}</div>
            <div className="price text-xl font-thin py-1">Price : {n.price}</div>
            <div className="place text-xl font-thin py-1">Place : {n.city}</div>
            <div className="phone text-xl font-thin py-1">Phone : {n.phone}</div>

        </div>
        </Fragment>
    )
  })
  return (
    <Fragment>
      <Header />
      <div className="bodya flex items-center h-[85vh]">
        
        {item}
      </div>
    </Fragment>
  )
}
