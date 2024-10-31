import Image from 'next/image'
import React from 'react'
import netflix from '@/assets/netflix.png'
export default function MovieCard({movieData}) {

  return (
    <div className='border py-2 px-4 min-w-60 w-1/4'>
        <Image width={250} src={netflix} alt='Netflix Logo'/>
        <div className='my-2'>
            <h2 className='justify-center text-center text-lg font-semibold h-16 flex items-center'>{movieData.title}</h2>
            <p>Type         :   {movieData.type}</p>
            <p>IMDb Rating  :   {movieData.imdbAverageRating}</p>
            <p>Release Year :   {movieData.releaseYear}</p>
            <p>Genres       :   {movieData.genres}</p>
        </div>
    </div>
  )
}
