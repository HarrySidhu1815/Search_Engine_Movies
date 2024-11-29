// Filter Category component responsible for showacasing or present the each filter category to the filter panel on the left side of the website
import React, { useState } from 'react'
import DropArrow from './icons/DropArrow'

export default function FilterCategory({filter, onFilterChange, selectedFilters}) {
    const [showFilters, setShowFilters] = useState(false) // state to store state for showing the selected filter category

    // Different Filter options (static)
    let genres_options = ['War & Politics', 'Horror', 'Thriller', 'Musical', 'Soap', 'Reality', 'Fantasy', 'Kids', 'TV Movie', 'Science Fiction', 'Documentary', 'Animation', 'Western', 'Drama', 'Short', 'Family', 'Reality-TV', 'Film-Noir', 'Sci-Fi', 'Talk', 'Sci-Fi & Fantasy', 'Game-Show', 'Mystery', 'History', 'War', 'Comedy', 'News', 'Action', 'Biography', 'Crime', 'Talk-Show', 'Adventure', 'Romance', 'Sport', 'Music']
    let type_options = ['movie', 'tv']
    let releaseYear_option = ['< 1950', '1951 - 1960', '1961 - 1970', '1971 - 1980', '1981 - 1990', '1991 - 2000', '2001 - 2010', '2011 - 2020', '> 2021']
    let rating = ['< 1.0','1.0 - 5.0', '5.0 - 7.0', '7.0 - 9.0', '> 9.0']

    let options

    // assigning the value of option based on the different filter type
    if(filter === 'Type') options = type_options
    else if (filter === 'Genres') options = genres_options
    else if (filter === 'Release Year') options =releaseYear_option
    else if (filter === 'Rating') options = rating
    else options = ['No options']

    // Handle the filter change from the actions of the user on the UI
    const handleCheckboxChange = (option) => {
      let updatedFilters;
      if (selectedFilters.includes(option)) {
        updatedFilters = selectedFilters.filter((item) => item !== option);
      } else {
        updatedFilters = [...selectedFilters, option];
      }
      onFilterChange(filter, updatedFilters);
    };
  
  // Component (HTML tags) responsible for printing or displaying the filter category
  return (
    <>
    <div onClick={() => {setShowFilters(!showFilters)}} className='flex font-medium flex-row justify-between cursor-pointer mb-2 px-4 text-xl hover:bg-slate-100'>
      {filter}
      <DropArrow />
    </div>
    {showFilters && (<div className='px-6 text-base mb-4'>
        {options.map((option, index) => (
          <div key={`${option}-${index}`}>
          <input
            id={`selectedOption-${option}`}
            type="checkbox"
            checked={selectedFilters.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            name="options"
          />
          <label className='ml-2' htmlFor={`selectedOption-${option}`}>{option}</label>
        </div>
        ))}
    </div>)}
    </>
  )
}
