import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/homepage'
import Navbar from './components/navbar'

function App() {

  return (
    <div className=''>
    <Navbar />
    
    <Homepage />
    </div>
  )
}

export default App
