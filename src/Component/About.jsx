import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about">
      <div
        className=" bg-[#D8D3CD] grid col-span-12 p-46 justify-center "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div
          className="hero min-h-screen bg-[#DAD4B5] rounded-2xl shadow-xl"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div
            className="hero-content flex-col lg:flex-row text-[#393B44]  "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src="./img/pic-1.jpg"
              alt="Wiphaphorn"
              className=" shadow-xl w-[250px] rounded-2xl overflow-hidden "
            />
            <div>
              <h1 className="text-5xl font-bold">ABOUT ME!</h1>
              <p className="p-6 text-[19px] leading-relaxed">
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
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="text-[#393B44]  rounded-lg p-2 font-bold w-52 btn btn-outline shadow-xl bg-[#A8A196] hover:bg-[#A3D2CA] "
                >
                  Get to know me more
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-[#E0ECE4] rounded-box w-52"
                >
                  <li>
                    <a
                      href="https://www.canva.com/design/DAF4uUn_gaI/QVguIBLF9dYpm9FcGrhQBw/view?utm_content=DAF4uUn_gaI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CV
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/wiphaphorn-pho/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Nan-wp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="mailto:wiphaphorn.wp@gmail.com">E-mail</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
