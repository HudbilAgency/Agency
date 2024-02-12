import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

const Page1 = () => {

  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: "q-1",
      question: "What are the Digital Marketing Trends for 2024 ?",
      answer: [
        "The reality of modern digital marketing is quite simple - to target a particular set of audience and being conversational as well as personalized. Not long ago, Data-driven and Programmatic Marketing using Artificial Intelligence were considered as aspiring and bold concepts that bordered on the ridiculous.",
        "But currently, these are the most preferred digital marketing techniques for 2023. Along with these, other methods such as Social Media Marketing, Content Marketing, Search Engine Marketing, Micro-moments Marketing, Voice and Visual Search Engine Optimization, Chatbots, Omni-channel Marketing, Personalized Marketing, Influencer Marketing and Video Marketing still continue to be among the top priorities for various online business owners in the year 2024.",
      ],
    },
    {
      id: "q-2",
      question: "What is an example of digital marketing?",
      answer: [
        "The concept of digital marketing is quite simple. It aims at promoting brands and businesses through various digital technologies that include the internet, MMS, SMS, etc. All marketing strategies include setting certain objectives that are based on the survey of the target audience and the prevailing market information and then selecting a preferable marketing channel and/or platform.",
        "As an example, imagine a brand that wants to promote one of its products online. This can be done through Social Media Marketing on Social Media Platforms such as Facebook, Instagram, or Twitter. The process would include launching a marketing campaign that centers on the product and brand awareness.",
      ],
    },
    {
      id: "q-3",
      question: "What is the role of digital marketing in a company?",
      answer: [
        "Currently, Digital marketing is the most favored marketing technique because we live in a technologically savvy world and almost every form of business is online-based. Creating a website and company profiles on social media platforms is not enough. Staying competitive in such a world requires a solid online presence and thus -",
        "Digital marketing. It helps companies in increasing their online presence, it performs market research that is based on the target audience, and it integrates and modifies the company's online profile accordingly. In short, digital marketing helps businesses to garner new sales, leads and above all online traffic.",
      ],
    },
    {
      id: "q-4",
      question: "Is Digital Marketing the future?",
      answer: [
        "Yes, Digital marketing is definitely the future of the marketing world. Currently, about 99% of the population on this planet is dependent on the internet, be it official work, domestic chores, or day to day activities. And digital marketing is completely based on the internet. Moreover, from viral marketing campaigns to Big Data, it has continuously evolved and adapted to meet the marketing requirements of all online businesses and brands. Nowadays, owing to established digital infrastructure and increased connectivity with lightning-fast internet speed, Digital marketing is evolving faster.",
        "From traditional techniques such as Search Engine Optimization and Marketing, it is en route to touching the zenith in the arena of Artificial Intelligence. Programmatic Marketing is now a reality where with the help of AI online advertisements are being automated.",
      ],
    },
    {
      id: "q-5",
      question: "What companies need digital marketing?",
      answer: [
        "Most companies out there need some form of marketing to promote their products and services and are required to invest in digital marketing for boosted sales. A technically optimized and user-friendly website, attractive profiles on various platforms, creative and compelling content on products can help bring a lot of customers.",
        "But, some companies need more marketing as compared to others like electronics-based companies, food-based companies, law firms, entertainment-based businesses, automobile companies and dealerships, companies belonging to the healthcare industry, etc. Some of our clients include Flipkart, Societe Generale, Decathlon, Apollo Hospitals, Quess, Jain Heights, Hashedin, Skylark, New Horizon, LGCL, Chargebee, Bhive, etc.",
      ],
    },
    {
      id: "q-6",
      question: "What are some critical roles in a digital marketing company?",
      answer: [
        "In the world of internet marketing, digital marketing services have a huge role to play. The best digital marketing companies understand the working of 360° digital spectrum. Always work with digital marketing companies who not only have technologists in their team but also subject matter experts. The critical roles of a digital marketing company are",
        "1 The ability to create a digital roadmap and marketing strategies for brand building",
        "2 The ability to create stunning digital assets for both B2C and B2B digital marketing campaigns",
        "3 The ability to create an executable action plan and following up with google analytics or bing analytics for the digital marketing campaigns done.",
        "If a digital marketing agency is an expert in above aspects for your domain, then consider it as a best digital marketing agency.",
      ],
    },
    {
      id: "q-7",
      question: "Why choose digital marketing agencies in Bangalore?",
      answer: [
        "Bangalore is known as the Silicon Valley of India. Being a city of multi-ethnicity and home to numerous consumer-facing brands, the exposure of marketers from digital marketing agencies in bangalore towards consumer and brand behaviour understanding is high. With such an exposure, Digital marketing companies in bangalore are bound to have more knowledge about customer behaviours, brand competition etc.",
      ],
    },
    {
      id: "q-8",
      question:
        "How to choose the right digital marketing company in Bangalore?",
      answer: [
        "Digital marketing companies in bangalore are many. However critical factors that a brand manager needs to consider are ;",
        "1. Size of one’s business: One must choose the right sized agency among the multiple Digital marketing companies in bangalore as it will help them establish an equal attention. Too small or too big media agencies will not be the right fit.",
        "2. Reputation: Track record of digital marketing agencies in Bangalore is one of the very critical factors. Keeping the advertisement aside, one can discuss and request for case studies, success stories etc.",
        "3. Understanding Capacity: Meet the digital marketing companies in Bangalore face to face to get an understanding of team size and interact with digital marketing consultants to get a better idea.",
      ],
    },
    {
      id: "q-9",
      question: "How a digital marketing company can enhance your business?",
      answer: [
        "Our digital marketing agencies have a segmented approach for different kind of projects. Our services include - creative design services, digital marketing services, social media marketing services (i.e Facebook, Twitter, LinkedIn, Pinterest, Instagram marketing), pay per click marketing services, unique content creation and marketing, website development services and search engine optimization services. Few of the best digital marketing companies in bangalore / product design firms also offer video production services and also explainer video services.",
        "As a standard industry practice, any good digital marketing agencies in India will strategize your business growth based on these aspects and promote your business on digital and social media platforms. As a result, one's business can achieve accelerated growth through digital marketing by spending less when compared to other traditional forms of advertising.",
      ],
    },
    {
      id: "q-10",
      question:
        "What are the standard processes of a good SEO Company and benefits for your business?",
      answer: [
        "As the best digital marketing consultant, our approach to boost organic traffic by increasing business website visibility on Bing, Yahoo & Google search engine result page through search engine optimization techniques. A good SEO consultant follows white hat seo method that is widely accepted by the search engines algorithms.",
        "A good SEO company also must abide by the rules and search engine algorithm as established by Google, Bing & Yahoo. One must never work with SEO companies in Bangalore who practice wrong, black hat seo methods to achieve faster results as it may lead to search engine penalty of your website. SEO services are key to your Digital Strategy because organic seo traffic will be a dominant contributor to your website's traffic mix.",
      ],
    },
    {
      id: "q-11",
      question:
        "What are the usual packages offered by a good digital marketing company?",
      answer: [
        "Organic Traffic is free. Paid SEO services are not only costly but their time frame ends as soon as you stop paying. It brings you local and targeted traffic along with promising leads.",
      ],
    },
    {
      id: "q-12",
      question:
        "What is the difference between white hat and black hat SEO techniques",
      answer: [
        "Since digital marketing companies have a lot to offer, first sizing your scope is imperative. As a premium digital marketing service providers in bangalore, at BrandStory our approach is as follows;",
        "1. We brainstorm with your team and understand your business and targets",
        "2. Be very truthful and upfront of what can be achieved via digital marketing",
        "3. Once the scope and targets are agreed, the team is formed and assigned key performance areas and activities",
        "4. A regular and transparent approach is taken to keep the business owners informed about progress and results in digital marketing aspect.",
        "5. For seo services in bangalore, our approach may slightly vary. Get in touch for more details at info@coltfox.com",
      ],
    },
    {
      id: "q-13",
      question: "What is Performance Marketing?",
      answer: [
        'Performance marketing is a type of internet marketing that ties together direct customer response and revenue generation. It is often considered the most effective form of online advertising because it allows marketers to directly track consumer behaviour from click-throughs, site visits, ad conversions, etc., and provides an instant "customer response" loop so that paid ads can be turned off as soon as costs outweigh income.',
        "Direct response marketing, also known as performance marketing or actionable advertising, focuses on business results like sales, rather than brand awareness. Paid search ads are an example of direct response marketing. When consumers click on a paid search ad, the advertiser is charged only when the consumer acts on that ad (e.g., clicks through to the advertiser's website, makes a purchase, etc.). The advantage of performance marketing is that advertisers can see exactly how many people clicked on their ads or whether they made a sale. This doesn't necessarily mean revenue is generated for each click; it means that clicks can be qualified or disqualified to reduce the number of people who will end up buying their product, based on how many viewed it. The goal is to get more money from each marketing dollar spent and get a detailed understanding of what gets customers to purchase.",
      ],
    },
    {
      id: "q-14",
      question: "Why choose a performance marketing company in Bangalore?",
      answer: [
        "Small to mid-sized businesses that invest in Performance Marketing often see a higher return on investment than with other channels. Why? Because performance marketing companies are experts at getting the best results for your business, usually through campaign optimization and analysis. This means you're guaranteed optimal pricing, highly targeted traffic, top-notch creatives, and an improved",
        "A Performance Marketing Company helps with everything from getting your website set up with the right tracking and analytics to managing your campaigns on a daily basis. They also help you keep costs down by only placing ads on relevant websites and pay-per-click (PPC) campaigns.",
      ],
    },
    {
      id: "q-15",
      question: "What is your performance marketing process?",
      answer: [
        "Our performance marketing agency in Bangalore India provides 100% transparent, full-service performance marketing solutions starting with an analysis of your business goals and available marketing budget. We will then create a strategy tailored to your business and provide ongoing optimization as we continually monitor your campaigns for the best results possible. Our experts will provide regular",
      ],
    },
    {
      id: "q-16",
      question: "How can I set a limit for my advertising spending?",
      answer: [
        "The total cost of pay-per-click advertising is based on the average of the bids placed on all channels used to advertise your business. The more competitive your target, the higher the expenditures and the duration and ROI you intend to achieve from your campaign. Your marketing budget will be set after you consider all of these considerations.",
      ],
    },
    {
      id: "q-17",
      question:
        "Can you give me an estimate of the number of potential customers I could reach?",
      answer: [
        "Based on our experience dealing with multiple brands across various industries, we consider industry benchmarks to predict & plan actions and constantly improve campaigns to ensure that conversion rates increase over time. Price, product quality, website destination, reviews, and the competitive landscape are outside of our sphere of influence and can significantly impact your leads and sales.",
      ],
    },
    {
      id: "q-18",
      question: "How can you figure out my business operations?",
      answer: [
        "We start by learning about your company using a questionnaire. The last step is to arrange an onboarding call so we can talk about your responses to the questionnaire and any other information you'd want to provide. Then we tailor a performance marketing approach to your company after conducting significant research. As a final step, we present a comprehensive plan for using advertising to realise your organisation's objectives.",
      ],
    },
    {
      id: "q-19",
      question: "What are the main digital marketing services?",
      answer: [
        "Here is the list of main digital marketing services offered by top digital marketing companies in India. Such as Business consulting, Brand consulting, Digital consulting, Ecommerce solutions, Mobile app development, Web design and development, Search engine optimization, Search engine marketing, Social media marketing, Content marketing, SMS Marketing, Email Marketing, Influencer marketing, Performance marketing, Online PR, Search advertising, Display advertising, shopping advertising, Video advertising, In-app advertising, Mobile app advertising, Programmatic Advertising, Mobile app video advertising, Youtube advertising, Facebook advertising, Twitter advertising, LinkedIn advertising, WhatsApp marketing, remarketing, lead generation, conversion optimization etc.",
      ],
    },
    {
      id: "q-20",
      question:
        "What is the importance of a digital marketing company in India?",
      answer: [
        "India is estimated to have a total of anywhere around ten thousand digital marketing and services agencies as of 2023. As the city of Bangalore continues to grow, more and more businesses are beginning to set up shops in the city. This has led to an increased demand for digital marketing services. Bangalore is home to some of the best digital marketing companies in India, and these companies are capable of helping businesses achieve tremendous growth.",
      ],
    },
    {
      id: "q-21",
      question:
        "How does Coltfox plan a digital marketing strategy for its clients?",
      answer: [
        "When a client looks to Coltfox, one of the best digital marketing agencies in India, for help with their digital marketing needs, they are given an in-depth questionnaire. This is designed to get an understanding of their business goals and what strategy they have used so far to achieve these. This helps the Coltfox team understand where the client currently stands on their digital marketing journey.",
        "After initial research, Coltfox conducts a thorough analysis of the client's social media accounts, website, and general digital presence. This helps us drill down to what would be the best possible strategy for them in order to achieve their goals. We do this through the use of sound marketing practices and procedures, combined with an understanding of how both traditional and digital marketing can work together.",
      ],
    },
  ];

  const toggleDropdown = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  const renderSvg = (questionId) => {
    if (activeQuestion === questionId) {
      return (
        <svg
          onClick={() => toggleDropdown(questionId)}
          className={`dropdown-menu cursor-pointer transform transition duration-800 ease-in-out ${
            activeQuestion === questionId ? "rotate-180" : "rotate-0"
          }`}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z"
            fill="white"
          />
        </svg>
      );
    } else {
      return (
        <svg
          onClick={() => toggleDropdown(questionId)}
          className={`dropdown-menu cursor-none transform transition duration-800 ease-in-out ${
            activeQuestion === questionId ? "rotate-180" : "rotate-0"
          }`}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z"
            fill="#FCAB64"
          />
        </svg>
      );
    }
  };

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstname,
      lastname,
      email,
      phone,
      message,
    };

    console.log(formData);
    toggleConfirmation();

    try {
      const response = await axios.post(
        "https://coltfox-gamma.onrender.com/faq-form",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };

  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className="px-6 sm:px-28 lg:px-48 xl:px-64 2xl:px-96 py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div className="flex flex-col gap-4 sm:w-3/4">
            <div className="text-xs text-[#776E6E] font-medium ">
              Expert Web Design Company in India
            </div>
            <div className="font-bold text-[#DF2323] text-3xl leading-snug">
              Get Appealing Websites from Our Web Design Company in India
            </div>
            <div className="font-normal text-sm 2xl:text-base leading-relaxed">
              The best platform for you to get the best SEO web design services
              in India to increase your business profit.
            </div>
            <div className="font-normal text-sm 2xl:text-base leading-relaxed">
              Our SEO web design company in India has many expert web designers
              and creative web developers in India to build websites that have
              the potential to build websites that can support your
              organization.{" "}
            </div>
            <div className="font-normal text-sm 2xl:text-base leading-relaxed">
              Affordability is another reason why clients are attracted to us.
              We offer only reasonable price packages for all our clients.{" "}
            </div>
          </div>
          <div className="h-full">
            <img
              className="sm:h-96 xl:h-80 2xl:min-h-40 w-full"
              src="./p1-img.png"
              alt="seo"
            />
          </div>
        </div>
        <div className="font-normal text-sm 2xl:text-base leading-relaxed my-6">
          Our best web designers in India are using cutting-edge technologies to
          complete each project efficiently and quickly. Our broad experience in
          SEO website design services in India attracted clients to outsource
          SEO web design to our website design services providers.
        </div>
      </div>

      <div className="bg-[#FCAB64]">
        <div className="font-semibold text-4xl py-10 text-center px-6">
          We Are Special
        </div>

        <div className="flex flex-row sm:flex-col gap-6 px-6 sm:px-28 2xl:px-0 2xl:pl-80 2xl:pr-44 pt-6 pb-12 sm:pt-20 sm:pb-20">
          <div className="flex xl:hidden flex-col gap-10 items-start relative">
            <div className="flex gap-10 z-[10]">
              <div>
                <div className="bg-[#FCAB64] flex items-center justify-center w-10 h-10 rounded-full border border-[#000000]">
                  <span className="text-xs font-normal">01</span>
                </div>
              </div>
              <div className=" h-32 sm:h-fit flex flex-col items-start justify-between gap-6 sm:pr-10 2xl:pr-24 h-full">
                <div className="text-lg font-semibold">Most Experienced</div>
                <div className="text-xs font-normal leading-4">
                  Experience with working with so many brands made us come up
                  with SEO website design services in India for any kind of
                  specifications mentioned by the client.
                </div>
              </div>
            </div>
            <div className="absolute mr-auto ml-5 w-[1px] h-5/6 bg-black"></div>
            <div className="flex gap-10 z-[10]">
              <div>
                <div className="bg-[#FCAB64] flex items-center justify-center w-10 h-10 rounded-full border border-[#000000]">
                  <span className="text-xs font-normal">02</span>
                </div>
              </div>
              <div className=" h-32 sm:h-fit flex flex-col items-start justify-between gap-6 sm:pr-10 2xl:pr-24 h-full">
                <div className="text-lg font-semibold">Cost-Effective</div>
                <div className="text-xs font-normal leading-4">
                  User-friendly and custom solutions offered by us are delivered
                  at a very affordable cost. We provide budget-friendly packages
                  to give SEO for small business website.
                </div>
              </div>
            </div>
            <div className="flex gap-10 z-[10]">
              <div>
                <div className="bg-[#FCAB64] flex items-center justify-center w-10 h-10 rounded-full border border-[#000000]">
                  <span className="text-xs font-normal">03</span>
                </div>
              </div>
              <div className=" h-32 sm:h-fit flex flex-col items-start justify-between gap-6 sm:pr-10 2xl:pr-24 h-full">
                <div className="text-lg font-semibold">
                  Innovative Technology
                </div>
                <div className="text-xs font-normal leading-4">
                  We provide web design and SEO services using innovative
                  technology and proven strategies according to customer
                  requirements.
                </div>
              </div>
            </div>
            <div className="flex gap-10 z-[10]">
              <div>
                <div className="bg-[#FCAB64] flex items-center justify-center w-10 h-10 rounded-full border border-[#000000]">
                  <span className="text-xs font-normal">04</span>
                </div>
              </div>
              <div className=" h-32 sm:h-fit flex flex-col items-start justify-between gap-6 sm:pr-10 2xl:pr-24 h-full">
                <div className="text-lg font-semibold">Custom Services</div>
                <div className="text-xs font-normal leading-4">
                  The SEO web design services in India offered by us are
                  tailor-made to the client’s business, the specific industry,
                  and their potential customers.
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex items-center pb-10 relative">
            <div className="flex items-center w-1/4">
              <div className="relative flex justify-center items-center w-fit">
                <div className="absolute top-1/2 transform -translate-y-1/2 bg-[#FCAB64] flex items-center justify-center w-10 h-10 rounded-full border border-[#000000]">
                  <span className="text-xs font-normal">01</span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#000000]"></div>
            </div>

            <div className="flex items-center w-1/4">
              <div className="relative flex justify-center items-center w-fit">
                <div className="absolute top-1/2 transform -translate-y-1/2 bg-[#FCAB64] flex items-center justify-center w-10 h-10 rounded-full border border-[#000000]">
                  <span className="text-xs font-normal">02</span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#000000]"></div>
            </div>

            <div className="flex items-center w-1/4">
              <div className="relative flex justify-center items-center w-fit">
                <div className="absolute top-1/2 transform -translate-y-1/2  bg-[#FCAB64] flex items-center justify-center w-10 h-10 rounded-full border border-[#000000]">
                  <span className="text-xs font-normal">03</span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#000000]"></div>
            </div>

            <div className="flex items-center w-1/4">
              <div className="relative flex justify-center items-center w-fit">
                <div className="absolute top-1/2 transform -translate-y-1/2 bg-[#FCAB64] flex items-center justify-center w-10 h-10 rounded-full border border-[#000000]">
                  <span className="text-xs font-normal">04</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex flex-col sm:flex-row gap-6 sm:gap-0">
            <div className="sm:w-1/4 h-32 sm:h-fit flex flex-col items-start justify-between gap-6 sm:pr-10 2xl:pr-24 h-full">
              <div className="text-lg font-semibold">Most Experienced</div>
              <div className="text-xs font-normal leading-4">
                Experience with working with so many brands made us come up with
                SEO website design services in India for any kind of
                specifications mentioned by the client.
              </div>
            </div>

            <div className="sm:w-1/4 h-36 sm:h-fit flex flex-col items-start justify-between gap-6 sm:pr-10 2xl:pr-24 h-full">
              <div className="text-lg font-semibold">Cost-Effective</div>
              <div className="text-xs font-normal leading-4">
                User-friendly and custom solutions offered by us are delivered
                at a very affordable cost. We provide budget-friendly packages
                to give SEO for small business website.
              </div>
            </div>

            <div className="sm:w-1/4 h-32 sm:h-fit flex flex-col items-start justify-between gap-6 sm:pr-10 2xl:pr-24 h-full">
              <div className="text-lg font-semibold">Innovative Technology</div>
              <div className="text-xs font-normal leading-4">
                We provide web design and SEO services using innovative
                technology and proven strategies according to customer
                requirements.
              </div>
            </div>

            <div className="sm:w-1/4 h-28 sm:h-fit flex flex-col items-start justify-between gap-6 sm:pr-10 2xl:pr-24 h-full">
              <div className="text-lg font-semibold">Custom Services</div>
              <div className="text-xs font-normal leading-4">
                The SEO web design services in India offered by us are
                tailor-made to the client’s business, the specific industry, and
                their potential customers.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-72 py-12">
        <div className="font-semibold text-4xl text-[#DF2323] leading-snug">
          Our Expert Search Engine Optimization Involves
        </div>
        <div className="font-medium text-xl pt-4 pb-12">
          SEO Website Design Company in India
        </div>

        <div className="lg:pl-32 2xl:pl-[10%] flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-28">
            <div className="flex justify-between w-3/5 sm:w-2/5 lg:w-1/4 2xl:w-1/6">
              <div className="font-medium text-base text-[#DF2323]">01</div>
              <div className="font-bold text-base mr-[2.5%]">ON-PAGE SEO</div>
            </div>
            <div className="sm:w-3/4 2xl:w-2/3 leading-7 text-base">
              Our best web designers in India are using cutting-edge
              technologies to complete each project efficiently and quickly. Our
              broad experience in SEO website design services in India attracted
              clients to outsource SEO web design to our website design services
              providers.
            </div>
          </div>

          <div className="w-full h-[1px] bg-black"></div>

          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-28">
            <div className="flex justify-between w-3/5 sm:w-2/5 lg:w-1/4 2xl:w-1/6">
              <div className="font-medium text-base text-[#DF2323]">02</div>
              <div className="font-bold text-base mr-[2.5%]">OFF-PAGE SEO</div>
            </div>
            <div className="sm:w-3/4 2xl:w-2/3 leading-7 text-base">
              Our SEO expert in India provides off-page optimization services to
              increase domain authority. Off-site SEO focuses on link building,
              content marketing, social media marketing, and other methods
              outside the website to help you increase brand awareness.
            </div>
          </div>

          <div className="w-full h-[1px] bg-black"></div>

          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-28">
            <div className="flex justify-between w-3/5 sm:w-2/5 lg:w-1/4 2xl:w-1/6">
              <div className="font-medium text-base text-[#DF2323]">03</div>
              <div className="font-bold text-base">TECHNICAL SEO</div>
            </div>
            <div className="sm:w-3/4 2xl:w-2/3 leading-7 text-base">
              Our SEO expert in India provides off-page optimization services to
              increase domain authority. Off-site SEO focuses on link building,
              content marketing, social media marketing, and other methods
              outside the website to help you increase brand awareness.
            </div>
          </div>

          <div className="w-full h-[1px] bg-black"></div>

          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-28">
            <div className="flex justify-between w-3/5 sm:w-2/5 lg:w-1/4 2xl:w-1/6">
              <div className="font-medium text-base text-[#DF2323]">04</div>
              <div className="font-bold text-base mr-[18%]">LOCAL SEO</div>
            </div>
            <div className="sm:w-3/4 2xl:w-2/3 leading-7 text-base">
              We help start-ups, small businesses, start-ups, and medium-scale
              enterprises to rank higher on local search results. Our local SEO
              services boost your business’s web presence and attract more local
              customers to your website.
            </div>
          </div>

          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div>

      <div className="w-full bg-[#FCAB64] my-10">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-0 items-center justify-between px-6 sm:px-28 lg:px-48 2xl:px-72 py-12">
          <div className="flex flex-col gap-8">
            <div className="font-medium leading-7 text-xl sm:text-2xl">
              Need the assistance of an SEO expert in India?
            </div>
            <div className="font-medium leading-7 text-xl sm:text-2xl">
              Hire dedicated SEO expert in India from our agency
            </div>
          </div>

          <a
            href="/contact-us"
            className="bg-white text-[#FCAB64] text-center rounded-lg px-10 py-2"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="flex xl:hidden flex-col items-center px-6 gap-8 py-6">
        <div className="flex flex-col items-center">
          <img className="md:w-1/2" src="./p1-img1.png" alt="seo" />
        </div>
        <div className=" flex flex-col gap-4 rounded-lg bg-white p-4">
          <div className="text-[#DF2323] text-2xl font-semibold">
            Responsibilities of Our SEO Executives
          </div>
          <div className="text-sm leading-6">
            Our SEO consultants are providing the best SEO services by using the
            top SEO strategies they created working with many business owners.
            The proficient can deliver excellent services for businesses. The
            main responsibilities of the professionals are:
          </div>
          <div className="flex gap-8 items-start justify-start">
            <div className="h-fit ">
              <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
            </div>
            <div className="text-sm leading-6">
              Performing keyword research to identify suitable keywords to
              optimize website content
            </div>
          </div>
          <div className="flex gap-8 items-start justify-start">
            <div className="h-fit ">
              <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
            </div>
            <div className="text-sm leading-6">
              Optimize landing pages for the success of the Google Ads campaign
            </div>
          </div>
          <div className="flex gap-8 items-start justify-start">
            <div className="h-fit ">
              <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
            </div>
            <div className="text-sm leading-6">
              Planning and execution of link building strategies
            </div>
          </div>
          <div className="flex gap-8 items-start justify-start">
            <div className="h-fit ">
              <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
            </div>
            <div className="text-sm leading-6">
              SEO expert in India provide a monthly report on the SEO campaign
            </div>
          </div>
          <div className="flex gap-8 items-start justify-start">
            <div className="h-fit ">
              <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
            </div>
            <div className="text-sm leading-6">
              Product page optimization as part of eCommerce SEO solutions
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex items-center px-6 sm:px-28 lg:px-48 2xl:px-96 pt-10 xl:pb-52 2xl:pb-48">
        <div className="relative inline-block 2xl:ml-[10%] w-1/2 xl:w-3/5">
          <img
            src="./p1-img1.png"
            alt="seo"
            className=" xl:w-3/5 2xl:w-1/2 h-auto"
          />
          <div
            className="content fixed w-full absolute flex flex-col gap-2 bottom-0 right-0 2xl:right-20 rounded-lg bg-white p-8"
            style={{ transform: "translate(50%, 50%)" }}
          >
            <div className="text-[#DF2323] text-2xl font-semibold">
              Responsibilities of Our SEO Executives
            </div>
            <div className="text-sm leading-6">
              Our SEO consultants are providing the best SEO services by using
              the top SEO strategies they created working with many business
              owners. The proficient can deliver excellent services for
              businesses. The main responsibilities of the professionals are:
            </div>
            <div className="flex gap-8 items-start justify-start">
              <div className="h-fit ">
                <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
              </div>
              <div className="text-sm leading-6">
                Performing keyword research to identify suitable keywords to
                optimize website content
              </div>
            </div>
            <div className="flex gap-8 items-start justify-start">
              <div className="h-fit ">
                <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
              </div>
              <div className="text-sm leading-6">
                Optimize landing pages for the success of the Google Ads
                campaign
              </div>
            </div>
            <div className="flex gap-8 items-start justify-start">
              <div className="h-fit ">
                <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
              </div>
              <div className="text-sm leading-6">
                Planning and execution of link building strategies
              </div>
            </div>
            <div className="flex gap-8 items-start justify-start">
              <div className="h-fit ">
                <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
              </div>
              <div className="text-sm leading-6">
                SEO expert in India provide a monthly report on the SEO campaign
              </div>
            </div>
            <div className="flex gap-8 items-start justify-start">
              <div className="h-fit ">
                <div className="rounded-full mt-1.5 w-1.5 h-1.5 bg-[#FCAB64]"></div>
              </div>
              <div className="text-sm leading-6">
                Product page optimization as part of eCommerce SEO solutions
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-96 sm:py-10 xl:py-16">
        <h1 className="text-5xl text-left leading-[6rem] text-[#DF2323] font-black">
          FAQ's
        </h1>
        <div className="flex flex-col gap-6 pt-10 text-base font-normal leading tight text[#1F1F21]">
          <p>
            With over 10 years of experience in Marketing and content COLTFOX
            DIGITAL knows how to research, recommend, and deploy digital FOX
            marketing campaigns that bring definitive results. Our hands-on
            approach ensures that each client has a truly customized program,
            tailored to fit their own business wants and needs. When you see an
            increase in followers on social media or in web traffic, that is
            when you know that we have delivered results.
          </p>
          <p>
            Check out the most common digital marketing company questions we get
            asked by business owners. Understanding how digital marketing works
            is important to be able to identify the best digital marketing
            agency to have in your corner.
          </p>
        </div>
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-96 sm:py-10 flex flex-col gap-4">
        {questions.map(({ id, question, answer }) => (
          <div key={id} className="flex flex-col">
            <div className="flex">
              <div
                className={`line w-2.5 h-auto ${
                  activeQuestion === id ? "bg-white" : "bg-[#FCAB64]"
                }`}
              />
              <div
                className={`text-box font-medium text-base gap-4 leading-tight text-[#1F1F21] px-6 sm:px-8 py-4 w-full flex items-center justify-between ${
                  activeQuestion === id ? "bg-[#FCAB64]" : "bg-white"
                }`}
              >
                <div className=" flex-grow">{question}</div>
                <div className="flex-shrink-0">{renderSvg(id)}</div>
              </div>
            </div>
            {activeQuestion === id && (
              <div className="flex">
                <div className="line w-2.5 h-auto bg-white" />
                <div className="px-6 sm:px-8 py-4 md:py-6 w-full text-sm text-white bg-[#FCAB64] flex flex-col gap-4">
                  {answer.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="px-6 sm:px-28 lg:px-48 2xl:px-96 sm:py-16 flex flex-col">
        <div className="font-semibold text-3xl leading-snug text-[#1F1F21]">
          Do you have a question we haven’t been able to answer?
        </div>
        <div className="leading-9 font-normal text-base text-[#1F1F21] mt-8">
          Get in touch with us and we’ll come back to you shortly.
        </div>
        <div className="text-3xl leading-tight font-semibold text-[#1F1F21] my-8 md:my-8 lg:w-3/4 ">
          Contact
          <form className="mt-6 md:mt-12 flex flex-col gap-2">
            <div class="flex flex-col md:flex-row gap-2 md:gap-6">
              <div class="flex-1 md:flex-[1.1]">
                <input
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="font-light text-black mt-1 pl-6 py-1 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                  placeholder="First Name"
                />
              </div>
              <div class="flex-1">
                <input
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="font-light text-black mt-1 pl-6 py-1 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                class="font-light text-black mt-1 pl-6 py-1 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                placeholder="Email"
              />
            </div>

            <div>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                id="phone"
                name="phone"
                class="font-light text-black mt-1 pl-6 py-1 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                placeholder="Phone number"
              />
            </div>

            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                rows="4"
                class="font-light text-black mt-1 pl-6 py-1 block w-full rounded-md border border-[#B8B2B2] text-lg text-[#B7AAAA] placeholder-[#B7AAAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
                placeholder="Message"
              ></textarea>
            </div>

            <div class="text-left mt-4">
              <button
                onClick={handleSubmit}
                type="submit"
                class="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-base font-medium rounded-2xl text-[#FCAB64] bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Pop-up for form submission confirmation */}
      {showConfirmation && (
        <div className="fixed inset-0 w-auto mx-2 sm:mx-0 flex items-center justify-center">
          <div className=" bg-[#D9D3D3] bg-[url('/noise-grey.png')] bg-blend-overlay px-2 py-6 sm:px-6 sm:py-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center text-green-700">
              <FaCheckCircle className="mr-2" />
              <span className="font-medium text-xs sm:text-base">
                Your details have been sent.
              </span>
            </div>
            <p className="text-center text-xs sm:text-base mt-4">
              Please check your email for the confirmation.
            </p>
            <button
              className="ml-auto mt-6 text-xs sm:text-base text-[#FCAB64] bg-white shadow-none hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FCAB64] py-1 px-2 sm:py-2 sm:px-4 rounded-full border border-[#FCAB64]"
              onClick={toggleConfirmation}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Page1;
