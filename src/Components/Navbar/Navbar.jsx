import React, { useContext, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { assets } from '../../assets/assets';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Logo from "./logo.gif"
import { contextStore } from '../../Context/storeContext';
import Login from '../../Login/Login';
import SignUp from '../../Login/SignUp';
import { LuDot } from "react-icons/lu";


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    function handleSidebar() {
        setSidebar(!sidebar);
    }

    const { cartItem, showLoginPage, setShowLoginPage, showSignUp, setShowSignUp } = useContext(contextStore);

    return (
        <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <div className="text-2xl font-extrabold text-orange-600 tracking-wide flex items-center">

                    <img src={Logo} alt="mainlogo" className='h-15 inline' />
                    <span>SnapEats<span className="text-orange-600">.</span></span>

                </div>


                <ul className="hidden md:flex gap-6 text-gray-700 text-lg font-medium">
                    <Link to="/">
                        <li className="hover:text-orange-500 transition duration-300 cursor-pointer hover:underline">Home</li>
                    </Link>

                    <Link to="/Menu">
                        <li className="hover:text-orange-500 transition duration-300 cursor-pointer hover:underline">Menu</li>
                    </Link>

                    <Link to="/About">
                        <li className="hover:text-orange-500 transition duration-300 cursor-pointer hover:underline">About Us</li>
                    </Link>

                    <Link to="/Contact">
                        <li className="hover:text-orange-500 transition duration-300 cursor-pointer hover:underline">Contact Us</li>
                    </Link>
                </ul>


                <div className="hidden md:flex items-center gap-6">
                    <img src={assets.search_icon} alt="search" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />

                    <div>
                        <Link to="/Cart">
                            <img src={assets.bag_icon} alt="cart" className="w-6 h-6 cursor-pointer hover:scale-110 transition filter invert" />
                            {Object.keys(cartItem).length > 0 && (
                                <LuDot className='text-orange-600 absolute top-3' size={40} />
                            )}
                        </Link>
                    </div>

                    <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition hover:cursor-pointer" onClick={() => setShowLoginPage(!showLoginPage)}>
                        Sign In
                    </button>

                </div>


                <div className="md:hidden text-3xl text-gray-700 cursor-pointer" onClick={handleSidebar}>

                    {
                        !sidebar ? <RxHamburgerMenu size={30} /> : <RxCross1 size={30} />
                    }
                </div>


                {sidebar && (
                    <div className='absolute w-full top-17 right-0 p-2 pb-10 z-50 bg-white'>
                        <ul className="w-full mt-12 flex flex-col gap-5 items-center text-gray-800 font-medium">
                            <Link to="/">
                                <li className="hover:text-orange-500 cursor-pointer text-xl hover:underline">Home</li>
                            </Link>

                            <Link to="/Menu">
                                <li className="hover:text-orange-500 cursor-pointer text-xl hover:underline">Menu</li>
                            </Link>

                            <Link to="/About">
                                <li className="hover:text-orange-500 cursor-pointer text-xl hover:underline">About Us</li>
                            </Link>

                            <Link to="/Contact">
                                <li className="hover:text-orange-500 cursor-pointer text-xl hover:underline">Contact Us</li>
                            </Link>
                            <li className="pt-4">
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-full w-full hover:bg-orange-600 transition hover:cursor-pointer" onClick={() => setShowLoginPage(!showLoginPage)}>
                                    Sign In
                                </button>
                            </li>
                        </ul>

                    </div>
                )}
            </nav>
            {
                showLoginPage ? (showSignUp ? <Login /> : <SignUp />) : ""
            }
        </header>
    );
};

export default Navbar;
