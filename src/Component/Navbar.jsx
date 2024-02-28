import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="relative">
        <div className="bg-[#322653] group text-white text-xl  flex justify-center items-center gap-40 p-4 fixed w-full z-10">
          <a href="#landing">
            <button className="p-2 rounded-lg hover:shadow-xl">Home</button>
          </a>

          <a href="#about">
            <button className=" p-2 rounded-lg hover:shadow-xl">About</button>
          </a>
          <a href="#skill">
            <button className=" p-2 rounded-lg hover:shadow-xl">Skills</button>
          </a>
          <a href="#project">
            <button className=" p-2 rounded-lg hover:shadow-xl">
              Projects
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
