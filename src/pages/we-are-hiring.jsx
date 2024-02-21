import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Wehiring = () => {

    const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  const hoverStyle = {
    display: "inline-flex",
    background: "linear-gradient(to right, #DF2323 50%, transparent 50%)",
    backgroundSize: "200% 100%",
    transition: "background-position 0.5s ease-out, color 0.5s ease, stroke 0.5s ease",
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);

  const handleMouseEnter3 = () => setIsHovered3(true);
  const handleMouseLeave3 = () => setIsHovered3(false);

  const handleMouseEnter4 = () => setIsHovered4(true);
  const handleMouseLeave4 = () => setIsHovered4(false);

  const handleMouseEnter5= () => setIsHovered5(true);
  const handleMouseLeave5 = () => setIsHovered5(false);

  const handleMouseEnter6 = () => setIsHovered6(true);
  const handleMouseLeave6 = () => setIsHovered6(false);

  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className="px-6 sm:px-28 lg:px-48 xl:px-60 2xl:px-96 py-6 sm:py-10">
        <div className="text-[#DF2323] text-4xl sm:text-6xl 2xl:text-[4.5rem] font-semibold">
          <div className="leading-relaxed 2xl:leading-[8.2rem]">
            We are hiring <br/>{" "}
            Our opening
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 xl:px-60 2xl:px-96 sm:pt-10 pt-6 pb-12 sm:pb-28 flex flex-col gap-10">
        <div className="h-[1px] bg-[#787D7F]"></div>
        <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
          <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
            <div className="text-2xl text-[#012033] font-semibold">
              SEO - Senior Manager
            </div>
            <div className="text-xs text-[#012033] lg:text-base font-normal leading-6">
              COLTFOX has been named among the most recommended B2B service SEO
              providers in India, UK, US, Middle East and other parts of the
              world.
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
            <div className="text-xs lg:text-base rounded-full bg-[#DF2323] text-white px-3 py-2 w-fit">
              Hiring Positions Now
            </div>
            <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
              <li className="list-none">SEO - Senior Manager</li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
            </div>
            <div style={{
                ...hoverStyle,
                backgroundPosition: isHovered ? "left bottom" : "right bottom",
                color: isHovered ? "white" : "#DF2323",
              }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="cursor-pointer mail text-xs flex items-center gap-4 lg:text-base rounded-full border border-[#DF2323] text-[#DF2323] px-6 py-2 w-fit">
              Email Us Now
              <svg
                width="55"
                height="16"
                viewBox="0 0 65 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 7.44H32.5H48H63.5M63.5 7.44L50.7125 1M63.5 7.44L50.7125 15"
                  stroke={isHovered ? "white" : "#df2323"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#787D7F]"></div>
        <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
          <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
            <div className="text-2xl text-[#012033] font-semibold">
              SEO - Senior Manager
            </div>
            <div className="text-xs text-[#012033] lg:text-base font-normal leading-6">
              COLTFOX has been named among the most recommended B2B service SEO
              providers in India, UK, US, Middle East and other parts of the
              world.
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
            <div className="text-xs lg:text-base rounded-full bg-[#DF2323] text-white px-3 py-2 w-fit">
              Hiring Positions Now
            </div>
            <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
              <li className="list-none">SEO - Senior Manager</li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
            </div>
            <div style={{
                ...hoverStyle,
                backgroundPosition: isHovered2 ? "left bottom" : "right bottom",
                color: isHovered2 ? "white" : "#DF2323",
              }} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className="cursor-pointer mail text-xs flex items-center gap-4 lg:text-base rounded-full border border-[#DF2323] text-[#DF2323] px-6 py-2 w-fit">
              Email Us Now
              <svg
                width="55"
                height="16"
                viewBox="0 0 65 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 7.44H32.5H48H63.5M63.5 7.44L50.7125 1M63.5 7.44L50.7125 15"
                  stroke={isHovered2 ? "white" : "#df2323"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#787D7F]"></div>
        <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
          <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
            <div className="text-2xl text-[#012033] font-semibold">
              SEO - Senior Manager
            </div>
            <div className="text-xs text-[#012033] lg:text-base font-normal leading-6">
              COLTFOX has been named among the most recommended B2B service SEO
              providers in India, UK, US, Middle East and other parts of the
              world.
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
            <div className="text-xs lg:text-base rounded-full bg-[#DF2323] text-white px-3 py-2 w-fit">
              Hiring Positions Now
            </div>
            <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
              <li className="list-none">SEO - Senior Manager</li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
            </div>
            <div style={{
                ...hoverStyle,
                backgroundPosition: isHovered3 ? "left bottom" : "right bottom",
                color: isHovered3 ? "white" : "#DF2323",
              }} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className="cursor-pointer mail text-xs flex items-center gap-4 lg:text-base rounded-full border border-[#DF2323] px-6 py-2 w-fit">
              Email Us Now
              <svg
                width="55"
                height="16"
                viewBox="0 0 65 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 7.44H32.5H48H63.5M63.5 7.44L50.7125 1M63.5 7.44L50.7125 15"
                  stroke={isHovered3 ? "white" : "#df2323"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#787D7F]"></div>
        <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
          <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
            <div className="text-2xl text-[#012033] font-semibold">
              SEO - Senior Manager
            </div>
            <div className="text-xs text-[#012033] lg:text-base font-normal leading-6">
              COLTFOX has been named among the most recommended B2B service SEO
              providers in India, UK, US, Middle East and other parts of the
              world.
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
            <div className="text-xs lg:text-base rounded-full bg-[#DF2323] text-white px-3 py-2 w-fit">
              Hiring Positions Now
            </div>
            <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
              <li className="list-none">SEO - Senior Manager</li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
            </div>
            <div style={{
                ...hoverStyle,
                backgroundPosition: isHovered4 ? "left bottom" : "right bottom",
                color: isHovered4 ? "white" : "#DF2323",
              }} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} className="cursor-pointer mail text-xs flex items-center gap-4 lg:text-base rounded-full border border-[#DF2323] text-[#DF2323] px-6 py-2 w-fit">
              Email Us Now
              <svg
                width="55"
                height="16"
                viewBox="0 0 65 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 7.44H32.5H48H63.5M63.5 7.44L50.7125 1M63.5 7.44L50.7125 15"
                  stroke={isHovered4 ? "white" : "#df2323"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#787D7F]"></div>
        <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
          <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
            <div className="text-2xl text-[#012033] font-semibold">
              SEO - Senior Manager
            </div>
            <div className="text-xs text-[#012033] lg:text-base font-normal leading-6">
              COLTFOX has been named among the most recommended B2B service SEO
              providers in India, UK, US, Middle East and other parts of the
              world.
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
            <div className="text-xs lg:text-base rounded-full bg-[#DF2323] text-white px-3 py-2 w-fit">
              Hiring Positions Now
            </div>
            <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
              <li className="list-none">SEO - Senior Manager</li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
            </div>
            <div style={{
                ...hoverStyle,
                backgroundPosition: isHovered5 ? "left bottom" : "right bottom",
                color: isHovered5 ? "white" : "#DF2323",
              }} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} className="cursor-pointer mail text-xs flex items-center gap-4 lg:text-base rounded-full border border-[#DF2323] text-[#DF2323] px-6 py-2 w-fit">
              Email Us Now
              <svg
                width="55"
                height="16"
                viewBox="0 0 65 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 7.44H32.5H48H63.5M63.5 7.44L50.7125 1M63.5 7.44L50.7125 15"
                  stroke={isHovered5 ? "white" : "#df2323"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-[#787D7F]"></div>
        <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
          <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
            <div className="text-2xl text-[#012033] font-semibold">
              SEO - Senior Manager
            </div>
            <div className="text-xs text-[#012033] lg:text-base font-normal leading-6">
              COLTFOX has been named among the most recommended B2B service SEO
              providers in India, UK, US, Middle East and other parts of the
              world.
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
            <div className="text-xs lg:text-base rounded-full bg-[#DF2323] text-white px-3 py-2 w-fit">
              Hiring Positions Now
            </div>
            <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
              <li className="list-none">SEO - Senior Manager</li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
              <li className="list-none">SEO - Executive Manager </li>
            </div>
            <div style={{
                ...hoverStyle,
                backgroundPosition: isHovered6 ? "left bottom" : "right bottom",
                color: isHovered6 ? "white" : "#DF2323",
              }} onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6} className="cursor-pointer mail text-xs flex items-center gap-4 lg:text-base rounded-full border border-[#DF2323] text-[#DF2323] px-6 py-2 w-fit">
              Email Us Now
              <svg
                width="55"
                height="16"
                viewBox="0 0 65 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 7.44H32.5H48H63.5M63.5 7.44L50.7125 1M63.5 7.44L50.7125 15"
                  stroke={isHovered6 ? "white" : "#df2323"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wehiring;
