import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <Link id='navbar' className='max-w-full' href={'/'}>
      <h1 id='textInsideDiv'>PLAYZONE</h1>
    </Link>
  )
}

export default Navbar
