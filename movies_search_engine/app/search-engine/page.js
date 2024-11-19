"use client"

import FilterPanel from '@/components/filter-panel'
import MovieData from '@/components/movies'
import React, { useEffect, useState } from 'react'

export default function SearchPage() {
  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [selectedFilters, setSelectedFilters] = useState({
    Genres: [],
    Type: [],
    "Release Year": [],
    Rating: []
  })

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

    function filterMovies(query = '', filters = selectedFilters) {
      let filteredMovies = allMovies
  
      if (query.trim() !== "") {
        filteredMovies = filteredMovies.filter((movie) =>
          movie.title && movie.title.toLowerCase().includes(query.toLowerCase())
        )
      }
  
      Object.keys(filters).forEach((key) => {
        const options = filters[key]
  
        if (options.length > 0) {
          if (key === 'Genres') {
            filteredMovies = filteredMovies.filter((movie) => {
              const movieGenres = movie.genres ? movie.genres.split(', ') : []
              return options.some((genre) => movieGenres.includes(genre))
            })
          } else if (key === "Type") {
            filteredMovies = filteredMovies.filter((movie) =>
              options.includes(movie.type)
            )
          } else if (key === "Release Year") {
            filteredMovies = filteredMovies.filter((movie) =>
              options.some((range) => {
                const releaseYear = parseInt(movie.releaseYear, 10)
                if (range === "< 1950") return releaseYear < 1950
                if (range === "1951 - 1960") return releaseYear >= 1951 && releaseYear <= 1960
                if (range === "1961 - 1970") return releaseYear >= 1961 && releaseYear <= 1970
                if (range === "1971 - 1980") return releaseYear >= 1971 && releaseYear <= 1980
                if (range === "1981 - 1990") return releaseYear >= 1981 && releaseYear <= 1990
                if (range === "1991 - 2000") return releaseYear >= 1991 && releaseYear <= 2000
                if (range === "2001 - 2010") return releaseYear >= 2001 && releaseYear <= 2010
                if (range === "2011 - 2020") return releaseYear >= 2011 && releaseYear <= 2020
                if (range === "> 2021") return releaseYear > 2021
                return false
              })
            )
          } else if (key === "Rating") {
            filteredMovies = filteredMovies.filter((movie) =>
              options.some((range) => {
                const rating = parseFloat(movie.imdbAverageRating)
                if (range === "< 1.0") return rating < 1.0
                if (range === "1.0 - 5.0") return rating >= 1.0 && rating <= 5.0
                if (range === "5.0 - 7.0") return rating >= 5.0 && rating <= 7.0
                if (range === "7.0 - 9.0") return rating >= 7.0 && rating <= 9.0
                if (range === "> 9.0") return rating > 9.0
                return false
              })
            )
          }
        }
      })
  
      return filteredMovies
    }
  
    function handleInputChange(e) {
      const value = e.target.value
      setSearchValue(value)
  
      const filteredMovies = filterMovies(value)
      setMovies(filteredMovies)
    }
  
    function handleFilterChange(category, selectedOptions) {
      const updatedFilter = { ...selectedFilters, [category]: selectedOptions }
      setSelectedFilters(updatedFilter)
  
      const filteredMovies = filterMovies(searchValue, updatedFilter)
      setMovies(filteredMovies)
    }

  return (
    <div className='flex flex-row'>
        <FilterPanel onFilterChange={handleFilterChange} selectedFilters={selectedFilters}/>
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
