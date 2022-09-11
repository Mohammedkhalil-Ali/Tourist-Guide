import * as React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {changeRoute} from '../app/Slice/nav'
import { logout } from '../app/Slice/login';
import { useNavigate } from 'react-router-dom';


export default function TabPanel() {
    const isactive = useSelector((state) => state.nav.nav)
    const dispatch = useDispatch()
    const username=JSON.parse(localStorage.getItem('username'))
    const navigate=useNavigate()

const [show ,setShow]=useState(false)

// const [isactive ,setisactive]=useState('home')
function ChangeActive(name){
    dispatch(changeRoute(name))
}
function Logout(){
    dispatch(logout())
    navigate('/login')
}
function ChangeShow(){
    setShow(!show)
}
  return (
    <Fragment>
        <header class="w-100vw h-[10vh] z-50 sticky lg:relative top-0 shadow-sm bg-green-600 text-[#ffffff] overflow-hidden "  id="home">
        <div class="logo h-[10vh] w-[100vw] flex justify-between items-center">
            <p class="w-5/6 md:w-4/6 pl-8 text-xl md:text-2xl font-mono text-[#ffffff]"><span class="text-teal-200 text-3xl md:text-4xl">T</span>ourist<span class="text-teal-200 text-3xl md:text-4xl">G</span>uide</p>
        <nav class="text-[#ffffff] text-xl font-mono
        ">
            <Link to='/home'   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-green-500
                        cursor-pointer
                        ${isactive=='Home'?'text-teal-200':''}
                            `}
                        id="home"
                        onClick={()=>ChangeActive('Home')}
                        // @click="isactiveRoute('home')"
                        >Home</Link>
            <Link to='/place'   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-green-500
                        cursor-pointer
                        ${isactive=='Place'?'text-teal-200':''}
                            `}
                        id="skills"
                        onClick={()=>ChangeActive('Place')}
                        // :class="isactive=='skills'?'text-teal-200':''"
                        // @click="isactiveRoute('skills')"
                        >Place</Link>
            <Link to='/service'   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-green-500
                        cursor-pointer
                        ${isactive=='Service'?'text-teal-200':''}
                            `}
                        onClick={()=>ChangeActive('Service')}
                        // :class="isactive=='project'?'text-teal-200':''"
                        // @click="isactiveRoute('project')"
                        >Service</Link>
                        
            <Link to='/about'   className={`
                        hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-green-500
                        cursor-pointer
                        ${isactive=='About'?'text-teal-200':''}
                            `}
                        onClick={()=>ChangeActive('About')}
                        // :class="isactive=='about'?'text-teal-200':''"
                        // @click="isactiveRoute('about')"
                        >About</Link>

            <Link to='/store'   className={`
                        hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-green-500
                        cursor-pointer
                        ${isactive=='Store'?'text-teal-200':''}
                            `}
                        onClick={()=>ChangeActive('Store')}
                        // :class="isactive=='about'?'text-teal-200':''"
                        // @click="isactiveRoute('about')"
                        >Store</Link>

        </nav>
        <div className="image flex justify-center md:justify-start items-center mr-4  md:mr-0 md:ml-8">
            <div className='w-12 lg:w-12 h-12 mt-4 ml-5'><Link to='/profile' className='w-12 lg:w-12 h-12'><img src={`${username.UserImage}`} alt="" srcset="" className='w-8 md:w-12 lg:w-12 h-8 md:h-12 object-fill rounded-full ' /> </Link></div>
            <div className='md:ml-2 cursor-pointer text-md md:text-lg' onClick={Logout}>Logout</div>
        </div>
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

    <nav className={`text-[#ffffff] z-50 text-xl fixed top-[10vh] w-full lg:invisible bg-green-600 overflow-hidden transition-all duration-500  ${show?'visible h-[90vh]':'invisible h-0'} `}
        // :class="show?'visible h-[85vh]':'invisible h-0'"
       
                >
                    <Link to='/home'>
                    <p 
                    className={`
                    hover:bg-green-500
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='Home'?'text-teal-200':''}
                        `}
                        onClick={()=>ChangeActive('Home')}>
            Home
                        </p></Link>
                        <Link to='/place'  
                        // :class="isactive=='Place'?'text-teal-200':''"
                        // @click="isactiveRoute('Place')"
                        >
                        <p
                        className={`
                        hover:bg-green-500
                            cursor-pointer
                            py-4
                            px-8
                            ${isactive=='Place'?'text-teal-200':''}
                            `}
                            onClick={()=>ChangeActive('Place')}
                            >
            Place</p></Link>
            <Link  to='/service'>
                        <p
                        className={`
                        hover:bg-green-500
                            cursor-pointer
                            py-4
                            px-8
                            ${isactive=='Service'?'text-teal-200':''}
                            `}
                            onClick={()=>ChangeActive('Service')}>
            Service</p></Link>
            <Link to='/about' >
                        <p
                         className={`
                         hover:bg-green-500
                             cursor-pointer
                             py-4
                             px-8
                             ${isactive=='About'?'text-teal-200':''}
                             `}
                             onClick={()=>ChangeActive('About')}>
            About</p></Link>

            <Link to='/store' >
                        <p
                         className={`
                         hover:bg-green-500
                             cursor-pointer
                             py-4
                             px-8
                             ${isactive=='Store'?'text-teal-200':''}
                             `}
                             onClick={()=>ChangeActive('Store')}>
            Store</p></Link>
        </nav>

    </Fragment>
  );
}
