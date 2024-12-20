// Filter Panel component responsible for displaying the filters and sort function on the left side of the windown of webiste
import React from 'react'
import FilterCategory from './filter-category'
import SortCategory from './sort-category'

export default function FilterPanel({ onFilterChange, selectedFilters, onSortChange, sortOption  }) {
  // Different filters and sort type based on which user can perform operations
    const filterData = ['Type', 'Genres', 'Release Year', 'Rating']
    const sortData = ['Release Date', 'Rating', 'Title']

  // HTML script to display the panel with Tailwind CSS
  return (
    <div className='w-1/5 bg-slate-200 sticky h-376 top-24 py-8 px-12 overflow-y-scroll'>
        <div>
            <h3 className='text-2xl font-bold my-4'>Filter Movies</h3>
            {filterData.map((filter, index) => (<FilterCategory filter={filter} key={index} onFilterChange={onFilterChange} selectedFilters={selectedFilters[filter]}/>))}
        </div>
      <div>
        <h3 className='text-2xl font-bold my-4'>Sort Movies</h3>
            {sortData.map((sort, index) => <SortCategory
            sort={sort}
            key={index}
            onSortChange={onSortChange}
            isSelected={sort === sortOption}
          />)}
      </div> 
    </div>
  )
}
