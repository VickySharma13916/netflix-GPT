import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toogleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="netflix"
        className="absolute z-0"
      />
      <div className="absolute rounded z-10 w-1/3 left-1/3 my-36 bg-black bg-opacity-80 flex flex-col mx-auto p-16">
        <div className="text-white text-4xl font-semibold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="py-2 bg-gray-800 rounded text-white px-2 my-2"
          />
        )}
        {!isSignIn && (
          <input
            type="number"
            placeholder="Phone Number"
            className="py-2 bg-gray-800 rounded text-white px-2 my-2"
          />
        )}
        <input
          type="text"
          placeholder="Email Address or Number"
          className="py-2 bg-gray-800 rounded text-white px-2 my-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 bg-gray-800 rounded text-white px-2 my-2"
        />
        <button className="text-white rounded bg-red-600 text-lg py-2 my-8">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="text-white cursor-pointer" onClick={toogleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In"}
        </div>
      </div>
    </div>
  );
};

export default Login;
