import React from 'react'
import logo from './../images/AbhiPayLogo.png'

const Navbar = () => {
  return (
    <div className='flex h-16 bg-purple-900 shadow-md'>
      <img className='md:ml-1' src={logo} alt="Abhipay Logo" />
    </div>
  )
}

export default Navbar
