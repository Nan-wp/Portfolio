import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";
export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about">
      <div
        className=" bg-[#3F4E4F] grid col-span-12 p-46 justify-center "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          className="hero min-h-screen bg-[#3F4E4F] rounded-2xl shadow-xl flex"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div
            className="hero-content flex-col lg:flex-row text-white  "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="w-[250px] pl-12 ">
              <img
                src="./img/pic-1.jpg"
                alt="Wiphaphorn"
                className=" shadow-xl rounded-full w-full overflow-hidden "
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center ">
                <h1 className="text-5xl font-bold pt-10">ABOUT ME!</h1>
                <div className="w-[80px] h-[80px]">
                  <img
                    src="./img/waving-hand_medium-light-skin-tone_1f44b-1f3fc_1f3fc 1.png"
                    alt="wave hand"
                  />
                </div>
              </div>
              <p className="p-6 text-[19px] text-center leading-relaxed">
                "I graduated from the{"  "}
                <b>
                  Junior Software Developer program (Bootcamp) at Generation
                  Thailand cohort 6
                </b>
                ,
                <br />
                where I received training in both technical and soft skills.
                <br />
                My diverse work experience has enabled me to adapt to changing
                situations and collaborate effectively in teams.
                <br />
                With my passion for continuous self-improvement,
                <br />
                I am dedicated to becoming a Software Developer with expertise
                in the future."
                <br />
              </p>
              <div className="flex justify-center ">
                <div className="p-4 hover:shadow-xl rounded-xl ">
                  <a
                    href="https://www.canva.com/design/DAF4uUn_gaI/QVguIBLF9dYpm9FcGrhQBw/view?utm_content=DAF4uUn_gaI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faAddressCard}
                      className="w-[30px] h-[30px]"
                    />
                  </a>
                </div>
                <div className="p-4 hover:shadow-xl rounded-xl">
                  <a
                    href="https://www.linkedin.com/in/wiphaphorn-pho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-[30px] h-[30px]"
                    />
                  </a>
                </div>
                <div className="p-4 hover:shadow-xl rounded-xl">
                  <a
                    href="https://github.com/Nan-wp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-[30px] h-[30px]"
                    />
                  </a>
                </div>
                <div className="p-4 hover:shadow-xl rounded-xl">
                  <a href="mailto:wiphaphorn.wp@gmail.com">
                    <FontAwesomeIcon
                      icon={faEnvelopeOpen}
                      className="w-[30px] h-[30px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
