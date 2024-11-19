import React from 'react'
import FilterCategory from './filter-category'

export default function FilterPanel({ onFilterChange, selectedFilters }) {
    const filterData = ['Type', 'Genres', 'Release Year', 'Rating']

  return (
    <div className='w-1/5 bg-slate-200 sticky h-376 top-24 py-8 px-12 overflow-y-scroll'>
        <div>
            <h3 className='text-2xl font-bold my-4'>Filter Movies</h3>
            {filterData.map((filter, index) => (<FilterCategory filter={filter} key={index} onFilterChange={onFilterChange} selectedFilters={selectedFilters[filter]}/>))}
        </div>
      <div>
        <h3 className='text-2xl font-bold my-4'>Sort Movies</h3>
            <p>Release Date</p>
            <p>Rating</p>
            <p>Title</p>
      </div> 
    </div>
  )
}
