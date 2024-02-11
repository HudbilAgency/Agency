import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Blog3 = () => {
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
          Everything about <br /> Technical SEO in 2024{" "}
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
            1. Choose Your Domain Format{" "}
          </a>
          <a
            href="#2"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            2. Optimize Your URL Structure
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            3. Navigation and Website Structure
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            4. Structured Data Markup
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            5. Check Your Canonical URLs
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            6. Find And Fix Broken Links
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            7. Optimize Your 404 Page
          </a>
          <a
            href="#4"
            className=" text-[#FCAB64] text-lg font-bold leading-snug"
          >
            8. XML Sitemap Optimization
          </a>
        </div>
        <img className="w-full sm:w-3/5 h-full" src="./blog3-img1.png" alt="" />
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 my-10 sm:my-20 flex flex-col gap-4 sm:gap-6 leading-9 text-base font-normal text-[#012033]">
        <p>
          Technical SEO refers to the process of optimizing your website to help
          search engines access, crawl, understand, and index your pages without
          any problems. The main goal of technical SEO is to optimize the
          infrastructure of a website to improve its rankings in the search
          results.
        </p>
        <p>
          It is called “technical” because it has nothing to do with the
          “actual” content of the website or website promotion. Technical SEO is
          a very important step in SEO. Any technical SEO issues will negatively
          impact your website’s SEO performance in Google and other search
          engines.
          <br />
          If search engine crawlers cannot access your pages, your content will
          not be in their index and will not appear for any searchers.In
          addition, some technical SEO factors like mobile-friendliness, website
          load speed, and HTTPS and crucial Google ranking factors.
          <br />
          The first step taken by search engines, long before answering a search
          query, is the crawling process. During this process, search engines
          are looking for publicly available web pages to add to their index.
          <br />
          During the indexing phase, information identified by the bots is
          organized, sorted, and stored in their database (index) so that they
          are later accessed by the ranking algorithms to provide precise
          answers to the queries entered by users.
          <br />
          Some Technical SEO examples associated with these two phases include
          optimizing your robots.txt file and the noindex tag.
        </p>
        <p>
          The first step taken by search engines, long before answering a search
          query, is the crawling process. During this process, search engines
          are looking for publicly available web pages to add to their index.{" "}
          <br /> During the indexing phase, information identified by the bots
          is organized, sorted, and stored in their database (index) so that
          they are later accessed by the ranking algorithms to provide precise
          answers to the queries entered by users..
        </p>
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            1. Choose Your Domain Format
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 gap-0 flex flex-col">
            <div>
              One of the first technical SEO settings you need to configure is
              how you want your domain to be accessible by search engines and
              users. By default, a website is accessible with www and without
              www in front of a domain. For example, if your domain is
              example.com, your website can be accessed by: <br />
              <li className="ml-4">
                <a href="">https://www.example.com</a>
              </li>
              <li className="ml-4">
                <a href="">https://example.com</a>
              </li>
              While this is okay for users, it is confusing for search engines
              because they consider these as two different websites. This means
              you may encounter indexing issues, duplicate content problems, and
              loss of page rank.
              <br />
              To solve this problem, you must decide which format you want to
              use and use it consistently throughout the lifetime of your
              website.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            2. Optimize Your URL Structure
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Best SEO practices dictate the following about URLs:
              <br />
              <li className="ml-4">Use lowercase characters</li>
              <li className="ml-4">Use – to separate words in the URL</li>
              <li className="ml-4">Make them short the descriptive</li>
              <li className="ml-4">
                Avoid using unnecessary characters or words
              </li>
              <li className="ml-4">
                Use your target keywords in the URL without keyword stuffing
              </li>
              In general, once you define the format of your permanent link
              structure, the only thing you will have to do is to optimize your
              URLs when publishing new content.
              <br />
              If you are using WordPress as your CMS, you will notice that when
              creating a new post, it takes your post title and creates the URL.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            3. Navigation and Website Structure
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              The website structure is a very important SEO factor for many
              reasons. Users are more likely to stay on a website longer and
              find out what they want faster, and search engines can understand
              and index a website more easily.
              <br />
              Google does take into account the overall site structure when
              evaluating a particular page, and this is something that shouldn’t
              be overlooked.
            </div>
            <div>
              Best practices indicate that you should use a hierarchical site
              structure (see example below). A website’s crawling starts from
              the homepage and crawlers follow links from the homepage to
              discover other pages.
            </div>
            <div>
              As a rule of thumb, make sure that each page on your website is
              accessible in less than 3 clicks from the homepage.
              <br />
              If have enough pages around a specific topic area, create
              optimized category pages to group these related pages.
              <br />
              Add Breadcrumb Menus
              <br />
              Another element that helps your technical SEO is breadcrumb lists
              (aka breadcrumb menus).
              <br />A breadcrumb menu is a set of links at the top or bottom of
              a page that allows users to navigate to a previous page (usually
              the category page) or the home page of a website.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            4. Structured Data Markup
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Structured data has gained more and more importance in the last
              few years because Google heavily uses it in Search Results.
              <br />
              What is structured data?
              <br />
              In simple terms, structured data is code you can add to your web
              pages that is visible to search engine crawlers only and helps
              them understand the context of your content. It’s a way to
              describe your data to search engines in a language they can
              understand.
            </div>
            <div>
              Social media platforms such as Facebook and Instagram allow you to
              analyze your engagement like a pro. They give you the tools you
              need to see what content is working and which, well…isn’t doing so
              great. By keeping a close eye on your company’s social media
              analytics, you’ll be able to continually improve your social media
              management strategy in ways that increase your reach and
              visibility on the web.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            5. Check Your Canonical URLs
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              It’s a simple way to tell Google which version of a page to take
              into account when indexing your website. The concept is similar to
              the domain format where a single page is accessible through
              various URLs.
              <br />
              You can use the rel=”canonical” when you have pages with similar
              content for paging purposes and to avoid duplicate content issues.
              <br />
              As a general rule, you should specify a canonical URL for all your
              website pages.
            </div>
            <div>
              The simplest way to check if your website provides a canonical URL
              is to visit any of your pages, right-click anywhere on the page,
              and select VIEW SOURCE. Search for rel=canonical and investigate
              the value.
              <br />
              If you cannot find any reference to canonical then you can either
              use a plugin to add this automatically (if you are on WordPress,
              you can use Yoast SEO) or hire a developer to make the necessary
              changes to your code.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            6. Find And Fix Broken Links
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
            7. Optimize Your 404 Page
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              A 404 page is shown to the users when the URL they visited does
              not exist on your website. Maybe the page was deleted, the URL was
              changed, or they mistypes the URL in their browsers.
              <br />
              Most modern CMS have optimized 404 pages by default, if not, you
              can easily make your 404 page SEO friendlier by using a plugin or
              editing your theme templates.
              <br />
              An optimized 404 page should:
              <li className="ml-4">
                Have the same structure and navigation menus as your website
              </li>
              <li className="ml-4">
                Tell visitors in a friendly language that the page they are
                looking for is no longer available
              </li>
              <li className="ml-4">
                Give them alternatives (suggest other related pages)
              </li>
              <li className="ml-4">
                Make it easy to go back to the previous page, your homepage, or
                other important pages
              </li>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            8. XML Sitemap Optimization
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              One of the most important elements of technical SEO is XML sitemap
              optimization.
              <br />
              An XML Sitemap is an XML file listing all pages/posts on your
              website that you want the search engines to know about. Besides
              their title, it also includes the last updated date.
              <br />
              Search engines can use the XML sitemap as a guide when crawling a
              website. Here is an example of what an XML sitemap looks like:
            </div>
            <div>
              Don’t worry if this looks too technical. The majority of website
              CMS have the sitemap functionality built-in and all you have to do
              is select which pages you want to include in your sitemap.
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

export default Blog3;
