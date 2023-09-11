import Card from '@/components/Card'
import Result from '@/components/Result'
import React from 'react'
const api_key = process.env.API_KEY
async function searchTermPage({params}) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.searchTerm}&include_adult=false&language=en-US&page=1&api_key=${api_key}`)
    .then((res)=>res.json())
    .catch((err)=>{
        throw new Error("failed to fetch")
    })

    const movies = response.results
  return (
    <div >
        {movies && movies.length == 0 && (
            <h1 className='text-center pt-6'>No results found</h1>
        )}

        {
            movies && movies.length > 0 && (
                <Result data={movies}/>
            )
        }
    </div>
  )
}

export default searchTermPage