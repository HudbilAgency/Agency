import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import arrow from "../assets/Vector (2).png";
import Footer from "../components/footer/footer";

import indusFox from "../assets/indusFox.png";

const Industries = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className=" px-6 lg:pr-0 sm:px-28 lg:px-48 2xl:px-64">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="">
            <h1 className="text-4xl md:text-7xl text-[#DF2323]  font-black">
              Coltfox solutions <br /> across multiple <br /> sectors and <br />{" "}
              channels
            </h1>
            <p className="sm:w-2/3 mt-10 lg:mt-6">
              We speak your language. We shape perceptions. We’ve collaborated
              with some of the smartest brands to deliver unparalleled
              campaigns. And our clients have received extraordinary results. At
              Coltfox Digital, there is no one-size-fits-all approach.
            </p>
            <div className="mt-10 lg:mt-4">
              <a
                href=""
                className="flex items-center w-max rounded-full gap-5 py-2 px-5 border border-[#FCAB64]"
              >
                <div className="text-[#FCAB64] font-normal text-xl">
                  Learn More
                </div>
                <svg
                  width="57"
                  height="19"
                  viewBox="0 0 57 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9.5H55.0312H1ZM55.0312 9.5L49.001 1L55.0312 9.5ZM55.0312 9.5L49.001 18L55.0312 9.5Z"
                    fill="#FCAB64"
                  />
                  <path
                    d="M1 9.5H55.0312M55.0312 9.5L49.001 1M55.0312 9.5L49.001 18"
                    stroke="#FCAB64"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-end justify-end h-[30rem] sm:w-3/4">
            <img className="w-full h-full" src={indusFox} alt="" />
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-28 lg:px-48 2xl:px-64 mt-20">
        <div className="lg:w-full xl:px-20 ">
          <div className="pill bg-[#FCAB64] text-center w-max mb-10 px-4 rounded-full py-2 shadow-xl  text-white ">
            Impact
          </div>
          <h1 className="text-4xl md:text-6xl text-[#012033] leading-[5rem] mb-8 font-black">
            Collaborative. Strategic. <br />
            Creative.
          </h1>
          <p className="text-xl 2xl:w-3/5">
            Using a collaborative approach, we transform your vision into
            measurable success, beginning with strategic solutions fueled by
            data. Whether you’re in the world of Franchise, Non-Profit,
            Ecommerce, Sports, Entertainment, B2B, B2C, Food & Beverage, or
            other vertical, together, we’ll push the boundary of possibilities.
          </p>
        </div>

        <div className="justify-between flex gap-20 sm:flex-row mt-20 flex-col xl:w-3/4 2xl:w-3/5 2xl:ml-[25%] xl:ml-[15%]">
          <div className="flex justify-start lg:w-2/5">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_607_1185)">
                      <path
                        d="M15.7125 8.25H16.875V9.75H15.7125C15.375 12.8775 12.8775 15.375 9.75 15.7125V16.875H8.25V15.7125C5.1225 15.375 2.625 12.8775 2.2875 9.75H1.125V8.25H2.2875C2.625 5.1225 5.1225 2.625 8.25 2.2875V1.125H9.75V2.2875C12.8775 2.625 15.375 5.1225 15.7125 8.25ZM3.8025 8.25H4.875V9.75H3.8025C3.96189 10.8731 4.48175 11.9141 5.28386 12.7162C6.08596 13.5182 7.1269 14.0381 8.25 14.1975V13.125H9.75V14.1975C10.8731 14.0381 11.9141 13.5182 12.7162 12.7162C13.5182 11.9141 14.0381 10.8731 14.1975 9.75H13.125V8.25H14.1975C14.0381 7.1269 13.5182 6.08596 12.7162 5.28386C11.9141 4.48175 10.8731 3.96189 9.75 3.8025V4.875H8.25V3.8025C7.1269 3.96189 6.08596 4.48175 5.28386 5.28386C4.48175 6.08596 3.96189 7.1269 3.8025 8.25ZM12 12H6V11.25C6 10.2525 8.0025 9.75 9 9.75C9.9975 9.75 12 10.2525 12 11.25V12ZM9 6C9.3978 6 9.77932 6.15803 10.0606 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5C10.5 7.8978 10.342 8.27933 10.0606 8.56065C9.77932 8.84197 9.3978 9 9 9C8.6022 9 8.22067 8.84197 7.93935 8.56065C7.65803 8.27933 7.5 7.8978 7.5 7.5C7.5 7.10218 7.65803 6.72064 7.93935 6.43934C8.22067 6.15803 8.6022 6 9 6Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_607_1185">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="bg-[#FCAB64] w-1 h-6"></div>
                <h1 className="text-2xl font-semibold leading-7 text-[#012033]">
                  Tailored Solutions
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-[#012033]">
                <p>
                  We immerse ourselves into your brand to create one-of-a-kind
                  solutions.
                </p>
                <p>
                  We use creative innovation to engage and convert your
                  audience.
                </p>
                <p>
                  We align powerful marketing strategies to support your mission
                  and goals.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start lg:w-2/5">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_607_1185)">
                      <path
                        d="M15.7125 8.25H16.875V9.75H15.7125C15.375 12.8775 12.8775 15.375 9.75 15.7125V16.875H8.25V15.7125C5.1225 15.375 2.625 12.8775 2.2875 9.75H1.125V8.25H2.2875C2.625 5.1225 5.1225 2.625 8.25 2.2875V1.125H9.75V2.2875C12.8775 2.625 15.375 5.1225 15.7125 8.25ZM3.8025 8.25H4.875V9.75H3.8025C3.96189 10.8731 4.48175 11.9141 5.28386 12.7162C6.08596 13.5182 7.1269 14.0381 8.25 14.1975V13.125H9.75V14.1975C10.8731 14.0381 11.9141 13.5182 12.7162 12.7162C13.5182 11.9141 14.0381 10.8731 14.1975 9.75H13.125V8.25H14.1975C14.0381 7.1269 13.5182 6.08596 12.7162 5.28386C11.9141 4.48175 10.8731 3.96189 9.75 3.8025V4.875H8.25V3.8025C7.1269 3.96189 6.08596 4.48175 5.28386 5.28386C4.48175 6.08596 3.96189 7.1269 3.8025 8.25ZM12 12H6V11.25C6 10.2525 8.0025 9.75 9 9.75C9.9975 9.75 12 10.2525 12 11.25V12ZM9 6C9.3978 6 9.77932 6.15803 10.0606 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5C10.5 7.8978 10.342 8.27933 10.0606 8.56065C9.77932 8.84197 9.3978 9 9 9C8.6022 9 8.22067 8.84197 7.93935 8.56065C7.65803 8.27933 7.5 7.8978 7.5 7.5C7.5 7.10218 7.65803 6.72064 7.93935 6.43934C8.22067 6.15803 8.6022 6 9 6Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_607_1185">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="bg-[#FCAB64] w-1 h-6"></div>
                <h1 className="text-2xl font-semibold leading-7 text-[#012033]">
                  Creative Excellence
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-[#012033]">
                <p>
                  We don’t just create marketing campaigns; we create meaningful
                  experiences.
                </p>
                <p>
                  Strategic storytelling to make your brand stand out for
                  lasting impact.
                </p>
                <p>
                  Uniform branding across channels to foster brand recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-20 sm:flex-row mt-20 flex-col xl:w-3/4 xl:ml-[15%] 2xl:w-3/5 2xl:ml-[25%]">
          <div className="flex justify-start lg:w-2/5">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_607_1185)">
                      <path
                        d="M15.7125 8.25H16.875V9.75H15.7125C15.375 12.8775 12.8775 15.375 9.75 15.7125V16.875H8.25V15.7125C5.1225 15.375 2.625 12.8775 2.2875 9.75H1.125V8.25H2.2875C2.625 5.1225 5.1225 2.625 8.25 2.2875V1.125H9.75V2.2875C12.8775 2.625 15.375 5.1225 15.7125 8.25ZM3.8025 8.25H4.875V9.75H3.8025C3.96189 10.8731 4.48175 11.9141 5.28386 12.7162C6.08596 13.5182 7.1269 14.0381 8.25 14.1975V13.125H9.75V14.1975C10.8731 14.0381 11.9141 13.5182 12.7162 12.7162C13.5182 11.9141 14.0381 10.8731 14.1975 9.75H13.125V8.25H14.1975C14.0381 7.1269 13.5182 6.08596 12.7162 5.28386C11.9141 4.48175 10.8731 3.96189 9.75 3.8025V4.875H8.25V3.8025C7.1269 3.96189 6.08596 4.48175 5.28386 5.28386C4.48175 6.08596 3.96189 7.1269 3.8025 8.25ZM12 12H6V11.25C6 10.2525 8.0025 9.75 9 9.75C9.9975 9.75 12 10.2525 12 11.25V12ZM9 6C9.3978 6 9.77932 6.15803 10.0606 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5C10.5 7.8978 10.342 8.27933 10.0606 8.56065C9.77932 8.84197 9.3978 9 9 9C8.6022 9 8.22067 8.84197 7.93935 8.56065C7.65803 8.27933 7.5 7.8978 7.5 7.5C7.5 7.10218 7.65803 6.72064 7.93935 6.43934C8.22067 6.15803 8.6022 6 9 6Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_607_1185">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="bg-[#FCAB64] w-1 h-6"></div>
                <h1 className="text-2xl font-semibold leading-7 text-[#012033]">
                  Partnership Approach
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-[#012033]">
                <p>
                  Strategic growth partner to franchises, non-profits, and
                  ecommerce businesses.
                </p>
                <p>
                  Our team works as an extension of your team to achieve
                  real-world results.
                </p>
                <p>
                  We take a collaborative approach to build powerful revenue
                  generators.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start lg:w-2/5">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_607_1185)">
                      <path
                        d="M15.7125 8.25H16.875V9.75H15.7125C15.375 12.8775 12.8775 15.375 9.75 15.7125V16.875H8.25V15.7125C5.1225 15.375 2.625 12.8775 2.2875 9.75H1.125V8.25H2.2875C2.625 5.1225 5.1225 2.625 8.25 2.2875V1.125H9.75V2.2875C12.8775 2.625 15.375 5.1225 15.7125 8.25ZM3.8025 8.25H4.875V9.75H3.8025C3.96189 10.8731 4.48175 11.9141 5.28386 12.7162C6.08596 13.5182 7.1269 14.0381 8.25 14.1975V13.125H9.75V14.1975C10.8731 14.0381 11.9141 13.5182 12.7162 12.7162C13.5182 11.9141 14.0381 10.8731 14.1975 9.75H13.125V8.25H14.1975C14.0381 7.1269 13.5182 6.08596 12.7162 5.28386C11.9141 4.48175 10.8731 3.96189 9.75 3.8025V4.875H8.25V3.8025C7.1269 3.96189 6.08596 4.48175 5.28386 5.28386C4.48175 6.08596 3.96189 7.1269 3.8025 8.25ZM12 12H6V11.25C6 10.2525 8.0025 9.75 9 9.75C9.9975 9.75 12 10.2525 12 11.25V12ZM9 6C9.3978 6 9.77932 6.15803 10.0606 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5C10.5 7.8978 10.342 8.27933 10.0606 8.56065C9.77932 8.84197 9.3978 9 9 9C8.6022 9 8.22067 8.84197 7.93935 8.56065C7.65803 8.27933 7.5 7.8978 7.5 7.5C7.5 7.10218 7.65803 6.72064 7.93935 6.43934C8.22067 6.15803 8.6022 6 9 6Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_607_1185">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="bg-[#FCAB64] w-1 h-6"></div>
                <h1 className="text-2xl font-semibold leading-7 text-[#012033]">
                  Data-Driven Success
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-[#012033]">
                <p>
                  Data-driven performance solutions for informed decision-
                  making.
                </p>
                <p>
                  Achieve higher click-through rates and conversions to amplify
                  your ROI.
                </p>
                <p>
                  Adjust and customize to quickly adapt for the best possible
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#D9D3D3] bg-[url('/noise-grey.png')] bg-blend-overlay mt-10 py-16 px-6 sm:px-28 lg:px-48 2xl:px-96">
        <div className="pill bg-[#FCAB64] w-max px-4 rounded-full py-2 shadow-xl  text-white ">
          Expertise
        </div>
        <div>
          <div className=" border-black flex flex-col lg:flex-row sm:justify-end mt-16 mb-10 pt-10 gap-8 lg:gap-20 border-t-2">
            <div>
              <svg
                width="118"
                height="119"
                viewBox="0 0 118 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1425_8754)">
                  <path
                    d="M50.2473 17.5023C59.4976 26.7526 59.4976 41.7504 50.2473 51.0008C40.9969 60.2511 25.9992 60.2511 16.7488 51.0008C7.49846 41.7504 7.49846 26.7526 16.7488 17.5023C25.9992 8.25194 40.9969 8.25194 50.2473 17.5023Z"
                    fill="#012033"
                  />
                  <path
                    d="M105.686 13.0635V55.4375H63.3115V13.0635H105.686Z"
                    fill="#FCAB64"
                    stroke="#FCAB64"
                    stroke-width="5"
                  />
                  <path
                    d="M50.2473 67.9984C59.4976 77.2487 59.4976 92.2465 50.2473 101.497C40.9969 110.747 25.9992 110.747 16.7488 101.497C7.49846 92.2465 7.49846 77.2487 16.7488 67.9984C25.9992 58.748 40.9969 58.748 50.2473 67.9984Z"
                    fill="#012033"
                  />
                  <path
                    d="M101.247 67.9984C110.498 77.2487 110.498 92.2465 101.247 101.497C91.9969 110.747 76.9992 110.747 67.7488 101.497C58.4985 92.2465 58.4985 77.2487 67.7488 67.9984C76.9992 58.748 91.9969 58.748 101.247 67.9984Z"
                    fill="#012033"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1425_8754">
                    <rect
                      width="118"
                      height="119"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 119)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full text-[#012033]">
              <h1 className="text-3xl font-bold">FRANCHISES</h1>
              <p className="text-sm mt-2">Strategic expansion partner.</p>
            </div>
            <div className="flex flex-col gap-2 text-[#012033]">
              <p>
                Coltfox Digital was made for franchise growth. Our custom
                approach enhances visibility, attracts potential franchisees,
                and reinforces a compelling brand identity. Whether you’re a
                franchisor looking to expand into new territories or a home-
                town franchisee looking to attract customers and increase
                loyalty, our team of trailblazers continues to deliver long-term
                sustainable solutions.
              </p>
              <p>
                Ensure brand consistency across all locations to create a
                unified customer experience.{" "}
              </p>
              <p>
                Create unique content for each franchise location while
                maintaining brand consistency.
              </p>
              <p>
                Maintain consistent brand identity and strategy in the midst of
                expansion.
              </p>
            </div>
          </div>
          <div className="border-black flex flex-col lg:flex-row sm:justify-end my-10 pt-10 gap-8 lg:gap-20   border-t-2">
            <div>
              <svg
                width="118"
                height="117"
                viewBox="0 0 118 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1425_8778)">
                  <g clip-path="url(#clip1_1425_8778)">
                    <path
                      d="M109.245 58.5016C118.496 49.2513 118.496 34.2535 109.245 25.0031C99.995 15.7528 84.9972 15.7528 75.7469 25.0031L42.2484 58.5016C32.998 67.752 32.998 82.7498 42.2484 92.0001C51.4987 101.25 66.4965 101.25 75.7469 92.0001L109.245 58.5016Z"
                      fill="#012033"
                    />
                    <path
                      d="M42.2477 25.0008C32.9974 15.7504 17.9996 15.7504 8.74924 25.0008C-0.501111 34.2511 -0.501108 49.2489 8.74924 58.4992L42.2477 91.9977C51.4981 101.248 66.4958 101.248 75.7462 91.9977C84.9965 82.7474 84.9965 67.7496 75.7462 58.4992L42.2477 25.0008Z"
                      fill="#012033"
                    />
                    <path
                      d="M88.961 75.2481L58.998 45.2852L29.0351 75.2481L58.998 105.211L88.961 75.2481Z"
                      fill="#FCAB64"
                      stroke="#FCAB64"
                      stroke-width="5"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1425_8778">
                    <rect width="118" height="117" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_1425_8778">
                    <rect width="118" height="117" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full text-[#012033]">
              <h1 className="text-3xl font-bold">NON - PROFIT</h1>
              <p className="text-sm mt-2">Your impact partner.</p>
            </div>
            <div className="flex flex-col gap-2 text-[#012033]">
              <p>
                We believe in the power of purpose – meaningful work that
                connects and moves the masses. At Coltfox Digital, non-profit
                organizations are at the heart of our mission. We work hand in
                hand to amplify your cause, tell your story, and inspire
                support. Together, we’ll build awareness, change behavior,
                increase donations, find volunteers, and master your mission.
              </p>
              <p>
                <li>
                  {" "}
                  Measure the impact of your marketing efforts in terms of
                  donations or support.
                </li>
                <li>
                  {" "}
                  Maintain a consistent message and donor experience across
                  communication channels.
                </li>
                <li>
                  {" "}
                  Consistently generate new donors and volunteers passionate
                  about your cause.
                </li>
              </p>
              <p>
                Ensure digital marketing consistency across digital platforms to
                improve customer experience.
              </p>
            </div>
          </div>
          <div className=" border-black flex flex-col lg:flex-row sm:justify-end my-10 pt-10 gap-8 lg:gap-20   border-t-2">
            <div>
              <svg
                width="118"
                height="117"
                viewBox="0 0 118 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1425_8783)">
                  <g clip-path="url(#clip1_1425_8783)">
                    <path
                      d="M102.143 112.619V26.3359L15.8595 26.3359V112.619H102.143Z"
                      fill="#012033"
                    />
                    <path
                      d="M77.731 47.5347C87.4858 37.7799 87.4858 21.9643 77.731 12.2095C67.9762 2.4547 52.1605 2.45469 42.4058 12.2095C32.651 21.9643 32.651 37.7799 42.4058 47.5347C52.1605 57.2895 67.9762 57.2895 77.731 47.5347Z"
                      stroke="#FCAB64"
                      stroke-width="5.89482"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1425_8783">
                    <rect width="118" height="117" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_1425_8783">
                    <rect width="118" height="117" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-full text-[#012033]">
              <h1 className="text-3xl font-bold">E-commerce</h1>
              <p className="text-sm mt-2">Digital growth specialists.</p>
            </div>
            <div className="flex flex-col gap-2 text-[#012033]">
              <p>
                At Coltfox Digital. we help you push the boundaries of e
                commerce to achieve profitable and sustainable long-term success
                by fusing art and technology to drive sales and enhance customer
                experiences. E commerce marketing is perpetually data-driven,
                and you can use this valuable data to accurately measure the
                performance of your marketing and make strategic decisions for
                optimum results.
              </p>
              <p>
                <li>
                  Attract and convert a steady flow of leads who become loyal
                  customers.
                </li>
                <li>
                  Accurately measure the effectiveness of campaigns and know
                  which channels provide the best ROI.
                </li>
                <li>
                  Use high-quality, engaging content to increase visibility and
                  credibility.
                </li>
              </p>
              <p>
                Create unique content for each E-Commerce Platforms and
                maintaining products consistency and sale.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Industries;
