import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex '>

            <div>
                <p className='font-semibold'>SnapEats</p>
            </div>

            <ul className='flex'>
                <li>Home</li>
                <li>Menu</li>
                <li>About Us</li>
                <li>Contact Us</li>

            </ul>

        </nav>
    </div>
  )
}

export default Navbar