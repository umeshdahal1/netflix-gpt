import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInform, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInform)
    }
  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/efbc23c4-2bba-4fd7-a0b3-5cfa86ccfc17/NP-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className=" font-bold text-3xl py-4">{isSignInform ? "Sign In" : "Sign Up"}</h1>
        {!isSignInform && <input
          type="Name"
          placeholder= "Full Name"
          className="p-4 my-3 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder={ isSignInform ? "Email or Mobile Number" : "Enter your Valid Email"}
          className="p-4 my-3 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <button className="p-4 my-5 bg-red-700 w-full rounded-lg">
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <div className=" flex items-center justify-center">
          <h1 className=" px-2">New to Netflix ?</h1>
          <p className=" cursor-pointer" onClick={toggleSignInForm}>Sign Up Now</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
