"use client" // This is client side page as it contains the React logic like handler and useState

import FilterPanel from '@/components/filter-panel'
import Loading from '@/components/loading'
import MovieData from '@/components/movies'
import React, { useEffect, useState } from 'react'

export default function SearchPage() {
  // Use States to store the states of the variable
  const [movies, setMovies] = useState([]) // stores the movies to be displaed on the screen
  const [allMovies, setAllMovies] = useState([]) // stores all the movies in this state
  const [searchValue, setSearchValue] = useState('') // stores the value in the search field from the UI
  const [sortOption, setSortOption] = useState('') // stores all the sort options from the UI selected bu user
  // selectFilters stores all the filters state from the UI 
  const [selectedFilters, setSelectedFilters] = useState({
    Genres: [],
    Type: [],
    "Release Year": [],
    Rating: []
  })
  // This state keeps track of the API request to fetch the records from the database
  const [isLoading, setIsLoading] = useState(false);

  // This will run after the initial page is loaded and will only run when once (not on State change)
  useEffect(()=> {
    if (typeof window === 'undefined') return;

      // fetch All the movies from the server
      async function fetchAllMovies(){
          setIsLoading(true);
          const response = await fetch('/api/movies')
          const data = await response.json()

          if(!response.ok){
              console.log('Failed to fetch')
              setMovies([])
          }
          setMovies(data) // storing the fetched movies
          setAllMovies(data) // storing the fetched movies
          setIsLoading(false); 
      }
      
      // fetching the first 100 movies to be displayed to make laoding of movies faster
      async function fetch100Movies(){
        setIsLoading(true);
        const response = await fetch('/api/movies/100')
        const data = await response.json()

        if(!response.ok){
            console.log('Failed to fetch')
            setMovies([])
        }
        setMovies(data)
        setAllMovies(data) // storing the fetched movies
        setIsLoading(false); // storing the fetched movies
      }

      fetch100Movies()
      fetchAllMovies()
  }, [])

    // We will use Mapper-Reducer now to search the movie or apply filter on very big dataset

    // Mapper Phase: Process and filter data in smaller subsets (e.g., filter or sort movies based on criteria).
    // Reducer Phase: Combine the results of individual subsets to produce the final output (e.g., combine filtered movie lists).

    // STEP 1: Mapper phase: The mapper function can process chunks of the movie dataset based on filters.
    function mapper(chunk, filters, searchQuery) {
      // This function will do the function on very 500 movies chunk to make it faster
      return chunk.filter(movie => {
        let matches = true;
    
        // Search Query
        if (searchQuery && !movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
          matches = false;
        }
    
        // Filters based on different types
        // Filter logic applied on one chunk at a time
        Object.keys(filters).forEach(filterKey => {
          const options = filters[filterKey];
          if (options.length > 0) {
            // Filter based on the Genre
            if (filterKey === 'Genres' && movie.genres) {
              const genres = movie.genres.split(', ');
              matches = matches && options.some(option => genres.includes(option));
            } else if (filterKey === 'Type' && movie.type) {
              matches = matches && options.includes(movie.type);
            } else if (filterKey === 'Release Year' && movie.releaseYear) {
              matches = matches && options.some((range) => {
                const releaseYear = parseInt(movie.releaseYear, 10)
                // If the string cannot be fully converted to a number, parseInt will return only the integer part (if any).
                // If the string cannot be interpreted as a number, it will return NaN (Not a Number).
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
            } else if (filterKey === 'Rating' && movie.imdbAverageRating) {
              matches = matches && options.some((range) => {
                const rating = parseFloat(movie.imdbAverageRating)
                if (range === "< 1.0") return rating < 1.0
                if (range === "1.0 - 5.0") return rating >= 1.0 && rating <= 5.0
                if (range === "5.0 - 7.0") return rating >= 5.0 && rating <= 7.0
                if (range === "7.0 - 9.0") return rating >= 7.0 && rating <= 9.0
                if (range === "> 9.0") return rating > 9.0
                return false
              })
            }
          }
        });
    
        return matches;
      })
    }
  
    // STEP 2: Reducer phase: The reducer function can process chunks of the movie dataset and combine it into one array.
  function reducer(mappedChunks, sortOption) {
  const combinedMovies = mappedChunks.flat(); // Combine all filtered movie chunks into a single array.
  
  // Sorting logic applied after flattening
  return combinedMovies.sort((a, b) => {
    if (sortOption === 'Release Date') {
      return parseInt(b.releaseYear, 10) - parseInt(a.releaseYear, 10);
    } else if (sortOption === 'Rating') {
      return parseFloat(b.imdbAverageRating) - parseFloat(a.imdbAverageRating);
    } else if (sortOption === 'Title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
}
    

    function filterMovies(query = '', filters = selectedFilters, sort = sortOption) {
      const CHUNK_SIZE = 500; // Adjust based on dataset size.
      const chunks = [];
    
      // Divide the dataset into smaller chunks
      for (let i = 0; i < allMovies.length; i += CHUNK_SIZE) {
        chunks.push(allMovies.slice(i, i + CHUNK_SIZE));
      }
    
      // Apply mapper to each chunk
      const mappedChunks = chunks.map(chunk => mapper(chunk, filters, query));
    
      // Use reducer to combine results
      return reducer(mappedChunks, sort);
    }

    // Handle the Input change in the search box
    function handleInputChange(e) {
      const value = e.target.value
      setSearchValue(value)
  
      const filteredMovies = filterMovies(value)
      setMovies(filteredMovies)
    }
    
    // Handle the Filter Change function -> Updating the filter state to store current filter value using UI
    function handleFilterChange(category, selectedOptions) {
      const updatedFilter = { ...selectedFilters, [category]: selectedOptions }
      setSelectedFilters(updatedFilter)
  
      const filteredMovies = filterMovies(searchValue, updatedFilter)
      setMovies(filteredMovies)
    }

    // Handle the Sort Change function -> Updating the sort state to store current filter value using UI
    function handleSortChange(sort) {
      setSortOption(sort)
      const filteredMovies = filterMovies(searchValue, selectedFilters, sort)
      setMovies(filteredMovies)
    }

    // Only show loading component when API request fails
    if (isLoading) {
      return <Loading />
    }

  return (
    <div className='flex flex-row'>
        {/* Filter Panel that will show all the filters and sort types and value */}
        <FilterPanel onFilterChange={handleFilterChange} selectedFilters={selectedFilters} onSortChange={handleSortChange} sortOption={sortOption}/>
      <div className='w-4/5 py-6 flex flex-col items-center'>
        <h1 className='text-center text-3xl mb-4'>Search Movie</h1>
        <div className='w-3/4'>
        {/* Search Box to take the searched value to filter the movies*/}
            <input onChange={handleInputChange} value={searchValue} className='w-full border px-8 py-2 border-black bg-slate-50'  type='text' name='movie' placeholder='Search Movie with title'/>
        </div>
        {/* Movie Data that will show all the movies after applying filters and sort values */}
       <MovieData movies={movies}/>
      </div>
    </div>
  )
}
