import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
