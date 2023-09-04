import React from "react";
import Header from "./Header";

const Login = () => {
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
        <h1 className=" font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="Email or Mobile Number" className="p-4 my-3 w-full bg-gray-700"/>
        <input type="text" placeholder="Email or Mobile Number" className="p-4 my-3 w-full bg-gray-700"/>
        <button className="p-4 my-5 bg-red-700 w-full rounded-lg">Sign In</button>
        <p>New to Netflix ? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;
