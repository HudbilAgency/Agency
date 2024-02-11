import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Blog7 = () => {
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
        Marketing Trends
      </div>

      <div className="mt-12 px-3 pb-14 text-center sm:px-16 xl:px-28 2xl:px-64 text-[#DF2323] text-3xl sm:text-[4rem] font-semibold leading-tight">
        <h1>
          {" "}
          Key Services You Should Expect <br />
          From An Online Marketing <br />
          Agency{" "}
        </h1>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-8 text-[#FCAB64] w-fit">
        <div>
          <div className="text-sm leading-8 font-medium">Written by</div>
          <div className="text-sm font-semibold">COLTFOX CREATIVE</div>
        </div>
        <div>
          <div className="text-sm leading-8 font-medium">Category</div>
          <div className="text-sm font-semibold">Online Marketing</div>
        </div>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-12 lg:pb-16 w-fit">
        <div>
          <div className="text-base leading-9 font-semibold text-[#012033]">
            Follow us
          </div>
          <div className="text-sm flex gap-4 font-semibold text-[#FCAB64]">
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

      <div className="gap-10 lg:gap-12 flex px-8 sm:px-16 2xl:px-64  flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col">
          <div className="text-2xl sm:text-[2rem] mb-10 leading-normal font-normal text-[#DF2323]">
            {" "}
            TABLE OF CONTENTS.
          </div>
          <a
            href="#1"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            1. Search Engine optimization{" "}
          </a>
          <a
            href="#2"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            2. Virtual And Augmented Reality{" "}
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            3. Niche And Micro-Influencers
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            4. Social Commerce Continues To Grow
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            5. The Importance Of User-Generated{" "}
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            6. Privacy And Data Protection
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            7. AI-Powered Chatbots For Customer{" "}
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            8. The Growth Of Ephemeral Content
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            9. Community Building
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug"
          >
            10. Sustainability And Social Responsibility
          </a>
        </div>
        <img className="w-full sm:w-3/5 h-full" src="./blog7-img.png" alt="" />
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 my-10 sm:my-20 flex flex-col gap-4 sm:gap-6 leading-9 text-base font-normal text-[#012033]">
        <p>
          In today’s digital age, establishing a strong online presence is
          crucial for the success of any business. Whether you’re a startup or a
          well-established company, the services of an online marketing agency
          can be a game-changer.
        </p>
        <p>
          But what exactly should you expect from an online marketing agency?
        </p>
        <p>
          An expert online marketing agency provides key services that can
          streamline your digital marketing efforts, ensuring you stay ahead of
          the curve. From crafting compelling content to optimizing SEO,
          deploying targeted advertising campaigns, and analyzing performance
          data, these agencies elevate your online presence, drive organic
          traffic, and increase conversions.
        </p>
        <p>
          Let’s go into the crux of the matter, exploring the key services that
          online marketing agencies provide, enabling you to make informed
          decisions for your business.
        </p>
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            1. Search Engine Optimization (SEO)
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Search Engine Optimization, often abbreviated as SEO, stands as
              the cornerstone of any successful online marketing endeavour. It
              is the art and science of enhancing your website’s visibility on
              search engines, including Google, Bing, and Yahoo.
            </div>
            <div>
              The primary goal of SEO is to propel your website to the top of
              search engine results pages, ensuring that your potential
              customers can easily find your business when searching for
              relevant keywords. Whether it’s on-page SEO or off-page SEO, you
              need a reliable digital marketing expert by your side.
            </div>
            <div>
              At the heart of SEO lies keyword research. This critical process
              involves identifying and targeting the keywords and phrases your
              potential customers employ when searching for products or services
              akin to what your business offers. Effective keyword research acts
              as a lodestar, enabling you to navigate the digital marketing seas
              with precision and purpose. An online marketing agency can help
              you identify the right keywords to target, giving you a
              competitive edge in your industry.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            2. Content Marketing
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Content is the lifeblood of the digital world. An online marketing
              agency that excels in content marketing is equipped to craft
              high-quality content that not only informs and educates but also
              captivates and converts. Compelling content is the key to audience
              engagement and conversion.
            </div>
            <div>
              <strong>Blogging And Article Writing</strong> <br />
              Blogging and article writing are powerful instruments in the
              content marketer’s toolkit. They serve as platforms to showcase
              your industry expertise and furnish your audience with valuable
              information. Through these channels, you can demonstrate your
              knowledge and assert yourself as a thought leader in your domain.
            </div>
            <div>
              <strong>Content Distribution</strong>
              <br />
              Creating remarkable content is only half the battle; its strategic
              distribution is equally vital. An online marketing agency worth
              its salt possesses a knack for disseminating content through
              various channels, encompassing social media, email newsletters,
              and guest posts. A broad reach ensures that your content
              reverberates with your intended audience.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            3. Social Media Management
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              A well-defined social media strategy is the cornerstone of your
              online presence. It is the blueprint for connecting with your
              customers, building brand equity, and driving traffic to your
              website.
            </div>
            <div>
              <strong>Engaging With Your Audience</strong>
              <br />
              Engagement on social media isn’t a one-way street. It’s a dynamic
              interchange between your business and your audience. Interactions
              such as likes, comments, and shares facilitate a tangible
              connection. Prompt responses to inquiries and feedback convey that
              your business is attentive and responsive.
            </div>
            <div>
              <strong>Social Media Advertising</strong>
              <br />
              Paid social media advertising is an ace up your sleeve. It enables
              you to extend your reach exponentially by targeting specific
              demographics. Cost-effective and results-driven, social media
              advertising is a powerful way to spotlight your products or
              services and propel traffic to your website.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            4. Pay-Per-Click (PPC) Advertising
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Pay-per-click advertising, commonly referred to as PPC, is a
              results-driven advertising model. In this paradigm, advertisers
              pay a fee each time their ad is clicked. It serves as a rapid
              conduit for diverting traffic to your website and offers
              exceptional measurability.
            </div>
            <div>
              The foundation of successful PPC campaigns is robust keyword
              research. Online marketing agencies conduct meticulous research to
              ascertain the most effective keywords for your campaigns. This
              ensures that your ads are presented to the most relevant audience.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            5. Web Design And Development
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Your website serves as the digital front door to your business. A
              reliable online marketing agency shoulders the responsibility of
              maintaining your website to ensure its continued smooth operation.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            6. Online Reputation Management
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Additionally, they can aid in building a positive brand image by
              highlighting positive customer experiences and accentuating your
              business’s strengths.
            </div>
            <div>
              In the interconnected digital world, maintaining a positive online
              reputation is paramount. Negative feedback can spread like
              wildfire. Online marketing agencies are equipped with strategies
              to deftly address negative reviews and convert them into
              opportunities for positive customer experiences.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            7. Customer Support And Communication
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              In the online world, customer satisfaction hinges on prompt
              responses to inquiries and concerns. Online marketing agencies
              orchestrate efficient communication systems to ensure that your
              customers feel heard and valued. They employ targeted strategies
              to build trust and foster customer loyalty. A loyal customer base
              is the lifeblood of any thriving business.
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
              <span className="text-lg font-normal leading-7 text-center ">
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

export default Blog7;
