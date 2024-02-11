import React, { useState } from "react";
import "./fox-impact.css";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Foximpact = () => {
  const [activeItem, setActiveItem] = useState("All Work");

  const points = [
    "All Work",
    "Digital Marketing",
    "Content Marketing",
    "PPC Marketing",
  ];

  const handleClick = (point) => {
    setActiveItem(point);
  };

  const [activeDiv, setActiveDiv] = useState(1);

  const handlenav = (number) => {
    setActiveDiv(number);
  };

  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className="mt-10 px-4 pb-12 sm:pb-20 text-center lg:text-left text-5xl lg:px-24 2xl:px-64 text-[#DF2323] md:text-[5rem] lg:text-[6rem] font-semibold leading-tight">
        <h1> The Fox Impact </h1>
      </div>

      <div className="flex flex-col lg:flex-row mt-2 px-3 pb-12 sm:pb-20 sm:px-16 2xl:px-64 gap-12 md:gap-20 xl:gap-24 justify-between">
        <div className="list-menu w-fit sm:min-w-[270px] ">
          {points.map((point, index) => (
            <div
              key={index}
              className={`text-center px-5 point ${
                activeItem === point ? "active" : ""
              }`}
              onClick={() => handleClick(point)}
            >
              {point}
            </div>
          ))}
        </div>

        {activeDiv === 1 && (
          <div className="right flex flex-col w-full gap-12 md:gap-16">
            <div className="flex flex-col lg:flex-row gap-12">
              <img src="/acmaimg.png" className="w-fit lg:w-1/2" />
              <div className="flex flex-col items-start w-fit lg:w-1/2 justify-between gap-8">
                <div className="font-semibold text-3xl leading-tight text-[#012033]">
                  Automotive Component Manufacturers Association of India.
                </div>
                <div className="leading-6 font-normal text-xl text-black">
                  Working closely with the ACMA team, Associations has
                  transformed the event b2b and b2c search strategy and
                  performance by restructuring search campaigns, rolling out
                  into new territories...
                </div>
                <button className="gap-4 shadow-none hover:px-4 px-1 py-3 rounded-full  cursor-pointer font-normal text-lg leading-4 trackin-[0.9px] text-[#DF2323] flex">
                  <Link to="/acma" className="flex gap-4">
                    VIEW CASE STUDY{" "}
                    <svg
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
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <img src="/case-study-2.png" className="w-fit lg:w-1/2" />
              <div className="flex flex-col items-start w-fit lg:w-1/2 justify-between gap-8">
                <div className="font-semibold text-3xl leading-tight text-[#012033]">
                  Tool station launches latest catalog with deals and products.
                </div>
                <div className="leading-6 font-normal text-xl text-black">
                  The catalog will be available in all 550+ Tool station stores
                  across the UK. To celebrate the launch, Coltfox did help them
                  with hard-to-reach local construction Landing strategy in
                  London...
                </div>
                <button className="gap-4 shadow-none hover:px-4 px-1 py-3 rounded-full cursor-pointer font-normal text-lg leading-4 trackin-[0.9px] text-[#DF2323] flex">
                  <Link to="/toolstation" className="flex gap-4">
                    VIEW CASE STUDY{" "}
                    <svg
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
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <img src="/soloimg.png" className="w-fit lg:w-1/2" />
              <div className="flex flex-col items-start w-fit lg:w-1/2 justify-between gap-8">
                <div className="font-semibold text-3xl leading-tight text-[#012033]">
                  Solo Expenses – App promotion marketing campaign.
                </div>
                <div className="leading-6 font-normal text-xl text-black">
                  We used Solo to interrogate their audience, using a set of
                  parameters including income and traveling habits. We focused
                  on psycho graphics to find out what made them tick and
                  found...
                </div>
                <button className="gap-4 shadow-none hover:px-4 px-1 py-3 rounded-full cursor-pointer font-normal text-lg leading-4 trackin-[0.9px] text-[#DF2323] flex">
                  <Link to="/solo-expenses" className="flex gap-4">
                    VIEW CASE STUDY{" "}
                    <svg
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
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <img src="/cedevitaimg.png" className="w-fit lg:w-1/2" />
              <div className="flex flex-col items-start w-fit lg:w-1/2 justify-between gap-8">
                <div className="font-semibold text-3xl leading-tight text-[#012033]">
                  Creating an intelligent and seamless experience for an NGO.
                </div>
                <div className="leading-6 font-normal text-xl text-black">
                  As part of a broader digital strategy, we worked closely with
                  Dignity on their new NGO services. Together, we wanted to push
                  for a fresh take on what could have easily been a traditional
                  products...
                </div>
                <button className="gap-4 shadow-none hover:px-4 px-1 py-3 rounded-full cursor-pointer font-normal text-lg leading-4 trackin-[0.9px] text-[#DF2323] flex">
                  <Link to="/cedevita" className="flex gap-4">
                    VIEW CASE STUDY{" "}
                    <svg
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
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeDiv === 2 && (
          <div className="right flex flex-col w-full gap-12 md:gap-16">
            <div className="flex flex-col lg:flex-row gap-12">
              <img src="/sockshop.png" className="w-fit lg:w-1/2" />
              <div className="flex flex-col items-start w-fit lg:w-1/2 justify-between gap-8">
                <div className="font-semibold text-3xl leading-tight text-[#012033]">
                  On-site experience for SOCK SHOP to drive conversion & order
                  value.
                </div>
                <div className="leading-6 font-normal text-xl text-black">
                  Sockshop.co.uk generated a considerable amount of revenue,
                  which accelerated during the pandemic, however when
                  restrictions were lifted, they felt the tide turning and
                  needed...
                </div>
                <button className="gap-4 shadow-none hover:px-4 px-1 py-3 rounded-full cursor-pointer font-normal text-lg leading-4 trackin-[0.9px] text-[#DF2323] flex">
                  <Link to="/sock-shop" className="flex gap-4">
                    VIEW CASE STUDY{" "}
                    <svg
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
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <img src="/recimg copy.png" className="w-fit lg:w-1/2" />
              <div className="flex flex-col items-start w-fit lg:w-1/2 justify-between gap-8">
                <div className="font-semibold text-3xl leading-tight text-[#012033]">
                  The REC and future proofing their organization a new brand
                  identity.
                </div>
                <div className="leading-6 font-normal text-xl text-black">
                  However, despite the influx in recruitment agencies, their
                  membership numbers were hitting a plateau. The business needed
                  to shift with the times to make it more modern, attractive...
                </div>
                <button className="gap-4 shadow-none hover:px-4 px-1 py-3 rounded-full cursor-pointer font-normal text-lg leading-4 trackin-[0.9px] text-[#DF2323] flex">
                  <Link to="/rec" className="flex gap-4">
                    VIEW CASE STUDY{" "}
                    <svg
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
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <img src="/itv.png" className="w-fit lg:w-1/2" />
              <div className="flex flex-col items-start w-fit lg:w-1/2 justify-between gap-8">
                <div className="font-semibold text-3xl leading-tight text-[#012033]">
                  A new distribution platform for ITV Studios helping them more
                  effectively.
                </div>
                <div className="leading-6 font-normal text-xl text-black">
                  They realized this was preventing them from providing their
                  customers the kind of online service and experience they
                  expected, which meant they were losing traffic to the site,
                  interest...
                </div>
                <button className="gap-4 shadow-none hover:px-4 px-1 py-3 rounded-full cursor-pointer font-normal text-lg leading-4 trackin-[0.9px] text-[#DF2323] flex">
                  <Link to="/itv" className="flex gap-4">
                    VIEW CASE STUDY{" "}
                    <svg
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
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="px-20 lg:px-24 2xl:px-64 pb-16 items-center justify-center flex gap-2 sm:gap-4">
        <div className="flex items-center gap-1 font-normal text-sm text-[#888888] cursor-pointer">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99061 7.86094L12.2406 3.61094C12.5344 3.31719 13.0094 3.31719 13.3 3.61094L14.0062 4.31719C14.3 4.61094 14.3 5.08594 14.0062 5.37656L10.9969 8.39219L14.0094 11.4047C14.3031 11.6984 14.3031 12.1734 14.0094 12.4641L13.3031 13.1734C13.0094 13.4672 12.5344 13.4672 12.2437 13.1734L7.99374 8.92344C7.69686 8.62969 7.69686 8.15469 7.99061 7.86094ZM1.99061 8.92344L6.24061 13.1734C6.53436 13.4672 7.00936 13.4672 7.29999 13.1734L8.00624 12.4672C8.29999 12.1734 8.29999 11.6984 8.00624 11.4078L4.99686 8.39219L8.00936 5.37969C8.30311 5.08594 8.30311 4.61094 8.00936 4.32031L7.30311 3.61094C7.00936 3.31719 6.53436 3.31719 6.24374 3.61094L1.99374 7.86094C1.69686 8.15469 1.69686 8.62969 1.99061 8.92344Z"
              fill="#888888"
            />
          </svg>
          First
        </div>
        <div className="flex items-center gap-1 font-normal text-sm text-[#888888] cursor-pointer">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.52028 7.86094L9.77028 3.61094C10.064 3.31719 10.539 3.31719 10.8297 3.61094L11.5359 4.31719C11.8297 4.61094 11.8297 5.08594 11.5359 5.37656L8.52653 8.39219L11.539 11.4047C11.8328 11.6984 11.8328 12.1734 11.539 12.4641L10.8328 13.1734C10.539 13.4672 10.064 13.4672 9.7734 13.1734L5.5234 8.92344C5.22653 8.62969 5.22653 8.15469 5.52028 7.86094Z"
              fill="#888888"
            />
          </svg>
          Prev
        </div>
        <div className="flex items-center gap-4">
          {[1, 2, 3].map((number) => (
            <div
              key={number}
              className={`font-normal text-sm text-black cursor-pointer ${
                activeDiv === number ? "border border-black py-1 px-2" : ""
              }`}
              onClick={() => handlenav(number)}
            >
              {number}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 font-normal text-sm text-black cursor-pointer">
          Next
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9886 8.92344L7.73862 13.1734C7.44487 13.4672 6.96987 13.4672 6.67925 13.1734L5.973 12.4672C5.67925 12.1734 5.67925 11.6984 5.973 11.4078L8.9855 8.39531L5.973 5.38281C5.67925 5.08906 5.67925 4.61406 5.973 4.32344L6.67612 3.61094C6.96987 3.31719 7.44487 3.31719 7.7355 3.61094L11.9855 7.86094C12.2824 8.15469 12.2824 8.62969 11.9886 8.92344Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex items-center gap-1 font-normal text-sm text-black cursor-pointer">
          Last
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.29746 8.92344L4.04746 13.1734C3.75371 13.4672 3.27871 13.4672 2.98809 13.1734L2.28184 12.4672C1.98809 12.1734 1.98809 11.6984 2.28184 11.4078L5.29434 8.39531L2.28184 5.38281C1.98809 5.08906 1.98809 4.61406 2.28184 4.32344L2.98496 3.61094C3.27871 3.31719 3.75371 3.31719 4.04434 3.61094L8.29434 7.86094C8.59121 8.15469 8.59121 8.62969 8.29746 8.92344ZM14.2975 7.86094L10.0475 3.61094C9.75371 3.31719 9.27871 3.31719 8.98809 3.61094L8.28184 4.31719C7.98809 4.61094 7.98809 5.08594 8.28184 5.37656L11.2943 8.38906L8.28184 11.4016C7.98809 11.6953 7.98809 12.1703 8.28184 12.4609L8.98809 13.1672C9.28184 13.4609 9.75684 13.4609 10.0475 13.1672L14.2975 8.91719C14.5912 8.62969 14.5912 8.15469 14.2975 7.86094Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Foximpact;
