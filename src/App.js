import React from 'react'

import './scss/app.scss';

import Header from './components/Header'

import { Routes, Route } from "react-router-dom";

// Главные переключаемые части
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Cart from './pages/Cart';



export const SearchContextCreate = React.createContext()


function App() {

  const [searchValue, setSearchValue] = React.useState()



  return (
    <div className="wrapper">
      <SearchContextCreate.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path='cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </SearchContextCreate.Provider>
    </div>

  );
}

export default App;
