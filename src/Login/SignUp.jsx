import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { contextStore } from '../Context/storeContext';

const SignUp = () => {
  const { setShowLoginPage, showLoginPage, showSignUp, setShowSignUp } = useContext(contextStore);

  return (
    <div className="fixed inset-0  bg-opacity-10 backdrop-blur flex justify-center items-center z-50">
      <div className="bg-white shadow-lg w-[90%] max-w-md p-8 rounded-xl relative">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
          <button
            className="text-gray-500 hover:text-gray-700 hover:cursor-pointer"
            onClick={() => setShowLoginPage(!showLoginPage)}
          >
            <img
              src={assets.cross_icon}
              alt="Close"
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors duration-300 font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="my-1 text-gray-600 font-medium">
          Already have an Account?{' '}
          <span
            className="cursor-pointer text-orange-600 hover:underline"
            onClick={() => setShowSignUp(!showSignUp)}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
