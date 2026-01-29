import React from 'react'
import Navbar2 from './Navbar2'
import { useContext } from 'react'
import Theme, { ThemeDataContext } from '../contexts/Theme'


const Navbar = (props) => {
    const [theme] = useContext(ThemeDataContext)
  return (
    <div className='navMain'>
      <h1>{theme}</h1>
      
       <Navbar2 />
    </div>
  )
}

export default Navbar
