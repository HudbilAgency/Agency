import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Blog6 = () => {
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

      <div className="mt-8 md:mt-12 px-3 text-center sm:px-16 xl:px-28 2xl:px-64 text-[#012033] text-lg sm:text-xl font-semibold leading-tight">
        Social Media Trends
      </div>

      <div className="mt-12 px-3 pb-14 text-center sm:px-16 xl:px-28 2xl:px-64 text-[#DF2323] text-3xl sm:text-[4rem] font-semibold leading-tight">
        <h1>
          {" "}
          10 Social Media Trends To <br /> Watch For In 2024{" "}
        </h1>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-8 text-[#FCAB64] w-fit">
        <div>
          <div className="text-sm leading-8 font-medium">Written by</div>
          <div className="text-sm font-semibold">COLTFOX CREATIVE</div>
        </div>
        <div>
          <div className="text-sm leading-8 font-medium">Category</div>
          <div className="text-sm font-semibold">Social Media Marketing</div>
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
            1. The Rise of video content{" "}
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
        <img className="w-full sm:w-3/5 h-full" src="./blog6-img.png" alt="" />
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 my-10 sm:my-20 flex flex-col gap-4 sm:gap-6 leading-9 text-base font-normal text-[#012033]">
        <p>
          In the fast-paced digital world we live in, digital marketing agencies
          must keep up with the latest trends. As we approach 2024, knowing
          what’s happening in social media is a big deal as it will change how
          businesses connect with their customers.
        </p>
        <p>
          In this blog, we’ll dive into ten important social media trends for
          2024. These trends will help you stay on top of things, communicate
          with your audience effectively, and do great in the world of digital
          marketing. So, get ready to learn about the exciting changes coming
          your way on social media!
        </p>
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            1. The Rise Of Video Content
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Video content has been a dominant force in social media for some
              time, and it’s only set to grow. In 2024, we can expect a surge in
              short-form video content on platforms like TikTok and Instagram
              Reels.
            </div>
            <div>
              Brands will continue to leverage the power of video to engage
              their audiences and tell compelling stories. As attention spans
              shorten, the appeal of bite-sized video content is undeniable,
              making it an essential tool for capturing and retaining viewer
              interest.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            2. Virtual And Augmented Reality Integration
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Virtual reality (VR) and augmented reality (AR) are changing the
              game for user experiences. These technologies are becoming more
              accessible, and we anticipate a surge in AR filters, interactive
              ads, and VR experiences that will blur the lines between the
              physical and digital worlds.
            </div>
            <div>
              With the rise of AR and VR, businesses will have exciting
              opportunities to create immersive and interactive content,
              enhancing user engagement and leaving a lasting impact on their
              audience.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            3. Niche And Micro-Influencers
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Influencer marketing is evolving. Rather than relying solely on
              mega-influencers, brands are turning to niche and
              micro-influencers who have a more dedicated and engaged following.
            </div>
            <div>
              This trend allows for more authentic and relatable brand
              endorsements. By partnering with micro-influencers, businesses can
              tap into niche communities, ensuring that their message reaches
              the right people, with a higher likelihood of genuine interest and
              engagement.
            </div>
            <div>
              <strong>Also read:</strong> Leveraging Social Media Influencers To
              Drive Business Success
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            4. Social Commerce Continues To Grow
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              The convenience of shopping directly through social media
              platforms will become even more prominent in 2024. Social commerce
              features will expand across platforms like Facebook, Instagram,
              and Pinterest, allowing users to discover and purchase products
              seamlessly.
            </div>
            <div>
              This integration of e-commerce and social media not only
              simplifies the shopping process but also opens up new avenues for
              businesses to connect with their customers, creating a more
              holistic shopping experience
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            5. The Importance Of User-Generated Content
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              User-generated content (UGC) is a powerful way to build trust and
              engagement. Brands will increasingly encourage their customers to
              create content which not only humanizes the brand but also
              provides authentic endorsements.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            6. Privacy And Data Protection
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              In light of increased concern about data privacy, social media
              platforms will continue to enhance their privacy features.
              Marketers will need to adapt their strategies to ensure compliance
              and transparency while respecting user data.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            7. AI-Powered Chatbots For Customer Service
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Chatbots are no longer a novelty; they’re becoming a standard for
              providing instant customer support. AI-powered chatbots will
              become smarter and more intuitive in 2024, improving user
              experiences and reducing response times.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            8. The Growth Of Ephemeral Content
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Ephemeral content, such as Stories on Instagram and Snapchat, will
              continue to rise in popularity. It offers a unique way to engage
              your audience with short-lived yet captivating content.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            9. Community Building
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Building communities around your brand is a trend that will gain
              even more momentum. Engaging and nurturing a dedicated online
              community can foster loyalty and advocacy, resulting in long-term
              success.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            10. Sustainability And Social Responsibility
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Consumers are becoming more environmentally conscious and socially
              responsible. Brands that align with sustainable and ethical
              practices will have an edge on social media. Demonstrating your
              commitment to these values can attract a more conscientious
              audience.
            </div>
            <div>
              In the fast-paced world of social media, adapting to these trends
              can be a challenging but rewarding endeavour. A digital marketing
              agency must be proactive in staying ahead of these trends to
              provide the best service to its clients and remain competitive in
              the industry.
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

export default Blog6;
