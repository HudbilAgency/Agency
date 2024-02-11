import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import rectImage from "../assets/Rectangle 4245.png";
import rectImage2 from "../assets/Rectangle 4246.png";
import rectImage4 from "../assets/Rectangle 4248.png";
import rectImage3 from "../assets/Rectangle 4251.png";
import rectImage5 from "../assets/Rectangle 4253.png";
import Footer from "../components/footer/footer";
const Achievers = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="mt-8 text-5xl sm:text-7xl text-[#DF2323] font-black px-6 sm:px-28 lg:px-48 xl:px-64 2xl:px-96 leading-[5rem] sm:leading-[8rem]">
        <h1>We’re ambitious.</h1>
        <h1>We’re achievers.</h1>
      </div>

      <div>
        <img
          className="mt-12 w-full h-80   object-cover "
          src="./culture-img1.png"
          alt=""
        />
      </div>

      <div className="px-6 sm:px-28 lg:px-48 xl:px-64 2xl:px-96 my-12 sm:my-16 flex flex-col gap-2">
        <div className="flex flex-col xl:flex-row gap-10 mt-10">
          <div>
            <svg
              width="92"
              height="55"
              viewBox="0 0 92 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.6 54.2H0.600001L23 0.599996H46L35.6 54.2ZM81 54.2H46.2L68.6 0.599996H91.4L81 54.2Z"
                fill="#FCAB64"
              />
            </svg>

            <p className="text-xl mt-10 font-normal text-[#012033]">
              We are a family of diverse, curious, and passionate minds who work
              together without ego to change the marketing landscape.
            </p>
          </div>
          <img className="w-[32rem] h-auto" src="./culture-img2.png" alt="" />
        </div>
        <div className="flex xl:flex-row-reverse flex-col gap-10 mt-10 items-center">
          <div>
            <svg
              width="92"
              height="55"
              viewBox="0 0 92 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.6 54.2H0.600001L23 0.599996H46L35.6 54.2ZM81 54.2H46.2L68.6 0.599996H91.4L81 54.2Z"
                fill="#FCAB64"
              />
            </svg>

            <p className="text-xl mt-10 font-normal text-[#012033]">
              We value the unique perspectives and distinct skills each
              individual brings to the table.
            </p>
          </div>
          <img className="w-[32rem] h-auto" src="./culture-img3.png" alt="" />
        </div>
        <div className="flex flex-col xl:flex-row gap-10 mt-10 items-end">
          <div>
            <svg
              width="92"
              height="55"
              viewBox="0 0 92 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.6 54.2H0.600001L23 0.599996H46L35.6 54.2ZM81 54.2H46.2L68.6 0.599996H91.4L81 54.2Z"
                fill="#FCAB64"
              />
            </svg>

            <p className="text-xl mt-10 font-normal text-[#012033]">
              We value the unique perspectives and distinct skills each
              individual brings to the table.
            </p>
          </div>
          <img className="w-[32rem] h-auto" src="./culture-img4.png" alt="" />
        </div>
      </div>

      <div className="bg-[#D9D3D3] bg-[url('/noise-grey.png')] bg-blend-overlay text-center py-10 pb-12 sm:pb-20 px-6 sm:px-28 lg:px-48 xl:px-64 ">
        <div className="h-[1px] bg-[#FE7272] md:ml-[20%] mb-10" />
        <div className="text-left font-semibold text-xl sm:text-2xl sm:w-[30rem] md:ml-[20%] flex flex-col gap-2">
          <p>Most importantly,</p>
          <p>We’re kind to one another.</p>
          <p>We celebrate our differences.</p>
          <p>We give back to the community.</p>
          <p>And we like to have a lot of fun</p>
        </div>
        <div className="h-[1px] bg-[#FE7272] md:ml-[20%] my-10" />

        <div className="relative text-center">
          <div className="flex justify-center gap-6 sm:gap-12 lg:gap-20 mb-[40%] sm:mb-[40%] lg:mb-[25%]">
            <img
              src="./culture-img5.png"
              alt="Image 1"
              className="w-1/2 lg:w-2/5 h-fit"
            />
            <img
              src="./culture-img6.png"
              alt="Image 2"
              className="w-1/2 lg:w-2/5 h-fit"
            />
          </div>
          <img
            src="./culture-img7.png"
            alt="Image 3"
            className="w-1/2 lg:w-1/3 h-fit absolute top-[100%] lg:top-[95%] transform -translate-y-1/2 left-1/2 -translate-x-1/2"
            style={{ zIndex: 9 }}
          />
        </div>

        <div className="lg:mt-48 text-xl text-left text-[#012033] w-full">
          <p className="font-normal leading-tight md:w-4/5">
            We don’t say we’re diverse and inclusive; we embody it. Just look
            around the office, and you’ll see that EVERYONE is welcome.
          </p>

          <p className="font-semibold py-10">
            Have you got what it takes to be a COLT?
          </p>

          <p>Then we want to hear from you.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Achievers;
