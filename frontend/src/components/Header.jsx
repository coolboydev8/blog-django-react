import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex p-4 bg-[#c0b2fa79] mb-4 lg:mb-16">
      <div className="flex flex-row items-center justify-between max-w-[960px] w-full mx-auto">
        <div className="flex">
          <h1 className="font-extrabold text-transparent text-lg lg:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
            Full-stack Blog App
          </h1>
        </div>
        <div className="flex">
          <Link
            className="text-white text-md mx-4 hover:text-pink-300"
            to="/register"
          >
            Register
          </Link>
          <span className="text-pink-600 font-extrabold">|</span>
          <Link
            className="text-white text-md mx-4 hover:text-pink-300"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
