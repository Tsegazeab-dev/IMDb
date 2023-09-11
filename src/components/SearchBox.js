"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function SearchBox() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSubmit (e){
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`)
    }
  return (
   <form onSubmit={handleSubmit} className='flex justify-between items-center max-w-6xl mx-auto px-4'>
    <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='search keywords...' className='w-full h-14 bg-transparent placeholder-gray-500 outline-none flex-1'/>

    <button disabled={!search} type="submit" className='text-amber-600 disabled:text-gray-400'>Search</button>
   </form>
  )
}

export default SearchBox;