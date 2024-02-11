import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Blog2 = () => {
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

      <div className="mt-12 md:mt-20 px-3 pb-14 text-center sm:px-16 xl:px-28 2xl:px-64 text-[#DF2323] text-3xl sm:text-[4rem] font-semibold leading-tight">
        <h1> Social Media Marketing Tips </h1>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-8 text-[#FCAB64] w-fit">
        <div>
          <div className="leading-8 text-sm font-medium">Written by</div>
          <div className="text-sm font-semibold">COLTFOX CREATIVE</div>
        </div>
        <div>
          <div className="leading-8 text-sm font-medium">Category</div>
          <div className="text-sm font-semibold">Social Media Marketing</div>
        </div>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-12 lg:pb-16 w-fit">
        <div>
          <div className="text-base leading-9 font-semibold text-[#012033]">
            Follow us
          </div>
          <div className="flex gap-4 text-sm font-semibold text-[#FCAB64]">
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
            1. Sell your Company’s Values{" "}
          </a>
          <a
            href="#2"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            2. Tell stories
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            3. What works for one platform won’t always work for another
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
            5. Analyze your Engagement
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            6. Smartphone compatible
          </a>
          <a
            href="#4"
            className=" text-[#FCAB64] text-lg font-bold leading-snug"
          >
            7. Two-way communication
          </a>
        </div>
        <img className="w-full sm:w-3/5 h-full" src="./blog2-img1.png" alt="" />
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 my-10 sm:my-20 flex flex-col gap-4 sm:gap-6 leading-9 text-base font-normal text-[#012033]">
        <p>
          Having a marketing goal like increased engagement, more clicks,
          conversions, etc. is one of the most important driving forces behind
          your brand decisions. That's why setting up goals is essential. It's
          also important that your marketing goals align with that of the
          organization. Here are some things that you need to focus on.
        </p>
        <p>
          <li className="ml-4">
            Make sure that the goals are quantitative and measurable.
          </li>
        </p>
        <p>
          <li className="ml-4">
            Make sure you follow a consistent timeline and adhere to a strict
            deadline.
          </li>
        </p>
        <p>
          <li className="ml-4">
            Make sure that your marketing decisions are SMART. They need to be
            specific, measurable, attainable, relevant, and time-based. These
            will help you support your long-term goals.
          </li>
        </p>
        <p>
          Alongside this, you'll also have to set a north star metric. It helps
          focus on a particular goal or acts as a point of reference to ensure
          that your team follows the right path. It also helps show your
          marketing campaign's progress and holds the team and you accountable
          for providing a satisfactory result. Some popular north star metrics
          are--increased conversion rates, lead generation, app downloads, etc.
        </p>
        <p>
          With social media, you can interact, engage, and develop your
          relationship with your audience. It will help you understand your
          audience, their needs, wants, likes, and dislikes. This way, you can
          create products/ services that can fulfill your audiences' needs. Some
          of the ways you can do this are:
        </p>
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            1. Sell your Company’s Values
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Every company has a product to sell, but your company values,
              lifestyle, and story are what make you unique. Studies have shown
              that millennials base many of their buying habits on just this,
              with 83% of this demographic stressing the importance of
              consumer/company value alignment. And they exercise that
              conviction when choosing a brand to purchase products or services
              from.
            </div>
            <div>
              In recent years, people have become more aware of how companies
              are combating issues such as environmental pressures, animal
              cruelty, and ethical labor, while more recently individuals have
              focused highly on shopping locally and supporting small
              businesses. Companies’ stances on these issues all create unique
              selling features that have to do solely with the brand’s values
              rather than their physical products. These snippets that show who
              the brand is behind the product itself can become phenomenal
              selling points that will be wasted should they not be expressed
              through company social media feeds.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            2. Tell stories
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Remember, social media is the hub where people come online to
              connect with what’s going on and it’s more likely that they will
              follow a page if they feel a personal connection to the brand.
              While sales may be your top priority, your social media brand has
              to post engaging content to gain and retain followers.
            </div>
            <div>
              Share insights about your business; how did you come to be, what
              new projects are you working on, do you have any new hires or
              staff anniversaries? Providing behind-the-scenes insights on what
              your business is really about will help give value to your pages
              and develop follower loyalty.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            3. What works for one platform won’t always work for another
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              One of the biggest errors people make on social media is thinking
              that one post will work across all platforms. Instagram, Facebook,
              Google+, LinkedIn and Snapchat are great mediums for sharing your
              message, but it’s important to understand that each one is
              different and unique. From picture and video sizes, style of
              captions and even differing trending hashtags, each platform calls
              for a different way to deliver your message. The sweet spot for
              Twitter is at 100 characters, while on Facebook it’s only 40.
            </div>
            <div>
              Also, it’s vital to know your audience! Understanding your target
              demographic is essential when deciding which platform to use. Not
              sure which is best for your business? Here’s a handy infographic
              which breaks down the stats behind each site.
            </div>
            <div>
              Remember to switch it up and keep things interesting. If you have
              a customer that follows you on Facebook, Instagram and Twitter,
              reading an identical message three times in one day can be boring.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            4. The shorter the better
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              The reality of our digital age is that people don’t give a great
              deal of time towards something they’re reading online. One study
              even concluded that humans are now considered to have shorter
              attention spans than goldfish. Yes, really. When drafting posts
              for your social media accounts be sure that they are short, sweet,
              visual and engaging.
            </div>
            <div>
              The purpose of social media is not to fully explain all of the
              services that your business provides but rather to give snippets
              and tease viewers to follow back to your website. When done
              correctly, social media posts will act as the first touch point
              with consumers, converting them from a latent observer into a
              follower of your brand.
            </div>
            <div>
              In the evolving digital landscape, cultivating relationships with
              clients and the community is paramount. First-party data empowers
              brands to craft impactful marketing, unhindered by tech giant
              algorithms.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            5. Analyze your Engagement
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Social media platforms such as Facebook and Instagram allow you to
              analyze your engagement like a pro. They give you the tools you
              need to see what content is working and which, well…isn’t doing so
              great. By keeping a close eye on your company’s social media
              analytics, you’ll be able to continually improve your social media
              management strategy in ways that increase your reach and
              visibility on the web.
            </div>
            <div>
              It’s actually quite amazing the detail of insight that these apps
              can give you! With just a click you’re able to see the reach,
              impressions, profile views, and interactions generated by an
              individual post as well as gain an overview of your page as a
              whole by seeing which content has been the most successful and
              which demographics have interacted and on what level. The more you
              dig through the analytics the more you will find and the more
              successful your page will become due to your new tailored
              approach.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            6. Smartphone compatible
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Understanding that people often use their smartphones on the go is
              an important consideration when posting to social media. Putting
              effort into a market that only gives you a few seconds before
              moving on is a challenge, but there are ways around it:
            </div>
            <div>
              Never make a post that doesn’t include an image or video. Text
              alone doesn’t always retain the attention of readers scrolling by.
            </div>
            <div>
              Include subtitles on your videos. This allows viewers to engage
              with the content even when they can’t hear the sound. Ensure that
              your website is mobile-friendly so that when readers follow back
              to learn more, they’re able to have full functionality from their
              smartphones.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            7. Two-way communication
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Yes, get social on social media! Even if you’re posting great
              content, it takes engagement, open communication and frequent
              media monitoring to be successful. To create a positive customer
              service experience across your social media platforms, your
              readers should feel as attended to when interacting with your
              social media pages as they would if they were in-store. Take time
              to answer questions, offer resources and be a part of the
              conversation.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Practice Makes Perfect
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              There is no foolproof method for increasing your social media
              following and company prominence as each company is unique and
              will need to enlist unique tactics to reach its unique clientele.
              However, through creative planning, keen attention to detail and
              analytics, and a strong understanding of what and how you want
              your product to appear to consumers, creating a successful social
              media platform is something that can be achieved. It’s unrealistic
              to expect to gain 1,000 followers overnight, that’s not the nature
              of social media, but with time, trial and error, and a dedication
              to what really should be considered a craft, a social media
              platform that is engaging and profitable is in reach!
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
              <img src="./blog2-img2.png" alt="" />
              <div className="text-3xl font-semibold leading-relaxed text-[#012033]">
                How To Minimize Customer Acquisition Cost Using Digital
                Marketing
              </div>
              <Link to="/blog-10">
                <button className="bg-white shadow-none h-fit text-center w-fit px-3 rounded-full py-1 text-[#FCAB64] text-lg ">
                  STRATEGY AND CREATIVE
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-4 md:gap-10 w-full sm:w-1/2 justify-between">
              <img src="./blog2-img3.png" alt="" />
              <div className="text-3xl font-semibold leading-relaxed text-[#012033]">
                3 Ways to Improve Your Email Marketing Strategy
              </div>
              <Link to="/blog-8">
                <button className="bg-white shadow-none h-fit text-center w-fit px-3 rounded-full py-1 text-[#FCAB64] text-lg ">
                  STRATEGY AND CREATIVE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog2;
