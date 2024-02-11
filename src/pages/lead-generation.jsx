import React, { useEffect, useRef, useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import "./service-animation.css";

const Leadgen = () => {
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
        "We at Coltfox help you understand your Lead generation landing pages or web pages designed to convert prospects into leads. Because creating pages which will optimize the your products or services information to get the audience attention and encourage users to formally express their interest in your business (or content) by sharing their information. This process will get the maximum ROI.",
      imgSrc: "./logo-img-1.png",
    },
    {
      index: "02",
      title: "Optimize the Landing pages",
      paragraph:
        "Lead generation forms are designed to collect prospects’ information. They’re the all-important final step in many lead generation campaigns, so it’s crucial to get them right. First, we will access all the information to get the information from the client and will decide what information to collect. It’s about finding the right balance between the quantity and quality of submissions. Optimizing the content or contact forms is a part of our process in Lead generating Campaigns.",
      imgSrc: "./logo-img-2.png",
    },
    {
      index: "03",
      title: "Quality Content",
      paragraph:
        "At Coltfox, every step of lead generating campaign or the SEO structure, we will help the client get their attention towards the Create quality content that’s relevant to your business’s expertise and helpful or interesting to your target audience. This can help you capture prospects’ attention and earn their trust. For example, American Express publishes useful articles, videos, and podcasts for finance professionals. People who consume (and appreciate) this content are more likely to sign up for the company’s email newsletter. And ultimately become customers.",
      imgSrc: "./logo-img-3.png",
    },
    {
      index: "04",
      title: "Chat Functionality",
      paragraph:
        "Live chat makes it easy for people to ask questions about your products or services while they’re browsing your site. That means they’re less likely to give up when they don’t find the information they need. Plus, live chat has the potential to capture lead data. During the conversation, prospects are encouraged to share their information and discuss their needs. Then, Clients can add all useful details to their customer relationship management (CRM) system.",
      imgSrc: "./logo-img-4.png",
    },
    {
      index: "05",
      title: "Leverage SEO",
      paragraph:
        "We are fully serviced SEO Agency in India, we help you to  establish and improve organic (unpaid) rankings on relevant search engine results pages (SERPs). This can drive traffic to pages you decided to prioritize as part of your lead strategy. It also gives you a competitive advantage. The higher you rank for topical keywords, the more likely you are to detract clicks from your rivals.",
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

      <div className=" mt-10 px-3 pb-0 sm:pb-6 text-center sm:px-20 2xl:px-52 text-[#DF2323] text-4xl sm:text-[6rem] font-bold leading-tight">
        <h1> Lead generation </h1>
        <h1> FOX higher </h1>
        <h1> conversions & </h1>
        <h1> growth </h1>
      </div>

      <div className="flex justify-center items-center pt-20 pb-5 w-full md:w-3/4 lg:w-1/2 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="inner-shadow-top bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-2 text-white text-sm font-normal relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-black to-transparent opacity-5"></div>
            LEAD GENERATION
          </div>
          <div className=" text-center px-0 pb-10 text-[#012033] text-4xl sm:text-[4rem] font-bold leading-tight">
            Connecting creativity <br /> and conversion
          </div>
          <div className="px-2 sm:px-0 text-center px-0 pb-10 text-[#012033] text-2xl sm:text-[1.5rem] font-normal">
            <p>
              {" "}
              Through Website Design & Development, Pay-Per-Click Advertising,
              Marketing Automation, and SEO Services, we deliver results that
              get people clicking and converting.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pb-10 w-full md:w-4/5 lg:w-fit 2xl:w-[75%] mx-auto lg:mx-40 2xl:mx-auto">
        <img className="w-full" src="./lead-gen.png" alt="lead-gen.png" />
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
            <div className="flex sm:gap-4 md:h-[830px] lg:h-[580px] xl:h-[470px]">
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
          <div className="logo hidden h-full sm:flex my-auto lg:mt-auto lg:mb-24 xl:mb-12 2xl:mb-16 w-full md:w-1/2 lg:w-2/5 2xl:w-1/3 flex items-start justify-center xl:items-center lg:justify-center">
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
        <div className="title text-center bg-[#FCAB64] h-[20%] w-fit sm:w-2/5 xl:w-1/3 2xl:w-1/4 rounded-full py-1 text-white text-lg font-normal">
          SUPPORTING SOLUTIONS
        </div>
        <div className="lg:mt-10 sm:mt-3 w-full">
          <div className="leading-tight text-[#012033] text-4xl sm:text-[3rem] font-semibold">
            We put people at the heart of all the lead generation we do to drive
            results.
          </div>
          <div className="text-2xl font-normal leading-9 text-[#012033] pt-8 gap-10">
            <p>
              At Coltfox, we create experiences to promote emotional connections
              and meaningful relationships.
            </p>
          </div>
          <div className="mt-7 bg-white flex flex-col">
            <div className="menu-1 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-fit">
                B2B & B2C Marketing
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
                  We are a full service digital agency specialized in B2B
                  enterprise marketing. With the right mix of content,
                  advertising and account based marketing, we help our clients
                  connect and network with thousands of buyers and decision
                  makers every month to explore business opportunities through
                  one-on-one conversations.
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-2 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                Conversion Rate optimization CRO
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
                  Reach new levels of success with a solid CRO marketing
                  strategy expertly tailored to your unique business
                  requirements! Put your conversion marketing needs in the
                  capable hands of our conversion rate optimization agency and
                  reap the benefits of Conversion Rate Optimization services
                  done the right way.
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-3 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                Email Marketing
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
                  Choose Coltfox for your email marketing needs and get more
                  value for your money. With Coltfox Standard plan, you'll have
                  access to more automation templates, a more customization
                  email builder with more object blocks, a comprehensive
                  marketing calendar, dashboard views for report visualizations,
                  dynamic content in email.
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-4 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-3/5 sm:w-fit">
                Landing Page optimization
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
                  It doesn’t matter how amazing your landing page is if no one
                  sticks around to see it. Unless your landing page loads within
                  a couple of seconds, potential visitors are going to get
                  impatient and move onto something else. Mobile landing page
                  optimization is especially important in this regard as
                  searches on mobile continue to increase.
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-5 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                Account Based Marketing ABM
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
                  We are a team of account-based marketing and demand generation
                  specialists who leverage our SEO, PPC, content marketing,
                  programmatic, marketing automation, and analytics expertise
                  who provide the only insight that matters, when an account is
                  in-market and ready to buy from you.
                </p>
              </div>
            )}
            <div className="h-0.5 w-full bg-gray-800 mt-5" />
            <div className="menu-6 pt-5 px-2 sm:px-5 flex items-center">
              <div className="text-2xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                SEO Services
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
                  Coltfox is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wish list and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
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

export default Leadgen;
