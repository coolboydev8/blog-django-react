import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-4 bg-[#c0b2fa79] mb-6">
      <Link
        className="text-white text-md mx-4 hover:text-pink-300"
        to="/register"
      >
        Register
      </Link>
      <span className="text-white">|</span>
      <Link className="text-white text-md mx-4 hover:text-pink-300" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Header;
