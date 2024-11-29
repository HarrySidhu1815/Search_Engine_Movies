"use client" // This is client side page as it contains the React logic like handler and useState

import React, { useState } from 'react'
import MovieCard from './movieCard'

// Componenet resposible to display all the movies on the website based on filters ans sorts applied
export default function MovieData({movies}) {
    const [totalMovies, setTotalMovies] = useState(24)

    function handleLoadMoreClick(){
        setTotalMovies(totalMovies + 24)
    }

  return (
    <>
    <div className='my-4 flex gap-4 flex-wrap justify-center'>
      {movies.slice(0, totalMovies).map(movie => (<MovieCard key={movie._id} movieData={movie}/>))}
    </div>
   {movies.length >= 24 && <div onClick={handleLoadMoreClick} className='text-center hover:cursor-pointer my-8 border-b-2 w-4/5'>Load More</div>}
   {movies.length === 0 && <h3>No movie found</h3>}
    </>
  )
}
