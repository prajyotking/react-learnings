import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
        <h2>KingWeb2.0</h2>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Products</Link>
        </div>
    </div>
  )
}

export default Navbar
