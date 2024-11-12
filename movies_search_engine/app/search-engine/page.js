"use client"

import FilterPanel from '@/components/filter-panel'
import MovieData from '@/components/movies'
import { getAllGenres } from '@/lib/movies'
import React, { useEffect, useState } from 'react'

export default function SearchPage() {
  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')


  useEffect(()=> {
    if (typeof window === 'undefined') return;
      async function fetchAllMovies(){
          const response = await fetch('/api/movies')
          const data = await response.json()

          if(!response.ok){
              console.log('Failed to fetch')
              setMovies([])
          }
          setMovies(data)
          setAllMovies(data)
      }

      async function fetch100Movies(){
        const response = await fetch('/api/movies/100')
        const data = await response.json()

        if(!response.ok){
            console.log('Failed to fetch')
            setMovies([])
        }
        setMovies(data)
        setAllMovies(data)
      }

      fetch100Movies()
      fetchAllMovies()
  }, [])

  function handleInputChange(e){
    const value = e.target.value

    setSearchValue(value)
    
    if(value.trim() != ""){
      const search_movies = allMovies.filter((movie) => movie.title && movie.title.toLowerCase().includes(value.toLowerCase()))
  
      setMovies(search_movies)
    }
  }

  return (
    <div className='flex flex-row'>
        <FilterPanel/>
      <div className='w-4/5 py-6 flex flex-col items-center'>
        <h1 className='text-center text-3xl mb-4'>Search Movie</h1>
        <div className='w-3/4'>
            <input onChange={handleInputChange} value={searchValue} className='w-full border px-8 py-2 border-black bg-slate-50'  type='text' name='movie' placeholder='Search Movie with title'/>
        </div>
       <MovieData movies={movies}/>
      </div>
    </div>
  )
}
