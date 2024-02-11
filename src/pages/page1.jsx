import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Page1 = () => {
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
            <div className="font-normal text-sm leading-relaxed">
              The best platform for you to get the best SEO web design services
              in India to increase your business profit.
            </div>
            <div className="font-normal text-sm leading-relaxed">
              Our SEO web design company in India has many expert web designers
              and creative web developers in India to build websites that have
              the potential to build websites that can support your
              organization.{" "}
            </div>
            <div className="font-normal text-sm leading-relaxed">
              Affordability is another reason why clients are attracted to us.
              We offer only reasonable price packages for all our clients.{" "}
            </div>
          </div>
          <div className="h-full">
            <img
              className="sm:h-96 xl:h-80 2xl:h-64 w-full"
              src="./p1-img.png"
              alt="seo"
            />
          </div>
        </div>
        <div className="font-normal text-sm leading-relaxed my-4">
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

      <div className="hidden xl:flex items-center px-6 sm:px-28 lg:px-48 2xl:px-96 pt-10 xl:pb-96 2xl:pb-80">
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

      <Footer />
    </div>
  );
};

export default Page1;
