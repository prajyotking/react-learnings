import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Mens from './Mens'
import Womens from './Womens'
import Kids from './Kids'

const About = () => {
  return (
    <div>
      <div className='prCat'>
       <Link to='/product/mens'>Mens</Link>
       <Link to='/product/womens'>Womens</Link>
       <Link to='/product/kids'>Kids</Link>
      </div>
    <Outlet/>
     
    </div>
  )
}

export default About
