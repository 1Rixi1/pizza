import React from 'react'

import './scss/app.scss';

import Header from './components/Header'

import { Routes, Route } from "react-router-dom";

// Главные переключаемые части
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';



export const SearchContextCreate = React.createContext()


function App() {

  return (

    <Routes>

      <Route path='/' element={<MainLayout />}>

        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='pizza/:id' element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />

      </Route>

    </Routes>

  );
}

export default App;
