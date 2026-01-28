import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Kids from './pages/Kids'
import Womens from './pages/Womens'

const App = () => {
     let navigate = useNavigate()
   
    const btnClicked = () =>{
      navigate('/')
    }

  return (
    <div>
      <Navbar />
      <button onClick={btnClicked}>Return to HomePage</button>
        <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />}>
            <Route path='mens' element={<Mens/>}/>
            <Route path='womens' element={<Womens/>}/>
            <Route path='kids' element={<Kids/>}/>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
