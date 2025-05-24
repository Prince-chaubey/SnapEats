import React, { useContext } from 'react'

import Home from './Home/Home'
import Foodlist from "../src/Foodlist/Foodlist"
import About from "../src/About/About"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Contact/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Foodlist />} />
          <Route path='/About' element={<About />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App