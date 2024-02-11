import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import bgImg from "../assets/weDo.png";
import Footer from "../components/footer/footer";
import "./service.css";

const WeDo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    display: "inline-flex",
    background: "linear-gradient(to right, #FCAB64 50%, transparent 50%)",
    backgroundSize: "200% 100%",
    transition: "background-position 0.5s ease-out, color 0.5s ease",
    backgroundPosition: isHovered ? "left bottom" : "right bottom",
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className=" px-2 md:px-12 py-12 xl:px-40 2xl:px-96 ">
        <div className="flex justify-center text-4xl md:text-7xl 2xl:text-8xl">
          <h1 className=" text-center leading-tight text-[#DF2323] font-black">
            Where Coltfox ideas deliver a genuinely memorable brand experience.
          </h1>
        </div>
      </div>
      <div className="imgBg mt-10">
        <img className="w-full" src={bgImg} alt="" />
      </div>
      <div className="bg-[#D9D3D3] px-6 sm:px-20 xl:px-36 2xl:px-64">
        <div className="flex-col">
          <div className="service-pages cursor-pointer flex gap-6 sm:gap-10 pt-20 justify-between items-start">
            <div className="service1 w-16 border-2 border-[#DF2323] text-[#DF2323] text-center p-2 rounded-3xl">
              01
            </div>
            <div className="flex items-start gap-4 sm:gap-0">
              <div className="textWeDo md:pr-20 lg:pr-40 xl:pr-80">
                <h1 className="service2 text-2xl md:text-4xl lg:text-5xl font-black">
                  Performance Marketing
                </h1>
                <p className="my-4">
                  Digital marketing is in a constant state of motion. We
                  continuously explore new strategies, tactics, and technologies
                  to optimize your campaigns.
                </p>
              </div>
              <div className="arrow self-auto service3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00391 42L42.0039 2M42.0039 2H6.00391M42.0039 2V38"
                    stroke="#012033"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="black my-10 h-[1px] bg-black flex justify-center"></div>
          <div className="flex service-pages cursor-pointer gap-6 sm:gap-10 pt-12 sm:pt-20 justify-between items-start">
            <div className="service1 w-16 border-2 border-[#DF2323] text-[#DF2323] text-center p-2 rounded-3xl">
              02
            </div>
            <div className="flex items-start gap-4 sm:gap-0">
              <div className="textWeDo md:pr-20 lg:pr-40 xl:pr-80">
                <h1 className="service2 text-2xl md:text-4xl lg:text-5xl font-black">
                  Omni-channel Marketing
                </h1>
                <p className="my-4">
                  Using a multi-channel approach, we provide a seamless and
                  integrated experience to reach and engage your customers
                  through various touchpoints.
                </p>
              </div>
              <div className="arrow self-auto service3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00391 42L42.0039 2M42.0039 2H6.00391M42.0039 2V38"
                    stroke="#012033"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="black my-10 h-[1px] bg-black flex justify-center"></div>
          <div className="flex service-pages cursor-pointer gap-6 sm:gap-10 pt-12 sm:pt-20 justify-between items-start">
            <div className="service1 w-16 border-2 border-[#DF2323] text-[#DF2323] text-center p-2 rounded-3xl">
              03
            </div>
            <div className="flex items-start gap-4 sm:gap-0">
              <div className="textWeDo md:pr-20 lg:pr-40 xl:pr-80">
                <h1 className="service2 text-2xl md:text-4xl lg:text-5xl font-black">
                  Lead Generation
                </h1>
                <p className="my-4">
                  Coltfox campaigns marry the medium, message, and audience to
                  generate more leads, increasing conversions and revenues.
                </p>
              </div>
              <div className="arrow self-auto service3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00391 42L42.0039 2M42.0039 2H6.00391M42.0039 2V38"
                    stroke="#012033"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="black my-10 h-[1px] bg-black flex justify-center"></div>
          <div className="flex service-pages cursor-pointer gap-6 sm:gap-10 pt-12 sm:pt-20 justify-between items-start">
            <div className="service1 w-16 border-2 border-[#DF2323] text-[#DF2323] text-center p-2 rounded-3xl">
              04
            </div>
            <div className="flex items-start gap-4 sm:gap-0">
              <div className="textWeDo md:pr-20 lg:pr-40 xl:pr-80">
                <h1 className="service2 text-2xl md:text-4xl lg:text-5xl font-black">
                  Content Marketing
                </h1>
                <p className="my-4">
                  Our COPE strategy ensures a consistent brand message and image
                  across platforms to strengthen brand recognition and reach a
                  broader audience.
                </p>
              </div>
              <div className="arrow self-auto service3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00391 42L42.0039 2M42.0039 2H6.00391M42.0039 2V38"
                    stroke="#012033"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="black my-10 h-[1px] bg-black flex justify-center"></div>
        </div>

        <div className="left flex-col lg:flex-row flex gap-12 lg:gap-32 pt-6 sm:pt-10 pb-6 lg:pb-20 justify-between">
          <div>
            <div className="bg-[#FCAB64] bg-[url('/noise-grey.png')] bg-blend-overlay text-center h-fit w-fit mb-10 px-4 rounded-full py-1 mt-2 shadow-[0_2px_4px_#00000040] text-black text-xl ">
              Our Work
            </div>
            <a
              style={hoverStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              href=""
              className="flex justify-center items-center  w-max rounded-full p-2 gap-2 sm:gap-14 sm:p-2 sm:px-5 border border-[#FCAB64]"
            >
              <div className="text-[#012033] font-normal sm:text-xl">
                Featured Projects
              </div>
              <div className="w-10">
                <svg
                  className="w-full h-auto "
                  viewBox="0 0 70 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7.44H35H52H69M69 7.44L54.975 1M69 7.44L54.975 15"
                    stroke="#012033"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div>
            <div className="leading-[normal] text-4xl sm:text-[3rem] font-semibold text-[#121212] mb-20">
              Coltfox Reflections : Our first Indian marketing Awards Win!
            </div>
          </div>
        </div>

        <div className="left flex-col sm:flex-row flex gap-20 pb-20">
          <div className="sm:w-full lg:w-1/2 items-center justify-center">
            <img src="./recimg copy.png" className="w-full" />
            <div className="leading-10 text-3xl sm:text-[1.66rem] font-semibold text-[#121212] mt-5 mb-2">
              <h3>The REC and future proofing their new brand</h3>
            </div>
            <div className="leading-7 font-normal text-base text-[#012033]">
              <p>
                The business needed to shift with the times to make it more
                modern & accessible to a new breed of recruitment firms.
              </p>
            </div>
            <button class="font-poppins text-lg font-normal leading-5 text-[#DF2323] w-2/5 w-fit my-4 flex shadow-none p-2 rounded-full">
              View Case Study{" "}
              <svg
                className="ml-5 items-center"
                width="40"
                height="18"
                viewBox="0 0 42 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9.93886H14.5H41M41 9.93886L32.75 1.375M41 9.93886L32.75 19.9921"
                  stroke="#012033"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="sm:w-full lg:w-1/2">
            <img src="./itv.png" className="w-full" />
            <div className="leading-10 text-3xl sm:text-[1.64rem] font-semibold text-[#121212] mt-5 mb-2">
              <h3>A new distribution platform for ITV Studios</h3>
            </div>
            <div className="leading-7 font-normal text-base text-[#012033]">
              <p>
                They realized this was preventing them from providing their
                customers the kind of online service and experience.
              </p>
            </div>
            <button class="font-poppins text-lg font-normal leading-5 text-[#DF2323] w-2/5 w-fit my-4 flex shadow-none p-2 rounded-full">
              View Case Study{" "}
              <svg
                className="ml-5 items-center"
                width="40"
                height="18"
                viewBox="0 0 42 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9.93886H14.5H41M41 9.93886L32.75 1.375M41 9.93886L32.75 19.9921"
                  stroke="#012033"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WeDo;
