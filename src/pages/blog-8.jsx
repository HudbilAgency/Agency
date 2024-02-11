import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Blog8 = () => {
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
        Email Marketing Trends
      </div>

      <div className="mt-12 px-3 pb-14 text-center sm:px-16 xl:px-28 2xl:px-64 text-[#DF2323] text-3xl sm:text-[4rem] font-semibold leading-tight">
        <h1>
          {" "}
          Email Marketing Trends: <br /> What’s New In 2024?{" "}
        </h1>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-8 text-[#FCAB64] w-fit">
        <div>
          <div className="text-sm leading-8 font-medium">Written by</div>
          <div className="text-sm font-semibold">COLTFOX CREATIVE</div>
        </div>
        <div>
          <div className="text-sm leading-8 font-medium">Category</div>
          <div className="text-sm font-semibold">Email Marketing</div>
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
            1. Hyper personalization
          </a>
          <a
            href="#2"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            2. AI - Powered Content
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            3. Visual Storytelling
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            4. The shorter the better
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            5. Predictive Analytics for timing
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            6. Mobile friendly
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            7. AI - Powered Personalized
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            8. Emphasis on Privacy
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            9. Nurturing with drip
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug"
          >
            10. Email Accessibility
          </a>
        </div>
        <img className="w-full sm:w-3/5 h-full" src="./blog8-img.png" alt="" />
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 my-10 sm:my-20 flex flex-col gap-4 sm:gap-6 leading-9 text-base font-normal text-[#012033]">
        <p>
          Has we approach the year 2024, it becomes increasingly important for
          digital marketing services, including your digital marketing agency,
          to prepare for the upcoming trends that will influence the world of
          email marketing.
        </p>
        <p>
          The digital landscape is in a constant state of flux, and staying
          informed about these emerging trends is essential for maintaining a
          competitive edge in the industry.
        </p>
        <p>
          In this blog post, we will delve into the key email marketing trends
          anticipated for 2024, providing valuable insights with the help of
          digital marketing agencies like Coltfox to enhance and optimize your
          email marketing strategies for the year ahead.
        </p>
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            1. Hyper-Personalization: Tailoring Messages For Individuals
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              In 2024, personalization in email marketing will become even more
              precise. Instead of sending generic messages, businesses will use
              data to create emails tailored to each recipient. This means
              understanding customer behaviour and preferences to provide highly
              personalized content. The goal is to make each subscriber feel
              like the email was crafted just for them.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            2. AI-Powered Content Recommendations
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Artificial Intelligence (AI) is becoming increasingly prominent in
              digital advertising, like email marketing. In 2024, AI algorithms
              will analyze how subscribers interact with emails and use this
              data to recommend content, products, or services that align with
              their interests. This level of personalization can significantly
              boost engagement and conversions.
            </div>
            <div>
              <strong>Also read:</strong> The Future Of AI In Digital Marketing:
              Trends And Predictions
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            3. Visual Storytelling With Interactive Emails
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Email content in 2024 will focus more on visual storytelling.
              Interactive emails will include elements like videos, GIFs,
              carousels, and clickable features to create engaging experiences.
              These emails will immerse subscribers in a narrative, making the
              content more captivating and memorable.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            4. The shorter the better
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Sustainability is a growing concern, even in email marketing. In
              2024, subscribers will appreciate brands that adopt sustainable
              practices. This includes reducing the size of email files to
              minimize their environmental impact and sending fewer but more
              relevant emails.
            </div>
            <div>
              Transparency regarding data usage and privacy policies also plays
              a role in this sustainability trend.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            5. Predictive Analytics For Timing
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Timing matters in email marketing, 2024 will see the use of
              predictive analytics tools to determine the best times to send
              emails. These tools will analyze data to identify when each
              segment of your audience is most likely to engage with your
              emails.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            6. Mobile-Friendly Emails
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Mobile devices continue to be the preferred platform for opening
              emails. Therefore, ensuring that emails are mobile-friendly is
              essential in 2024. This means emails should be easy to read, load
              quickly, and provide a seamless experience on various mobile
              devices.
            </div>
            <div>
              Mobile devices continue to be the preferred platform for opening
              emails. Therefore, ensuring that emails are mobile-friendly is
              essential in 2024. This means emails should be easy to read, load
              quickly, and provide a seamless experience on various mobile
              devices.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            7. AI-Powered Personalized Subject Lines
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              The subject line of an email is the first thing recipients see. In
              2024, AI will play a significant role in crafting subject lines
              tailored to each recipient’s preferences. This personalization can
              increase open rates and engagement.
            </div>
            <div>
              The subject line of an email is the first thing recipients see. In
              2024, AI will play a significant role in crafting subject lines
              tailored to each recipient’s preferences. This personalization can
              increase open rates and engagement.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            8. Emphasis On Privacy And Data Security
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              As data privacy regulations become stricter, maintaining trust is
              crucial. Digital marketing services must adhere to regulations
              such as GDPR and CCPA. Being transparent about data practices,
              implementing robust security measures, and obtaining clear consent
              for data usage is essential in 2024.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            9. Nurturing With Drip Campaigns
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Drip campaigns are evolving into more sophisticated tools for
              guiding subscribers through the customer journey. In 2024, these
              campaigns will use automation and personalization to provide
              relevant content at each stage of the journey.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            10. Email Accessibility
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Accessibility is not just a trend; it’s a necessity. In 2024,
              businesses must ensure that their emails are accessible to all,
              including those with disabilities. This includes providing alt
              text for images and using legible fonts to make emails more
              inclusive.
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

export default Blog8;
