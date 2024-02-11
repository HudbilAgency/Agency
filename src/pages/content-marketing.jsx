import React, { useEffect, useRef, useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import "./service-animation.css";

const Contentmarketing = () => {
  const [dropdownsOpen, setDropdownsOpen] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
    menu6: false,
  });

  const handleSvgClick = (menu) => {
    setDropdownsOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const contentArray = [
    {
      index: "01",
      title: "Our Approach",
      paragraph:
        "We are a content strategy agency provides you with a dedicated content marketing specialist whom you can regularly contact to give instructions, check on your content marketing strategy development, ask questions and request any revisions you’d like to see on your SEO content. Fill us in on your ideal consumer and how you want them to feel when they visit your site and start reading the content. Thrive can even develop personas of your targeted clients.",
      imgSrc: "./logo-img-1.png",
    },
    {
      index: "02",
      title: "SEO Content Research",
      paragraph:
        "Once our content marketing specialist has identified your SEO content marketing pain points and SEO content expectations, we then move on to market analysis and SEO keyword research. Our content writer works closely with SEO experts to perform thorough keyword research and SEO keyword analysis and build your SEO keyword strategy. We also conduct industry analysis, competitor bench marking and content analysis to create a strong foundation for your digital content strategy.",
      imgSrc: "./logo-img-2.png",
    },
    {
      index: "03",
      title: "Content Strategy",
      paragraph:
        "Our content writing agency uses the SEO keyword analysis report and market research results to formulate your content plan. In this phase, our content expert brainstorms with other digital marketing specialists to create your website content brief, identify the primary, secondary and tertiary keywords that will be used throughout your SEO content and establish a clear direction in developing website content.",
      imgSrc: "./logo-img-3.png",
    },
    {
      index: "04",
      title: "Content Plan",
      paragraph:
        "After finalizing the content strategy plan, the next step is content marketing research. This phase is crucial to guide our content writer’s SEO content demands. Your dedicated website content writer performs high-level research to get familiar with the topic, consults with experts and leverages useful content references and search engine strategies to convey your brand message or any technical information effectively to your target audience.",
      imgSrc: "./logo-img-4.png",
    },
    {
      index: "05",
      title: "Increased Content Writing",
      paragraph:
        "Content writing is one of the most crucial stages of your digital content marketing strategy, so we maximize our time and efforts to build out your website content’s structure, fill in your bullet points and complete all sections of your SEO content. You can choose the tone and phrasing of the online content your visitors will be reading. Whether you want it to be light-heated or formal, business-like or casual, our content writer can adapt the writing style to suit your needs.",
      imgSrc: "./logo-img-5.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const autoSlideInterval = useRef(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const startAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);

    // autoSlideInterval.current = setInterval(() => {
    //   const newSlide = (currentSlide + 1) % contentArray.length;
    //   changeSlide(newSlide);
    // }, 2000); // Change slide every 2 seconds
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
  };

  const changeSlide = (newSlide) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsAnimating(false);
    }, 500);
  };

  const changeSlide2 = (slideIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(slideIndex);
      setIsAnimating(false);
    }, 500);
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % contentArray.length;
    changeSlide(newSlide);
    setActiveIndex(newSlide);
    startAutoSlide();
  };

  const prevSlide = () => {
    const newSlide =
      (currentSlide - 1 + contentArray.length) % contentArray.length;
    changeSlide(newSlide);
    setActiveIndex(newSlide);
    startAutoSlide();
  };

  const goToSlide = (slideIndex) => {
    changeSlide(slideIndex);
    startAutoSlide();
    setActiveIndex(slideIndex);
    document.querySelectorAll(".bullet-container").forEach((bullet, index) => {
      if (index === slideIndex) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });
  };

  let startX;

  const handleMouseDown = (e) => {
    e.preventDefault();
    startX = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (startX - e.clientX > 100) {
      // Swiped left
      nextSlide();
    } else if (startX - e.clientX < -100) {
      // Swiped right
      prevSlide();
    }
  };

  const handleTouchStart = (e) => {
    // Use the first touch point
    const touch = e.touches[0];
    startX = touch.clientX;
    stopAutoSlide();
  };

  const handleTouchEnd = (e) => {
    // Use changedTouches to get the touch point when the finger is lifted
    const touch = e.changedTouches[0];
    const endX = touch.clientX;

    if (startX - endX > 50) {
      // Swiped left
      nextSlide();
      const newSlide = (currentSlide + 1) % contentArray.length;
      changeSlide(newSlide);
      setActiveIndex(newSlide);
    } else if (startX - endX < -50) {
      // Swiped right
      prevSlide();
      const newSlide =
        (currentSlide - 1 + contentArray.length) % contentArray.length;
      changeSlide(newSlide);
      setActiveIndex(newSlide);
    }
    startAutoSlide();
  };

  //   useEffect(() => {
  //     // Start automatic sliding for mobile devices
  //     if (window.innerWidth < 768) {
  //       startAutoSlide();
  //     }

  //     return () => {
  //       // Clean up interval when component unmounts
  //       if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
  //     };
  //   }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  if (window.innerWidth >= 1024) {
    document.querySelectorAll(".bullet-container").forEach((container) => {
      container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Adjust the multiplier for more/less sensitivity
        const deltaX = (x - centerX) * 2;
        const deltaY = (y - centerY) * 2;

        container.querySelector(
          ".bullet-inner"
        ).style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });

      container.addEventListener("mouseleave", () => {
        container.querySelector(".bullet-inner").style.transform = "none";
      });
    });
  }

  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className="acma mt-10 px-3 pb-0 sm:pb-6 text-center sm:px-20 2xl:px-52 text-[#DF2323] text-4xl sm:text-[6rem] font-bold leading-tight">
        <h1> Elevate your </h1>
        <h1> brand with </h1>
        <h1> Coltfox storytelling </h1>
      </div>

      <div className="flex justify-center items-center pt-20 pb-5 w-full md:w-3/4 lg:w-1/2 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="inner-shadow-top bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-2 text-white text-sm font-normal relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-black to-transparent opacity-5"></div>
            CONTENT MARKETING
          </div>
          <div className="text-center px-5 pb-10 text-[#012033] text-4xl sm:text-[4rem] font-bold leading-tight">
            Powerful content to share your message.
          </div>
          <div className="text-center px-5 pb-10 text-[#012033] text-2xl sm:text-[1.5rem] font-normal">
            <p>
              {" "}
              We create valuable, relevant, and consistent content across
              multiple platforms and channels, including video production,
              social media marketing, and email marketing.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pb-10 w-full md:w-4/5 lg:w-fit 2xl:w-[75%] mx-auto lg:mx-40 2xl:mx-auto">
        <img className="w-full" src="./con-marketing.png" alt="con-marketing" />
      </div>

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="mt-0 xl:px-20 2xl:px-52 sm:mt-12 pb-0 sm:pb-12 bg-[url('/greypaper.jpeg')] bg-cover"
      >
        <div className="flex mx-4 sm:mx-16 flex-col sm:flex-row justify-between xl:gap-10">
          <div className="w-full sm:w-2/3 lg:w-2/3 xl:w-full 2xl:w-3/4 mt-8 mr-0 sm:mt-28 sm:mr-16 lg:mr-24 ">
            <div className=" bg-[#FCAB64] mb-0 sm:mb-8 w-fit px-3 rounded-full py-1 text-white text-lg font-normal">
              Our Approach
            </div>
            <div className="font-poppins text-4xl sm:text-5xl leading-[120px] lg:text-[5rem] font-semibold sm:leading-[144px] text-white">
              WE THINK BIG.
            </div>
            <div className="flex sm:gap-4 md:h-[760px] lg:h-[550px] xl:h-[420px] 2xl:h-[450px]">
              <div>
                <div
                  className={`content-animation ${
                    isAnimating ? "animate" : ""
                  }`}
                >
                  <div className="mt-2 sm:mt-8 flex items-center text-4xl sm:[2rem] font-semibold leading-none text-white gap-5">
                    <div className="flex w-14 h-10 rounded-full border-2 border-[#DF2323] text-[#DF2323] items-center justify-center text-[19px] leading-[30px]">
                      {contentArray[currentSlide].index}
                    </div>
                    {contentArray[currentSlide].title}
                  </div>
                </div>
                <div className="my-8 bg-[#FCAB64] h-0.5 w-full "></div>
                <div
                  className={`content-animation ${
                    isAnimating ? "animate" : ""
                  }`}
                >
                  <div className=" text-[#012033] text-xl font-normal leading-8">
                    {contentArray[currentSlide].paragraph}
                  </div>
                </div>
              </div>
            </div>
            <div className="animation-slider my-10 sm:my-4 xl:my-0 flex items-center justify-center gap-2 sm:gap-4 mx-auto w-[5%]">
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={` cursor-pointer mx-auto ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div className="bullet-container">
                    <div className="bullet-inner  bg-[#FCAB64]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="logo hidden h-full sm:flex my-auto lg:mt-auto lg:mb-28 xl:mb-10 2xl:mb-16 lg:my-0 w-full md:w-1/2 lg:w-2/5 2xl:w-1/3 flex items-start justify-center lg:items-center lg:justify-center">
            <div
              className={`content-animationimg ${
                isAnimating ? "animateimg" : ""
              }`}
            >
              <img
                className="flex items-center self-center"
                src={contentArray[currentSlide].imgSrc}
                alt={`Logo ${contentArray[currentSlide].index}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:mx-40 2xl:mx-64 left flex-col sm:flex-row flex gap-6 sm:gap-20 mx-4 py-12 sm:mx-16 sm:py-20">
        <div className="title text-center bg-[#FCAB64] h-[20%] w-fit sm:w-2/5 xl:w-1/3 2xl:w-1/4 rounded-full py-1 px-0 text-white text-lg font-normal">
          SUPPORTING SOLUTIONS
        </div>
        <div className="lg:mt-10 sm:mt-3 w-full">
          <div className="leading-tight text-[#012033] text-4xl sm:text-[3rem] font-semibold">
            Create Once Publish Everywhere to strengthen your brand message.
          </div>
          <div className="text-2xl font-normal leading-9 text-[#012033] pt-8 gap-10">
            <p>
              By eliminating the need to create separate content across multiple
              platforms, we ensure your message is optimized for its intended
              goals.
            </p>
          </div>
          <div className="mt-7 bg-white flex flex-col">
            <div className="menu-1 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-fit">
                Content Writing
              </div>
              <svg
                onClick={() => handleSvgClick("menu1")}
                className={`dropdown-menu1 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${
                  dropdownsOpen.menu1 ? "rotate-180" : "rotate-0"
                }`}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {dropdownsOpen.menu1 ? (
                  // svg for "-"
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z"
                    fill="#FCAB64"
                  />
                ) : (
                  // svg for "+"
                  <>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z"
                      fill="#FCAB64"
                    />
                  </>
                )}
              </svg>
            </div>
            {dropdownsOpen.menu1 && (
              <div className=" bg-white w-full p-5 leading-8 text-xl font-normal text-[#012033]">
                <p>
                  Our content marketing services for SaaS are focused on real
                  results: improving not just your organic search visibility and
                  traffic but also user acquisition.Good content writing helps
                  you reach your potential customers and converts them into real
                  customers.
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-2 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                Content Creation
              </div>
              <svg
                onClick={() => handleSvgClick("menu2")}
                className={`dropdown-menu2 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${
                  dropdownsOpen.menu2 ? "rotate-180" : "rotate-0"
                }`}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {dropdownsOpen.menu2 ? (
                  // svg for "-"
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z"
                    fill="#FCAB64"
                  />
                ) : (
                  // svg for "+"
                  <>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z"
                      fill="#FCAB64"
                    />
                  </>
                )}
              </svg>
            </div>
            {dropdownsOpen.menu2 && (
              <div className=" bg-white w-full p-5 leading-8 text-xl font-normal text-[#012033]">
                <p>
                  We create content that’s comprehensive, evocative,
                  well-researched, original, personable, and SEO-friendly to
                  boost engagement with your prospects. <br />
                  What You’ll Get
                  <br />
                  <li>How-to guides</li>
                  <li>Original research and white papers</li>
                  <li>Infographics</li>
                  <li>eBooks</li>
                  <li>In-depth blog posts and listicles</li>
                  <li>Landing page copy</li>
                  <li>Email drip campaigns</li>
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-3 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                Content Distribution
              </div>
              <svg
                onClick={() => handleSvgClick("menu3")}
                className={`dropdown-menu3 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${
                  dropdownsOpen.menu3 ? "rotate-180" : "rotate-0"
                }`}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {dropdownsOpen.menu3 ? (
                  // svg for "-"
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z"
                    fill="#FCAB64"
                  />
                ) : (
                  // svg for "+"
                  <>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z"
                      fill="#FCAB64"
                    />
                  </>
                )}
              </svg>
            </div>
            {dropdownsOpen.menu3 && (
              <div className=" bg-white w-full p-5 leading-8 text-xl font-normal text-[#012033]">
                <p>
                  We distribute your content on high-value, difficult-to-earn,
                  audience-appropriate platforms to solidify your SaaS brand’s
                  reputation and earn quality links. <br />
                  What You’ll Get <br />
                  <li>Blogger and social media influencer outreach</li>
                  <li>Outreach to niche content communities</li>
                  <li>Guest blogging outreach</li>
                  <li>PR and media outreach</li>
                  <li>Social and display ads</li>
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-4 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                Content Audit
              </div>
              <svg
                onClick={() => handleSvgClick("menu4")}
                className={`dropdown-menu4 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${
                  dropdownsOpen.menu4 ? "rotate-180" : "rotate-0"
                }`}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {dropdownsOpen.menu4 ? (
                  // svg for "-"
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z"
                    fill="#FCAB64"
                  />
                ) : (
                  // svg for "+"
                  <>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z"
                      fill="#FCAB64"
                    />
                  </>
                )}
              </svg>
            </div>
            {dropdownsOpen.menu4 && (
              <div className=" bg-white w-full p-5 leading-8 text-xl font-normal text-[#012033]">
                <p>
                  We regularly review all the content you have on your SaaS
                  website, fix whatever needs fixing, refresh old content, and
                  find opportunities for continuous improvement. <br />
                  What You’ll Get <br />
                  <li>
                    Content updates to keep everything relevant and
                    search-engine friendly
                  </li>
                  <li>
                    Content repurposing to expand the reach of your most
                    important pieces
                  </li>
                  <li>
                    Strategic keyword optimization and internal linking to
                    improve your overall SEO and UX
                  </li>
                  <li>
                    Content analytics with a focus on rankings and referring
                    domains growth
                  </li>
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-5 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                Content Reporting
              </div>
              <svg
                onClick={() => handleSvgClick("menu5")}
                className={`dropdown-menu5 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${
                  dropdownsOpen.menu5 ? "rotate-180" : "rotate-0"
                }`}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {dropdownsOpen.menu5 ? (
                  // svg for "-"
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z"
                    fill="#FCAB64"
                  />
                ) : (
                  // svg for "+"
                  <>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z"
                      fill="#FCAB64"
                    />
                  </>
                )}
              </svg>
            </div>
            {dropdownsOpen.menu5 && (
              <div className=" bg-white w-full p-5 leading-8 text-xl font-normal text-[#012033]">
                <p>
                  We provide periodic updates and content marketing reports so
                  you know exactly how your content is performing in terms of
                  SEO and conversions. <br />
                  What You’ll Get <br />
                  <li>
                    Brand awareness metrics that show your content’s reach and
                    organic traffic
                  </li>
                  <li>
                    Engagement metrics that show how well prospects engage with
                    your content
                  </li>
                  <li>
                    Backlinks metrics that show how well your content assets are
                    earning inbound links
                  </li>
                  <li>
                    Lead generation metrics that show how many people convert
                    into leads and sign-ups
                  </li>
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-6 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                SEO Consulting
              </div>
              <svg
                onClick={() => handleSvgClick("menu6")}
                className={`dropdown-menu6 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${
                  dropdownsOpen.menu6 ? "rotate-180" : "rotate-0"
                }`}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {dropdownsOpen.menu6 ? (
                  // svg for "-"
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z"
                    fill="#FCAB64"
                  />
                ) : (
                  // svg for "+"
                  <>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z"
                      fill="#FCAB64"
                    />
                  </>
                )}
              </svg>
            </div>
            {dropdownsOpen.menu6 && (
              <div className=" bg-white w-full p-5 leading-8 text-xl font-normal text-[#012033]">
                <p>
                  Besides content marketing, our consultants help your SaaS rank
                  high in search results via technical SEO and link-building
                  guidance. <br />
                  What You’ll Get <br />
                  <li>In-depth SEO audit and review</li>
                  <li>Technical and on-site SEO recommendations</li>
                  <li>Backlink profile audit and management</li>
                  <li>SEO strategy and performance reporting</li>
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contentmarketing;
