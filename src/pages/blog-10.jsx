import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Blog10 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    display: "inline-flex",
    background: "linear-gradient(to right, #FCAB64 50%, transparent 50%)",
    backgroundSize: "200% 100%",
    transition:
      "background-position 0.5s ease-out, color 0.5s ease, stroke 0.5s ease",
    backgroundPosition: isHovered ? "left bottom" : "right bottom",
    color: isHovered ? "white" : "#FCAB64",
    stroke: isHovered ? "white" : "#FCAB64",
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className="mt-8 md:mt-12 px-3 text-center sm:px-16 xl:px-28 2xl:px-64 text-[#FCAB64] text-lg sm:text-xl font-semibold leading-tight">
        Digital Marketing
      </div>

      <div className="mt-12 px-3 pb-14 text-center sm:px-16 xl:px-28 2xl:px-64 text-[#DF2323] text-3xl sm:text-[4rem] font-semibold leading-tight">
        <h1>
          {" "}
          5 Of The Most In-Demand <br /> Digital Marketing Skills In 2023{" "}
        </h1>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-8 text-[#FCAB64] w-fit">
        <div>
          <div className="text-sm leading-8 font-medium">Written by</div>
          <div className="text-sm font-semibold">COLTFOX CREATIVE</div>
        </div>
        <div>
          <div className="text-sm leading-8 font-medium">Category</div>
          <div className="text-sm font-semibold">Digital Marketing</div>
        </div>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-12 lg:pb-16 w-fit">
        <div>
          <div className="text-base leading-9 font-semibold text-[#012033]">
            Follow us
          </div>
          <div className="flex text-sm gap-4 font-semibold text-[#FCAB64]">
            <a href="">
              <div>Fb</div>
            </a>
            <a href="">
              <div>Li</div>
            </a>
            <a href="">
              <div>Ig</div>
            </a>
            <a href="">
              <div>Tw</div>
            </a>
          </div>
        </div>
      </div>

      <div className="gap-10 lg:gap-20 flex px-8 sm:px-16 2xl:px-64  flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col">
          <div className="text-2xl sm:text-[2rem] mb-10 leading-normal font-normal text-[#DF2323]">
            {" "}
            TABLE OF CONTENTS.
          </div>
          <a
            href="#1"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            1. Social Media Skills{" "}
          </a>
          <a
            href="#2"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            2. Data Analysis abilities
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            3. Search Marketing & PPC
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            4. SEO Proficiency
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug"
          >
            5. Creative content creation
          </a>
        </div>
        <img className="w-full sm:w-3/5 h-full" src="./blog10-img.png" alt="" />
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 my-10 sm:my-20 flex flex-col gap-4 sm:gap-6 leading-9 text-base font-normal text-[#012033]">
        <p>
          Are you ready to conquer the ever-evolving realm of digital marketing
          in 2023? The demand for skilled professionals is rising as the digital
          landscape continues to flourish. Mastering essential digital marketing
          skills is paramount to thrive in this dynamic industry.
        </p>
        <p>
          In this blog post, we’ll delve into five of the most sought-after
          skills that can make you an invaluable asset in digital marketing.
          Whether you’re a seasoned marketer or just starting out, these skills
          will set you apart and make you a sought-after expert in digital
          marketing.
        </p>
        <p>
          If you’re ready to position yourself as a sought-after expert in
          digital marketing, these skills will boost your career and attract
          potential clients and employers seeking a standout digital marketing
          agency in Edmonton.
        </p>
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            1. Social Media Skills
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Social media marketing skills are pillars of influence in the
              ever-expanding digital marketing realm. Navigating the vast
              expanse of platforms like Facebook, Instagram, Twitter, and
              LinkedIn requires more than just casual familiarity.
            </div>
            <div>
              It demands strategic insight, artful creativity, and impeccable
              timing. Successful digital marketers understand that each platform
              has its unique language and audience, requiring tailored
              approaches for optimal engagement.
            </div>
            <div>
              From crafting captivating copies to designing eye-catching
              visuals, the mastery of social media empowers marketers to foster
              authentic connections with their target audience. This involves
              more than just posting content; it’s about building relationships,
              responding to queries promptly, and leveraging data-driven
              insights to fine-tune campaigns.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            2. Data Analysis Abilities
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              In the dynamic world of digital marketing, data isn’t just
              numbers; it’s the currency of success. Analytics form the bedrock
              upon which strategies are built and refined. Proficient data
              analysis empowers marketers to decipher user behaviour, gauge
              campaign effectiveness, and uncover hidden trends that can reshape
              a marketing landscape.
            </div>
            <div>
              Tools like Google Analytics and advanced data visualization
              platforms become your compass, guiding you through the labyrinth
              of online interactions.
            </div>
            <div>
              Practical data analysis requires more than just crunching
              numbers—it’s about extracting meaningful insights and translating
              them into actionable strategies. From identifying high-converting
              touchpoints to pinpointing improvement areas, data analysis can
              transform a good digital marketing campaign into a phenomenal one.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            3. Search Marketing & PPC
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Search Marketing and Pay-Per-Click (PPC) advertising are the
              artillery of a digital marketing arsenal, propelling brands to the
              forefront of search engine results. With users increasingly
              relying on search engines for answers, mastering search marketing
              is akin to claiming prime real estate in the digital world.
            </div>
            <div>
              This involves understanding user intent, strategically selecting
              keywords, and crafting compelling ad copies that resonate with
              potential customers.
            </div>
            <div>
              On the other hand, PPC empowers marketers to target specific
              audiences, ensuring their ads reach users actively seeking
              relevant products or services. The pay-per-click model offers a
              cost-effective way to drive targeted traffic, with measurable
              results and the ability to tailor campaigns in real time.
            </div>
            <div>
              By skillfully managing search marketing and PPC campaigns, digital
              marketers can place their brands where it matters most—right in
              front of their audience when they’re ready to engage.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            4. SEO Proficiency
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              In the vast digital landscape, visibility is paramount. This is
              where Search Engine Optimization (SEO)emerges as a critical skill
              for digital marketers. SEO is the compass that guides brands to
              higher rankings on search engine result pages and, therefore,
              greater discoverability. It involves understanding algorithms,
              conducting keyword research, optimizing on-page and off-page
              elements, and creating a seamless user experience.
            </div>
            <div>
              With most online experiences beginning with search engines, being
              atop the search results isn’t a luxury—it’s a necessity. SEO isn’t
              a static practice; it evolves alongside search engine algorithms
              and user behaviour. Adept digital marketers recognize the
              significance of SEO as a continuous effort to ensure their content
              remains relevant and their brand maintains its online authority.
            </div>
            <div>
              Through skilled SEO practices, brands can navigate the intricate
              maze of search engines, effectively connecting with their target
              audience.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            5. Creative Content Creation
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Amid digital noise, creativity breaks through the clutter. Content
              creation in digital marketing is more than just stringing words
              and visuals together—it’s about crafting resonant narratives.
              Whether blog posts, videos, infographics, or social media posts,
              the content’s ability to captivate and inform is what sets brands
              apart.
            </div>
            <div>
              An effective content creator understands the art of storytelling,
              weaving messages that evoke emotions and compel action. They’re
              skilled in adapting their tone and style based on the platform and
              audience, ensuring their content remains relevant and relatable.
            </div>
            <div>
              Beyond the initial creation, successful digital marketers monitor
              content performance, iterate based on user feedback, and find ways
              to breathe new life into existing pieces. Creative content
              creation is the compass that guides brands through the
              ever-changing tides of digital marketing, enabling them to foster
              lasting connections and engagement.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#D9D3D3]">
        <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 py-12 md:py-16">
          <div className="bg-[#FCAB64] h-[10%] w-fit px-3 rounded-full py-2 shadow-xl text-white text-lg ">
            Our Blogs
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="my-8 leading-normal font-semibold text-3xl text-[#012033]">
              Related posts
            </div>
            <a
              href="/our-blogs"
              style={hoverStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="my-0 md:my-10 flex items-center justify-center border border-[#FCAB64] shadow-lg rounded-full px-4 py-2 h-[20%] mr-auto sm:mr-0 mb-10 sm:mb-0 sm:my-10"
            >
              <span className="text-lg font-normal leading-7 text-center">
                View All Posts
              </span>
              <svg
                className=" ml-2 w-4 h-4 sm:w-5 sm:h-5"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 16L14.914 1L1 16ZM14.914 1H2.3914H14.914ZM14.914 1V14.5V1Z"
                  fill="#FCAB64"
                />
                <path
                  d="M1 16L14.914 1M14.914 1H2.3914M14.914 1V14.5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-16 md:gap-20">
            <div className="flex flex-col gap-4 md:gap-10 w-full sm:w-1/2 justify-between">
              <img src="./blog3-img2.png" alt="" />
              <div className="text-3xl font-semibold leading-relaxed text-[#012033]">
                How To Minimize Customer Acquisition Cost Using Digital
                Marketing
              </div>
              <button className="bg-white shadow-none h-fit text-center w-fit px-3 rounded-full py-1 text-[#FCAB64] text-lg ">
                STRATEGY AND CREATIVE
              </button>
            </div>
            <div className="flex flex-col gap-4 md:gap-10 w-full sm:w-1/2 justify-between">
              <img src="./blog3-img3.png" alt="" />
              <div className="text-3xl font-semibold leading-relaxed text-[#012033]">
                3 Ways to Improve Your Email Marketing Strategy
              </div>
              <button className="bg-white shadow-none h-fit text-center w-fit px-3 rounded-full py-1 text-[#FCAB64] text-lg ">
                STRATEGY AND CREATIVE
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog10;
