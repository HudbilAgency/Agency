import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Sockshop = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="px-3 py-10 2xl:py-10 text-center sm:px-0 sm:pl-0 text-[#012033] text-2xl sm:text-[2rem] font-bold">
        <p> E-COMMERCE STORE </p>
      </div>
      <div className="acma px-3 pb-10 2xl:pb-24 text-center leading-tight lg:px-36 2xl:px-64 text-[#DF2323] text-4xl md:text-[6rem] font-bold">
        <h1> Intelligent and experience for an NGO. </h1>
      </div>
      <img className="w-full" src="./ss-main1.png" alt="acma-main" />

      <div className="right-align sm:py-10 pt-10 mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="bg-orange-300 h-[20%] w-fit px-3 rounded-full py-1 shadow-lg text-white">
          CHALLENGES
        </div>
        <div className="ml-0 lg:ml-28 w-full lg:w-[80%]">
          <div className="sm:leading-[normal] text-[#012033] text-2xl sm:text-4xl font-semibold">
            <p>
              <strong>
                On-site experience for SOCK SHOP to drive conversion & order
                value.Research in the field of E-Commerce.
              </strong>
            </p>
          </div>

          <div className="content px-3 sm:px-0 pt-8 leading-9 text-xl font-normal">
            <li className="mb-10">
              SOCKSHOP partners with hundreds of retailers in more than 50
              countries around the world and sells their socks through
              sockshop.co.uk. They like to “shake things up” and get people
              excited about their socks, working with compassion, creativity and
              purpose to achieve that goal.
            </li>
            <li className="mb-10">
              Sockshop.co.uk generated a considerable amount of revenue, which
              accelerated during the pandemic, however when restrictions were
              lifted, they felt the tide turning and needed to rethink their
              current digital marketing strategy.
            </li>
            <li className="mb-10">
              We used qualitative and quantitative research to identify areas of
              weakness throughout the on site experience. They had a healthy
              amount of traffic, but there was much more they could be doing to
              convert those users and drive the average order value (AOV) up.
            </li>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row 2xl:items-center 2xl:justify-center">
        <div>
          <img className="m-auto" src="ss-main2.png" alt="" />
        </div>
      </div>

      <div className="mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 mt-20 2xl:w-1/2">
        <div className="sm:w-[100%] 2xl:w-5/7">
          <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-xl text-white  ">
            Solutions
          </div>
          <p className="text-xl md:text-xl font-normal leading-normal text-[#012033]">
            By introducing an on-site optimization strategy, we knew we could
            redesign and test new experiences to help them to achieve a more
            cohesive digital strategy, resulting in efficient use of media
            spending and revenue growth through the website. We aimed to focus
            on three areas:
          </p>
          <p className="text-xl md:text-xl font-normal leading-normal text-[#012033] pt-8">
            <li className="list-none">
              - Increase conversion rates across all channels
            </li>
            <li className="list-none">
              - Increase average order value per transaction
            </li>
            <li className="list-none">
              - Reduce points of friction across user journeys
            </li>
          </p>
        </div>

        <div className="flex gap-8 sm:gap-4 xl:mr-40 lg:flex-row mt-20 flex-col">
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
                  We used qualitative and quantitative research to identify
                  areas of weakness throughout the on site experience. They had
                  a healthy amount of traffic, but there was much more they
                  could be doing to convert those users and drive t he average
                  order value (AOV).
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
                  Creative Strategy
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  In the first 6 months we ran 13 AB. 6 of those experiments
                  were declared winners with statistically significant results,
                  5 were marked for iteration due to being flat or showing a
                  slight but insignificant uplift.
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
                  SEO Strategy
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  <li>13 Experiments run to completion</li>
                  <li>6 Experiments declared winners</li>
                  <li>5 Experiments marked for iteration</li>
                  <li>2 Experiments marked for abandonment</li>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex xl:mr-40 gap-8 sm:gap-4 lg:flex-row mt-10 lg:mt-20 mb-20 flex-col">
          <div className="flex justify-start lg:w-1/3">
            <div className=" flex flex-col ">
              <div className="flex  gap-5 items-center">
                <div>
                  <img src="./svg-img3.png" />
                </div>
                <div className="bg-[#FCAB64] w-0.5 h-5"></div>
                <h1 className="text-xl font-semibold leading-7 text-[#DF2323]">
                  SEO Services
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  By introducing an on-site optimization strategy, we knew we
                  could redesign and test new experiences to help them to
                  achieve a more cohesive digital strategy, resulting in
                  efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full" src="./ss-main3.png" alt="acma-main" />

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
            <div className="bg-[#FCAB64] h-[20%] w-fit mb-10 px-3 rounded-full py-1 mt-2 shadow-lg text-white">
              Results
            </div>
            <div>
              <div className="sm:leading-[normal] text-[#012033] text-4xl sm:text-5xl font-semibold">
                Coltfox Wins in SIX Months
              </div>
              <div className="text-xl font-normal leading-9 text-[#012033] pt-5 gap-10">
                <p>
                  From observing heat map data, we saw that users clicking on
                  the search bar made up the majority of interaction on the
                  homepage, however the search was not visibly clear for the
                  majority of users. The search bar didn’t stand out in the
                  header and unique selling point (USP) section, making it hard
                  for all users to find. As well as this, we saw that only 50%
                  of users scroll below the fold, meaning that they do not get
                  to see all of the large category tiles which have a strong
                  call to action (CTA) standout below.
                  <br />
                  By adding a clear search area in the hero space of the
                  homepage, and presenting clear category tiles above the fold,
                  we saw an increase in users progressing deeper into the site,
                  resulting in more users finding the products they wanted and
                  ultimately converting.
                </p>
                <p className="pt-5">
                  Increase Prominence of Search, Category Tiles Above Fold -
                  Increase in conversion
                </p>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>+17.52%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Clicks on Scrolling SEO, Webpages and landing pages.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>+14.32% PM</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      User Reaches Online Order Confirmations.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>+3.65% </h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      User Clicks Add to Basket CTA per order in the packet.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>65%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      User Visits Basket Page/Checkout list and orders
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center text-4xl md:text-6xl 2xl:px-32">
            <h1 className="leading-normal text-center text-[#DF2323] font-bold">
              Faces of Coltfox Digital <br /> SEO Campaign
            </h1>
            <p className="text-xl text-left lg:text-center text-[#012033] font-normal leading-normal px-0 py-8 lg:py-12 lg:px-20">
              This was the second iteration of testing the mobile navigation.
              Initially, we wanted to simplify the navigation by changing it to
              be displayed in a slide in stages, rather than a dropdown
              accordion. In our first level of testing, we saw a good increase
              in users interacting with the navigation, however, they never
              progressed further down the funnel.
            </p>
          </div>
          <div className=" py-5">
            <div className="sm:w-[100%]">
              <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-lg font-normal text-white leading-7">
                Solutions
              </div>
              <p className="text-xl font-normal leading-normal text-[#012033]">
                We hypothesised that we were showing too many options to the
                user, with our experiment only emphasising the amount of routes
                the user could go down to find products. As part of our
                iteration, we simplified the second stage, reducing the
                different options, letting users only find products by style and
                colour, with individual categories having relevant options such
                as gift sets.
              </p>
              <p className="text-xl font-normal leading-normal text-[#012033] pt-8">
                The results showed that by reducing these options, more users
                progressed to the product landing page (PLP), which naturally
                flowed into more users proceeding to engage with the conversion
                process. Sometimes less is more.
              </p>
              <p className="text-xl font-normal leading-normal text-[#012033] pt-8">
                This experiment was designed to gain insight for an upcoming
                experiment on the header. We proposed adding a USP banner to the
                header.
              </p>
            </div>
          </div>
          <div className="left flex-col lg:flex-row flex gap-0 lg:gap-32 py-12 lg:py-20 justify-between">
            <div className="bg-[#FCAB64] h-[20%] w-fit lg:w-[400px] xl:w-[200px] 2xl:w-[150px] mb-10 px-3 2xl:px-0 text-center rounded-full py-1 mt-2 shadow-lg text-white">
              Next Project
            </div>
            <Link to="/rec">
              <div className="leading-[normal] text-2xl md:text-[2.5rem] font-semibold text-[#121212] mb-12 md:mb-20">
                Content Strategy for the world class Magazine REC Re branding.
              </div>
              <img src="/ss-main4.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sockshop;
