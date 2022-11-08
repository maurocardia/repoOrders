import { useState } from 'react'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Closer from './components/Closer'
import Home from './components/Home'
import Order from './components/Order'


function App() {
  

  return (
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:id" element={<Order/>} />
            <Route path="/closer" element={<Closer/>} />

          
          </Routes>
        </HashRouter>
    
    
  )
}

export default App
