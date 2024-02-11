import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import rectImage from "../assets/zen_fox.png";
import arrow from "../assets/Vector (2).png";
import Footer from "../components/footer/footer";
import TeamCard from "../components/TeamCard/TeamCard";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

const Team = () => {
  const [name, setName] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      portfolio,
      message,
    };

    console.log(formData);
    toggleConfirmation();

    try {
      const response = await axios.post(
        "https://coltfox-gamma.onrender.com/join-team-form",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="text-5xl md:text-7xl text-[#DF2323] font-black px-6 sm:px-28 lg:px-44 2xl:px-64 leading-normal md:leading-[8rem]">
        <h1>A Team of </h1>
        <h1>COLTFOX?</h1>
      </div>

      <div>
        <img
          className="mt-10 w-full h-80   object-cover "
          src={rectImage}
          alt=""
        />
      </div>

      <p className="px-6 sm:px-28 lg:px-64 2xl:px-96 mt-10 text-center">
        Being a Colt is more than just a role. <br /> Coltfox think, act and
        perform in a way that promotes collaboration, inspiration and
        excitement. <br /> A Coltfox is a clever beast with unique strengths
        that are beyond measurable.
      </p>

      <div className="mt-20 px-6 sm:px-28 lg:px-44 2xl:px-64">
        <h2 className="text-3xl md:text-5xl text-[#DF2323] font-bold lg:ml-[10%] 2xl:ml-[30%]">
          Leadership Team
        </h2>
        <div className="h-[1px] my-10 lg:ml-[10%] 2xl:ml-[30%] bg-[#DF2323]"></div>
        <div className="flex items-center justify-end xl:flex-row flex-col gap-6">
          <TeamCard
            name="MD SHUJJATH"
            role="Chief Executive Officer"
            imageSrc="./team1.png"
            hiddenContent={
              <div className="flex flex-col justify-evenly sm:justify-between gap-4 h-[80%] sm:h-fit">
                <div className="font-normal text-xs leading-5 text-[#012033]">
                  As the CEO and visionary behind Giant creative, Andrew
                  stephenson is an award - wining creative marketer, Video
                  producer, storyteller, and motivator with a mission to change
                  how people think about marketing.
                </div>
                <div className="font-normal text-xs leading-5 text-[#012033]">
                  His goal is to drive an isance amount of value for clients and
                  ultimately empower franchises , non - profits, and e-comm
                  business through innovative, data - driven marketing
                  strategies..
                </div>
                <div className="cursor-pointer font-semibold text-base leading-6 text-[#FCAB64]">
                  Read More
                </div>
              </div>
            }
          />

          <TeamCard
            name="SATVIK MAHAJAN"
            role="Chief Financial Officer"
            imageSrc="./team2.png"
            hiddenContent={
              <div className="flex flex-col justify-evenly sm:justify-between gap-4 h-[80%] sm:h-fit">
                <div className="font-normal text-xs leading-5 text-[#012033]">
                  As the CFO and Managing Finance behind Coltfox Digital, SATVIK
                  MAHAJAN is creative and wining business finances and clients,
                  entrepreneur, storyteller, and motivator with a mission to
                  change how people think about marketing.
                </div>
                <div className="font-normal text-xs leading-5 text-[#012033]">
                  As the Chief Finance Development Officer of Coltfox Digital,
                  He believes harnessing the power of data, will always have the
                  biggest impact on his clients’ success, marketplace faces…
                </div>
                <div className="cursor-pointer font-semibold text-base leading-6 text-[#FCAB64]">
                  Read More
                </div>
              </div>
            }
          />

          <TeamCard
            name="MANU PARASURAMAN"
            role="DIRECTOR -KALACODE"
            imageSrc="./team3.png"
            hiddenContent={
              <div className="flex flex-col justify-evenly sm:justify-between gap-4 h-[80%] sm:h-fit">
                <div className="font-normal text-xs leading-5 text-[#012033]">
                  As the Director and CMO, MANU PARASURAMAN leads the
                  multi-talented KALACODE team in crafting data-driven AI
                  strategies with a strong focus on compelling and engaging
                  content that resonates with audiences.
                </div>
                <div className="font-normal text-xs leading-5 text-[#012033]">
                  He believes in the power of strategic transform businesses and
                  drive growth. He is passionate about helping clients succeed
                  through effective positive impact on their growth…
                </div>
                <div className="cursor-pointer font-semibold text-base leading-6 text-[#FCAB64]">
                  Read More
                </div>
              </div>
            }
          />
        </div>
        <p className="my-16 lg:pl-12 lg:w-[80%] 2xl:w-[60%]">
          {" "}
          Coltfox is not your typical digital marketing agency. <br /> We’re a
          strategic marketing firm that partners with clients to move their
          business forward. <br /> We’re bold. We’re curious. <br /> We’re
          transparent.
        </p>
      </div>
      <div className="my-10 px-6 sm:px-28 lg:px-44 2xl:px-64">
        <h2 className="text-5xl text-[#012033] font-bold lg:ml-[10%] 2xl:ml-[30%]">
          Team
        </h2>
        <div className="lg:ml-[10%] 2xl:ml-[30%] h-[1px] my-10 bg-[#DF2323]"></div>
        <div className="flex items-center justify-end xl:flex-row flex-col gap-6">
          <TeamCard
            name="HUSNA ZAR "
            role="HR Director"
            imageSrc="./team4.png"
          />

          <TeamCard
            name="SANKET SHINDE"
            role="Developer - Kalacode"
            imageSrc="./team5.png"
          />

          <TeamCard
            name="Lalit Kumar"
            role="Developer - Hudbil"
            imageSrc="./team6.png"
          />
        </div>
        <div className="flex mt-10 items-center justify-end xl:flex-row flex-col gap-6">
          <TeamCard
            name="KUMAR RAJ YADAV "
            role="Digital Marketing Manager"
            imageSrc="./team7.png"
          />

          <TeamCard
            name="PRATIK PANCHAL"
            role="Content Writer"
            imageSrc="./team8.png"
          />

          <TeamCard
            name="MALAKH JIBRIL"
            role="Creative Head"
            imageSrc="./team9.png"
          />
        </div>
      </div>

      <div className="bg-[url('/noise-grey.png')] bg-blend-overlay bg-[#D9D3D3]  py-5 px-6 sm:px-28 lg:px-44 2xl:px-64">
        <h1 className="text-4xl sm:text-7xl font-black my-8 text-[#012033]">
          You name it...
        </h1>
        <div className="flex text-3xl mt-5 flex-col justify-center gap-2 md:gap-8 md:flex-row lg:gap-32">
          <ul className="flex flex-col gap-2 text-white">
            <li>Marketers</li>
            <li>Developers</li>
            <li>Advisors</li>
            <li>Videographers</li>
            <li>SEO Specialists</li>
          </ul>
          <ul className="flex flex-col gap-2 text-white">
            <li>Marketers</li>
            <li>Strategies</li>
            <li>Photographers</li>
            <li>Managers</li>
            <li>Founders</li>
            <li>Designers</li>
          </ul>
          <ul className="flex flex-col gap-2 text-white">
            <li>Editors</li>
            <li>Copywriter</li>
            <li>UX/UI Specialist</li>
            <li>Producers</li>
            <li>Animators</li>
            <li>Editors</li>
          </ul>
        </div>
        <div className="h-[1px] my-10 bg-[#DF2323]"></div>
        <h1 className="text-4xl sm:text-7xl text-center text-[#DF2323] font-black">
          Join the crew
        </h1>
        <div className="container1 mx-auto sm:p-8">
          <div className=" lg:px-8 pt-6 pb-8">
            <form className="contact100-form validate-form">
              <div className="mb-4 border-b border-white ">
                <label
                  className="block text-white text-xl font-medium mb-7"
                  htmlFor="name"
                >
                  What’s your name?*
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-[#012033] border-none bg-transparent appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none "
                  id="name"
                  type="text"
                  placeholder="Your first & last name"
                />
              </div>
              <div className="mb-4 border-b border-white">
                <label
                  className="block text-white text-xl font-medium mb-7"
                  htmlFor="email"
                >
                  Email Address*
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-[#012033] border-none bg-transparent  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
                  id="email"
                  type="email"
                  placeholder="Your mail"
                />
              </div>
              <div className="mb-4 border-b border-white">
                <label className="block text-white text-xl font-medium mb-7">
                  A place to find your creation?*
                </label>
                <input
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  className="text-[#012033] border-none bg-transparent  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
                  id="link"
                  type="text"
                  placeholder="A link to your portfolio (Site, dribbble etc)"
                />
              </div>
              <div className="mb-4 border-b border-white">
                <label className="block text-white text-xl font-medium mb-7">
                  Do you have a message for us*
                </label>
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-[#012033] border-none bg-transparent  appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
                  id="message"
                  type="text"
                  placeholder="Your message"
                />
              </div>
              <div className="mt-12">
                <label className="text-sm text-white font-normal">
                  <input
                    className="cursor-pointer mr-2"
                    type="checkbox"
                    name="agreement"
                    id="agreement"
                  />
                  Yes, I agree to receive communication from HUDBIL PRIVATE
                  LIMITED
                </label>
              </div>

              <div className=" flex items-center justify-center">
                <button
                  onClick={handleSubmit}
                  className="z-10 flex shadow-none items-center justify-center mt-12"
                >
                  <div className="flex  w-max rounded-full gap-5 p-3 px-5 border  border-[#DF2323]">
                    <div className="text-[#DF2323] font-normal text-xl">
                      Submit
                    </div>
                    <img className="h-4 m-auto" src={arrow} alt="" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showConfirmation && (
        <div className="fixed z-50 inset-0 w-auto mx-2 sm:mx-0 flex items-center justify-center">
          <div className=" bg-[#D9D3D3] bg-[url('/noise-grey.png')] bg-blend-overlay px-2 py-6 sm:px-6 sm:py-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center text-green-700">
              <FaCheckCircle className="mr-2" />
              <span className="font-medium text-xs sm:text-base">
                Your details have been sent.
              </span>
            </div>
            <p className="text-center text-xs sm:text-base mt-4">
              Please check your email for the confirmation.
            </p>
            <button
              className="ml-auto mt-6 text-xs sm:text-base text-[#FCAB64] bg-white shadow-none hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64] py-1 px-2 sm:py-2 sm:px-4 rounded-full border border-[#FCAB64]"
              onClick={toggleConfirmation}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Team;
