import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Soloexpenses = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="px-3 py-10 2xl:py-10 text-center sm:px-0 sm:pl-0 text-[#012033] text-2xl sm:text-[2rem] font-bold">
        <p> Mobile Application Marketing </p>
      </div>
      <div className="acma px-3 pb-10 2xl:pb-24 text-center leading-tight lg:px-36 2xl:px-64 text-[#DF2323] text-4xl md:text-[6rem] font-bold">
        <h1> Solo Expenses-APP Promotion Camp </h1>
      </div>
      <img className="w-full" src="./se-main1.png" alt="acma-main" />

      <div className="right-align sm:py-10 pt-10 mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="bg-orange-300 h-[20%] w-fit px-3 rounded-full py-1 shadow-lg text-white">
          CHALLENGES
        </div>
        <div className="ml-0 lg:ml-28 w-full lg:w-[80%]">
          <div className="sm:leading-[normal] text-[#012033] text-2xl sm:text-4xl font-semibold">
            <p>
              <strong>
                Solo Expenses is an expense management application that is
                widely used by Finance managers and Accountants in the United
                Kingdom.{" "}
              </strong>
            </p>
          </div>

          <div className="content px-3 sm:px-0 pt-8 leading-9 text-xl font-normal">
            <li className="mb-10">
              We created a digital funnel for the application where we made use
              of mass platforms for outreach and select platforms for
              performance campaigns. Every quarter we were able to generate.
            </li>
            <li className="mb-10">
              Over the period of 1 year, we optimized the website for lead
              generation, set up landing pages, defined content buckets,
              introduced a referral programmer and optimized the search engine
              rankings for the application.
            </li>
            <li className="mb-10">
              To promote the app in UK and India and help build a user base.
            </li>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row 2xl:items-center 2xl:justify-center">
        <div>
          <img className="m-auto" src="se-main2.png" alt="" />
        </div>
      </div>

      <div className="mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 mt-20 2xl:w-1/2">
        <div className="sm:w-[100%] 2xl:w-5/7">
          <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-xl text-white  ">
            Solutions
          </div>
          <p className="text-xl font-normal leading-normal text-[#012033]">
            Initially we built the communities and populated content around the
            app features. Once that was done we started A/B testing with app
            installs campaigns. We found out that Google and Linked In were the
            best platforms to identify prospects and motivate them to become app
            users. From scanning and logging to tracking and analyzing, the app
            helps businesses in effective expense management and hence helps
            save time and costs.
            <li>
              Create internal efficiencies, saving the marketing & sales team
              time.
            </li>
            <li>Make content more accessible for their target market.</li>
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
                  Creative Strategy
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  We created four distinct 60-second ad spots, each catering to
                  a primary customer segment. To enhance targeting, we also
                  crafted 30, 15, and 6-second versions of each primary ad for
                  A/B testing.
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
                  Content Strategy
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  For each audience segment, we developed a series of static
                  ads. These ads played a dual role in organic social campaigns
                  and seamlessly integrated into the Solo App Content .
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
                  Video Production
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
                  App Development
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
        </div>
      </div>

      <img className="w-full" src="./se-main3.png" alt="acma-main" />

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
              <div className="sm:leading-[normal] text-[#012033] text-4xl md:text-5xl font-semibold">
                Coltfox Wins in ONE Year App Marketing
              </div>
              <div className="text-xl font-normal leading-9 text-[#012033] pt-5 gap-10">
                <p>
                  Final aim of Solo Assistance project was company's
                  presentation to potential partners in 8 foreign markets. We
                  envisioned an effective digital presentation of Solo
                  Assistance brand & our values with the vast array of products
                  we offer. Coltfox was a perfect match for this project! They
                  are a team of highly skilled creative professionals with great
                  communication skills always willing to go the extra mile. They
                  delivered outstanding results with ease.”
                </p>
                <p className="pt-5">
                  By implementing the COPE methodology, Coltfox reduced
                  production expenses by over 30%, allowing the YMCA to redirect
                  funds towards media buy. This led to an additional 300,000
                  impressions, improving the YMCA’s outreach. The organization
                  benefited not only financially but also from tailored and
                  consistent communication of their enhanced membership
                  offerings to their segmented audience.
                </p>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>+66%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Click-Through Rate (CTR): The Google Performance Max
                      campaign saw a 66% increase in CTR, jumping from an
                      initial 16.95% to an outstanding 28.12%.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>9.91 x</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Return on Ad Spend (ROAS): A phenomenal ROAS of 9.91X was
                      achieved, further highlighting the efficiency and
                      effectiveness of the campaigns.
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-xl font-normal leading-9 text-[#012033] pt-10 gap-10">
                <p>
                  Our dual-campaign strategy yielded impressive results for both
                  Solo App and New website launch.
                </p>
              </div>
            </div>
          </div>
          <div className="items-center justify-center text-4xl md:text-6xl 2xl:px-32">
            <h1 className="leading-normal text-center text-[#DF2323] font-bold">
              Faces of Coltfox Digital <br /> Marketing Campaign
            </h1>
            <p className="text-xl text-left lg:text-center text-[#012033] font-normal leading-normal px-0 py-8 lg:py-12 lg:px-20">
              The structure of the site was optimised so that the right content
              was seen in the right place. We removed their catalogue of
              programmes from the site, as that’s what itv.com is for, and
              instead used specific programmes as case studies to showcase the
              amazing advertising successes Solo App customers have had. This
              helped to reduce confusion, improve the customer experience and
              drive better quality leads.
            </p>
          </div>
          <div className=" py-5">
            <div className="sm:w-[100%]">
              <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-lg font-normal text-white leading-7  ">
                Solutions
              </div>
              <p className="text-xl font-normal leading-normal text-[#012033]">
                The Solo grappled with a decline in membership during the
                challenging Covid-19 pandemic. Their previous efforts, involving
                multiple agencies, resulted in rising costs and inconsistent
                messaging
              </p>
              <p className="text-xl font-normal leading-normal text-[#012033] pt-8">
                The primary obstacles included:
              </p>
              <li className="text-xl font-normal leading-normal text-[#012033] pt-8">
                Tight budget constraints
              </li>
              <li className="text-xl font-normal leading-normal text-[#012033] pt-8">
                The need for precise and impact content
              </li>
              <li className="text-xl font-normal leading-normal text-[#012033] pt-8">
                The desire for a unified brand message
              </li>
            </div>
          </div>
          <div className="left flex-col lg:flex-row flex gap-0 lg:gap-32 py-12 justify-between lg:py-20">
            <div className="bg-[#FCAB64] h-[20%] w-fit lg:w-[550px] xl:w-[300px] 2xl:w-[250px] mb-10 px-3 2xl:px-0 text-center rounded-full py-1 mt-2 shadow-lg text-white ">
              Next Project
            </div>
            <Link to="/cedevita">
              <div className="leading-[normal] text-2xl md:text-[2.5rem] font-semibold text-[#121212] mb-12 md:mb-20">
                Creating an intelligent and seamless experience for an NGO. with
                latest tools & Digital Marketing results.
              </div>
              <img src="/se-main4.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Soloexpenses;
