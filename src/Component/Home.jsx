import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="landing" className=" grid col-span-12 ">
      <div className="h-full bg-[#D8D3CD]  flex flex-col justify-center text-center">
        <div
          className="px-64 pt-64 text-[56px] bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          I’m <b>Wiphaphorn</b> Phoemphoklang Frontend Web Developer
        </div>
        <div
          className="pb-64 px-96 pt-16 text-[26px] bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          "I am someone who enjoys self-development and constantly seeks to
          learn new things and aspiring to specialize as a Frontend Developer."
        </div>
      </div>
    </div>
  );
}