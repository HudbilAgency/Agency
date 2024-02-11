import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Acma = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="px-3 py-10 2xl:px-64 2xl:py-10 text-center sm:px-0 sm:pl-0 text-[#012033] text-2xl sm:text-[2rem] font-bold">
        <p> ASSOCIATION </p>
      </div>
      <div className="acma px-3 pb-10 2xl:pb-24 text-center leading-tight lg:px-36 2xl:px-64 text-[#DF2323] text-4xl md:text-[6rem] font-bold">
        <h1> ACMA - ASSOCIATION OF INDIA </h1>
      </div>
      <img className="w-full" src="./acma-main.png" alt="acma-main" />

      <div className="right-align sm:py-10 mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="bg-orange-300 h-[20%] w-fit px-3 rounded-full py-1 shadow-lg text-white">
          CHALLENGES
        </div>
        <div className="ml-0 lg:ml-28 w-full lg:w-[80%]">
          <div className="sm:leading-[normal] text-[#012033] text-2xl sm:text-4xl  font-semibold">
            <p>
              <strong>
                India's automotive industry is a vital sector, contributing 49%
                to the country's manufacturing GDP, 7.5% to the overall GDP, and
                supporting approximately 38 million jobs.
              </strong>
            </p>
          </div>

          <div className="content px-3 sm:px-0 pt-8 leading-9 text-xl font-normal">
            <li className="mb-10">
              ACMA plays a crucial role in the industry's development in India,
              actively engaging in trade promotion, technology enhancement,
              quality improvement, and information dissemination. It
              participates in international trade fairs, sends trade delegations
              overseas, and publishes materials on various automotive
              industry-related subjects.
            </li>
            <li className="mb-10">
              This growth in domestic auto component sales to OEMs, reaching Rs.
              4.76 lakh crores (USD 59.3 billion), reflects a 39.5% increase
              compared to the previous year. The demand for higher-value
              components and a shift towards larger, more powerful vehicles
              contributed to this growth.
            </li>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row 2xl:items-center 2xl:justify-center">
        <div>
          <img className="m-auto" src="sliding-img1.png" alt="" />
        </div>
        <div>
          <img className="m-auto" src="sliding-img2.png" alt="" />
        </div>
        <div>
          <img className="m-auto" src="sliding-img3.png" alt="" />
        </div>
        <div>
          <img className="m-auto" src="sliding-img4.png" alt="" />
        </div>
      </div>

      <div className=" mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 mt-20 2xl:w-1/2">
        <div className="sm:w-[100%] 2xl:w-5/7">
          <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-xl text-white  ">
            Solutions
          </div>
          <p className="text-xl md:text-xl font-normal leading-normal text-[#012033]">
            Coltfox enhanced their acts as a catalyst in enhancing growth &
            evolution of the Indian auto component industry, with formulating
            the innovative solutions for creating resilient & robust business
            models for auto component suppliers.for developmental policies
            pertaining to the Indian auto component industry at both national &
            international levels. They are the Global promoters of ‘Made in
            India’ auto components. Creating an environment of a responsible
            corporate culture & behavior among member organizations.
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
                  Landing Page
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  We controlled the customer journey, from ad-click to form
                  submission, with dedicated landing pages to leverage our
                  content strategy and targeted messaging.
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
                  Ad Development
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
                  Deployment
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  Armed with targeting data and sophisticated creative, we
                  achieved higher conversions and an improved user experience
                  resulting in higher-quality leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full" src="./acma-award.png" alt="acma-main" />

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
                  to further improve the customer's journey.
                </p>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>16.60%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Cost Per MQL Lead – 48% below industry standard.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>246 PM</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Cost Per MQL Lead – 949% below industry standard.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>38%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Conversion Rate – 12% to 38% in a month above industry
                      standard.
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>56%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Conversion Rate – 32% to 56% in a month above industry
                      standard.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center text-4xl md:text-6xl 2xl:px-32">
            <div className="red-line leading-normal text-center text-[#DF2323] font-bold ">
              Faces of Coltfox Digital <br /> Marketing Campaign
            </div>
            <p className="text-xl text-left lg:text-center text-[#012033] font-normal leading-normal px-0 py-8 lg:py-12 lg:px-20">
              The structure of the site was optimised so that the right content
              was seen in the right place. We removed their catalogue of
              programmes from the site, as that’s what itv.com is for, and
              instead used specific programmes as case studies to showcase the
              amazing advertising successes ITV Media’s customers have had. This
              helped to reduce confusion, improve the customer experience and
              drive better quality leads.
            </p>
          </div>
          <div className=" py-5">
            <div className="sm:w-[100%]">
              <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-lg font-normal text-white leading-7 ">
                Solutions
              </div>
              <p className="text-xl font-normal leading-normal text-[#012033]">
                This experiment was designed to gain insight for an upcoming
                experiment on the header. We proposed adding a USP banner to the
                header, and as that is a significant addition, we used this
                opportunity to learn if users respond positively to a USP
                message. Throughout the duration of the experiment, this was
                consistently up against the control, showing users responded
                positively to the banner, showing that this is safe to include
                in the header redesign experiment, and that we could possibly
                tweak the USP points in order to improve trust in users who land
                on the site.
              </p>
              <p className="text-xl font-normal leading-normal text-[#012033] pt-8">
                The new proposition formed the foundation for the information
                architecture and UX design, which was followed by the design and
                build of a new website.
              </p>
            </div>
          </div>
          <div className="left flex-col lg:flex-row flex gap-0 lg:gap-32 py-12 justify-between">
            <div className="bg-[#FCAB64] h-[20%] w-fit lg:w-[550px] xl:w-[320px] 2xl:max-w-[250px] mb-10 px-3 2xl:px-0 text-center rounded-full py-1 mt-2 shadow-lg text-white">
              Next Project
            </div>
            <Link to="/toolstation">
              <a href="/toolstation">
                <div className="leading-[normal] text-2xl md:text-[2.5rem] font-semibold text-[#121212] mb-12 md:mb-20">
                  Tool station launches latest catalog with deals and products.
                  collaborative, and innovative thinking delivers big results.
                </div>
                <img className="w-full" src="/toolstationimg.png" alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Acma;
