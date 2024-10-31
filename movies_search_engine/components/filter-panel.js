import React from 'react'

export default function FilterPanel() {
    const filterData = ['Category', 'Type', 'Generes', 'Release year', 'Rating']

  return (
    <div className='w-1/5 bg-slate-200 sticky h-376 top-24 py-8 px-12'>
        <div>
            <h3 className='text-2xl font-bold my-4'>Filter Movies</h3>
            {filterData.map((filter, index) => (<p key={index}>{filter}</p>))}
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
