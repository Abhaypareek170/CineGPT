import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignedUpForm, setIsSignedUpFrom] = useState(false);
  const toggleForm = () => {
    setIsSignedUpFrom(!isSignedUpForm);
  }
  return (
    <>
      <Header />
      <div className='relative w-full h-screen'>
        {/* Background image */}
        <img
          className='w-full h-full object-cover absolute top-0 left-0 z-0'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
          alt="main"
        />

        {/* Login form */}
        <form className='w-3/12 absolute top-36 left-1/2 transform -translate-x-1/2 p-12 text-white bg-[rgba(0,0,0,0.8)] rounded-md z-10'>
          <h1 className='text-3xl font-bold'>{isSignedUpForm ? "Sign Up" : "Sign In"}</h1>
          <input className='my-4 py-3 w-full border border-white bg-gray-800 rounded-sm p-2' type="text" placeholder='Email Address' />
          <input className='my-4 py-3 w-full border border-white bg-gray-800 rounded-sm p-2' type="password" placeholder='Password' />
          {isSignedUpForm && (
            <input className='my-4 py-3 w-full border border-white bg-gray-800 rounded-sm p-2' type="password" placeholder='Confirm Password' />
          )}
          <button className='bg-red-600 py-3 my-4 w-full rounded-md'>{isSignedUpForm ? "Sign Up" : "Sign In"}</button>
          {!isSignedUpForm && <p className='text-gray-400'> <span className='text-white cursor-pointer'>Forgot Password</span></p>}
          <p className='text-gray-400' onClick={toggleForm}>
            {isSignedUpForm ? "Already have an account? " : "New to Netflix?"} <span className='text-white cursor-pointer'>{isSignedUpForm ? "Sign In" : "Sign Up Now"}</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
