import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="relative">
        <div className="bg-[#797A7E] text-white text-xl  flex justify-center items-center gap-40 p-4 fixed w-full z-10">
          <a href="#landing">
            <button className="hover:bg-gradient-to-r from-gray-500 to-gray-400 p-2 rounded-lg ">
              Home
            </button>
          </a>
          <a href="#about">
            <button className="hover:bg-gradient-to-r from-gray-500 to-gray-400 p-2 rounded-lg">
              About
            </button>
          </a>
          <a href="#skill">
            <button className="hover:bg-gradient-to-r from-gray-500 to-gray-400 p-2 rounded-lg ">
              Skills
            </button>
          </a>
          <a href="#project">
            <button className="hover:bg-gradient-to-r from-gray-500 to-gray-400 p-2 rounded-lg">
              Projects
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
