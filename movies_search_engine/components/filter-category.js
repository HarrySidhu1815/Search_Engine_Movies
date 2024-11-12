import React, { useState } from 'react'
import DropArrow from './icons/DropArrow'

export default function FilterCategory({filter}) {
    const [showFilters, setShowFilters] = useState(false)
  return (
    <>
    <div onClick={() => {setShowFilters(!showFilters)}} className='flex font-medium flex-row justify-between cursor-pointer mb-2 px-4 text-xl hover:bg-slate-100'>
      {filter}
      <DropArrow />
    </div>
    {showFilters && (<div className='px-6 text-base mb-4'>
        <p>Movies</p>
        <p>TV Show</p>
    </div>)}
    </>
  )
}
