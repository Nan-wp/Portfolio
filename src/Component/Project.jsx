import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Project() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="project"
      className=" bg-[#DCD7C9]  grid col-span-12 p-46 pb-40 justify-center"
    >
      <div
        className="text-[32px] pb-10 pt-10 text-[#393B44] font-bold text-center"
        data-aos="zoom-out-up"
      >
        PROJECT
      </div>
      <div className="flex flex-row gap-x-24 ">
        <div
          className="card w-96 shadow-xl"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <figure>
            <img src="./img/colmar.png" alt="ColmarWeb" />
          </figure>
          <div className="card-body text-[#393B44] bg-[#F3EEEA] rounded-b-2xl">
            <div className="flex flex-row justify-between">
              <h2 className="card-title">ColmarAcademy</h2>
              <div className="dropdown dropdown-right">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost bg-[#E0ECE4] hover:bg-[#A3D2CA] text-[#393B44]"
                >
                  Technologies
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-[#E0ECE4] hover:bg-[#A3D2CA] rounded-box w-52"
                >
                  <li>
                    <p>HTML</p>
                  </li>
                  <li>
                    <p>CSS</p>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              This project originates from Codecademy, which Generation Thailand
              has adopted for use as an assessment to evaluate the knowledge and
              understanding of learners after they have studied HTML and CSS.
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://37-nan-colmar.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn  btn-primary bg-[#E0ECE4] hover:bg-[#A3D2CA]">
                  DEMO
                </button>
              </a>
              <a
                href="https://github.com/Nan-wp/37-nan-colmar"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary bg-[#E0ECE4] hover:bg-[#A3D2CA]">
                  CODE
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-96  shadow-xl "
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0">
          <figure>
            <img src="./img/i-move.png" alt="I-moveWeb" />
          </figure>
          <div className="card-body text-[#393B44] bg-[#F3EEEA] rounded-b-2xl	">
            <div className="flex flex-row justify-between">
              <h2 className="card-title">I.MOVE</h2>
              <div className="dropdown dropdown-right">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost bg-[#E0ECE4] hover:bg-[#A3D2CA] text-[#393B44]"
                >
                  Technologies
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-[#E0ECE4] hover:bg-[#A3D2CA] rounded-box w-52"
                >
                  <li>
                    <p>React.js</p>
                  </li>
                  <li>
                    <p>Tailwind</p>
                  </li>
                  <li>
                    <p>Node.js</p>
                  </li>
                  <li>
                    <p>Express.js</p>
                  </li>
                  <li>
                    <p>MongoDB</p>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              "I.Move" is a web application that helps users keep track of their
              workouts easily can do all the usual stuff like CRUD entries and built for a friendly community vibe,
              it even calculates BMI and the dashboard interface offers a succinct overview of total distance
              and workout time. Collaborated with a team of 4 members to plan and operate for project accomplishment.
            </p>
            <div className="card-actions justify-end">
              <a href="https://imovetracking.vercel.app/"  target="_blank"
                rel="noreferrer">
              <button className="btn btn-primary bg-[#E0ECE4] hover:bg-[#A3D2CA]">
                DEMO
              </button>
              </a>
              <a
                href="https://github.com/Nan-wp/Project-I.Move"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary bg-[#E0ECE4] hover:bg-[#A3D2CA]">
                  CODE
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="card w-96  shadow-xl "
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0">
          <figure>
            <img src="./img/travel_app.png" alt="travel_app" />
          </figure>
          <div className="card-body text-[#393B44] bg-[#F3EEEA] rounded-b-2xl	">
            <div className="flex flex-row justify-between">
              <h2 className="card-title">Hilink</h2>
              <div className="dropdown dropdown-right">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost bg-[#E0ECE4] hover:bg-[#A3D2CA] text-[#393B44]"
                >
                  Technologies
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-[#E0ECE4] hover:bg-[#A3D2CA] rounded-box w-52"
                >
                  <li>
                    <p>React.js</p>
                  </li>
                  <li>
                    <p>Tailwind</p>
                  </li>
                  <li>
                    <p>Next.js</p>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              ""Hilink" is a project where I am trying to learn about writing landing pages and coding with Next.js. 
              I am also practicing using Tailwind CSS with new methods, 
              which allows my project to be fully responsive and have a modern UI/UX website."
            </p>
            <div className="card-actions justify-end">
              <a href="https://project-travel-app.vercel.app/"
               target="_blank"
               rel="noreferrer">
              <button className="btn btn-primary bg-[#E0ECE4] hover:bg-[#A3D2CA]">
                DEMO
              </button>
              </a>
              <a
                href="https://github.com/Nan-wp/Project-Travel-App"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary bg-[#E0ECE4] hover:bg-[#A3D2CA]">
                  CODE
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
