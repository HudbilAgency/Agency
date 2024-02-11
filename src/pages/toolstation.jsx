import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Toolstation = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="px-3 py-10 2xl:py-10 text-center sm:px-0 sm:pl-0 text-[#012033] text-2xl sm:text-[2rem] font-bold">
        <p> Magazine </p>
      </div>
      <div className="acma px-3 pb-10 2xl:pb-24 text-center leading-tight lg:px-36 2xl:px-64 text-[#DF2323] text-4xl md:text-[6rem] font-bold">
        <h1> Tool-Station Magazine Launch </h1>
      </div>
      <img className="w-full" src="./ts-main1.png" alt="acma-main" />

      <div className="right-align sm:py-10 pt-10 mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="bg-orange-300 h-[20%] w-fit px-3 rounded-full py-1 shadow-lg text-white">
          CHALLENGES
        </div>
        <div className="ml-0 lg:ml-28 w-full lg:w-[80%]">
          <div className="sm:leading-[normal] text-[#012033] text-2xl sm:text-4xl font-semibold">
            <p>
              <strong>
                Tool Station partners with hundreds of retailers in more than 50
                countries around the world and sells their socks through
                tool-station.ma. Rethink their current digital marketing
                strategy.
              </strong>
            </p>
          </div>

          <div className="content px-3 sm:px-0 pt-8 leading-9 text-xl font-normal">
            <li className="mb-10">
              We used qualitative and quantitative research to identify areas of
              weakness throughout the on site experience. They had a healthy
              amount of traffic, but there was much more they could be doing to
              convert those users and drive the average order value (AOV) up.
            </li>
            <li className="mb-10">
              By introducing an on-site optimisation strategy, we knew we could
              redesign and test new experiences to help them to achieve a more
              cohesive digital strategy, resulting in efficient use of media
              spending and revenue growth through the website. We aimed to focus
              on three areas:
            </li>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row 2xl:items-center 2xl:justify-center">
        <div>
          <img className="m-auto" src="ts-img1.png" alt="" />
        </div>
        <div>
          <img className="m-auto" src="ts-img2.png" alt="" />
        </div>
        <div>
          <img className="m-auto" src="ts-img3.png" alt="" />
        </div>
      </div>

      <div className=" mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 mt-20 2xl:w-1/2">
        <div className="sm:w-[100%] 2xl:w-5/7">
          <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-xl text-white  ">
            Solutions
          </div>
          <p className="text-xl font-normal leading-normal text-[#012033]">
            We hypothesized that we were showing too many options to the user,
            with our experiment only emphasizing the amount of routes the user
            could go down to find magazine as a product. As part of our
            iteration, we simplified the second stage, reducing the different
            options, letting users only find products by style and color, size
            and images of the complete magazine to gets its ground, hands-on
            experience by the readers and get more visibility by the readers
            with individual categories having relevant options such as gift
            sets.
          </p>
        </div>

        <div className="flex gap-8 sm:gap-4 xl:mr-24 lg:flex-row mt-20 flex-col">
          <div className="flex justify-start lg:w-1/3">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <img src="./svg-img0.png" />
                </div>
                <div className="bg-[#FCAB64] w-0.5 h-5"></div>
                <h1 className="text-xl font-semibold leading-7 text-[#DF2323]">
                  Market Research
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  The Coltfox team looked at targeted variables in our research,
                  including age, gender, income level, geo-location, level of
                  education, and new Indian Association status globally.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start lg:w-1/3">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <img src="./svg-img1.png" />
                </div>
                <div className="bg-[#FCAB64] w-0.5 h-5"></div>
                <h1 className="text-xl font-semibold leading-7 text-[#DF2323]">
                  Digital Strategy
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  We proposed adding a USP to the header,and as that is a
                  significant addition,we used this opportunity to learn if
                  users respond positively to a USP message.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start lg:w-1/3">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <img src="./svg-img2.png" />
                </div>
                <div className="bg-[#FCAB64] w-0.5 h-5"></div>
                <h1 className="text-xl font-semibold leading-7 text-[#DF2323]">
                  Landing Page
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  We Created magazine landing page(MLP) which naturally flowed
                  into more users proceeding to engage with the conversion
                  process. Sometimes less is more.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex xl:mr-24 gap-8 sm:gap-4 lg:flex-row mt-10 lg:mt-20 mb-20 flex-col">
          <div className="flex justify-start lg:w-1/3">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <img src="./svg-img3.png" />
                </div>
                <div className="bg-[#FCAB64] w-0.5 h-5"></div>
                <h1 className="text-xl font-semibold leading-7 text-[#DF2323]">
                  Content Strategy
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  Coltfox video production team lined up 10 Events franchisees
                  to showcase their unique franchisee experience through dynamic
                  storytelling.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start lg:w-1/3">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <img src="./svg-img4.png" />
                </div>
                <div className="bg-[#FCAB64] w-0.5 h-5"></div>
                <h1 className="text-xl font-semibold leading-7 text-[#DF2323]">
                  Magazine Design
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  Capturing high-resolution stills from our video production
                  shoots, we ensured uniformity across dynamic and static ads.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start lg:w-1/3">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <img src="./svg-img5.png" />
                </div>
                <div className="bg-[#FCAB64] w-0.5 h-5"></div>
                <h1 className="text-xl font-semibold leading-7 text-[#DF2323]">
                  B2B Event Marketing
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  Armed with targeting data and sophisticated creative, we
                  achieved higher conversions and an improved user experience
                  resulting in higher- quality leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full" src="./ts-main2.png" alt="acma-main" />

      <div className="bg-[#D9D3D3]">
        <div className="pt-10 mx-6 sm:mx-12 lg:mx-40 2xl:mx-64">
          <div className="justify-center  items-center flex gap-10">
            <svg
              className="cursor-pointer"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9583 16.875L14.3333 24.5L21.9583 16.875ZM14.3333 24.5L21.9583 32.125L14.3333 24.5ZM14.3333 24.5H34.6667H14.3333ZM47.375 24.5C47.375 37.1336 37.1336 47.375 24.5 47.375C11.8665 47.375 1.625 37.1336 1.625 24.5C1.625 11.8665 11.8665 1.625 24.5 1.625C37.1336 1.625 47.375 11.8665 47.375 24.5Z"
                fill="white"
              />
              <path
                d="M21.9583 16.875L14.3333 24.5M14.3333 24.5L21.9583 32.125M14.3333 24.5H34.6667M47.375 24.5C47.375 37.1336 37.1336 47.375 24.5 47.375C11.8665 47.375 1.625 37.1336 1.625 24.5C1.625 11.8665 11.8665 1.625 24.5 1.625C37.1336 1.625 47.375 11.8665 47.375 24.5Z"
                stroke="#FCAB64"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              className="cursor-pointer"
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.0417 32.125L34.6667 24.5L27.0417 32.125ZM34.6667 24.5L27.0417 16.875L34.6667 24.5ZM34.6667 24.5H14.3333H34.6667ZM47.375 24.5C47.375 37.1336 37.1336 47.375 24.5 47.375C11.8665 47.375 1.625 37.1336 1.625 24.5C1.625 11.8665 11.8665 1.625 24.5 1.625C37.1336 1.625 47.375 11.8665 47.375 24.5Z"
                fill="white"
              />
              <path
                d="M27.0417 32.125L34.6667 24.5M34.6667 24.5L27.0417 16.875M34.6667 24.5H14.3333M47.375 24.5C47.375 37.1336 37.1336 47.375 24.5 47.375C11.8665 47.375 1.625 37.1336 1.625 24.5C1.625 11.8665 11.8665 1.625 24.5 1.625C37.1336 1.625 47.375 11.8665 47.375 24.5Z"
                stroke="#FCAB64"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="left flex-col lg:flex-row flex gap-0 lg:gap-20 py-12 lg:py-20">
            <div className="bg-[#FCAB64] h-[20%] w-fit mb-10 px-3 rounded-full py-1 mt-2 shadow-lg text-white ">
              Results
            </div>
            <div>
              <div className="sm:leading-[normal] text-[#012033] text-4xl md:text-5xl sm:text-[3rem] font-semibold">
                Coltfox Wins a Successful B2B Event Marketing
              </div>
              <div className="text-xl font-normal leading-9 text-[#012033] pt-5 gap-10">
                <p>
                  Following the success of the Next Day Delivery timer on the
                  basket page we decided to add it to Product Detail Pages as
                  well so that users see the message consistently highlighted to
                  them throughout their journey. As part of our iteration, we
                  simplified the second stage, reducing the different options,
                  letting users only find products by style and color, with
                  individual categories having relevant options such as complete
                  tool magazine. We proposed adding a USP banner to the header,
                  and as that is a significant addition, we used this
                  opportunity to learn if users respond positively to a USP
                  message in the B2B Event to attract more visitor footfall.{" "}
                </p>
                <p className="pt-5">
                  Following the success of the Event Delivery timer on the
                  advertisement page we decided to add it to Product Detail for
                  advertisers as well so that readers see the message
                  consistently highlighted to them throughout their journey. We
                  saw a healthy increase in users subscribing for the magazine.{" "}
                </p>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>88.00%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Magazine Subscribers Increased by 88% industry standard.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>8793 PPC</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Cost Per Click visitors– 69% above industry standard.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>58%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Conversion Rate – Event footfall and advertisements
                      enquires
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>32%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Conversion Rate – On all digital platforms Like SMM,
                      website.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center text-4xl md:text-6xl 2xl:px-32">
            <h1 className="leading-normal text-center text-[#DF2323] font-bold">
              Faces of Coltfox Content <br /> Marketing Strategy
            </h1>
            <p className="text-xl text-left lg:text-center text-[#012033] font-normal leading-normal px-0 py-8 lg:py-12 lg:px-20">
              In the first 6 months we ran 13 AB. 6 of those experiments were
              declared winners with statistically significant results, 5 were
              marked for iteration due to being flat or showing a slight but
              insignificant uplift, and only 2 were marked for abandonment as
              there was no data to support iteration showcasing the success of
              the optimisation project.
            </p>
          </div>
          <div className=" py-5">
            <div className="sm:w-[100%]">
              <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-lg font-normal text-white leading-7">
                Solutions
              </div>
              <p className="text-xl font-normal leading-normal text-[#012033]">
                From observing heat map data, we saw that users clicking on the
                search bar made up the majority of interaction on the homepage,
                however the search was not visibly clear for the majority of
                users. The search bar didn’t stand out in the header and unique
                selling point (USP) section, making it hard for all users to
                find. As well as this, we saw that only 50% of users scroll
                below the fold, meaning that they do not get to see all of the
                large category tiles which have a strong call to action (CTA)
                standout below.
              </p>
              <p className="text-xl font-normal leading-normal text-[#012033] pt-8">
                By adding a clear search area in the hero space of the homepage,
                and presenting clear category tiles above the fold, we saw an
                increase in users progressing deeper into the site, resulting in
                more users finding magazine advertisers.
              </p>
            </div>
          </div>
          <div className="left flex-col lg:flex-row flex gap-0 lg:gap-32 py-12 lg:py-20 justify-between">
            <div className="bg-[#FCAB64] h-[20%] w-fit lg:w-[550px] xl:w-[300px] 2xl:w-1/5 mb-10 px-3 2xl:px-0 text-center rounded-full py-1 mt-2 shadow-lg text-white">
              Next Project
            </div>
            <Link to="/solo-expenses">
              <div className="leading-[normal] text-2xl md:text-[2.5rem] font-semibold text-[#121212] mb-12 md:mb-20">
                Solo Expenses – App promotion marketing campaign,and Content
                Strategy of the complete magazine.
              </div>
              <img src="/ts-main3.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Toolstation;
