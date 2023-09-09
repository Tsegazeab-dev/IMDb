import React from 'react'

export default function Result({data}) {
  return (
    <div>
        {
            data.map((singleMovie)=>(
                <div key={singleMovie.id}>
                    <h1>{singleMovie.original_title || singleMovie.original_name}</h1>
                </div>
            ))
        }
    </div>
  )
}
