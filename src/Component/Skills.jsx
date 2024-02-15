import {
  faCss3Alt,
  faFigma,
  faGithub,
  faHtml5,
  faJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skill" className="bg-[#A27B5C] p-36 grid col-span-12 p-46">
      <div
        className="text-[32px] p-10 text-center bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent font-bold"
        data-aos="zoom-out-up"
      >
        Let's see What I can do?
      </div>
      <div className=" flex flex-col text-[#000000] pt-10">
        <div className="flex justify-between text-center">
          <div>
            <FontAwesomeIcon
              icon={faHtml5}
              className="w-[80px] h-[80px] p-4 bg-[#E0ECE4] hover:bg-[#797A7E] rounded-full"
            />
            <p>HTML</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCss3Alt}
              className="w-[80px] h-[80px] p-4 bg-[#E0ECE4] hover:bg-[#797A7E] rounded-full"
            />
            <p>CSS</p>
          </div>
          <div>
            <img
              src="./img/tailwind.svg"
              alt="tailwind"
              className="w-[120px] h-[120px] p-4 bg-[#E0ECE4] hover:bg-[#797A7E] rounded-full"
            />
            <p>TAILWIND</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faJs}
              className="w-[80px] h-[80px] p-4 bg-[#E0ECE4] hover:bg-[#797A7E] rounded-full"
            />
            <p>JAVASCRIPT</p>
          </div>
        </div>
        <div className="flex justify-between pt-10 text-center">
          <div>
            <img
              src="./img/react.svg"
              alt="react"
              className="w-[120px] h-[120px] p-4 bg-[#E0ECE4] hover:bg-[#797A7E] rounded-full"
            />
            <p>REACT</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faNode}
              className="w-[80px] h-[80px] p-4 bg-[#E0ECE4] hover:bg-[#797A7E] rounded-full"
            />
            <p>NODE.JS</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              className="w-[80px] h-[80px] p-4 bg-[#E0ECE4] hover:bg-[#797A7E] rounded-full"
            />
            <p>GITHUB</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faFigma}
              className="w-[80px] h-[80px] p-4 bg-[#E0ECE4] hover:bg-[#797A7E] rounded-full"
            />
            <p>FIGMA</p>
          </div>
        </div>
        <div className="flex justify-between pt-10 text-center">
          <div>
            <img
              src="./img/mongodb.svg"
              alt="mongodb"
              className="w-[120px] h-[120px] p-4 bg-[#E0ECE4] hover:bg-[#797A7E] rounded-full"
            />
            <p>MONGO DB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
