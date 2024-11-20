"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiBriefcase, BiCode, BiHome, BiMailSend, BiRightArrowAlt } from "react-icons/bi";

const HeaderLeft = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };


  return (
    <div className='md:flex-1'>
       <div
        className={`min-h-screen top-0 hidden md:sticky
        md:flex items-center justify-center
        ${theme === "dark" ? "bg-white text-black" : "bg-teal-600 text-white"}`}
      >
        <div className="absolute -mt-[880px] left-4">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-lg 
            bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
            <ul className='flex flex-col gap-10'>
                    <li className='flex
                    items-center justify-center cursor-pointer
                    font-medium transition-all duration-200
                    group sm:text-lg md:text-xl xl:text-3xl'>
                    <BiRightArrowAlt className='text-4xl
                    -translate-x-5 opacity-0 transform
                    transition-all duration-200 
                    group-hover:opacity-100 
                    group-hover:translate-x-0'
                    />    

                    <Link href='/' 
                    className='transition-all duration-200
                    hover:translate-x-3'>Home</Link>
                    </li>
                {["Experience",'Project','Contact'].
                map((item)=>(
                    <li key={item} className='flex
                    items-center justify-center cursor-pointer
                    font-medium transition-all duration-200
                    group sm:text-lg md:text-xl xl:text-3xl'>
                    <BiRightArrowAlt className='text-4xl
                    -translate-x-5 opacity-0 transform
                    transition-all duration-200 
                    group-hover:opacity-100 
                    group-hover:translate-x-0'
                    />    

                    <a href={`../${item}`} 
                    className='transition-all duration-200
                    hover:translate-x-3'>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
       <div
        className={`fixed left-0 right-0 top-0 z-10
        flex justify-evenly p-5 md:hidden
        ${theme === "dark" ? "bg-darkBg text-white" : "bg-teal-600 text-black"}`}
           >
            <Link href='/' className='flex flex-col
            items-center justify-center'>
                <BiHome className='text-2xl'/>
                <span className='text-xs'>Home</span>    
            </Link>
            <Link href='../Experience' className='flex flex-col
            items-center justify-center'>
                <BiBriefcase className='text-2xl'/>
                <span className='text-xs'>Home</span>    
            </Link>
            <Link href='../Project' className='flex flex-col
            items-center justify-center'>
                <BiCode className='text-2xl'/>
                <span className='text-xs'>Home</span>    
            </Link>
            <Link href='../Contact' className='flex flex-col
            items-center justify-center'>
                <BiMailSend className='text-2xl'/>
                <span className='text-xs'>Home</span>    
            </Link>
        </div>
    </div>
  )
}

export default HeaderLeft