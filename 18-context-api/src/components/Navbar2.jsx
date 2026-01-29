import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../contexts/Theme'

const Navbar2 = () => {
   const [theme] = useContext(ThemeDataContext)
//   console.log(props.theme);
  
    
  return (
    <div className='nav2'>
      <h4>{theme}</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
    </div>
  )
}

export default Navbar2
