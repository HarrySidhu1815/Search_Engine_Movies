import FilterPanel from '@/components/filter-panel'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-row'>
        <FilterPanel />
      <div className='w-4/5 py-6 flex flex-col items-center'>
        <h1 className='text-center text-3xl mb-4'>Search Movie</h1>
        <div className='w-3/4'>
            <input className='w-full border px-8 py-2 border-black bg-slate-50'  type='text' name='movie' placeholder='Search Movie with title'/>
        </div>
       
      </div>
    </div>
  )
}
