import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showLinks2, setShowLinks2] = useState(false);
  const [showLinks3, setShowLinks3] = useState(false);
  const [showLinks4, setShowLinks4] = useState(false);
  const [showLinks5, setShowLinks5] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const toggleLinks2 = () => {
    setShowLinks2(!showLinks2);
  };
  const toggleLinks3 = () => {
    setShowLinks3(!showLinks3);
  };
  const toggleLinks4 = () => {
    setShowLinks4(!showLinks4);
  };
  const toggleLinks5 = () => {
    setShowLinks5(!showLinks5);
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const hoverStyle = {
    display: "inline-flex",
    background: "linear-gradient(to right, #DF2323 50%, transparent 50%)",
    backgroundSize: "200% 100%",
    transition: "background-position 0.5s ease-out, color 0.5s ease",
    backgroundPosition: isHovered2 ? "left bottom" : "right bottom",
    color: isHovered2 ? "#ffffff" : "#DF2323",
  };

  const handleMouseEnter = () => setIsHovered2(true);
  const handleMouseLeave = () => setIsHovered2(false);

  return (
    <div className="bg-[#FCAB64] pt-20 pb-4">
      <div className=" sm:text-7xl footheading text-4xl font-black text-center text-white flex flex-col gap-6">
        <h1>Ready to</h1> <h1>transform your </h1>
        <h1>business?</h1>
      </div>
      <div className="footText mt-10 text-center font-semibold sm:text-3xl text-lg text-[#012033]">
        <p className="sm:leading-10 ">
          We’re a global agency. If you’re awake,<br></br> one of us is too.
        </p>
      </div>
      <div className="flex px-5 sm:px-20 flex-col sm:flex-row gap-2 sm:gap-20 mt-16 justify-center items-center">
        <a
          href="/contact-us"
          className="flex justify-center items-center  w-max rounded-full p-2 gap-2 sm:gap-14 sm:p-3 sm:px-5 border border-[#fff]"
          style={hoverStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="font-normal sm:text-xl">Contact Us</div>
          <div className="w-10">
            <svg
              className="w-full h-auto "
              viewBox="0 0 70 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.44H35H52H69M69 7.44L54.975 1M69 7.44L54.975 15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
      <div className="bg-[#fff] w-[100%] opacity-[50%] mx-auto h-[2px] my-10 lg:my-20"></div>
      <div className="flex flex-col xl:flex-row gap-5 lg:gap-20 2xl:gap-28 mt-10 lg:mt-16 pl-6 sm:pl-16 xl:justify-center xl:items-center lg:px-28 2xl:px-68">
        <div>
          <div
            className="flex xl:justify-center items-center gap-1 cursor-pointer"
            onClick={toggleLinks}
          >
            <p className="text-xl sm:text-sm text-white font-semibold">
              Quick Links
            </p>
            <svg
              width="13"
              height="13"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16L16 1M16 1H2.5M16 1V14.5"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ul
            className={`text-[#012033] sm:leading-8 mt-2 font-medium sm:text-sm ${
              showLinks ? "" : "hidden sm:block"
            }`}
          >
            <li>
              <Link to="/who-we-are" target="_blank">
                Who we are
              </Link>
            </li>
            <li>
              <Link to="/what-we-do" target="_blank">
                What we do
              </Link>
            </li>
            <li>
              <Link to="/what-we-did" target="_blank">
                What we did
              </Link>
            </li>
            <li>
              <Link to="/our-blogs" target="_blank">
                What we read
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleLinks2}
          >
            <p className="text-xl sm:text-sm text-white font-semibold text-left">
              Our Terms
            </p>
            <svg
              width="13"
              height="13"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16L16 1M16 1H2.5M16 1V14.5"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <ul
            className={`text-[#012033] sm:leading-8 mt-2 font-medium w-max sm:text-sm ${
              showLinks2 ? "" : "hidden sm:block"
            }`}
          >
            <li>
              <Link to="/privacy-policy" target="_blank">
                Privacy Policy
              </Link>{" "}
            </li>
            <li>
              <Link to="/cookie-policy" target="_blank">
                Cookie Policy
              </Link>{" "}
            </li>
            <li>
              <Link to="/accessibility" target="_blank">
                Accessibility
              </Link>{" "}
            </li>
            <li>
              <Link to="/terms-of-service" target="_blank">
                Terms of service
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div>
          <div
            className="flex  xl:justify-center items-center gap-1 cursor-pointer"
            onClick={toggleLinks3}
          >
            <p className="text-xl sm:text-sm text-white font-semibold ">
              Our Brands
            </p>
            <svg
              width="13"
              height="13"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16L16 1M16 1H2.5M16 1V14.5"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <ul
            className={`text-[#012033] sm:leading-8 mt-2 font-medium sm:text-sm ${
              showLinks3 ? "" : "hidden sm:block"
            }`}
          >
            <li>
              <a href="https://www.hudbil.com/" target="_blank">
                Hudbil
              </a>{" "}
            </li>
            <li>
              <a href="https://kalacode.com/" target="_blank">
                Kalacode
              </a>{" "}
            </li>
            <li>
              <a href="https://www.mausapp.com/" target="_blank">
                Mausapp
              </a>
            </li>
            <li>Pettsbuy</li>
          </ul>
        </div>
        <div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleLinks4}
          >
            <p className="text-xl sm:text-sm text-white font-semibold text-left">
              Our Locations
            </p>
            <svg
              width="13"
              height="13"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16L16 1M16 1H2.5M16 1V14.5"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <ul
            className={`text-[#012033] sm:leading-8 mt-2 font-medium sm:text-sm ${
              showLinks4 ? "" : "hidden sm:block"
            }`}
          >
            <li>Bangalore </li>
            <li>Mumbai </li>
            <li>New Delhi </li>
            <li>Hyderbad </li>
          </ul>
        </div>
        <div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleLinks5}
          >
            <p className="text-xl sm:text-sm text-white font-semibold ">
              Our Openings
            </p>
            <svg
              width="13"
              height="13"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16L16 1M16 1H2.5M16 1V14.5"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <ul
            className={`text-[#012033] sm:leading-8 mt-2 font-medium sm:text-sm ${
              showLinks5 ? "" : "hidden sm:block"
            }`}
          >
            <li>Content writer </li>
            <li>Digital Marketer </li>
            <li>Content Strategiest </li>
            <li>Media Advisor </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 sm:text-2xl justify-between items-center font-medium text-[#012033] mt-12 px-14 xl:px-36">
        <div className="flex sm:text-base sm:gap-7 items-center">
          <p>Working from India</p>
          <div className="h-[2px] bg-white/20 w-20"></div>
          <p>Operating Worldwide</p>
        </div>
        <div
          className="follow-us-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-center items-center gap-2">
            <p className=" text-base text-[#012033] font-semibold ">
              Follow Us
            </p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16L16 1M16 1H2.5M16 1V14.5"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex gap-2">
            {isHovered && (
              <div className="social-icons justify-center items-center flex gap-6 p-0">
                <p className="text-white flex justify-center opacity-75 items-center hover:scale-125 hover:opacity-100 transition-all rounded-full w-[60px] h-[60px] cursor-pointer">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6906 0.0503525C15.9094 0.328899 16.7016 1.68414 16.4578 3.07687L16.35 3.68753C16.1016 5.11776 15.6422 6.47835 15 7.71574L21.75 7.71574C22.9922 7.71574 24 8.86742 24 10.2869C24 11.2779 23.5078 12.1403 22.7859 12.5689C23.2969 13.0403 23.625 13.7634 23.625 14.5723C23.625 15.8257 22.8375 16.8703 21.8016 17.0953C22.0078 17.4863 22.125 17.9416 22.125 18.4291C22.125 19.57 21.4734 20.5396 20.5734 20.8717C20.6062 21.0485 20.625 21.236 20.625 21.4288C20.625 22.8483 19.6172 24 18.375 24H13.8047C12.9141 24 12.0469 23.7 11.3062 23.1376L9.50156 21.7609C8.25 20.8074 7.5 19.2004 7.5 17.4809L7.5 11.5243C7.5 9.96018 8.12344 8.4871 9.1875 7.50683L9.53437 7.19079C10.7766 6.05517 11.625 4.45889 11.9344 2.68047L12.0422 2.06981C12.2859 0.677082 13.4719 -0.228194 14.6906 0.0503525ZM1.5 8.57281H4.5C5.32969 8.57281 6 9.33881 6 10.2869L6 22.2859C6 23.234 5.32969 24 4.5 24H1.5C0.670312 24 0 23.234 0 22.2859L0 10.2869C0 9.33881 0.670312 8.57281 1.5 8.57281Z"
                      fill="white"
                      fill-opacity="0.8"
                    />
                  </svg>
                </p>
                <p className="text-white opacity-75 flex justify-center items-center hover:scale-125 hover:opacity-100 transition-all rounded-full text-sm cursor-pointer">
                  Fb
                </p>
                <p className="text-white opacity-75 flex justify-center items-center hover:scale-125 hover:opacity-100 transition-all rounded-full text-sm cursor-pointer">
                  Li
                </p>
                <p className="text-white opacity-75 flex justify-center items-center hover:scale-125 hover:opacity-100 transition-all rounded-full text-sm cursor-pointer">
                  Ig
                </p>
                <p className="text-white opacity-75 flex justify-center items-center hover:scale-125 hover:opacity-100 transition-all rounded-full text-sm cursor-pointer">
                  Tw
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#fff] w-[78.5%] mx-auto h-[2px] my-6 opacity-[50%]"></div>
      <div className="text-center">
        <p className="sm:text-sm text-white">
          ©️ 2016 / 2023 Hudbil Private limited
        </p>
      </div>
    </div>
  );
};

export default Footer;
