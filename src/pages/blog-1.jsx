import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Blog1 = () => {
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
        <h1> First - party Data in marketing - what you need to know? </h1>
      </div>

      <div className="flex px-8 sm:px-16 2xl:px-64 gap-10 sm:gap-20 justify-between pb-16 text-[#FCAB64] w-fit">
        <div>
          <div className="leading-8 text-sm font-medium">Written by</div>
          <div className="text-sm font-semibold">Mo</div>
        </div>
        <div>
          <div className="leading-8 text-sm font-medium">Category</div>
          <div className="text-sm font-semibold">MARKETING AND DATA</div>
        </div>
      </div>

      <div className="gap-10 lg:gap-20 flex px-8 sm:px-16 2xl:px-64 flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col">
          <div className="text-2xl sm:text-[2rem] mb-10 leading-normal font-normal text-[#DF2323]">
            {" "}
            TABLE OF CONTENTS.
          </div>
          <a
            href="#1"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            1. What is First-Party Data ?{" "}
          </a>
          <a
            href="#2"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            2. Why First-Party Data Matters?
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            3. Case Studies:
          </a>
          <a
            href="#4"
            className=" text-[#FCAB64] text-lg font-bold leading-snug"
          >
            4. Conclusion
          </a>
        </div>
        <img className="w-full sm:w-3/5 h-full" src="./blog-img1.png" alt="" />
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 my-10 sm:my-20 flex flex-col gap-4 sm:gap-6 leading-9 text-base  font-normal text-[#012033]">
        <p>
          With the impending end of third-party cookies, now is the optimal time
          to shift focus towards collecting first-party data.
        </p>
        <p>
          Third-party cookies are data snippets saved on a user's device during
          website visits. Google's initiative to eliminate third-party cookies
          aims to uphold user privacy and grant users more authority over their
          data.
        </p>
        <p>
          In light of this, first-party data will emerge as a vital asset for
          businesses. This data encompasses all customer interactions, actions,
          and feedback, originating from sources like website visits, purchase
          histories, online surveys, and other platforms.
        </p>
        <p>
          Leveraging first-party data enhances targeted lead-generation efforts,
          especially for B2B and B2C entities, allowing for customized
          experiences and fostering closer customer relationships.
        </p>
        <p>
          With the impending end of third-party cookies, now is the optimal time
          to shift focus towards collecting first-party data.
        </p>
        <p>
          Third-party cookies are data snippets saved on a user's device during
          website visits. Google's initiative to eliminate third-party cookies
          aims to uphold user privacy and grant users more authority over their
          data.
        </p>
        <p>
          In light of this, first-party data will emerge as a vital asset for
          businesses. This data encompasses all customer interactions, actions,
          and feedback, originating from sources like website visits, purchase
          histories, online surveys, and other platforms.
        </p>
        <p>
          Leveraging first-party data enhances targeted lead-generation efforts,
          especially for B2B and B2C entities, allowing for customized
          experiences and fostering closer customer relationships With the
          impending end of third-party cookies, now is the optimal time to shift
          focus towards collecting first-party data.
        </p>
        <p>
          Third-party cookies are data snippets saved on a user's device during
          website visits. Google's initiative to eliminate third-party cookies
          aims to uphold user privacy and grant users more authority over their
          data.
        </p>
        <p>
          In light of this, first-party data will emerge as a vital asset for
          businesses. This data encompasses all customer interactions, actions,
          and feedback, originating from sources like website visits, purchase
          histories, online surveys, and other platforms.
        </p>
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            What is First-Party Data?
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              First-party data pertains to the information your company directly
              collects from its audience, which includes customers, social media
              enthusiasts, and website visitors. This data is procured directly
              through engagement on your brand's platforms.
            </div>
            <div>
              This data can comprise demographic details such as age, gender,
              location, and interests, along with behavioral insights like
              purchase activity and page visits. The dataset extends to CRM
              data, social media interactions, survey results, and online chat
              records.
            </div>
            <div>
              Prioritizing privacy, the digital landscape is veering towards a
              cookieless future, intensifying the need for businesses to accrue
              first-party data. As advertising channels evolve in alignment with
              privacy concerns, businesses must adapt their marketing
              strategies. However, first-party data emerges as a potent tool to
              counteract the challenges of diminishing cookies and ad targeting
              capacities.
            </div>
          </div>
        </div>
      </div>

      <img
        className="px-4 md:px-8 xl:px-20 2xl:px-56 w-full"
        src="./img-video.png"
        alt=""
      />

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 mt-8 sm:mt-20">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Why First-Party Data Matters?
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              <li className="list-none pb-2 sm:pb-4 font-semibold text-lg">
                1. Owning Marketing Contacts
              </li>
              Owning contacts, those who willingly disclose personal data,
              facilitates deeper customer relationships and amplifies
              communication effectiveness.
            </div>
            <div>
              <li className="list-none pb-2 sm:pb-4 font-semibold text-lg ">
                2. Crafting Purposeful Marketing
              </li>
              Reliable first-party data with effective data analytics can help
              paint a vivid portrait of your audience's inclinations,
              facilitating targeted, resonant marketing endeavors.
            </div>
            <div>
              <li className="list-none pb-2 sm:pb-4 font-semibold text-lg">
                3. Leveraging First-Party Data in Lead Generation
              </li>
              Harnessing first-party data in lead generation campaigns across
              platforms like Google, YouTube, Facebook, and Instagram can boost
              effectiveness substantially, as much as 50% campaign improvement.
            </div>
            <div className="ml-4">
              For instance, on Google's ad platforms:
              <li className="py-2 sm:py-4">
                Audience Segmentation: Craft precise audience segments based on
                first-party data for more tailored campaigns.
              </li>
              <li className="pb-2 sm:pb-4">
                Remarketing Lists: Use first-party data to design remarketing
                lists, targeting previous website visitors.
              </li>
              <li className="pb-2 sm:pb-4">
                Customer Match: Utilize Google's feature to target or exclude
                customers based on uploaded email lists.
              </li>
              <li className="pb-2 sm:pb-4">
                Lookalike Audiences: Identify potential leads resembling
                existing customers.
              </li>
              <li>
                Ad Personalization: Customize ads based on first-party data
                insights.
              </li>
            </div>
            <div>
              <strong className="font-medium">
                Similarly, on Facebook and Instagram, first-party data can be
                leveraged:
              </strong>
              <li className="ml-4 py-2 sm:py-4">
                Custom Audiences: Target or re-engage past customers using
                uploaded customer data.
              </li>
              <li className="ml-4 pb-2 sm:pb-4">
                Lookalike Audiences: Reach potential leads resembling your
                current audience.
              </li>
              <li className="ml-4 pb-2 sm:pb-4">
                Ad Personalization: Craft resonant ads based on audience
                preferences.
              </li>
              <li className="ml-4 pb-2 sm:pb-4">
                Retargeting Campaigns: Re-engage users based on their buying
                journey stage.
              </li>
              <li className="ml-4">
                Dynamic Ads: Display relevant products to interested users.
              </li>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Case Studies: Agicap
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              In an increasingly competitive market, Agicap struggled to break
              through the noise. The company knew its cash management software
              could help small businesses overcome their cash flow challenges,
              but the space was swamped with online ads from competitors trying
              to reach the same audience. Rather than continue to cast a wide
              net, the brand decided to nurture high-intent leads in its sales
              pipeline.
            </div>
            <div>
              By utilizing first-party data Agicap sent conversion signals based
              on its existing prospects’ life cycle stages to Google. The
              company was then able to use Google’s Customer Match feature to
              reengage its qualified leads with relevant ads and bid higher
              toward this core audience.
            </div>
            <div>
              These changes resulted in a 10% increase in conversions and a 15%
              increase in revenue growth — all while containing costs.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Conclusion
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              First-party data equips businesses with a profound understanding
              of their clientele. Utilizing this data, companies can craft
              detailed customer personas, ensuring digital lead-generation
              strategies are both precise and potent.
            </div>
            <div>
              By integrating personalized marketing, businesses can forge robust
              customer relationships and heighten conversion probabilities.
            </div>
            <div>
              In the evolving digital landscape, cultivating relationships with
              clients and the community is paramount. First-party data empowers
              brands to craft impactful marketing, unhindered by tech giant
              algorithms.
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
              <img src="./rel-post1.png" alt="" />
              <div className="text-3xl font-semibold leading-relaxed text-[#012033]">
                Everything about Technical SEO in 2024
              </div>
              <Link to="/blog-3">
                <button className="bg-white shadow-none text-center w-fit px-3 rounded-full py-1 text-[#FCAB64] text-lg ">
                  TECHNICAL SEO
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-4 md:gap-10 w-full sm:w-1/2 justify-between">
              <img src="./rel-post2.png" alt="" />
              <div className="text-3xl font-semibold leading-relaxed text-[#012033]">
                How to use A/B Testing to increase conversions
              </div>
              <Link to="/blog-4">
                <button className="bg-white shadow-none text-center w-fit px-3 rounded-full py-1 text-[#FCAB64] text-lg ">
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

export default Blog1;
