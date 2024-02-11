import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Cedevita = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="px-3 py-10 2xl:py-10 text-center sm:px-0 sm:pl-0 text-[#012033] text-2xl sm:text-[2rem] font-bold">
        <p> ASSOCIATION </p>
      </div>
      <div className="acma px-3 pb-10 2xl:pb-24 text-center leading-tight lg:px-36 2xl:px-64 text-[#DF2323] text-4xl md:text-[6rem] font-bold">
        <h1> Intelligent and experience for an NGO. </h1>
      </div>
      <img className="w-full" src="./ngo-main1.png" alt="acma-main" />

      <div className="right-align sm:py-10 pt-10 mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="bg-orange-300 h-[20%] w-fit px-3 rounded-full py-1 shadow-lg text-white">
          CHALLENGES
        </div>
        <div className="ml-0 lg:ml-28 w-full lg:w-[80%]">
          <div className="sm:leading-[normal] text-[#012033] text-2xl sm:text-4xl font-semibold">
            <p>
              <strong>
                Social Media Research for a leading Philanthropic Organization
                working in the field of healthcare.
              </strong>
            </p>
          </div>

          <div className="content px-3 sm:px-0 pt-8 leading-9 text-xl font-normal">
            <li className="mb-10">
              NGO Foundation is one of the leading non-profit foundations
              supported by Bill and Melinda Gates. They have partnered with
              Sattva to increase the impact of their initiatives through
              research and data. Sattva, as part of their research project with
              the NGO Foundation, were looking for social media marketing,
              monitoring and support for a two month long campaign to understand
              how donations, giving and charity works.
            </li>
            <li className="mb-10">
              NGO Foundation skills such as tailoring, handicrafts, marketing
              and more, to produce designer products and selling them globally
              through their website and several other online marketplaces. A
              truly innovative initiative in the heart of rural Uttar Pradesh,
              India, we decided to take up the challenge and help them grow
              their enterprise.
            </li>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row 2xl:items-center 2xl:justify-center">
        <div>
          <img className="m-auto" src="ngo-main2.png" alt="" />
        </div>
      </div>

      <div className=" mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 mt-20 2xl:w-1/2">
        <div className="sm:w-[100%] 2xl:w-5/7">
          <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-xl text-white  ">
            Solutions
          </div>
          <p className="text-xl md:text-xl font-normal leading-normal text-[#012033]">
            We decided to design a focussed social media campaign, targetted
            towards everyday givers across various industry verticals. We
            leverages all platforms such as Facebook, Instagram, Linkedin and
            Twitter, urging users to share their stories of everyday giving. Our
            goal was to identify what factors encourage a person to donate,
            especially on digital media.
          </p>
          <p className="text-xl md:text-xl font-normal leading-normal text-[#012033] pt-8">
            It was a creative process to identify key drivers and decision
            making points in the buyer journey. Once identified, we used our
            strong, authentic story to reach out to target customers via social
            media campaigns, targetted ad campaigns, emailers and other
            personalised digital marketing strategies.
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
                  The Coltfox team looked at social identification mediates the
                  relationship between social media activities and satisfaction,
                  and satisfaction mediates the relationship between SM
                  activities and the intentions of users.
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
                  We leveraged the power of video to spotlight successful
                  association leaders of India. Globally to inspire association
                  target audience. The data helped us shape our message, tone,
                  and call to actions.
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
                  Social Media Page
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  Social media marketing efficiently fosters communications
                  between customers and marketers, besides enabling activities
                  that enhance brand awareness
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
                  Coltfox video production team lined up 10 Events NGO
                  Foundation videos activities to showcase their unique
                  hospitallity through dynamic storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full" src="./ngo-main3.png" alt="acma-main" />

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
            <div className="bg-[#FCAB64] h-[20%] w-fit mb-10 px-3 rounded-full py-1 mt-2 shadow-lg text-white  ">
              Results
            </div>
            <div>
              <div className="sm:leading-[normal] text-[#012033] text-4xl md:text-5xl font-semibold">
                Coltfox Wins in SIX Months
              </div>
              <div className="text-xl font-normal leading-9 text-[#012033] pt-5 gap-10">
                <p>
                  Remarkable success was achieved across key metrics. The Cost
                  Per MQL (Marketing Qualified Lead) was just $2.69, 949% above
                  industry standards, showcasing cost-efficiency in lead
                  generation. The Click Through Rate (CTR) stood at 4.72%,
                  exceeding industry norms by 525%, demonstrating effective
                  audience engagement. Additionally, a Conversion Rate of 12.14%
                  surpassed industry standards by 132%, signifying successful
                  lead conversion. In contrast, the Cost Per SQL (Sales
                  Qualified Lead) was below the industry standard, further
                  highlighting the campaign’s overall excellence in lead
                  generation, engagement, and conversion, boding well for
                  McDonald’s marketing endeavours.
                </p>
                <p className="pt-5">
                  This challenged our usual Digital Marketing process due to
                  recommendations being prohibited. We had to pivot and create
                  an educational and inspirational technician with case studies
                  to further improve the customer's journey.{" "}
                </p>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>35+</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Complete SEO Keywords Ranking for everymonth.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>1,500+ PM</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Social Media Followers and engagement for the month.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>25%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Conversion Rate – 3% to 25% in a month above industry
                      standard.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>45%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Conversion Rate – 12% to 56% above product enquires.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center text-4xl md:text-6xl 2xl:px-32">
            <h1 className="leading-normal text-center text-[#DF2323] font-bold ">
              Faces of Coltfox Digital <br /> Social Media Campaign
            </h1>
            <p className="text-2xl text-left lg:text-center text-[#012033] font-normal leading-normal px-0 py-8 lg:py-12 lg:px-20">
              Inspite of heavy competition, we were able to significantly drive
              up traffic numbers, keyword rankings for relevant long tail
              keywords. We also gained traction on our social media handles,
              with a genuinely interested fanbase developing. The organisation
              was eventually able to identify its competitive advantage and
              market its products effectively. We realized that every
              organisation, no matter how small, has its own unique personality
              and story, which cannot be copied by other players.
            </p>
          </div>
          <div className=" py-5">
            <div className="sm:w-[100%]">
              <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-lg font-normal text-white leading-7">
                Solutions
              </div>
              <p className="text-xl font-normal leading-normal text-[#012033]">
                Working closely with the team, Sattva released the ‘Everyday
                Giving in India Report’, a flagship research study and in-depth
                look at India’s everyday giving market and ecosystem, undertaken
                with the support of Rohini Nilekani Philanthropies and the Bill
                & Melinda Gates Foundation. The report was unveiled to a packed
                room at the Bangalore International Centre on April 24, 2019 at
                ‘A Billion Givers’ – a participatory dialogue on harnessing the
                potential of India’s everyday people for impact. Team Modifyed
                was helped with the critical social media aspect of the report.
              </p>
              <p className="text-xl font-normal leading-normal text-[#012033] pt-8">
                Instead of adopting the standard approach of promoting products
                and fighting for ad spots or keyword rankings, we decided to
                create an effective story, and a memorable brand.
              </p>
            </div>
          </div>
          <div className="left flex-col lg:flex-row flex gap-0 lg:gap-32 py-12 lg:py-20 justify-between">
            <div className="bg-[#FCAB64] h-[20%] w-fit lg:w-[520px] xl:w-[300px] 2xl:w-[250px] mb-10 px-3 2xl:px-0 text-center rounded-full py-1 mt-2 shadow-lg text-white">
              Next Project
            </div>
            <Link to="/sock-shop">
              <div className="leading-[normal] text-2xl md:text-[2.5rem] font-semibold text-[#121212] mb-12 md:mb-20">
                On-site experience for SOCK SHOP to drive conversion & order
                value. Creating an intelligent seamless experience.
              </div>
              <img src="/ngo-main4.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cedevita;
