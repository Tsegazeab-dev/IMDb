import Link from 'next/link';
import React from 'react'

function MenuItem({title, destination, Icon}) {
  return (
    <div>
        <Link href={destination} className='hover:text-amber-600 mx-4 lg:mx-6'>
            <Icon className='text-2xl sm:hidden mx-4 lg:mx-6'/>
        <p className='hidden sm:inline hover:text-amber-600 text-sm my-2'>{title}</p>
        </Link>
    </div>
  )
}

export default MenuItem;