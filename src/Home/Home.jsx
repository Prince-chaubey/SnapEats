import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Hero/Hero'
import Menu from '../Menu/Menu'
import Foodlist from '../Foodlist/Foodlist'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Menu/>
        <Foodlist/>
    </div>
  )
}

export default Home