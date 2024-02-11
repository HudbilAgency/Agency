import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
const Ourblogs = () => {
  const [selected, setSelected] = useState(0);

  const blogs = [
    { title: "All Blogs", count: 22 },
    { title: "Strategy and Creative", count: 7 },
    { title: "Digital", count: 4 },
    { title: "Data and Analytics", count: 3 },
    { title: "Design", count: 2 },
    { title: "Marketing", count: 2 },
    { title: "Performance Marketing", count: 2 },
    { title: "Press Releases", count: 2 },
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

  const [activeDiv, setActiveDiv] = useState(1);

  const handlenav = (number) => {
    setActiveDiv(number);
  };

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);

  const baseStyle = {
    borderRadius: "100%",
    backgroundColor: "#FCAB64",
    color: "#ffffff",
    transition: "all 0.6s ease-in-out",
    transform: "rotate(0deg)",
  };

  const hoverStyle = {
    ...baseStyle,
    backgroundColor: "#df2323", // Hover background color
    transform: "rotate(45deg)", // Hover rotation
  };

  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="px-6 md:px-20 lg:px-32 2xl:px-64 mt-8">
        <div className="flex gap-10 flex-col xl:flex-row gap-0 xl:gap-40 2xl:gap-60">
          <div>
            <h1 className="text-4xl leading-tight text-[#DF2323] sm:text-[6rem] font-semibold">
              Empowering <br /> Insights and <br /> Perspectives <br />{" "}
            </h1>
          </div>

          <div className="w-fit mt-10 text-left text-base font-normal leading-6 tracking-normal">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <a
                  href="#"
                  className={`hover: ${
                    selected === index ? "font-bold" : "font-normal"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {blog.title}
                </a>
                <span
                  className={`ml-5 rounded-full px-3 py-1 ${
                    selected === index ? "bg-[#FCAB64]" : "bg-[#252624]"
                  } text-white`}
                  style={{ lineHeight: "18.61px" }}
                >
                  {blog.count.toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {activeDiv === 1 && (
          <div className="page-1 mb-28">
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog-img1.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  First - party Data in <br /> marketing - what you <br /> need
                  to know?
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  With the impending end of third-party cookies, now is the
                  optimal time to shift focus towards collecting first-party
                  data.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered1 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                href="/blog-1"
                className="h-[20%] p-4 rounded-full ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog2-img1.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  Social Media
                  <br /> Marketing Tips
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  Having a marketing goal like increased engagement, more
                  clicks, conversions, etc. is one of the most important driving
                  forces behind your brand decisions. That's why setting up
                  goals is essential.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered2 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                href="/blog-2"
                className="h-[20%] p-4 rounded-full bg-[#FCAB64] ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog3-img1.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  Everything about <br /> Technical SEO in 2024
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  Technical SEO refers to the process of optimizing your website
                  to help search engines access, crawl, understand, and index
                  your pages without any problems.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered3 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
                href="/blog-3"
                className="h-[20%] p-4 rounded-full bg-[#FCAB64] ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog4-img1.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  How to Leverage A/B
                  <br /> Testing to Increase Your
                  <br /> Conversion Rates
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  Whether your conversion rates are low, average, or high,
                  there’s always room to optimize better. But without the right
                  methodology, you risk making changes that push your conversion
                  rate in the wrong direction.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered4 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
                href="/blog-4"
                className="h-[20%] p-4 rounded-full bg-[#FCAB64] ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog5-img1.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  Tips That Will Keep Your <br /> Messages Out of the
                  <br /> Spam Folder
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  It seems every morning we spend time going through our email
                  inbox, and then inevitably, we check our spam folder to see if
                  something of value accidentally landed there. It’s all too
                  easy to scan that folder quickly and hit delete because
                  undoubtedly most of it is garbage.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered5 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)}
                href="/blog-5"
                className="h-[20%] p-4 rounded-full bg-[#FCAB64] ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog6-img.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  10 Social Media Trends <br />
                  To Watch For In 2024{" "}
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  In the fast-paced digital world we live in, digital marketing
                  agencies must keep up with the latest trends. As we approach
                  2024, knowing what’s happening in social media is a big deal
                  as it will change how businesses connect with their customers.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered6 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered6(true)}
                onMouseLeave={() => setIsHovered6(false)}
                href="/blog-6"
                className="h-[20%] p-4 rounded-full bg-[#FCAB64] ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog7-img.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  Key Services You Should <br />
                  Expect From An Online <br />
                  Marketing Agency
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  In today’s digital age, establishing a strong online presence
                  is crucial for the success of any business. Whether you’re a
                  startup or a well-established company, the services of an
                  online marketing agency can be a game-changer.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered7 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered7(true)}
                onMouseLeave={() => setIsHovered7(false)}
                href="/blog-7"
                className="h-[20%] p-4 rounded-full bg-[#FCAB64] ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
          </div>
        )}

        {activeDiv === 2 && (
          <div className="page-2 mb-28">
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog8-img.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  Email Marketing Trends: <br /> What’s New In 2024?{" "}
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  Has we approach the year 2024, it becomes increasingly
                  important for digital marketing services, including your
                  digital marketing agency, to prepare for the upcoming trends
                  that will influence the world of email marketing.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered8 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered8(true)}
                onMouseLeave={() => setIsHovered8(false)}
                href="/blog-8"
                className="h-[20%] p-4 rounded-full bg-[#FCAB64] ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog9-img.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  How Machine Learning Is <br /> Transforming Search Engine{" "}
                  <br /> Optimization
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  In this era of rapid technological advancement, where
                  information is just a click away, having a strong online
                  presence is crucial for businesses and individuals alike.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered9 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered9(true)}
                onMouseLeave={() => setIsHovered9(false)}
                href="/blog-9"
                className="h-[20%] p-4 rounded-full bg-[#FCAB64] ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
            <div className="flex justify-between flex-col lg:flex-row">
              <img
                className="w-fit lg:w-5/12 2xl:w-1/2"
                src="./blog10-img.png"
                alt=""
              />
              <div className="px-0 lg:px-10 flex flex-col justify-between">
                <p className="text-3xl pt-5 lg:pt-0 leading-snug font-bold text-[#231F20]">
                  5 Of The Most In-Demand <br /> Digital Marketing <br /> Skills
                  In 2023
                </p>
                <p className="py-5 font-normal text-base leading-6 text-[#231F20]">
                  In this blog post, we’ll delve into five of the most
                  sought-after skills that can make you an invaluable asset in
                  digital marketing. Whether you’re a seasoned marketer or just
                  starting out, these skills will set you apart and make you a
                  sought-after expert in digital marketing.
                </p>
                <div className="flex gap-6 flex-col sm:flex-row pt-0 md:items-center">
                  <a
                    href=""
                    className=" bg-[#FCAB64] w-fit px-5 rounded-full py-1 text-white text-xl font-normal"
                  >
                    MARKETING
                  </a>
                  <p className="pt-0 font-normal text-lg leading-7 text-[#231F20]">
                    November 17, 2023
                  </p>
                </div>
              </div>
              <a
                style={isHovered10 ? hoverStyle : baseStyle}
                onMouseEnter={() => setIsHovered10(true)}
                onMouseLeave={() => setIsHovered10(false)}
                href="/blog-10"
                className="h-[20%] p-4 rounded-full bg-[#FCAB64] ml-auto lg:ml-0 "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[3px] bg-black m-auto my-10"></div>
          </div>
        )}
      </div>

      <div className="px-6 md:px-20 lg:px-32 2xl:px-40 pb-16 items-center justify-center flex gap-2 sm:gap-4">
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

export default Ourblogs;
