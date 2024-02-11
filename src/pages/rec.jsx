import React from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Rec = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />
      <div className="px-3 py-10 2xl:py-10 text-center sm:px-0 sm:pl-0 text-[#012033] text-2xl sm:text-[2rem] font-bold">
        <p> Magazine </p>
      </div>
      <div className="acma px-3 pb-10 2xl:pb-24 text-center leading-tight lg:px-36 2xl:px-64 text-[#DF2323] text-4xl md:text-[6rem] font-bold">
        <h1> REC & Future Proofing New Brand </h1>
      </div>
      <img className="w-full" src="./rec-main1.png" alt="acma-main" />

      <div className="right-align sm:py-10 pt-10 mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="bg-orange-300 h-[20%] w-fit px-3 rounded-full py-1 shadow-lg text-white">
          CHALLENGES
        </div>
        <div className="ml-0 lg:ml-28 w-full lg:w-[80%]">
          <div className="sm:leading-[normal] text-[#012033] text-2xl sm:text-4xl font-semibold">
            <p>
              <strong>
                A new brand identity transforming The REC and future proofing
                their organisation.
              </strong>
            </p>
          </div>

          <div className="content px-3 sm:px-0 pt-8 leading-9 text-xl font-normal">
            <li className="mb-10">
              Being a leader of best practice in recruitment, The REC needs to
              be ahead of the curve promoting what good recruitment can
              do.However, despite the influx in recruitment agencies, their
              membership numbers were hitting a plateau. The business needed to
              shift with the times to make it more modern, attractive &
              accessible to a new breed of recruitment firms.
            </li>
            <li className="mb-10">
              The REC identified that a total re brand was necessary to allow
              them to fulfill their potential, which is where Coltfox came in.
            </li>
            <li className="mb-10">
              The REC wanted a total re-brand, followed by a new website, to
              meet the following key objectives
              <li className="mt-10 ml-10">Increase membership renewals</li>
              <li className="ml-10">Increase new membership sign ups</li>
              <li className="ml-10">Better connect with their members</li>
              <li className="ml-10">
                Increase knowledge and understanding of users (both members and
                non-members)
              </li>
            </li>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row 2xl:items-center 2xl:justify-center">
        <div>
          <img className="m-auto" src="rec-main2.png" alt="" />
        </div>
      </div>

      <div className=" mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 mt-20 2xl:w-1/2">
        <div className="sm:w-[100%] 2xl:w-5/7">
          <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-xl text-white  ">
            Solutions
          </div>
          <p className="text-xl md:text-xl font-normal leading-normal text-[#012033]">
            The REC brand was dated, complex and hadn’t scaled with the
            business. Different teams across the organization would use the
            brand in different ways, which over time led to it being diluted.
            The brand wasn’t resonating with the target audience, which was
            reflected by a lack of new memberships.
          </p>
          <p className="text-xl md:text-xl font-normal leading-normal text-[#012033] pt-8">
            To come up with the new identity, we ran through a brand critique
            with the REC team to understand what elements of the brand they
            wanted to keep and what they wanted to get rid of. Starting with a
            blank canvas was agreed to be the most creative and non-restrictive
            approach.
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
                  Brand Strategy
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  Working alongside several stakeholders, internal teams and the
                  core project team, we ran a number of interactive workshops.
                  These workshops were designed to immerse understand the
                  business and its purpose.
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
                  We had access to a cross section of employees to help identify
                  how the brand and website project will affect their roles and
                  used that insight to help validate our decisions.
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
                  Competitor Analysis
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  A deep dive into all the users who interact with the brand,
                  grouping & identifying patterns based on need and mapping them
                  against the products & services offered
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
                  Magazine Strategy
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  list all key products & services, identify which are the
                  strongest / weakest areas of expertise, highlight the products
                  & services proposition
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
                  Value Proposition
                </h1>
              </div>
              <div className="pt-5 pl-16 sm:pl-16 text-xs">
                <p>
                  We are the voice of the recruitment industry. We are here to
                  drive standards and support recruitment businesses - striving
                  to ensure that every candidate to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full" src="./rec-main3.png" alt="acma-main" />

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
                Coltfox Wins a Successful Magazine Marketing
              </div>
              <div className="text-xl font-normal leading-9 text-[#012033] pt-5 gap-10">
                <p>
                  As the voice of the recruitment industry, it’s The REC's
                  responsibility to champion high standards; speaking up for
                  great recruiters and helping them grow
                </p>
                <p className="pt-5 font-semibold">Vision</p>
                <p>
                  To mature the recruitment industry into a respected, trusted
                  and dynamic vocation.
                </p>
                <p className="pt-5 font-semibold">Mission</p>
                <p>
                  Raising industry standards and empowering recruiters to exceed
                  expectations by creating an ecosystem of learning and support.
                </p>
                <p className="pt-5 font-semibold">Brand Tagline</p>
                <p>
                  The voice of recruitment. Championing standards. Promoting
                  growth.
                </p>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>40.00%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Define the new brand values, validated with customer
                      readership
                    </div>
                  </div>
                </div>
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>75%</h1>
                    </div>
                    <div className="pt-5 text-xl font-normal leading-9 text-[#012033]">
                      Customer redefining and content strategy
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 sm:flex-row mt-10 flex-col">
                <div className="flex justify-start sm:w-[40%]">
                  <div className=" flex flex-col ">
                    <div className="text-4xl font-bold leading-[normal] text-[#DF2323]">
                      <h1>78%</h1>
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
                      <h1>25%</h1>
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
            <h1 className="leading-normal text-center text-[#DF2323] font-bold ">
              Faces of Coltfox Content <br /> Marketing Strategy
            </h1>
            <p className="text-xl text-left lg:text-center text-[#012033] font-normal leading-normal px-0 py-8 lg:py-12 lg:px-20">
              We ran a number of workshops with the team to understand what the
              current perception of their visual brand was vs what they wanted
              the perception to be. It became clear that the current visual
              brand wasn’t cohesive, with each team placing its values,
              specifically complexity and vibrance, in markedly different places
              on the chart. The proposed direction is far clearer, with the
              teams putting their markers in similar spots which in turn created
              our core design values, which were:
            </p>
          </div>
          <div className=" py-5">
            <div className="sm:w-[100%]">
              <div className=" bg-[#FCAB64] w-max mb-10 px-3 rounded-full py-1 shadow-lg font-normal text-white leading-7">
                Solutions
              </div>
              <p className="text-xl font-normal leading-normal text-[#012033]">
                With the new values defined, the team moved onto crafting The
                REC's visual identity. We went through a number of iterations,
                guided by competitor analysis & inspirational brands, and
                created something visual that truly resonated with The REC's new
                values.
              </p>
              <p className="text-xl font-normal leading-normal text-[#012033] pt-8">
                <li>
                  Competitor analysis, competitor quadrant: to understand the
                  competitor landscape and identify potential opportunities for
                  differentiation
                </li>
                <li>
                  Product & service exploration: to map out all the products and
                  services offered by The REC
                </li>
                <li>
                  Customer segments: to understand how customers were
                  segemented.
                </li>
              </p>
            </div>
          </div>
          <div className="left flex-col lg:flex-row flex gap-0 lg:gap-32 py-12 lg:py-20 justify-between">
            <div className="bg-[#FCAB64] h-[20%] w-fit lg:w-[250px] 2xl:w-[200px] mb-10 px-3 2xl:px-0 text-center rounded-full py-1 mt-2 shadow-lg text-white">
              Next Project
            </div>
            <Link to="/itv">
              <div className="leading-[normal] text-2xl md:text-[2.5rem] font-semibold text-[#121212] mb-12 md:mb-20">
                Little birds – A new distribution platform for ITV Studios
                helping them more effectively.
              </div>
              <img src="/rec-main4.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rec;
