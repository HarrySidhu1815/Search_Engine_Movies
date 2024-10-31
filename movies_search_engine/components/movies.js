"use client"

import React, { useEffect, useState } from 'react'
import MovieCard from './movieCard'

export default function MovieData() {
    const [movies, setMovies] = useState([])
    const [totalMovies, setTotalMovies] = useState(24)

    function handleLoadMoreClick(){
        setTotalMovies(totalMovies + 24)
    }

    useEffect(()=> {
        async function fetchData(){
            const response = await fetch('/api/movies')
            const data = await response.json()

            if(!response.ok){
                console.log('Failed to fetch')
                setMovies([])
            }
            data.slice(0, 50)
            setMovies(data)
        }

        fetchData()
    }, [])
  return (
    <>
    <div className='my-4 flex gap-4 flex-wrap justify-center'>
      {movies.slice(0, totalMovies).map(movie => (<MovieCard key={movie._id} movieData={movie}/>))}
    </div>
    <div onClick={handleLoadMoreClick} className='text-center hover:cursor-pointer my-8 border-b-2 w-4/5'>Load More</div>
    </>
  )
}
