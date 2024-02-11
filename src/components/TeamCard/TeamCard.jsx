import React, { useState, useEffect, useRef } from "react";
import "./TeamCard.css";

function TeamCard({ name, role, imageSrc, hiddenContent }) {
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef(null);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleCloseClick = () => {
    setShowDetails(false);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setShowDetails(false);
    }
  };

  useEffect(() => {
    console.log(showDetails);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDetails]);

  return (
    <div
      ref={cardRef}
      className="teamCard sm:w-60 relative overflow-hidden transition duration-300 ease-in-out"
    >
      <div className="bg-[#D9D9D9] lg:h-80 overflow-hidden">
        <img className="w-full h-full" src={imageSrc} alt={name} />
      </div>
      <div
        onClick={toggleDetails}
        className="profile-details cursor-pointer bg-white hover:bg-[#FCAB64] py-2 px-4 flex items-center justify-between transition duration-800 ease-in-out"
      >
        <div>
          <p className="name font-bold text-base text-[#012033] transition duration-800 ease-in-out">
            {name}
          </p>
          <p className="text-xs font-normal">{role}</p>
        </div>
        <div className="svg-container opacity-0 transition duration-300 ease-in-out">
          <svg
            width="18"
            height="18"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.375 18.625L18.625 2.375M18.625 2.375H4M18.625 2.375V17"
              stroke="#012033"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {showDetails ? (
        <div
          className={`hidden-div absolute bottom-0 left-0 w-full h-full px-4 pt-4 pb-0 transform slide-up transition-transform duration-300 ease-in-out`}
        >
          {hiddenContent}
          <div
            className="blank-space h-full cursor-pointer text-[#FCAB64]"
            onClick={handleCloseClick}
          />
        </div>
      ) : (
        <div
          className={`hidden-div absolute bottom-0 left-0 w-full h-full px-4 pt-4 pb-0 transform slide-down transition-transform duration-300 ease-in-out`}
        >
          {/* This div is empty but necessary for the slide-down animation */}
        </div>
      )}
    </div>
  );
}

export default TeamCard;
