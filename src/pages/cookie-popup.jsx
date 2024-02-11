import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "true") {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        startCloseAnimation();
      }, 10000); // 60000 milliseconds = 1 minute
    }

    return () => clearTimeout(timer);
  }, [isVisible]);

  const startCloseAnimation = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimatingOut(false);
    }, 1000); // Duration of the fade-out animation
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    startCloseAnimation();
  };

  const handleClose = () => {
    startCloseAnimation();
  };

  return (
    <>
      {isVisible && (
        <div
          className={`mx-auto z-[899] w-fit sm:w-[470px] sm:h-[300px] fixed flex flex-col justify-between bottom-0 sm:bottom-5 sm:right-5 p-6 rounded-xl shadow-inset bg-[#D9D3D3] bg-[url('/noise-grey.png')] bg-blend-overlay transition-opacity duration-1000 ${
            isAnimatingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            onClick={handleClose}
            className="cursor-pointer absolute top-4 right-4 p-2 rounded-full bg-[#FCAB64] bg-[url('/noise.png')] bg-blend-overlay  flex items-center justify-center "
          >
            <svg
              className="close"
              width="20"
              height="20"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.55343 19.5634L19.819 6.82593M6.6328 6.36954L19.7397 20.0198"
                stroke="#DF2323"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-medium text-[#DF2323] mt-10 sm:mt-3">
            This site uses cookies <strong className="text-xl">🍪</strong>
          </h2>
          <hr className="border-1 border-white opacity-75 mt-2 mb-4 mr-2" />
          <p className="text-xl leading-snug font-light leading-tight sm:mx-3">
            Some of these cookies are essential, while others help us to improve
            your experience by providing insights into how the site is being
            used.
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-between gap-2 sm:mx-3">
            <button
              onClick={handleAccept}
              className="ring-1 ring-[#FCAB64] ring-offset-0 w-fit leading-5 text-xs font-medium flex items-center gap-4 bg-white border-1 rounded-full border-[#FCAB64] shadow-inner text-[#012033] px-4 py-2 rounded"
            >
              Accept All Cookies
              <svg
                width="32"
                height="13"
                viewBox="0 0 42 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.75H21H41M41 6.75L32.75 1M41 6.75L32.75 13.5"
                  stroke="#012033"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <Link to="/cookie-policy">
              <button className="ring-1 ring-[#FCAB64] ring-offset-0 w-fit leading-5 text-xs font-medium flex gap-6 bg-white border-1 rounded-full shadow-inner border-[#FCAB64] text-[#012033] px-4 py-2">
                Manage Cookies
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9H17M9 1V17"
                    stroke="#012033"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePopup;
