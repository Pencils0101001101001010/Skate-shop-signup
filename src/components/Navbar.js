import React from "react";
import { Link } from "react-router-dom";
// import { MdSkateboarding } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 p-3 backdrop-blur-lg border-b border-neutral-700/80 justify-between flex">
      <div className="text-2xl tracking-tighter items-start">
        <Link to={"/"}>
          <span className="text-yellow-300 px-6 font-bold ">Decks To Ride</span>
        </Link>
      </div>
      <div>
        <Link to={"/Login"}>
          <span className="text-yellow-300 px-5 font-bold ">login</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
