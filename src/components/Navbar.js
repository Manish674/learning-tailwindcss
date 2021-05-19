import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-around h-20 text-white bg-gray-900 sticy">
      <h3 className="text-3xl">Travl</h3>
      <div className="flex items-center justify-end max-w-xs min-w-1/2">
        <div className="mr-4 text-2xl cursor-pointer md:hidden">
          <AiOutlineMenu />
        </div>
        <div className="items-center justify-around flex-grow hidden min-w-full md:flex">
          <Link to="/">Home</Link>
          <Link to="/contact">About</Link>
          <Link to="/about">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
