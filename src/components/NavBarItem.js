"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams } from 'next/navigation'
function NavBarItem({title, params}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre")
  return (
    <div className={`m-4 hover:text-amber-500 font-semibold p-2 ${
        genre && genre === params && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
    }
    `}>
        <Link href={`/?genre=${params}`}>
            <h2>{title}</h2>
        </Link>
    </div>
  )
}

export default NavBarItem