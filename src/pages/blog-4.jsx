import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Blog4 = () => {
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
        <h1>
          {" "}
          How to Leverage A/B Testing to <br /> Increase Your Conversion Rates{" "}
        </h1>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-8 text-[#FCAB64] w-fit">
        <div>
          <div className="text-sm leading-8 font-medium">Written by</div>
          <div className="text-sm font-semibold">COLTFOX CREATIVE</div>
        </div>
        <div>
          <div className="text-sm leading-8 font-medium">Category</div>
          <div className="text-sm font-semibold">Performance Testing</div>
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

      <div className="gap-10 lg:gap-20 flex px-8 sm:px-16 2xl:px-64  flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col">
          <div className="text-3xl sm:text-[2rem] mb-10 leading-normal font-normal text-[#DF2323]">
            {" "}
            TABLE OF CONTENTS.
          </div>
          <a
            href="#1"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            1. What Is A/B Testing?{" "}
          </a>
          <a
            href="#2"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            2. How A/B Testing Works
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            3. Getting Started with A/B Testing
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            4. What Metrics Can You Test?
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            5. How Do You Set Up Testing Groups?
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            6. Running Your A/B Test
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug"
          >
            7. What to Do with A/B Test Results
          </a>
        </div>
        <img className="w-full sm:w-3/5 h-full" src="./blog4-img1.png" alt="" />
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 my-10 sm:my-20 flex flex-col gap-4 sm:gap-6 leading-9 text-base font-normal text-[#012033]">
        <p>
          Whether your conversion rates are low, average, or high, there’s
          always room to optimize better. But without the right methodology, you
          risk making changes that push your conversion rate in the wrong
          direction. If you don’t make changes in a controlled way, you won’t
          even know which change affected your conversion rate.
        </p>
        <p>
          Wouldn’t it be great if there was an agile testing method for
          optimizing conversion rates? Thankfully, there is a trusted way of
          identifying these positive changes: A/B testing.
        </p>
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            1. What is A/B Testing ?
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              A/B testing: just the name is intimidating, isn’t it? It sounds
              like something out of robotic process automation, rather than a
              marketing technique.
            </div>
            <div>
              And yes – A/B testing does involve some technical and statistical
              knowledge. But you don’t need to be a math genius to run your own
              A/B tests. It’s far simpler than it may first appear.
            </div>
            <div>
              In essence, an A/B test is the marketing equivalent of a
              controlled experiment in a science lab.
            </div>
            <div>
              Let’s say you have a landing page that you want to optimize. You
              know how that page is performing, but you don’t know how it could
              be improved. A/B testing will help you pinpoint the exact changes
              that boost your conversion rate on that page.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            2. How A/B Testing works?
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              As the name suggests, A/B testing requires (at least) two
              variations: an “A” and a “B”. The important thing is that the A
              and B are variations of one variable. The A variation could have a
              green CTA button, for example, while the B variation could make
              the same button yellow. In this way, you’re testing like-for-like
              – and you’ll find out which button color is the best.
            </div>
            <div>
              And if you’re unsure of the answer to “What is QA testing?”, this
              is a good time to find out. Otherwise, you risk subjecting your
              users to a lot of sub-standard features that might harm your
              business. Be sure to prioritize quality assurance (QA) testing
              when designing these variations.
            </div>
            <div>
              It’s important to stick to one change per variation. If you start
              making multiple changes – such as the button color, and the font
              size, and the background image – then you won’t be able to say
              which change affected your conversion rate. If you want to test
              multiple changes, then you have to create a new A/B test for each
              change.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            3. Getting started with A/B Testing?
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Just like in a scientific experiment, the first step in A/B
              testing is creating a hypothesis.
            </div>
            <div>
              The first question should be: why do you want to optimize this
              asset? And why now? The answer might be that conversions have
              dropped off, traffic patterns have changed, or your demographics
              have shifted. You can get all this information from your analytics
              dashboard.
            </div>
            <div>
              At this point, let’s note that A/B testing is just as valuable for
              a tech company selling BCP software as it is for a restaurant
              taking bookings online. The goals and principles are exactly the
              same, no matter your industry.
            </div>
            <div>
              Once you’ve decided on that goal, get a team together and ask
              their opinion. You can be sure they all have ideas about why your
              conversions, traffic, or demographics have changed. This will
              inform the moves you need to make in response to that change.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            4. What Metrics can you Test?
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              While conversion rate is the most obvious metric to test, there
              are related metrics you can examine as well. If you’re a small
              online business, you might want to run A/B tests to optimize
              shopping cart abandonment, for instance. Or if content marketing
              is a big part of your funnel, you could run A/B tests to optimize
              time spent on your blog pages.
            </div>
            <div>
              You should also decide what is statistically significant for your
              business. If your optimization results could equally have occurred
              by chance, then you need to repeat the test with a larger sample
              size, increase the difference between the A and B variations, or
              produce more consistent results.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            5. How Do you set up testing groups?
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              The idea of A/B testing is that your users aren’t aware that
              they’re taking part in an experiment. This is because you want to
              see how users react to your changes in the wild, where your
              eCommerce conversion rates will really matter.
            </div>
            <div>
              There are analytics tools out there that will automatically direct
              the same number of users to your A variation and your B variation.
              By randomizing who sees which page, and keeping the sample sizes
              the same, you ensure a fair test and objective results. You can
              also do this for emails with a random 50/50 split of your mailing
              list.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            6. Running your A/B Test?
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              An A/B test could take a few hours or a few weeks, depending on
              your user base and the statistical significance you want to
              achieve. If you have a large mailing list, then you can send A/B
              emails and get results instantly. This means a fast improvement to
              your email design.
            </div>
            <div>
              However, if you want to A/B test a web page with low traffic,
              you’ll have to wait for a significant number of visitors to pass
              through your analysis.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            7. What to do with A/B Testing Results?
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              If your test has yielded statistically significant results, that’s
              great. But A/B testing isn’t a purely academic exercise: you want
              to make impactful changes after you’ve received all of the data.
            </div>
            <div>
              Sometimes you have to weigh the benefit of a recommended change
              against the cost of implementing it. If the change is as simple as
              sending a different email headline, then that’s a clear win. If
              the change involves re-developing hundreds of web pages, however,
              then you need to show that the benefit outweighs the cost.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-black w-fit sm:w-1/2">
            Conclusion
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Scientists say that there’s no such thing as a failed experiment
              because every experiment tells you something. In some cases, it
              may tell you that there is no significant difference between your
              A and B variations. If that’s true, you don’t need to change your
              shopping cart software or whatever else you were testing.
            </div>
            <div>
              On the other hand, you might want to alter the experiment.
              Creating a stronger difference between your variations and running
              the experiment again may provide a more significant result.
              Alternatively, you can keep testing different variations of the
              same asset until you find the key element for your metric.
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

export default Blog4;
