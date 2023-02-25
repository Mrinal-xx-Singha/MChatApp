import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Mchat</span>
      <div className='user'>
        <img src='https://images.unsplash.com/photo-1677180820364-ff3a2fcb1fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80' alt="" />
        <span>Mrinal</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
