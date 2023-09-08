import React from 'react'
import NavBarItem from './NavBarItem'

function NavBar() {
  return (
    <div className='flex justify-center dark:bg-gray-500 p-4 bg-amber-100 lg:text-lg'>
   <NavBarItem title = {"Trending"} params={"fetchTrending"}/>
   <NavBarItem title = {"Top Rated"} params={"fetchTopRated"}/>
   </div>
  )
}

export default NavBar