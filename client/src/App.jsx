import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Registre from './pages/Registre'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profil from './pages/Profil'
 
const App = () => {
  return (
    <div className='bg-gray-950 w-full min-h-screen text-white'>
      <div className='max-w-3xl mx-auto w-full min-h-screen flex flex-col justify-between'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registre' element={<Registre />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App