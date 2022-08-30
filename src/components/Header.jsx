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
        <header class="w-100vw h-[10vh] relative lg:relative top-0 shadow-sm bg-[#ffffff] text-green-600 overflow-hidden "  id="home">
        <div class="logo h-[10vh] w-[100vw] flex justify-between items-center">
            <p class="w-5/6 md:w-4/6 pl-8 text-2xl font-mono text-black"><span class="text-green-600 text-4xl">T</span>ourist<span class="text-green-600 text-4xl">G</span>uide</p>
        <nav class="text-green-600 text-xl font-mono
        ">
            <p   className={`hidden
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
                        >Home</p>
            <p   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#dfeee3]
                        cursor-pointer
                        ${isactive=='skills'?'text-black':''}
                            `}
                        id="skills"
                        onClick={()=>ChangeActive('skills')}
                        // :class="isactive=='skills'?'text-black':''"
                        // @click="isactiveRoute('skills')"
                        >Place</p>
            <p   className={`hidden
                        lg:inline
                        lg:px-10
                        xl:px-16
                        h-[10vh]
                        p-[20px]
                        hover:bg-[#dfeee3]
                        cursor-pointer
                        ${isactive=='project'?'text-black':''}
                            `}
                        onClick={()=>ChangeActive('project')}
                        // :class="isactive=='project'?'text-black':''"
                        // @click="isactiveRoute('project')"
                        >Service</p>
                        
            <p   className={`
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

    <nav className={`text-green-600 z-50 text-xl fixed top-[10vh] w-full lg:invisible bg-[#ecffe6] overflow-hidden transition-all duration-500  ${show?'visible h-[90vh]':'invisible h-0'} `}
        // :class="show?'visible h-[85vh]':'invisible h-0'"
       
                >
            <p   className={`
                    hover:bg-[#ffffff]
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='home'?'text-black':''}
                        `}
                        onClick={()=>ChangeActive('home')}
                        // :class="isactive=='home'?'text-black':''"
                        // @click="isactiveRoute('home')"
                        >Home</p>
            <p   className={`
                    hover:bg-[#ffffff]
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='skills'?'text-black':''}
                        `}
                        onClick={()=>ChangeActive('skills')}
                        // :class="isactive=='skills'?'text-black':''"
                        // @click="isactiveRoute('skills')"
                        >Skills</p>
            <p   className={`
                    hover:bg-[#ffffff]
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='project'?'text-black':''}
                        `}
                        onClick={()=>ChangeActive('project')}
                        // :class="isactive=='project'?'text-black':''"
                        // @click="isactiveRoute('project')"
                        >Project</p>
            <p   className={`
                    hover:bg-[#ffffff]
                        cursor-pointer
                        py-4
                        px-8
                        ${isactive=='about'?'text-black':''}
                        `}
                        onClick={()=>ChangeActive('about')}
                        // :class="isactive=='about'?'text-black':''"
                        // @click="isactiveRoute('about')"
                        >About</p>
        </nav>

    </Fragment>
  );
}
