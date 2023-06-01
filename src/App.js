import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from './Components/Home';
import Users from './Components/Users.js/Users';
import Products from './Components/Products';

const App = () => {



  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/products' element={<Products />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App