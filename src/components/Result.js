import React from 'react'
import Card from './Card'

export default function Result({data}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto'>
        {
            data.map((movie)=>(
                <Card key='movie.id' movie = {movie}/>
            ))
        }
    </div>
  )
}
