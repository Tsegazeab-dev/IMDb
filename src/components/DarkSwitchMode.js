"use client"
import React, { useEffect, useState } from 'react'
import {MdLightMode} from "react-icons/md";
import {BsFillMoonFill} from "react-icons/bs"
import { useTheme } from 'next-themes';
function DarkSwitchMode() {
    const {systemTheme,theme, setTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [mounted, setMounted] = useState();
    useEffect(()=>setMounted(true), []);
  return (
    <>
    {/* mounted state is added to make sure the page is mounted completely before using a switch mode */}
    {mounted && (currentTheme === "dark" ? (<MdLightMode  className='cursor-pointer hover:text-amber-500' onClick={()=>setTheme("light")}/>) : (<BsFillMoonFill  className='cursor-pointer hover:text-amber-500' onClick={()=>setTheme("dark")}/>))}
    </>
  )
}

export default DarkSwitchMode;