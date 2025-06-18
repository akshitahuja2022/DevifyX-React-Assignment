import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="flex justify-between w-full h-[60px]">
      {/* Navbar Left --- Logo */}
      <div className="m-4 ml-7 text-lg font-bold">
        Tab<span className="text-blue-900">Switch</span>
      </div>

      {/* Navbar Mid --- Navigation */}
      <div className="hidden md:flex">
        <ul className="flex">
          <li className="ml-12 text-lg m-4  cursor-pointer">Home</li>
          <li className="ml-12 text-lg m-4 cursor-pointer">About</li>
          <li className="ml-12 text-lg m-4 cursor-pointer">Tabs</li>
          <li className="ml-12 text-lg m-4 cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Navbar Right --- Login button*/}
      <div className="m-4 hidden md:block">
        <button
          className="border border-black px-5 rounded-xl text-blue-900 font-bold"
          type="button"
        >
          Login
        </button>
      </div>

      {/* Menu Icon */}
      <div onClick={() => setIsMenu(!isMenu)} className="md:hidden mr-5 my-5">
        <IoMenu className="text-xl" />
      </div>

      {/* Sidebar Navigation For Mobile Phone */}
      {isMenu ? (
        <div className="absolute top-16 right-6 bg-white border rounded-lg shadow-md w-48 md:hidden z-50">
          <ul className="flex flex-col text-[1rem] p-4 space-y-3">
            <li href="/" className="cursor-pointer">
              Home
            </li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Tabs</li>
            <li className="cursor-pointer">Contact</li>
            <li>
              <button className="mt-2 w-full border border-black px-4 py-1 rounded-xl text-blue-900 font-bold">
                Login
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
