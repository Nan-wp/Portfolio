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
        className=" bg-[#252B48] grid col-span-12 p-46 justify-center "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          className="hero min-h-screen bg-[#252B48] rounded-2xl shadow-xl flex"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div
            className="hero-content flex-col lg:flex-row text-white  "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
           
            <div className="flex flex-col">
              <div className="flex justify-center relative">
                <h1 className="text-5xl font-bold absolute left-[380px] ">ABOUT ME!</h1>
                <div className="w-[80px] h-[80px] absolute right-[350px]">
                  <img
                    src="./img/waving-hand_medium-light-skin-tone_1f44b-1f3fc_1f3fc 1.png"
                    alt="wave hand"
                  />
                </div>
                <div className="w-[250px] pt-6">
                  <img
                src="./img/pic-1.jpg"
                alt="Wiphaphorn"
                className=" shadow-xl mask mask-circle w-full overflow-hidden "/>
                </div>
              </div>
              <p className="p-6 text-center leading-relaxed">
              <div className="text-[18px]">
              Hi my name's Wiphaphorn Phoemphoklang. You can call me ' <b>Nan</b> '.
              <br/>
              After completing high school, due to various problems, I did not pursue
              further education at the university.</div>  <br />
              <div className="text-[18px]">
              After finishing my studies, I had to find a job, leading me to work in
              various roles since a young age. <br/> I started as a salesperson in a department store,
              then worked in a factory, and later became a bank officer.</div><br/>
              <div className="text-[18px]">
              After experiencing different jobs, I realized the importance of pursuing
             my own dreams. When the opportunity presented itself, <br/>I promptly took
             it, and now I graduated from the Junior Software Developer program (Bootcamp) at Generation Thailand,
             <br/>With my passion for continuous self-improvement, I am dedicated to becoming a Software Developer with expertise in the future.</div>
              </p>
              <div className="flex justify-center ">
                <div  className="tooltip" data-tip="Resume">
                <div className="p-4 hover:shadow-xl rounded-xl" >
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
                </div>
                <div  className="tooltip" data-tip="Linkedin">
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
                </div>
                <div  className="tooltip" data-tip="Github">
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
                </div>
                <div  className="tooltip" data-tip="E-mail">
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
    </div>
  );
}
