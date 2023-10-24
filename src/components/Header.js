import React from "react";
// import Link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/logo.svg";
const Home = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {/* buttons */}
        <div className="flex items-center justify-between gap-6 transition">
          <Link className="hover:text-violet-900" to="">
            Log In
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-500 text-white rounded-lg px-4 py-3 transition"
            to=""
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Home;
