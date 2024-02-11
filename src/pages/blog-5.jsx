import React, { useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Blog5 = () => {
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
        10 Email Marketing
      </div>

      <div className="mt-12 px-3 pb-14 text-center sm:px-16 xl:px-28 2xl:px-64 text-[#DF2323] text-3xl sm:text-[4rem] font-semibold leading-tight">
        <h1>
          {" "}
          Tips That Will Keep Your <br /> Messages Out of the Spam Folder{" "}
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
            1. Be compliant with Canadian anti-spam legislation (CASL){" "}
          </a>
          <a
            href="#2"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            2. Avoid spam phrases
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            3. Send to large lists slowly
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            4. Make sure you're not on the blacklist
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            5. Ask for permission
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            6. Use spam checkers before sending emails
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            7. Keep images to a minimum or use none at all
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            8. Keep your list clean
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug mb-1"
          >
            9. Send attachments cautiously
          </a>
          <a
            href="#3"
            className=" text-[#FCAB64] text-lg font-bold leading-snug"
          >
            10. Set-up your DKIM, SPF, Sender-ID, and Domain Keys properly
          </a>
        </div>
        <img className="w-full sm:w-3/5 h-full" src="./blog5-img1.png" alt="" />
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 my-10 sm:my-20 flex flex-col gap-4 sm:gap-6 leading-9 text-base font-normal text-[#012033]">
        <p>
          It seems every morning we spend time going through our email inbox,
          and then inevitably, we check our spam folder to see if something of
          value accidentally landed there. It’s all too easy to scan that folder
          quickly and hit delete because undoubtedly most of it is garbage.
        </p>
        <p>
          But what if you knew that your outbound emails were landing in your
          customers’ dreaded spam folder, only to be quickly deleted with the
          garbage? You spent quality time prepping the email, and it contains
          valuable information that you know your customers will appreciate.
          Your hard work is going to waste and as a result you are seeing low
          open and click rates on your email marketing.
        </p>
        <p>
          Don’t get caught in the spam trap. Follow these 10 email marketing
          tips to help keep your messages out of the spam folder.
        </p>
      </div>

      <div className="px-8 sm:px-16 xl:px-28 2xl:px-64">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            1. Be compliant with Canadian anti-spam legislation (CASL)
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              First and foremost, if you are sending emails to customers or
              prospects in Canada, you must follow the laws set out in CASL.
              Full details of CASL compliance are outlined here, but we’ve
              provided this helpful synopsis of requirements:
            </div>
            <div>
              · Express or implied consent from the person you are emailing.
              Express consent means that a person has clearly agreed to receive
              an email before it is sent. You cannot request consent in an
              email. Consent may also be implied in certain situations, for
              instance if there is an existing business or non-business
              relationship. Ensure you understand the consent you have received
              from your recipients, and keep detailed records in case you are
              ever asked to prove that consent has been received.
            </div>
            <div>
              · Identify yourself and anyone you represent in the message.
              Provide contact information including your business name, postal
              address and either a telephone number or e-mail address. This
              information must be accurate and valid for a minimum of 60 days
              after the message has been sent.
            </div>
            <div>
              · All email messages must include a working unsubscribe button or
              link and there cannot be a cost associated with unsubscribing.
            </div>
            <div>
              Your email communication cannot be false or misleading in any way.
              This means you must include an accurate identity of the sender,
              subject line, any web links, or any other material part of the
              message’s text or data
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            2. Avoid spam phrases
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              If it walks like a duck and talks like a duck…well, you get the
              point. If you’re talking like a spammer, you’re going to be
              perceived as a spammer by email servers. Unfortunately, there is
              no complete list of spam trigger words. But remember: a spam
              filter is trying to remove commercial advertisements and
              promotions. Follow these general guidelines when writing your
              content and subject lines:
            </div>
            <div>· Don’t use the word “free” too many times.</div>
            <div>· Don’t use ALL CAPS.</div>
            <div>· Don’t use lots of colored fonts.</div>
            <div>
              · Only use one exclamation point at a time and avoid using too
              many symbols.
            </div>
            <div>
              · Stay away from words you normally see in spam. Aside from the
              obvious ones about drugs, pills or sexual content, you want to
              avoid words like guaranteed winner, coupon and heavy use of
              percent discounts.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            3. Send to large lists slowly
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              If you’re sending out a mass email message to thousands of
              customers, it’s more effective to have your email service “drip”
              the messages out slowly. The reason: spam filters at most email
              providers look to see how many messages you’re sending at a time.
              If you break up your list up into smaller groups and send the
              messages out in segments, you are more likely to land in the
              customer’s inbox. With marketing automation software, such as{" "}
              <strong>Active Campaign</strong>, you can segment lists and time
              them appropriately to avoid these spammy situations.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            4. Make sure you're not on the blacklist
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              If your email server is on a <strong>blacklist</strong> , you are
              going to hit a major email roadblock, especially to new people on
              your lists. Use a free service to see if your server is on a
              blacklist. Here’s a few to try:
            </div>
            <div>· Free Email Blacklist Lookup</div>
            <div>· Email Blacklist Check</div>
            <div>· Spam Database Lookup</div>
            <div>
              <strong>
                This commonly occurs if you are hosting your website on a shared
                server
              </strong>
              . If your server is blacklisted, you will need to follow up with
              the website that has added you to their blacklist. The tools
              listed above give you instructions on how to do so. You should
              also call your hosting provider to tell them that your shared
              server has been blacklisted and ask them to move you to a
              different server.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            5. Ask for permission
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              This sounds really simple, but sometimes we forget how effective
              it can be to just ask permission to be whitelisted. Whitelisting
              means that once a user has added you to his or her contact list,
              friend list or address book, you will always end up in their
              inbox. Use every opportunity to encourage those on your email list
              to add you as a contact. A typical way to ask customers is to
              include a short statement in each of your email communications,
              such as: “Keep us out of your spam folder and enjoy reading the
              quality content you’ve come to trust from us by adding us to your
              contact list.”
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            6. Use spam checkers before sending emails
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Don’t waste your time sending a message that will land in spam.
              Instead, check it for the spam factor before hitting send. We use
              Mail Tester for our clients. It provides a score and tells you
              what to fix. The higher the score, the less likely you’ll end up
              in the spam folder.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            7. Keep images to a minimum or use none at all
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Normally digital marketers harp on the importance of using images
              to get messages across more effectively. This is not the case with
              email. It is usually best to not include images at all, but if you
              must, here are some tips:
            </div>
            <div>· Do not send any image-only emails</div>
            <div>· Follow the rule of 80:20 for ratio of text to images</div>
            <div>
              · Optimize your images the best you can with the correct sizing
              and branding
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            8. Keep your list clean
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              A clean email list with email subscribers that are actually humans
              will make a huge difference in how an email provider ranks your
              email. What makes a bad email address? An address that doesn’t
              exist, has been disabled or has a full inbox. The solution: clean
              those addresses regularly to avoid being penalized for sending to
              them. Remember, the best way to avoid creating a “dirty” email
              list is to use an opt-in process for express consent from a real
              person and do not buy email lists.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            9. Send attachments cautiously
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Attachments have received a bad rap due to the fear of a computer
              virus. If you are sending email with an attachment, it’s best to
              stick to .jpg, .gif, .png and .pdf file extensions. You must also
              include some content in the email as well. Avoid sending
              executable attachments such as .exe, .zip, .swf.
            </div>
            <div>
              Large email attachments are often flagged as spam or trigger virus
              scanners. If you send a large attachment, consider using a link
              that goes to a service like Dropbox for people to view and
              download the file, or link people to the attachment on your
              website server.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            10. Set-up your DKIM, SPF, Sender-ID, and Domain Keys properly
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              You’re probably looking at this list of weird acronyms and
              keywords and thinking, “what are you talking about?” DKIM, SPF,
              Sender-ID, and Domain Keys are protocols that must be supported by
              your email server and properly implemented. Together, they help
              Internet Service Providers (ISPs) determine the authenticity of
              your email from a behind the scenes technical perspective. Try
              using IsNotSpam to see if your protocols are set up properly. It’s
              free and you get a report to tell you what’s working and what’s
              not.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-24 justify-between pb-8 md:pb-16">
          <div className="text-2xl leading-normal font-semibold text-black w-fit sm:w-1/2">
            One final word of advice: don't be afraid of email marketing
          </div>
          <div className="font-normal text-base leading-9 text-[#012033] pt-2 w-fit sm:w-1/2 flex flex-col gap-4 sm:gap-6">
            <div>
              Legislation such as CASL and the ongoing frustration of spammers
              is often a deterrent for many businesses considering email
              marketing. We’re here to tell you not to be afraid. If you
              implement these email marketing tips, and follow email best
              practices, you will be able to connect with customers effectively
              and happily land in their inbox. If you’d like to learn more,
              reach out to us.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#D9D3D3]">
        <div className="px-8 sm:px-16 xl:px-28 2xl:px-64 py-12 md:py-16">
          <div className="bg-[#FCAB64] h-[10%] w-fit px-3 rounded-full py-2 shadow-xl text-white text-lg">
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

export default Blog5;
