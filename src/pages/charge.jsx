import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";

const Charge = () => {
  return (
    <div className="coming-soon bg-[#F2F2F2] h-screen relative">
      <NavbarAndFullscreenMenu />

      <div className="absolute inset-0 flex items-center justify-center px-3 py-12 sm:py-20 text-center sm:px-20 lg:px-40 2xl:px-64 text-[#DF2323] text-6xl sm:text-[5rem] 2xl:text-[6rem] font-semibold leading-tight">
        <h1> We are coming soon! </h1>
      </div>
    </div>
  );
};

export default Charge;
