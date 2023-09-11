import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineLike} from "react-icons/ai"

function Card({movie}) {
  return (
    <div className='cursor-pointer sm:hover:shadow-slate-400 sm:border sm:shadow-md rounded-lg sm:p-3 sm:m-2 sm:border-slate-400 transition-shadow duration-200 group'>
      <Link href={`/movies/${movie.id}`}>
        <Image 
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
        width={500}
        height={300}

        className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
        style={{maxWidth: "100%",
        height: "auto"}}

        placeholder='blur'
        blurDataURL='/loadingSpineer.svg'
        alt='image not available'
        />

        <div className='p-2'>
        <p className='line-clamp-2 text-md'>{movie.overview}</p>
        <h2 className='text-lg font-bold truncate'>{movie.title || movie.name}</h2>

        <p className='flex items-center'>{movie.release_date || movie.first_air_date} 
        <AiOutlineLike className='mr-1 ml-3'/> {movie.vote_count}
        </p>
        </div>
      </Link>
    </div>
  )
}

export default Card