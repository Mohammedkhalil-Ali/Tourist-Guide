import * as React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';


export default function TabPanel() {

const [show ,setShow]=useState(false)
const [isactive ,setisactive]=useState('home')
function ChangeActive(name){
    setisactive(name)
}
function ChangeShow(){
    setShow(!show)
}
  return (
    <Fragment>
        <header class="w-100vw h-[10vh] relative lg:relative top-0 bg-[#12141D] text-white overflow-hidden "  id="home">
        <div class="logo h-[10vh] w-[100vw] flex justify-between items-center">
            <p class="w-5/6 md:w-4/6 pl-8 text-xl font-mono">Mohammed<span class="text-red-500">Khalil</span></p>
        <nav class="text-white text-xl font-mono
        ">
            <p   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#0630ff]
                        cursor-pointer
                        ${isactive=='home'?'text-red-500':''}
                            `}
                        id="home"
                        onClick={()=>ChangeActive('home')}
                        // @click="isactiveRoute('home')"
                        >Home</p>
            <p   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ${isactive=='skills'?'text-red-500':''}
                            `}
                        id="skills"
                        onClick={()=>ChangeActive('skills')}
                        // :class="isactive=='skills'?'text-red-500':''"
                        // @click="isactiveRoute('skills')"
                        >Skills</p>
            <p   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ${isactive=='project'?'text-red-500':''}
                            `}
                        onClick={()=>ChangeActive('project')}
                        // :class="isactive=='project'?'text-red-500':''"
                        // @click="isactiveRoute('project')"
                        >Project</p>
                        
            <p   className={`
                        hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#171923]
                        cursor-pointer
                        ${isactive=='about'?'text-red-500':''}
                            `}
                        onClick={()=>ChangeActive('about')}
                        // :class="isactive=='about'?'text-red-500':''"
                        // @click="isactiveRoute('about')"
                        >About</p>

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

    <nav className={`text-white text-xl fixed top-[10vh] w-full lg:invisible bg-[#12141D] overflow-hidden transition-all duration-500  ${show?'visible h-[90vh]':'invisible h-0'} `}
        // :class="show?'visible h-[85vh]':'invisible h-0'"
       
                >
            <p   className={`
                    hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='home'?'text-red-500':''}
                        `}
                        onClick={()=>ChangeActive('home')}
                        // :class="isactive=='home'?'text-red-500':''"
                        // @click="isactiveRoute('home')"
                        >Home</p>
            <p   className={`
                    hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='skills'?'text-red-500':''}
                        `}
                        onClick={()=>ChangeActive('skills')}
                        // :class="isactive=='skills'?'text-red-500':''"
                        // @click="isactiveRoute('skills')"
                        >Skills</p>
            <p   className={`
                    hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='project'?'text-red-500':''}
                        `}
                        onClick={()=>ChangeActive('project')}
                        // :class="isactive=='project'?'text-red-500':''"
                        // @click="isactiveRoute('project')"
                        >Project</p>
            <p   className={`
                    hover:bg-[#171923]
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='about'?'text-red-500':''}
                        `}
                        onClick={()=>ChangeActive('about')}
                        // :class="isactive=='about'?'text-red-500':''"
                        // @click="isactiveRoute('about')"
                        >About</p>
        </nav>

    </Fragment>
  );
}
