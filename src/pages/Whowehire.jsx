import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Whowehire = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className="px-6 sm:px-28 lg:px-48 xl:px-60 2xl:px-96 py-6 sm:py-10">
        <div className="text-[#DF2323] text-4xl sm:text-6xl font-semibold">
          <div className="leading-relaxed">
            At Hudbil we Invest <br className="flex" />{" "}
            <span className="shadow-inset text-[#1F1F21] rounded-full text-3xl sm:text-5xl bg-[#FCAB64] bg-[url('/noise-grey.png')] bg-blend-overlay px-8 py-1 sm:py-2">
              In Our People
            </span>{" "}
            to empower <br className="hidden sm:flex" /> their voices
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 xl:px-60 2xl:px-96 sm:pt-10 pt-6 pb-12 sm:pb-28">
        <div className="flex flex-col gap-12 sm:gap-20 items-start relative">
          <div className="flex gap-6 z-[10]">
            <div>
              <div className="bg-[#F2F2F2] flex items-center justify-center w-12 h-12 rounded-full border border-[#DF2323]">
                <span className="text-xl text-[#DF2323] font-semibold">1.</span>
              </div>
            </div>
            <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
              <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
                <div className="text-2xl text-[#DF2323] font-semibold">
                  Hudbil - Software Develepoment
                </div>
                <div className="text-xs lg:text-base font-normal leading-6">
                  We specialize in creating bespoke software applications,
                  ensuring they align perfectly with your business objеctivе. As
                  a prominеnt tеch-savvy company, we develop softwarе that
                  simplifiеs complеx businеss tasks and ovеrcomеs critical
                  challеngеs.
                </div>
                <div className="text-xs lg:text-base font-normal leading-6">
                  Email us your resume with the cover letter at hr@hudbil.com
                </div>
              </div>
              <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
                <div className="text-xs lg:text-base rounded-full bg-[#DF2323] text-white px-3 py-2 w-fit">
                  Hiring Positions
                </div>
                <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
                  <li>Senior - UI & UX Designer </li>
                  <li>Software Developer</li>
                  <li>Back-end Developer</li>
                  <li>Front-end Developer</li>
                </div>
                <div className="text-xs lg:text-base rounded-full border border-[#DF2323] text-[#DF2323] px-3 py-2 w-fit">
                  Email Us Now
                </div>
              </div>
            </div>
          </div>

          <div className="absolute mr-auto ml-6 w-[1px] h-[77%] lg:h-4/5 2xl:h-[82%] bg-[#DF2323]"></div>

          <div className="flex gap-6 z-[10]">
            <div>
              <div className="bg-[#F2F2F2] flex items-center justify-center w-12 h-12 rounded-full border border-[#DF2323]">
                <span className="text-xl text-[#DF2323] font-semibold">2.</span>
              </div>
            </div>
            <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
              <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
                <div className="text-2xl text-[#DF2323] font-semibold">
                  Coltfox - Digital Marketing
                </div>
                <div className="text-xs lg:text-base font-normal leading-6">
                  In the design phase, we bring your vision to life. Based on
                  the insights we gained in the discovery phase, we translate
                  our ideas into visual concepts and design a user experience
                  that conveys your message to your audience. We also design a
                  user experience that meets the needs of your target audience
                  and supports your business goals. By focusing on both
                  aesthetics and usability, we make sure your website looks good
                  and works even better.
                </div>
              </div>
              <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
                <div className="text-xs lg:text-base rounded-full border border-[#DF2323] text-[#DF2323] px-3 py-2 w-fit">
                  Service list
                </div>
                <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
                  <li>Branding</li>
                  <li>Grahic design</li>
                  <li>Wireframes</li>
                  <li>UI Design</li>
                  <li>Interactive prototypes</li>
                  <li>Animations</li>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 z-[10]">
            <div>
              <div className="bg-[#F2F2F2] flex items-center justify-center w-12 h-12 rounded-full border border-[#DF2323]">
                <span className="text-xl text-[#DF2323] font-semibold">3.</span>
              </div>
            </div>
            <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
              <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
                <div className="text-2xl text-[#DF2323] font-semibold">
                  Kalacode
                </div>
                <div className="text-xs lg:text-base font-normal leading-6">
                  Once the design is approved, our team of experienced
                  developers brings it to life. Using modern frameworks and
                  technologies, we create a responsive, fast and functional
                  website that meets the needs of your business. We also
                  optimize your website for search engines and integrate it with
                  any necessary third-party tools or platforms. Throughout the
                  development process, we perform thorough testing to ensure
                  that your website works perfectly on all devices and browsers.
                </div>
              </div>
              <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
                <div className="text-xs lg:text-base rounded-full border border-[#DF2323] text-[#DF2323] px-3 py-2 w-fit">
                  Service list
                </div>
                <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
                  <li>Front-end Development</li>
                  <li>Back-end Development</li>
                  <li>Database management</li>
                  <li>Quality Assurance and Testing</li>
                  <li>API development</li>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 z-[10]">
            <div>
              <div className="bg-[#F2F2F2] flex items-center justify-center w-12 h-12 rounded-full border border-[#DF2323]">
                <span className="text-xl text-[#DF2323] font-semibold">4.</span>
              </div>
            </div>
            <div className=" h-32 w-full sm:h-fit flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-10 h-full">
              <div className="flex flex-col gap-6 sm:w-1/2 mt-2">
                <div className="text-2xl text-[#DF2323] font-semibold">
                  Mausapp
                </div>
                <div className="text-xs lg:text-base font-normal leading-6">
                  Launching your website is just the beginning. To ensure
                  lasting success, we work with you to collect user feedback,
                  track performance, and make data-driven improvements over
                  time. This includes monitoring website analytics to identify
                  areas for improvement, conducting user testing to gather
                  feedback on the user experience, and updating your website
                  content and features as needed. By continuously optimizing
                  your website, we help you stay ahead of the competition and
                  achieve your business goals.
                </div>
              </div>
              <div className="flex flex-col gap-6 sm:w-1/3 2xl:w-[30%] mt-2">
                <div className="text-xs lg:text-base rounded-full border border-[#DF2323] text-[#DF2323] px-3 py-2 w-fit">
                  Service list
                </div>
                <div className="flex flex-col text-xs lg:text-base font-normal leading-6">
                  <li>Analytics and Data Analysis</li>
                  <li>Project upgrades</li>
                  <li>Content Optimization</li>
                  <li>Accessibility Optimization</li>
                  <li>Maintenance and Support</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Whowehire;
