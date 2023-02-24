import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Mchat</span>
      <div className='user'>
        <span>Mrinal</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
