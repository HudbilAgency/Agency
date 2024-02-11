import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Itv = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="px-3 py-10 2xl:py-10 text-center sm:px-0 sm:pl-0 text-[#012033] text-2xl sm:text-[2rem] font-bold">
        <p> Digital TV </p>
      </div>
      <div className="acma px-3 pb-10 2xl:pb-24 text-center leading-tight lg:px-40 2xl:px-64 text-[#DF2323] text-4xl md:text-[6rem] font-bold">
        <h1> TV Studios digital development </h1>
      </div>
      <img className="w-full" src="./itv-main1.png" alt="acma-main" />

      <div className="right-align sm:py-10 pt-10 mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="bg-orange-300 h-[20%] w-fit px-3 rounded-full py-1 shadow-lg text-white">
          CHALLENGES
        </div>
        <div className="ml-0 lg:ml-28 w-full lg:w-[80%]">
          <div className="sm:leading-[normal] text-[#012033] text-2xl sm:text-4xl font-semibold">
            <p>
              <strong>
                A new proposition, website & Tech enabling TV Stuido to optimise
                their customer experience and drive better quality leads.
              </strong>
            </p>
          </div>

          <div className="content px-3 sm:px-0 pt-8 leading-9 text-xl font-normal">
            <li className="mb-10">
              The TV brand is a global powerhouse and as a result, the TV Media
              (TV's commercial advertising arm) site was attracting the wrong
              audience.
            </li>
            <li className="mb-10">
              Visitors to the site were landing there expecting to watch
              programmed via the TV Hub, leading to a high bounce rate and a
              confusing customer experience.
            </li>
            <li className="mb-10">
              We've worked with the team at ITV Media for a number of years now,
              making us the ideal partner to help them overcome their challenges
              and drive the brand forward.
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

      <div className="px-5 mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 mt-20 2xl:w-1/2">
        <div className="sm:w-[100%] 2xl:w-5/7">
          <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-xl text-white ">
            Solutions
          </div>
          <p className="text-xl md:text-xl font-normal leading-normal text-[#012033]">
            <li>
              Improve the experience for TV Media customers & reduce
              frustrations for people looking for the TV Hub
            </li>
            <li>
              Increase quantity and improve quality of leads for the sales team
            </li>
            <li>Overhaul creative to bring up to date with refreshed brand</li>
            <li>Reduce irrelevant traffic and inquiries</li>
            <li>
              Drive efficiencies for internal teams; reducing time taken
              responding to poor quality inquiries & save time updating content
              on site.
            </li>
          </p>
        </div>

        <div className="flex gap-8 sm:gap-4 xl:mr-40 lg:flex-row mt-20 mb-16 flex-col">
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
                  including age, gender, income level, geo- location, level of
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
        </div>

        <p className="text-lg font-normal leading-normal text-[#012033] mb-20">
          <strong>Phase 2 - </strong>will focus on providing the internal sales
          team with the tools to effectively connect with their prospective and
          existing customers and using technology to create efficiencies within
          the business.
        </p>
      </div>

      <img className="w-full" src="./itv-main2.png" alt="acma-main" />

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
              <div className="sm:leading-[normal] text-[#012033] text-4xl sm:text-5xl font-semibold">
                Defining a digital strategy for growth
              </div>
              <div className="text-xl font-normal leading-9 text-[#012033] pt-5 gap-10">
                <p>
                  We started with our strategy team, who embedded themselves
                  into the TV Media business to gain a deep understanding of
                  their core challenges through a series of workshops,
                  interviews & surveys. The goal was to define a plan of
                  recommended digital changes to overcome TV Media's challenges,
                  assist continued commercial growth and take full advantage of
                  future opportunities in the market.
                </p>
                <p className="pt-5">
                  From that, we discovered that one of TV Media’s business KPIs
                  was to expand the client portfolio via SMEs and reduce the
                  reliance on securing budgets from the ‘big brands’.However,
                  SME target customers looking on the TV Media website were
                  faced with an offering that was too daunting. It didn’t look
                  affordable or accessible, and was a barrier to conversion for
                  mid sized brands.
                </p>
                <p className="pt-5">
                  We worked with TV Media to develop a really clear value
                  proposition, communicating their service offerings in a manner
                  that resonated with their target audience.
                </p>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>80%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Drastically improved quality of leads.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>12903 PM</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      More data for the business development team.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>88%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Better experience for TV viewers overall searching for
                      channels.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>62%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Save time for the business when updating content on the
                      site.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center text-4xl md:text-6xl 2xl:px-32">
            <h1 className="leading-normal text-center text-[#DF2323] font-bold">
              Coltfox Making Ideas Reality
            </h1>
            <p className="text-xl text-left lg:text-center text-[#012033] font-normal leading-normal px-0 py-8 lg:py-12 lg:px-20">
              TV Media's new proposition The new proposition formed the
              foundation for the information architecture and UX design, which
              was followed by the design and build of a new website. The site is
              now hosted on a flexible AWS solution, which scales based on
              demand. This means any cost saving can be passed onto TV Media.
              This architecture means minimal intervention is needed from our
              DevOps team - all round it’s more efficient.
            </p>
          </div>
          <div className=" py-5">
            <div className="sm:w-[100%]">
              <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-lg font-normal text-white leading-7 ">
                Solutions
              </div>
              <p className="text-xl font-normal leading-normal text-[#012033]">
                The structure of the site was optimized so that the right
                content was seen in the right place. We removed their catalog of
                programmed from the site, as that’s what itv.com is for, and
                instead used specific programmers as case studies to showcase
                the amazing advertising successes ITV Media’s customers have
                had. This helped to reduce confusion, improve the customer
                experience and drive better quality leads.
              </p>
              <p className="text-xl font-normal leading-normal text-[#012033] pt-8">
                We implemented and configured Drift (a conversational marketing
                platform) to streamline the process of starting a conversation
                with TV Media and to help generate and pre-qualify leads, using
                automation, before sending to the sales team via the Salesforce
                integration, shortening the time for follow up and conversion.
                Drift allows TV Media to engage with their audience at any time,
                understand their audience's needs and be able to effectively
                recommend the right product/solution or next step to them.
              </p>
            </div>
          </div>
          <div className="left flex-col lg:flex-row flex gap-0 lg:gap-32 py-12 lg:py-20 justify-between">
            <div className="bg-[#FCAB64] h-[20%] w-fit lg:w-[520px] xl:w-[300px] 2xl:w-[230px] mb-10 px-3 2xl:px-0 text-center rounded-full py-1 mt-2 shadow-lg text-white">
              Next Project
            </div>
            <Link to="/acma">
              <div className="leading-[normal] text-2xl md:text-[2.5rem] font-semibold text-[#121212] mb-12 md:mb-20">
                ACMA - team, Associations has transformed the event b2b and b2c
                search strategy and performance
              </div>
              <img src="/itv-main3.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Itv;
