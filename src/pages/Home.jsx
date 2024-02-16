import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSwipeable } from "react-swipeable";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
gsap.registerPlugin(ScrollTrigger);
import CookiePopup from "./cookie-popup";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current.classList.add("animate-slide-in");
          } else {
            titleRef.current.classList.remove("animate-slide-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  const [isMounted, setIsMounted] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsMounted(true);

    const simulateAsyncOperation = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    if (loading) {
      simulateAsyncOperation();
    }

    return () => {
      setIsMounted(false);
    };
  }, [loading]);

  useEffect(() => {
    if (isMounted && !loading) {
      const loadingScreen = document.querySelector(".loading-screen");
      gsap.to(loadingScreen, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          loadingScreen.style.display = "none";
        },
      });
    }
  }, [isMounted, loading]);

  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const typedTextSpan = document.querySelector(".head2-anm");
      const cursorSpan = document.querySelector(".typing-cursor");

      const textArray = [
        "ambitious - brands",
        "to generate",
        "Revenue",
        "Visibility",
        "Engagement",
      ];
      const fillInDelay = 2000;
      const fillOutDelay = 1000;
      const newTextDelay = 2000;

      let textArrayIndex = 0;
      let charIndex = 0;

      function type() {
        if (charIndex < textArray[textArrayIndex].length) {
          if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
          typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 30);
        } else {
          cursorSpan.classList.remove("typing");
          setTimeout(() => {
            erase();
          }, fillInDelay);
        }
      }

      function erase() {
        if (charIndex > 0) {
          if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
          typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
          );
          charIndex--;
          setTimeout(erase, 30);
        } else {
          cursorSpan.classList.remove("typing");
          textArrayIndex++;
          if (textArrayIndex >= textArray.length) textArrayIndex = 0;
          setTimeout(() => {
            type();
          }, fillOutDelay);
        }
      }

      if (isAnimating) {
        setTimeout(() => {
          if (textArray.length) {
            type();
          }
        }, newTextDelay + 250);
      }
    }, 2000);
  }, [isAnimating]);

  useEffect(() => {
    const delay = 200;

    const animationTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => {
      clearTimeout(animationTimeout);
      setIsAnimating(false);
    };
  }, []);

  //page2
  const content = [
    {
      imgSrc: "menu-img1.png",
      pContent:
        "HUDBIL delivers B2B engaging designing and development with the latest technology tools to empower business and drive success, at speed and scale.",
      imge: "./line-design-yellow.png",
    },
    {
      imgSrc: "menu-img2.png",
      pContent:
        "KALACODE delivers proprietary 3D workflows and is responsible for the world’s firsts in AR, including the world’s largest deployment of WebAR.",
      imge: "./line-design-yellow2.png",
    },
    {
      imgSrc: "menu-img3.png",
      pContent:
        "MAUS is a ‘Gen-Z’ Product that allows users to use their mobile phones as an exclusive mouse without wires and other connections. A user journey touch point.",
      imge: "./line-design-yellow3.png",
    },
    {
      imgSrc: "expandedlogo.png",
      pContent:
        "COLTFOX is not your typical digital marketing agency. We’re a strategic marketing firm that partners with clients to move their business forward. We’re bold. We’re curious. We’re transparent.",
      imge: "./line-design-yellow4.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeContent = () => {
      gsap.to(".comp-c img, .comp-c p", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => setContentPrevState(),
      });
    };

    const setContentPrevState = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      gsap.to(".comp-c img, .comp-c p", { opacity: 1, duration: 0.5 });
    };

    const contentChangeInterval = setInterval(changeContent, 3000);

    const handleKeyboard = (event) => {
      if (event.key === "ArrowLeft") {
        // When left arrow is pressed, move backwards
        changeContent(-1);
      } else if (event.key === "ArrowRight") {
        // When right arrow is pressed, move forwards
        changeContent(1);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      clearInterval(contentChangeInterval);
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [currentIndex, content]);

  const changeContent = (direction = 1) => {
    gsap.to(".comp-c img, .comp-c p", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => setContentPrevState(direction),
    });
  };

  const setContentPrevState = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return newIndex < 0 ? content.length - 1 : newIndex % content.length;
    });
    gsap.to(".comp-c img, .comp-c p", { opacity: 1, duration: 0.5 });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changeContent(1),
    onSwipedRight: () => changeContent(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  //page3
  const movableRef = useRef(null);
  const [contentIndex, setContentIndex] = useState(0);

  const contents = [
    "Our tenacious team of proven digital marketing experts and business growth pros push the boundaries of what is possible. COLTFOX harnesses the power of data analytics to understand customer behaviours and preferences.",
    "Our strength lies in our commitment to data-driven performance solutions designed to increase lead generation, customer acquisition, and audience engagement.",
    "Marketing isn’t a one-off activity but a continuous process. We act as an extension to your organization, connecting the dots between ideas, strategy, and technology to deliver long-term, sustainable solutions.",
  ];
  const image = [
    "./line-design-yellow.png",
    "./line-design-yellow2.png",
    "./line-design-yellow3.png",
  ];

  useEffect(() => {
    const animateContent = () => {
      gsap.to(movableRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          movableRef.current.textContent = contents[contentIndex];

          setContentIndex((prevIndex) =>
            prevIndex === contents.length - 1 ? 0 : prevIndex + 1
          );

          gsap.to(movableRef.current, {
            opacity: 1,
            duration: 1,
          });
        },
      });
    };

    const interval = setInterval(animateContent, 5000);

    return () => clearInterval(interval);
  }, [contentIndex]);
  //page4
  const [selectedService, setSelectedService] = useState(
    "Performance Marketing"
  );

  const handleServiceHover = (serviceName) => {
    setSelectedService(serviceName);
  };
  //page5
  const containerRef = useRef();
  const [selectedBox, setSelectedBox] = useState("acma");
  useEffect(() => {
    const container = containerRef.current;
    const title = container.querySelector(".page5-title");
    const description = container.querySelector(".page5-des");

    // Set initial styles without animation
    gsap.set([title, description], {
      opacity: 1,
    });

    const handleMouseOver = () => {
      gsap.fromTo([title, description], {
        opacity: 1,
      });
    };

    container.addEventListener("mouseover", handleMouseOver);

    return () => {
      container.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const handleBoxClick = (boxId) => {
    setSelectedBox(selectedBox === boxId ? null : boxId);

    const page5Cont = containerRef.current;

    switch (boxId) {
      case "acma":
        page5Cont.style.backgroundImage = 'url("/acmaimg.png")';
        break;
      case "toolstation":
        page5Cont.style.backgroundImage = 'url("/toolstationimg.png")';
        break;
      case "solo":
        page5Cont.style.backgroundImage = 'url("/soloimg.png")';
        break;
      case "cedevita":
        page5Cont.style.backgroundImage = 'url("/cedevitaimg.png")';
        break;
      default:
        page5Cont.style.backgroundImage = "none";
        break;
    }
  };
  //page6
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page6-container",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        once: true,
      },
    });

    document.querySelectorAll(".page6-cont").forEach((el, index) => {
      tl.fromTo(
        el,
        { x: "185%" },
        { x: "0%", duration: 0.7, opacity: 1 },
        `-=${index === 0 ? 0 : 0.5}`
      );
    });
  }, []);

  //page7

  function adjustDividerWidth() {
    const logoImage = document.querySelector(".sec1-logo-image");
    const divider = document.querySelector(".page7-liner1");

    if (!divider) return;

    if (window.innerWidth < 1024) {
      divider.classList.add("divider-small-screen");
    } else {
      divider.classList.remove("divider-small-screen");
      if (logoImage && logoImage.offsetParent) {
        const logoRect = logoImage.getBoundingClientRect();
        const parentRect = logoImage.offsetParent.getBoundingClientRect();
        const relativeLeft = logoRect.left - parentRect.left;
        divider.style.width = `${relativeLeft}px`;
      }
    }
  }
  window.addEventListener("load", adjustDividerWidth);
  window.addEventListener("resize", adjustDividerWidth);

  function adjustDividerWidth2() {
    const logoImage2 = document.querySelector(".sec2-logo-image");
    const divider2 = document.querySelector(".page7-liner2");

    if (!divider2) return;

    if (window.innerWidth < 1024) {
      divider2.classList.add("divider-small-screen2");
    } else {
      divider2.classList.remove("divider-small-screen2");
      if (logoImage2 && logoImage2.offsetParent) {
        const logoRect2 = logoImage2.getBoundingClientRect();
        const parentRect2 = logoImage2.offsetParent.getBoundingClientRect();
        const relativeLeft2 = logoRect2.left - parentRect2.left;
        divider2.style.width = `${relativeLeft2}px`;
      }
    }
  }
  window.addEventListener("load", adjustDividerWidth2);
  window.addEventListener("resize", adjustDividerWidth2);

  function adjustDividerWidth3() {
    const logoImage3 = document.querySelector(".sec3-logo-image");
    const divider3 = document.querySelector(".page7-liner3");

    if (!divider3) return;

    if (window.innerWidth < 1024) {
      divider3.classList.add("divider-small-screen3");
    } else {
      divider3.classList.remove("divider-small-screen3");
      if (logoImage3 && logoImage3.offsetParent) {
        const logoRect3 = logoImage3.getBoundingClientRect();
        const parentRect3 = logoImage3.offsetParent.getBoundingClientRect();
        const relativeLeft3 = logoRect3.left - parentRect3.left;
        divider3.style.width = `${relativeLeft3}px`;
      }
    }
  }
  window.addEventListener("load", adjustDividerWidth3);
  window.addEventListener("resize", adjustDividerWidth3);

  // function adjustDividerWidth() {
  //   const logoImage = document.querySelector('.sec1-logo-image');
  //   const divider = document.querySelector('.page7-liner1');

  //   if (!divider) return;

  //   if (window.innerWidth < 1024) {
  //     divider.classList.add('divider-small-screen');
  //   } else {
  //     divider.classList.remove('divider-small-screen');
  //     if (logoImage) {
  //       const logoOffsetLeft = logoImage.offsetLeft;
  //       divider.style.width = `${logoOffsetLeft}px`;
  //     }
  //   }
  // }
  // window.addEventListener('load', adjustDividerWidth);
  // window.addEventListener('resize', adjustDividerWidth);

  // function adjustDividerWidth2() {
  //   const logoImage2 = document.querySelector('.sec2-logo-image');
  //   const divider2 = document.querySelector('.page7-liner2');

  //   if (!divider2) return;

  //   if (window.innerWidth < 1024) {
  //     divider2.classList.add('divider-small-screen2');
  //   } else {
  //     divider2.classList.remove('divider-small-screen2');
  //     if (logoImage2) {
  //       const logoOffsetLeft2 = logoImage2.offsetLeft;
  //       divider2.style.width = `${logoOffsetLeft2}px`;
  //     }
  //   }
  // }
  // window.addEventListener('load', adjustDividerWidth2);
  // window.addEventListener('resize', adjustDividerWidth2);

  // function adjustDividerWidth3() {
  //   const logoImage3 = document.querySelector('.sec3-logo-image');
  //   const divider3 = document.querySelector('.page7-liner3');

  //   if (!divider3) return;

  //   if (window.innerWidth < 1024) {
  //     divider3.classList.add('divider-small-screen3');
  //   } else {
  //     divider3.classList.remove('divider-small-screen3');
  //     if (logoImage3) {
  //       const logoOffsetLeft3 = logoImage3.offsetLeft;
  //       divider3.style.width = `${logoOffsetLeft3}px`;
  //     }
  //   }
  // }
  // window.addEventListener('load', adjustDividerWidth3);
  // window.addEventListener('resize', adjustDividerWidth3);

  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page7-main",
        start: "top center",
        end: "bottom center",
        scrub: 1, // Adjust the scrub value as needed
      },
    });

    sectionRefs.current.forEach((section, index) => {
      tl.fromTo(
        section,
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 1 },
        `-=${index === 0 ? 0 : 0.5}` // Adjust the delay for each element
      );
    });
  }, []);

  const containerRef1 = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const container = containerRef1.current;

  //   gsap.from(container, {
  //     y: '100%', // Start from below the viewport
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: container,
  //       start: 'top 80%', // Adjust the trigger start position as needed
  //       end: 'top center',
  //       toggleActions: 'play none none reverse',
  //       once: true, // Play the animation only once
  //     },
  //   });
  // }, []);
  const containerRef2 = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const container = containerRef2.current;

  //   gsap.from(container, {
  //     y: '100%', // Start from below the viewport
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: container,
  //       start: 'top 80%', // Adjust the trigger start position as needed
  //       end: 'top center',
  //       toggleActions: 'play none none reverse',
  //     },
  //   });
  // }, []);
  const containerRef3 = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const container = containerRef3.current;

  //   gsap.from(container, {
  //     y: '100%', // Start from below the viewport
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: container,
  //       start: 'top 80%', // Adjust the trigger start position as needed
  //       end: 'top center',
  //       toggleActions: 'play none none reverse',
  //     },
  //   });
  // }, []);

  // document.addEventListener('DOMContentLoaded', (event) => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('start-animation');
  //         observer.unobserve(entry.target);
  //         // Optional: Stop observing after animation starts
  //       }
  //     });
  //   }, { threshold: 1 }); // Adjust the threshold as needed

  //   const section = document.getElementById('animated-section');
  //   observer.observe(section);
  // });

  return (
    <div>
      {/* page1 */}
      {/* Loading screen */}
      {loading && (
        <div
          className=""
          style={{
            background: 'url("/greypaper.jpeg")',
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10000,
          }}
        >
          <img
            className="logo-container px-16 sm:px-0 w-fit lg:max-w-[30%] lg:max-h-[30%] 2xl:max-w-[22%] 2xl:max-h-[22%] opacity-[100%]"
            src="./expandedlogo.png"
            alt="Logo"
          />
          <div className="impressionat mx-6 sm:mx-0 mt-6 text-[16px] sm:text-[20px] w-fit py-7 sm:py-4 px-4 text-[#012033] bg-[url('/noise.png')] bg-blend-overlay">
            Impression At Your Fingertips
          </div>
        </div>
      )}

      <CookiePopup />

      <div className="bg-[#f2f2f2] flex flex-col overflow-hidden">
        <NavbarAndFullscreenMenu />
        <div className="flex flex-col pb-2 px-6 pt-8 md:px-12 xl:px-44 lg:flex-row justify-between">
          <div>
            <h1 className="text-[#df2323] font-semibold text-3xl md:text-[3rem] lg:text-[4.5rem] mb-6 sm:mb-20 leading-tight">
              We help
            </h1>
            <p className="animation mb-6 sm:mb-20">
              <span className="head2-anm bg-[url('/yellowpaper.jpeg')] shadow-inset text-2xl md:text-[3rem] lg:text-[4.5rem] bg-cover rounded-full text-[#1f1f21] font-semibold leading-tight px-4 py-2 sm:px-8 sm:py-4"></span>
              <span className="typing-cursor"></span>
            </p>
            <h1 className="text-[#df2323] font-semibold text-3xl md:text-[3rem] lg:text-[4.5rem] mb-6 sm:mb-20 leading-tight">
              by marketing
            </h1>
          </div>
          <div className="flex flex-col justify-between mt-8 sm:mt-0 w-fit">
            <button className="mt-auto mb-0 sm:mb-20 rounded-full bg-white border border-[#fcab64] shadow-none flex items-center justify-center text-black text-base sm:text-lg md:text-xl px-4 py-1 gap-2 shadow-[4px_8px_19px_-3px_#fcab64] hover:bg-[#fcab64] hover:text-white transition duration-500">
              <Link
                to="/contact-us"
                className="flex items-center justify-center gap-2"
              >
                {" "}
                Let's talk{" "}
                <img src="./arr-b.png" alt="Arrow" className="w-5 md:w-6" />
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="pge-2 bg-[#f2f2f2] flex overflow-hidden py-12 sm:py-0 px-4 lg:px-8">
        <div className="bg-white rounded-3xl shadow-md w-full xl:w-[90%] mx-auto p-4 sm:p-6 md:flex md:justify-between md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          <div className="w-full md:w-1/2 px-2 sm:px-4 mb-6">
            <Link to="/page1">
              <button className="w-fit h-12 rounded-full bg-white flex items-center justify-center text-black text-lg px-4 gap-2 shadow-md hover:bg-[#fcab64]">
                Who We Are
              </button>
            </Link>
            <h1
              ref={titleRef}
              className="font-poppins font-bold text-[#df2323] text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-6 md:my-8 lg:my-10 xl:my-12"
            >
              Our Brands
            </h1>
            <p className="font-poppins text-[#1F1F21] text-base sm:text-lg leading-normal sm:leading-relaxed md:leading-loose">
              Hudbil Private Limited is a reliable company, with multiple brands
              under one umbrella. We are here to enable you with top-notch
              digital solutions & products through a proven cost-saving model.
              This allows you to scale, optimize, expand, and enhance your
              business with an individual approach. This is our game style.
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-auto flex lg:pt-20 lg:pb-12 flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-0 xl:gap-10">
            <div
              {...handlers}
              className="w-full flex justify-center"
              style={{ userSelect: "none" }}
            >
              {[0, 1, 2, 3].map(
                (index) =>
                  currentIndex === index && (
                    <div
                      className="comp-c shadow-inset shadow-inner bg-[#d9d3d3] relative rounded-[100px] flex flex-col items-center h-fit mt-auto justify-center gap-2 px-0 py-8 lg:w-[95%] xl:w-5/6"
                      key={index}
                    >
                      <img
                        src={content[index].imgSrc}
                        alt=""
                        className="w-1/3 lg:w-2/5 sm:h-[72px]"
                      />
                      <p className="w-[513px] h-[180px] lg:h-[140px] flex items-center justify-center font-poppins text-base sm:text-lg text-center mt-4">
                        {content[index].pContent}
                      </p>
                      <Link to="/our-brand">
                        <button className="rounded-full bg-white shadow-none border border-[#FCAB64] flex items-center justify-center text-black text-lg gap-2 mt-0  px-6 py-2 sm:py-2">
                          Learn more{" "}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-black text-1.5rem ml-2"
                          />
                        </button>
                      </Link>
                      <div className="mt-4">
                        <img src={content[index].imge} alt="line design" />
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      {/*page3*/}
      <div className="page3-container p-8 sm:p-5 pt-0 md:pt-12">
        <div className="pt-8 md:pt-16">
          <div className="bg-[#fcab64]">
            <div className="section-heading-content section-heading bg-[#fcab64] h-[80px] sm:h-[120px] flex gap-96 justify-between items-center text-center my-0">
              <p className="font-bold text-4xl sm:text-6xl">
                Our passion lies in working closely with our clients to develop
                valuable digital marketing tailored to their needs.
              </p>
              <p className="font-bold text-4xl sm:text-6xl ml-auto">
                Our passion lies in working closely with our clients to develop
                valuable digital marketing tailored to their needs.
              </p>
              <p className="font-bold text-4xl sm:text-6xl ml-auto">
                Our passion lies in working closely with our clients to develop
                valuable digital marketing tailored to their needs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-0 md:mt-5 pl-0 lg:ml-[40%]  page3-right lg:w-[45%]">
          <button className=" bg-white border border-[#1f1f21] shadow-none flex items-center h-12 w-fit mt-12 mb-7 font-poppins font-medium text-black text-base sm:text-lg px-4 py-2 rounded-full gap-2 hover:bg-orange-400 hover:text-white hover:shadow-lg transition duration-500 ease-in-out">
            About Us
          </button>
          <div className="stable-des mt-5 font-poppins text-base sm:text-lg pr-4 lg:pr-7 text-[#012033] mb-5 max-w-full lg:max-w-2xl leading-normal ">
            Coltfox is not your typical digital marketing agency. We’re a
            strategic marketing firm that partners with clients to move their
            business forward. We’re bold. We’re curious. We’re transparent.
          </div>
          <div className="movable-des pr-4 lg:pr-7 inline-flex flex-col font-poppins text-[#012033] text-base lg:text-lg font-normal max-w-full lg:max-w-2xl text-left pb-2.5">
            <div
              ref={movableRef}
              className="movable h-auto  font-poppins leading-normal text-base lg:text-lg text-[#012033] pr-4 lg:pr-10 mb-3.75 max-w-full lg:max-w-2xl"
            >
              {contents[contentIndex]}
            </div>
          </div>
          <div className="flex justify-center pt-8 max-w-full lg:max-w-2xl">
            <img src={image[contentIndex]} alt="Line Design" />
          </div>
          <Link to="/about-us">
            <button className="findmore-btn shadow-inset relative ">
              Find out more
              <img src="./arr-b.png" className="page3-arr" alt="Arrow" />
            </button>
          </Link>
        </div>
      </div>

      {/*page4*/}
      <div className="page4-container flex flex-col lg:flex-row px-8 xl:px-32 2xl:px-52 xl:gap-8">
        <div className="page4-left px-0 lg:ml-10 xl:ml-0 xl:w-1/2">
          <button className="whatwedo-btn w-fit text-lg h-12 px-4">
            <Link to="/we-do">What We Do</Link>
          </button>
          <div className="page4-title w-full text-left text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Our Services
          </div>
          <div className="page4-des lg:w-full text-base sm:text-lg">
            Creative solutions from strategy through omni- channels placements
            to engag, acquire, and transform brands for sustained growth.
          </div>
          <div className="page4-line" />
          <content5>
            <div
              className="perf flex flex-row justify-between"
              onMouseEnter={() => handleServiceHover("Performance Marketing")}
            >
              <div className="srno ml-2 lg:ml-0 w-20 sm:w-20">01</div>
              <div className="innertitle ml-2 sm:ml-10">
                Performance Marketing
              </div>
              <Link to="/performance-marketing">
                <FontAwesomeIcon
                  className="page4-arr sm:pl-6 pl-0"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </content5>
          <div className="page4-line" />
          <content6>
            <div
              className="perf flex flex-row justify-between"
              onMouseEnter={() => handleServiceHover("Omni-channel Marketing")}
            >
              <div className="srno w-20 sm:w-20">02</div>
              <div className="innertitle ml-auto pl-4 sm:pl-0 sm:ml-10">
                Omni - channel Marketing
              </div>
              <Link to="omni-channel-marketing">
                <FontAwesomeIcon
                  className="page4-arr sm:pl-6 pl-0"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </content6>
          <div className="page4-line" />
          <content7 className="c-7 w-full">
            <div
              className="perf flex flex-row justify-between"
              onMouseEnter={() => handleServiceHover("Lead Generation")}
            >
              <div className="srno ml-0 lg:ml-0 w-20 sm:w-20">03</div>
              <div className="innertitle pl-2 sm:pl-0 ml-auto sm:ml-10">
                Lead Generation
              </div>
              <Link to="lead-generation">
                <FontAwesomeIcon
                  className="page4-arr sm:pl-6 pl-0"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </content7>
          <div className="page4-line" />
          <content8>
            <div
              className="perf flex flex-row justify-between"
              onMouseEnter={() => handleServiceHover("Content Marketing")}
            >
              <div className="srno  w-20 sm:w-20">04</div>
              <div className="innertitle ml-4 pl-2 sm:pl-0 sm:ml-10">
                Content Marketing
              </div>
              <Link to="content-marketing">
                <FontAwesomeIcon
                  className="pl-0 sm:pl-6 page4-arr"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </content8>
          <div className="page4-line" />
          <Link to="/our-services" className="w-full">
            <button className="expl">
              Explore Services
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{
                  color: "#000000",
                  height: "25px",
                  width: "20px",
                  transform: "rotate(-45deg)",
                }}
              />
            </button>
          </Link>
        </div>
        <div className="page4-right mt-4 px-0 lg:mt-auto lg:pb-20 lg:mr-16 h-full lg:px-8 xl:w-1/2">
          <div className="changing-desof w-fit 2xl:mx-auto xl:w-fit">
            <div className="innertitl flex items-center gap-4">
              {selectedService}
              <img
                src="./arr-w-learn.png"
                alt="Learn more"
                className="w-[10%] h-[10%] "
              />
            </div>
            {selectedService === "Performance Marketing" && (
              <div className="titldes mt-4 ">
                ROIs are at the heart of performance marketing, as every action
                can be tracked and measured against key performance indicators
                (KPIs). Whether it be the number of clicks, page views or sales,
                these key metrics are crucial to measuring and enhancing
                performance
              </div>
            )}
            {selectedService === "Omni-channel Marketing" && (
              <div className="titldes mt-4">
                Your customers will be happier in the long term if they feel
                they have several methods to reach your customer service and
                sales teams. Or if they can purchase your product easily
                regardless of their device or preferred platform.
              </div>
            )}
            {selectedService === "Lead Generation" && (
              <div className="titldes mt-4">
                {" "}
                Lead Generation brings the right opportunities into your sales
                teams’ calendars. We grow your pipeline by managing research,
                campaign creation, outbound sales and inbox management. We work
                as your lead gen department taking care of all the
                time-consuming top-of-funnel.
              </div>
            )}
            {selectedService === "Content Marketing" && (
              <div className="titldes mt-4">
                Reach your marketing goals with a content strategy that helps
                you find your strongest stories, reach the right people, measure
                your success, and do it all as efficiently as possible.
                Supporting the growth of your business.
              </div>
            )}
          </div>
        </div>
      </div>
      {/*page5*/}
      <div className="page5-container px-4 lg:px-20 2xl:px-0 2xl:pl-80 flex flex-col py-16 lg:py-24 overflow-hidden">
        <Link to="/what-we-did">
          <button className="seeall-btn shadow-none mt-[-42px] mb-2.5 ml-auto xl:mr-12">
            Case Studies <img src="./arr-w-learn.png" />
          </button>
        </Link>
        <div
          className="page5-cont mt-10 mb-10 lg:mb-0 w-full 2xl:w-[80%] h-full 2xl:h-fit 2xl:ml-auto"
          ref={containerRef}
        >
          <div className="page5-title">
            {selectedBox ? selectedBox.toUpperCase() + "." : ""}
          </div>
          <div className="page5-des w-full">
            {selectedBox &&
              (selectedBox === "acma"
                ? "Automotive Component Manufacturers Association of India"
                : selectedBox === "toolstation"
                ? "Tool station launches latest catalog with deals and products"
                : selectedBox === "solo"
                ? "Solo Expenses – App promotion marketing campaign"
                : selectedBox === "cedevita"
                ? "Creating an intelligent and seamless experience for an NGO."
                : "")}
          </div>
          <Link to={`/${selectedBox.toLowerCase().replace(/ /g, "-")}`}>
            <button className="viewproj-btn shadow-inset mt-[55%] mb-6 ml-[4%] 2xl:ml-auto 2xl:mr-12">
              View Project
              <img src="./arr-w-learn.png" />
            </button>
          </Link>
        </div>
        <div className="page5-box shadow-inset mb-0 mt-auto lg:mt-80 pb-8">
          <img
            src={
              selectedBox &&
              (selectedBox === "acma"
                ? "./line-design-red1.png"
                : selectedBox === "toolstation"
                ? "./line-design-red2.png"
                : selectedBox === "solo"
                ? "./line-design-red3.png"
                : selectedBox === "cedevita"
                ? "./line-design-red4.png"
                : "./line-design-red.png")
            }
            style={{ position: "absolute", left: "95%", top: "50%" }}
            className="hidden sm:block"
          />
          <button className="whatwedid-btn w-fit h-12 text-lg px-4">
            What We Did
          </button>
          <div className="box-cont">
            <content>
              <div
                className={`box-brand ${
                  selectedBox === "acma" ? "open-brand" : ""
                }`}
                onClick={() => handleBoxClick("acma")}
              >
                ACMA.
                <img src="./crossarr-w.png" />
              </div>
            </content>
            {selectedBox === "acma" && (
              <>
                <div className="box-des w-fit sm:w-[90%] text-base sm:text-lg">
                  Working closely with the ACMA team, Associations has
                  transformed the event b2b and b2c search strategy and
                  performance by restructuring search campaigns, rolling out
                  into new territories, and combining their event and Google
                  intelligent bidding to grow digital overall.
                </div>
                <div className="boxmid-s flex flex-col sm:flex-row w-fit">
                  <div className="whitebox">SMM</div>
                  <div className="whitebox">Content Writing</div>
                  <div className="whitebox">Strategy</div>
                </div>
              </>
            )}
            <content2>
              <div
                className={`box-brand ${
                  selectedBox === "toolstation" ? "open-brand" : ""
                }`}
                onClick={() => handleBoxClick("toolstation")}
              >
                Toolstation.
                <img src="./crossarr-w.png" />
              </div>
            </content2>
            {selectedBox === "toolstation" && (
              <>
                <div className="box-des w-fit sm:w-[90%] text-base sm:text-lg">
                  The catalog will be available in all 550+ Tool station stores
                  across the UK. To celebrate the launch, Coltfox did help them
                  with hard-to-reach local construction Landing strategy in
                  London and across the capital, making it easier attract deals.
                </div>
                <div className="boxmid-s flex flex-col sm:flex-row w-fit">
                  <div className="whitebox">Leads</div>
                  <div className="whitebox">Content</div>
                  <div className="whitebox">Marketing</div>
                </div>
              </>
            )}
            <content3>
              <div
                className={`box-brand ${
                  selectedBox === "solo" ? "open-brand" : ""
                }`}
                onClick={() => handleBoxClick("solo")}
              >
                Solo.
                <img src="./crossarr-w.png" />
              </div>
            </content3>
            {selectedBox === "solo" && (
              <>
                <div className="box-des w-fit sm:w-[90%] text-base sm:text-lg">
                  Lorem ipsum dolor sit amet. Qui cumque deleniti sed maxime
                  debitis aut neque cupiditate At voluptas autem qui officiis
                  exercitationem? Vel doloribus sint et porro aliquid ut nihil
                  quaerat aut enim nihil ea voluptatem sunt quo quod odit.
                </div>
                <div className="boxmid-s flex flex-col sm:flex-row w-fit">
                  <div className="whitebox">Leads</div>
                  <div className="whitebox">Content</div>
                  <div className="whitebox">Marketing</div>
                </div>
              </>
            )}
            <content4>
              <div
                className={`box-brand ${
                  selectedBox === "cedevita" ? "open-brand" : ""
                }`}
                onClick={() => handleBoxClick("cedevita")}
              >
                Cedevita.
                <img src="./crossarr-w.png" />
              </div>
            </content4>
            {selectedBox === "cedevita" && (
              <>
                <div className="box-des w-fit sm:w-[90%] text-base sm:text-lg">
                  Lorem ipsum dolor sit amet. Qui cumque deleniti sed maxime
                  debitis aut neque cupiditate At voluptas autem qui officiis
                  exercitationem? Vel doloribus sint et porro aliquid ut nihil
                  quaerat aut enim nihil ea voluptatem sunt quo quod odit.
                </div>
                <div className="boxmid-s flex flex-col sm:flex-row w-fit">
                  <div className="whitebox">Leads</div>
                  <div className="whitebox">Content</div>
                  <div className="whitebox">Marketing</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/*page6*/}
      <div className="page6-container">
        <button className="howdowe-btn lg:mx-32 2xl:mx-40 w-fit text-lg px-4 h-12">
          How We Do It
        </button>
        <div
          className="page6-title lg:px-12 2xl:px-20 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pt-6"
          ref={containerRef3}
        >
          Process & Approach
        </div>
        <div className="page6-cont mt-10 lg:mt-12 mx-auto flex flex-col items-center justify-around p-1 md:p-4 mb-0 lg:mb-6 overflow-hidden lg:flex-row">
          <div className="protitle mx-2 lg:ml-10 flex items-center justify-center gap-0 lg:gap-7 text-xs md:text-xl lg:text-4xl">
            1. <div className="innert">Requirements</div>
          </div>
          <div className="prodes flex items-center justify-center ml-0 px-1 lg:ml-14 my-2 lg:my-16 w-full text-xs lg:text-base leading-tight lg:leading-normal">
            Our initial meeting or call will identify your objectives and
            decipher exactly how we can help. This involves some deep digging
            into your company, your competitors, your audience and, most
            importantly, what you want to achieve.
          </div>
        </div>
        <div className="page6-cont mt-10 mx-auto flex flex-col items-center justify-around p-1 md:p-4 mb-0 lg:mb-6 overflow-hidden lg:flex-row">
          <div className="protitle mx-2 lg:ml-10 flex items-center justify-center gap-0 lg:gap-7 text-xs md:text-xl lg:text-4xl">
            2. <div className="innert">Strategy</div>
          </div>
          <div className="prodes flex items-center justify-center ml-0 px-1 lg:ml-14 my-2 lg:my-16 w-full text-xs lg:text-base leading-tight lg:leading-normal">
            We begin to explore all the possible avenues your business could
            take and we develop a custom strategy to hit your business goals,
            underpinned by a strategic digital plan. This is the step where no
            idea is a bad idea; really anything goes!
          </div>
        </div>
        <div className="page6-cont mt-10 mx-auto flex flex-col items-center justify-around p-1 md:p-4 mb-0 lg:mb-6 overflow-hidden lg:flex-row">
          <div className="protitle mx-2 lg:ml-10 flex items-center justify-center gap-0 lg:gap-7 text-xs md:text-xl lg:text-4xl">
            3. <div className="innert">Launch</div>
          </div>
          <div className="prodes flex items-center justify-center ml-0 px-1 lg:ml-14 my-2 lg:my-16 w-full text-xs lg:text-base leading-tight lg:leading-normal">
            After refining the concept we execute the final solution, always in
            budget and always on time. We'll be on hand to closely monitor the
            launch and keep you updated We track the project or campaign to
            ensure the results match your objectives.
          </div>
        </div>
        <div className="page6-cont mt-10 mx-auto flex flex-col items-center justify-around p-1 md:p-4 mb-0 lg:mb-12 overflow-hidden lg:flex-row">
          <div className="protitle mx-2 lg:ml-10 flex items-center justify-center gap-0 lg:gap-7 text-xs md:text-xl lg:text-4xl">
            4. <div className="innert">Enhance</div>
          </div>
          <div className="prodes flex items-center justify-center ml-0 px-1 lg:ml-14 my-2 lg:my-16 w-full text-xs lg:text-base leading-tight lg:leading-normal">
            Here we refine and optimise the project or campaign to maximise ROI
            and highlight key successes to carry into future projects. We cycle
            through a series of continuous improvement sprints to maximise and
            achieve optimum performance.
          </div>
        </div>
        <div className="page6-endcont">
          <p>
            For over a <div className="endcont-style">decade</div>, we’ve been
            delivering ‘Marketing Experience’ that will amaze you
          </p>
          <div className="end-date mt-6 text-xs sm:text-sm">Since 2016</div>
        </div>
      </div>

      {/*page7*/}

      <div className=" bg-[url('/yellowpaper.jpeg')] bg-cover min-h-[90vh] flex flex-col items-start text-center px-6 py-8 md:p-10 lg:pl-20 xl:px-36 2xl:px-44 lg:pb-36 overflow-hidden">
        <Link to="/industries">
          <button className="mt-2 w-fit h-12 rounded-full bg-white flex items-center justify-center font-poppins font-medium text-black text-lg px-4 shadow hover:bg-orange-400">
            What We Focus
          </button>
        </Link>
        <div className="mt-5 text-red-600 font-poppins font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Industries
        </div>
        <div className="mt-5 text-left lg:w-[65%] text-white font-poppins font-medium text-base sm:text-lg leading-normal md:leading-relaxed">
          Regardless of your operation’s size, collaboration toward a shared
          goal leads to success.
        </div>
        <div className="page7-main flex flex-col mt-10 max-w-full w-fit lg:w-full text-left relative gap-12">
          {/* Section 1 */}
          <div
            className="section1  lg:w-4/5 relative"
            ref={(ref) => (sectionRefs.current[0] = ref)}
          >
            <div className="section-main text-white font-poppins font-bold text-2xl md:text-4xl">
              FRANCHISES
            </div>
            <div className="page7-divider page7-liner1 overflow-hidden h-px bg-gray-300 mt-4"></div>
            <div className="sec-logo hidden md:flex">
              <img
                src="./sec1-logo.png"
                alt="Franchises"
                className="sec1-logo-image animationLogo w-0 h-0 md:w-80 md:h-80 absolute right-[0%] top-[40%]"
              />
            </div>
            <div className="sec-desc1 lg:w-1/2 mt-2 text-white font-poppins font-normal text-base text-base sm:text-lg leading-relaxed">
              Not only do we increase B2B leads for franchisors, we also help
              home-town franchisees generate new customers and increase customer
              loyalty.
            </div>
            <button className="learn-m w-fit mt-5 h-10 border border-white rounded-full px-5 flex items-center justify-between gap-5">
              Learn More{" "}
              <img src="./arr-w-learn.png" alt="Learn More" className="w-10" />
            </button>
          </div>
          {/* Section 2 */}
          <div
            className="section2 lg:w-4/5 relative"
            ref={(ref) => (sectionRefs.current[1] = ref)}
          >
            <div className="section-main text-white font-poppins font-bold text-2xl md:text-4xl">
              NON-PROFITS
            </div>
            <div className="page7-divider page7-liner2 w-full overflow-hidden h-px bg-gray-300 mt-4"></div>
            <div className="sec-logo">
              <img
                src="./sec2-logo.png"
                alt="Franchises"
                className="sec2-logo-image animationLogo w-60 h-60 md:w-80 md:h-80 absolute right-[0%] top-[40%]"
              />
            </div>
            <div className="sec-desc2 lg:w-1/2 mt-2 text-white font-poppins font-normal text-base sm:text-lg leading-relaxed">
              Not only do we increase B2B leads for franchisors, we also help
              home-town franchisees generate new customers and increase customer
              loyalty.
            </div>
            <button className="learn-m w-fit mt-5 h-10 border border-white rounded-full px-5 flex items-center justify-between gap-5">
              Learn More{" "}
              <img src="./arr-w-learn.png" alt="Learn More" className="w-10" />
            </button>
          </div>
          {/* Section 3 */}
          <div
            className="section3 lg:w-4/5 relative"
            ref={(ref) => (sectionRefs.current[2] = ref)}
          >
            <div className="section-main text-white font-poppins font-bold text-2xl md:text-4xl">
              E-COMMERCE
            </div>
            <div className="page7-divider page7-liner3 w-full overflow-hidden h-px bg-gray-300 mt-4"></div>
            <div className="sec-logo">
              <img
                src="./sec3-logo.png"
                alt="Franchises"
                className="sec3-logo-image animationLogo w-60 h-60 md:w-80 md:h-80 absolute right-[0%] top-[40%]"
              />
            </div>
            <div className="sec-desc3 lg:w-1/2 mt-2 text-white font-poppins font-normal text-base sm:text-lg leading-relaxed">
              Not only do we increase B2B leads for franchisors, we also help
              home-town franchisees generate new customers and increase customer
              loyalty.
            </div>
            <button className="learn-m w-fit mt-5 h-10 border border-white rounded-full px-5 flex items-center justify-between gap-5">
              Learn More{" "}
              <img src="./arr-w-learn.png" alt="Learn More" className="w-10" />
            </button>
          </div>
        </div>
      </div>

      {/*page8*/}
      <div className="page8-container">
        <button className="whattheysay-btn mx-6 sm:mx-24 lg:mx-32 2xl:mx-44 h-12 w-fit px-4 text-lg">
          What They Say
        </button>

        <div
          className="page8-title px-6 sm:px-24 lg:px-32 2xl:px-44 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pt-6"
          ref={containerRef2}
        >
          Clients
        </div>
        <div className="page8-des px-6 sm:px-24 lg:px-32 2xl:px-44 text-base sm:text-lg">
          We’ve partnered with some truly amazing brands and organizations –
          locally, nationally, and internationally.
        </div>

        <div className="page8-scroller1">
          <div className="scroll1-grp1">
            <div className="elem1">
              <img src="./logo-1.png" alt="kf_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-2.png" alt="junk_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-3.png" alt="sendl_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-4.png" alt="sbee_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-5.png" alt="cre_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-6.png" alt="mfr_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-7.png" alt="usaid_logo logo" />
            </div>
          </div>
          <div className="scroll1-grp1">
            <div className="elem1">
              <img src="./logo-1.png" alt="kf_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-2.png" alt="junk_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-3.png" alt="sendl_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-4.png" alt="sbee_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-5.png" alt="cre_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-6.png" alt="mfr_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-7.png" alt="usaid_logo logo" />
            </div>
          </div>
        </div>

        <div className="page8-scroller2">
          <div className="scroll2-grp1">
            <div className="elem2">
              <img src="./acma-logo.png" alt="acma logo" />
            </div>
            <div className="elem2">
              <img src="./nuta_logo.png" alt="acma logo" />
            </div>
            <div className="elem2">
              <img src="./scoro_logo.png" alt="scoro_logo" />
            </div>
            <div className="elem2">
              <img src="./cht_logo.png" alt="cht_logo" />
            </div>
          </div>
          <div className="scroll2-grp1">
            <div className="elem2">
              <img src="./acma-logo.png" alt="acma logo" />
            </div>
            <div className="elem2">
              <img src="./nuta_logo.png" alt="nuta_logo" />
            </div>
            <div className="elem2">
              <img src="./scoro_logo.png" alt="scoro_logo" />
            </div>
            <div className="elem2">
              <img src="./cht_logo.png" alt="cht_logo" />
            </div>
          </div>
        </div>
      </div>

      {/* page9 */}
      <div className="page9-container h-fit xl:px-40 2xl:px-44 2xl:pb-0">
        <div className="page9-cont 2xl:mt-0 w-full flex flex-col xl:flex-row justify-between lg:gap-20 xl:gap-52">
          <div className="page9-right ml-0 lg:w-[30%] " ref={containerRef1}>
            <div className="page9-title text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Its all about our clients.{" "}
            </div>
            <div className="page9-subtitle text-xl sm:text-2xl">
              (and what they say!)
            </div>
          </div>
          <div className="page9-des mb-0 w-1/3 pl-0 lg:w-fit gap-30">
            <Slider {...settings}>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="comp-name pl-0 lg:pl-[50px] text-base sm:text-lg">
                  Roatan Real Estate
                </div>
                <div className="sign text-2xl sm:text-5xl">“</div>
                <div className="text-base sm:text-lg comp-review flex flex-col mt-16 sm:mt-12 w-fit pr-8 sm:pr-20 lg:pr-0 pl-0 lg:pl-[50px] xl:w-[35%] 2xl:w-[40%] mb-10 ml-0">
                  Coltfox is a much needed blessing and exceeded our
                  expectations in every way. They are honest, straightforward,
                  they take care of all your needs quickly, they are reliable,
                  you can count on them and most of all, they do everything they
                  say they will do. - <strong>Marci Wiersma</strong>
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="text-base sm:text-lg comp-name pl-0 lg:pl-[50px]">
                  Sterling Protective
                </div>
                <div className="sign text-2xl sm:text-5xl">“</div>
                <div className="text-base sm:text-lg comp-review flex flex-col mt-16 sm:mt-12 w-fit pr-8 sm:pr-20 lg:pr-0 pl-0 lg:pl-[50px] xl:w-[35%] 2xl:w-[40%] mb-10 ml-0">
                  We re-did our website twice in a 12 month period. There was no
                  comparison between the first company and Coltfox.
                  Professional, Creative, Attentive to Detail, Excellent
                  Communication…If I had contracted with Thrive the first time I
                  would not have had to do it twice. -{" "}
                  <strong>Mohan Das</strong>
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="text-base sm:text-lg comp-name pl-0 lg:pl-[50px]">
                  Gibbs Inc
                </div>
                <div className="sign text-2xl sm:text-5xl">“</div>
                <div className="text-base sm:text-lg comp-review flex flex-col mt-16 sm:mt-12 w-fit pr-8 sm:pr-20 lg:pr-0 pl-0 lg:pl-[50px] xl:w-[35%] 2xl:w-[40%] mb-10 ml-0">
                  Coltfox has been instrumental in helping us build an
                  incredible lead generating machine through our AdWords and
                  remarketing campaigns. Working with Azrael is a pleasure; with
                  his guidance we have seen an increase in lead flow, tremendous
                  efficiency and a very solid ROI. - <strong>Vaneesa</strong>
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="text-base sm:text-lg comp-name pl-0 lg:pl-[50px]">
                  JEF Techno
                </div>
                <div className="text-2xl sm:text-5xl sign">“</div>
                <div className="text-base sm:text-lg comp-review flex flex-col mt-16 sm:mt-12 w-fit pr-8 sm:pr-20 lg:pr-0 pl-0 lg:pl-[50px] xl:w-[35%] 2xl:w-[40%] mb-10 ml-0">
                  Coltfox has been instrumental in providing excellence in
                  digital marketing. We are continuously impressed with their
                  level of service and consider them a key marketing partner in
                  helping drive our business. They are not only proactive and
                  responsive, but also at the forefront marketing space. -{" "}
                  <strong>BG Prashanth</strong>
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="text-base sm:text-lg comp-name pl-0 lg:pl-[50px]">
                  D-Capital Inc
                </div>
                <div className="text-2xl sm:text-5xl sign">“</div>
                <div className="text-base sm:text-lg comp-review flex flex-col mt-16 sm:mt-12 w-fit pr-8 sm:pr-20 lg:pr-0 pl-0 lg:pl-[50px] xl:w-[35%] 2xl:w-[40%] mb-10 ml-0">
                  We enjoyed working with coltfox on our new website. The team
                  had lots of ideas to make the website look great, as well as
                  practical advice to ensure the site is both user-friendly and
                  SEO-friendly. Everyone is delighted with the end result. -
                  <strong>Sindu Umadevan</strong>
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="text-base sm:text-lg comp-name pl-0 lg:pl-[50px]">
                  Lakshmi Corporation
                </div>
                <div className="text-2xl sm:text-5xl sign">“</div>
                <div className="text-base sm:text-lg comp-review flex flex-col mt-16 sm:mt-12 w-fit pr-8 sm:pr-20 lg:pr-0 pl-0 lg:pl-[50px] xl:w-[35%] 2xl:w-[40%] mb-10 ml-0">
                  We have been working with Coltfox for several years and
                  continue to be impressed with their professionalism. We work
                  closely with the Coltfox team to meet our goals and
                  objectives, and each year we are able to generate 40% of our
                  leads through Google. - <strong>Kishor Kumar Swamy</strong>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* page10 */}
      <div className="page10-container w-full px-8 lg:px-28 2xl:px-32 2xl:pt-0">
        <Link to="our-blogs">
          <button className="whatweread-btn w-fit h-12 px-4 text-lg">
            What We Read
          </button>
        </Link>
        <div className="page10-title text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-6">
          Our Blogs
        </div>
        <div className=" flex flex flex-col lg:flex-row justify-between">
          <div className="page10-subtitle md:text-2xl">
            Be inspired and informed.{" "}
          </div>
          <button className="ournews-btn shadow-none w-fit px-6 lg:mr-2">
            Our News
            <img src="./arr-b.png" />{" "}
          </button>
        </div>
        <div className="page10-line" />

        <div className="flex flex-col lg:flex-row py-8 px-2 lg:gap-12">
          <div className="blog-1 flex flex-col w-full lg:w-1/2 relative">
            <div className="w-full flex flex-col items-center">
              <img
                src="./firstblog.png"
                className="blogimg w-full h-fit xl:h-[480px]"
              />
              <div className="expand-blog">
                <div className="expand-content">
                  <img
                    src="./page10-insideimg.png"
                    className="rotating-img"
                    alt=""
                  />
                  <img className="blog-arr" src="./page10-arrw.png" alt="" />
                </div>
              </div>
              <div className="details flex gap-6  py-4 w-full justify-between mt-6">
                <div className="link flex flex-col justify-items">
                  <div className="leading-tight font-medium text-xl md:text-3xl text-[#1F1F21]">
                    First - party data in marketing - what you need to know ?
                  </div>
                </div>
                <Link to="/blog-1" className="">
                  <button className="gotoblog-btn ml-0 mt-0 h-[60px] w-[60px]">
                    <img src="./crossarrimg.png" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="blog-btn mt-6 ml-0 w-fit">MARKETING AND DATA</div>
          </div>

          <div className="blog-2 flex flex-col w-full lg:w-1/2 relative">
            <div className="w-full flex flex-col items-center">
              <img
                src="./secondblog.png"
                className="blogimg w-full h-fit xl:h-[480px]"
              />
              <div className="expand-blog">
                <div className="expand-content">
                  <img
                    src="./page10-insideimg.png"
                    className="rotating-img"
                    alt=""
                  />
                  <img className="blog-arr" src="./page10-arrw.png" alt="" />
                </div>
              </div>
              <div className="details flex gap-6  py-4 w-full justify-between mt-6">
                <div className="link flex flex-col justify-items">
                  <div className="leading-tight font-medium text-xl md:text-3xl text-[#1F1F21]">
                    Social Media Marketing Tips For the Year - 2024 !
                  </div>
                </div>
                <Link to="/blog-2" className="">
                  <button className="gotoblog-btn ml-0 mt-0 h-[60px] w-[60px]">
                    <img src="./crossarrimg.png" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="blog-btn ml-0 mt-6 w-fit">
              SOCIAL MEDIA MARKETING
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
