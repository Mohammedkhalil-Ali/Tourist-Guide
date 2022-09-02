import * as React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {changeRoute} from '../app/Slice/nav'

export default function TabPanel() {
    const isactive = useSelector((state) => state.nav.nav)
    const dispatch = useDispatch()

const [show ,setShow]=useState(false)
// const [isactive ,setisactive]=useState('home')
function ChangeActive(name){
    dispatch(changeRoute(name))
}
function ChangeShow(){
    setShow(!show)
}
  return (
    <Fragment>
        <header class="w-100vw h-[10vh] relative lg:relative top-0 shadow-sm bg-[#ffffff] text-green-600 overflow-hidden "  id="home">
        <div class="logo h-[10vh] w-[100vw] flex justify-between items-center">
            <p class="w-5/6 md:w-4/6 pl-8 text-2xl font-mono text-black"><span class="text-green-600 text-4xl">T</span>ourist<span class="text-green-600 text-4xl">G</span>uide</p>
        <nav class="text-green-600 text-xl font-mono
        ">
            <Link to='/'   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#dfeee3]
                        cursor-pointer
                        ${isactive=='home'?'text-black':''}
                            `}
                        id="home"
                        onClick={()=>ChangeActive('home')}
                        // @click="isactiveRoute('home')"
                        >Home</Link>
            <Link to='/place'   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#dfeee3]
                        cursor-pointer
                        ${isactive=='Place'?'text-black':''}
                            `}
                        id="skills"
                        onClick={()=>ChangeActive('Place')}
                        // :class="isactive=='skills'?'text-black':''"
                        // @click="isactiveRoute('skills')"
                        >Place</Link>
            <Link to='/service'   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#dfeee3]
                        cursor-pointer
                        ${isactive=='Service'?'text-black':''}
                            `}
                        onClick={()=>ChangeActive('Service')}
                        // :class="isactive=='project'?'text-black':''"
                        // @click="isactiveRoute('project')"
                        >Service</Link>
                        
            <Link to='/about'   className={`
                        hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#dfeee3]
                        cursor-pointer
                        ${isactive=='about'?'text-black':''}
                            `}
                        onClick={()=>ChangeActive('about')}
                        // :class="isactive=='about'?'text-black':''"
                        // @click="isactiveRoute('about')"
                        >About</Link>

        </nav>
     {/* @click="show = !show" */}
            <div class="hamburger visible  lg:invisible pr-8" onClick={()=>{ChangeShow()}}>
                <div className={`hamburger-1
                ${show==true?'is-active':''}`
            } id="hamburger" 
                    // :class="{ 'is-active': show }"
                >
                    <span class="line"
                    ></span>
                    <span class="line"
                    ></span>
                    <span class="line"
                    ></span>
                </div>
            </div>
        </div>
    </header>

    <nav className={`text-green-600 z-50 text-xl fixed top-[10vh] w-full lg:invisible bg-[#ecffe6] overflow-hidden transition-all duration-500  ${show?'visible h-[90vh]':'invisible h-0'} `}
        // :class="show?'visible h-[85vh]':'invisible h-0'"
       
                >
                    <p 
                    className={`
                    hover:bg-[#ffffff]
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='home'?'text-black':''}
                        `}
                        onClick={()=>ChangeActive('home')}>
            <Link to='/'  
                        // :class="isactive=='home'?'text-black':''"
                        // @click="isactiveRoute('home')"
                        >Home</Link>
                        </p>
                        <p
                        className={`
                        hover:bg-[#ffffff]
                            cursor-pointer
                            py-4
                            px-8
                            ${isactive=='Place'?'text-black':''}
                            `}
                            onClick={()=>ChangeActive('Place')}
                            >
            <Link to='/place'  
                        // :class="isactive=='Place'?'text-black':''"
                        // @click="isactiveRoute('Place')"
                        >Place</Link></p>
                        <p
                        className={`
                        hover:bg-[#ffffff]
                            cursor-pointer
                            py-4
                            px-8
                            ${isactive=='Service'?'text-black':''}
                            `}
                            onClick={()=>ChangeActive('Service')}>
            <Link  to='/service'>Service</Link></p>
                        <p
                         className={`
                         hover:bg-[#ffffff]
                             cursor-pointer
                             py-4
                             px-8
                             ${isactive=='about'?'text-black':''}
                             `}
                             onClick={()=>ChangeActive('about')}>
            <Link to='/about' >About</Link></p>
        </nav>

    </Fragment>
  );
}
