import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoImg from '@/assets/logo.svg'

// Header componenet responsible for displaying the navigation options on the website
// Example - Home, Search-Engine, About
export default function MainHeader() {
  return (
    <header className='h-24 bg-slate-300 flex flex-row justify-between px-8 items-center py-4 sticky top-0'>
        <Link href='/' className='flex flex-row items-center gap-6'>
            <Image width={75} height={75} src={logoImg} alt='Movie Logo' priority/>
            <h2 className='text-3xl font-bold'>Movie Finder</h2>
        </Link>
        <nav>
            <ul className='flex flex-row items-center gap-8'>
                <li>
                    <Link href='/search-engine'>Search Movie</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
