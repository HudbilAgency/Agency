import React, { useEffect, useRef, useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Accessibility = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className="mt-10 px-3 pb-12 sm:pb-20 text-center sm:px-20 lg:px-40 2xl:px-64 text-[#DF2323] text-5xl sm:text-[6rem] font-semibold leading-tight">
        <h1> ACCESSIBILITY </h1>
      </div>

      <img className="w-full" src="./cookie-main.png" alt="" />

      <div className="mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 font-medium text-3xl sm:text-[4rem] leading-normal text-center text-[#DF2323]">
        Important Update Regarding Scammers Impersonating COLTFOX Internet
        Marketing Agency
      </div>

      <div className="mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 py-12 sm:py-20 text-[#012033] text-xl sm:text-[1.5rem] font-normal leading-9">
        <p>
          We at COLTFOX Internet Marketing Agency have recently become aware
          that fraudsters have used our brand name, likeness, logoand the names
          of our employees to scam people around the world across different
          channels and platforms. We do not tolerate these unlawful acts.
        </p>
        <p className="pt-6 break-words">
          Our digital marketing company takes a proactive approach to protect
          you, our brand, employees and clients against scammers.
        </p>
      </div>

      <div className="mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 pb-20">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Some Helpful Points to Remember:
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            Recognizing these common signs of a scam could help you avoid one.
            Remember that scammers:
            <li className="pt-6">Contact you out of the blue.</li>
            <li className="pt-6">
              Pretend to be from a well-known organization or contact.
            </li>
            <li className="pt-6">Pressure you to act immediately.</li>
            <li className="pt-6">
              Suggest their own verification procedures, such as calling or
              texting numbers they provide to you or going to a website they
              have created.
            </li>
            <li className="pt-6">
              Send unsolicited emails, text messages or social media messages
              claiming to be someone else.
            </li>
            <li className="pt-6">
              Trick you into giving access to sensitive information, such as
              your social security number, bank account or credit card details.
            </li>
            <li className="pt-6">Prey on your emotions.</li>
            <li className="pt-6">Ask you to keep a transaction a secret.</li>
            <li className="pt-6">
              Make their offer sound too good to be true.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            How to Spot a Scammer
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-full break-words sm:w-1/2">
            Be wary of phone calls, texts, social media messages and emails
            impersonating COLTFOX and its employees. Keep in mind that:
            <li className="pt-6 font-bold list-none">
              We don't contact people through Telegram.
            </li>
            <li className="pt-6 list-none">
              COLTFOX ’s primary modes of communication with clients, prospects
              and candidates are via email info@coltfox.com and phone call
              (843-353-6383). We would never initiate communication via
              cross-platform messaging services such as Telegram and other
              channels.
            </li>
            <li className="pt-6 font-bold list-none">
              We don't ask freelancers, contractors or permanent employees for
              money.
            </li>
            <li className="pt-6 list-none">
              Never send money or give credit card details to anyone. COLTFOX
              will never ask its freelancers, employees or independent
              contractors for money. In addition, we don’t send requests to
              transfer money or goods on behalf of our company or employees.
            </li>
            <li className="pt-6 font-bold list-none">
              We never charge freelancers application fees.
            </li>
            <li className="pt-6 list-none">
              COLTFOX has a systematic process in place for its independent
              contractors. We do not charge any application fees to freelancers
              and candidates. And as the employer, we pay contractors based on
              the agreed payment terms on the signed contract.
            </li>
            <li className="pt-6 font-bold list-none">
              We don't have our own app.
            </li>
            <li className="pt-6 list-none">
              COLTFOX ’s only and official channels are the following:
            </li>
            <li className="pt-6 font-semibold list-none text-xl text-[#F77400]">
              · Website:{" "}
              <Link
                to="https://coltfox.com"
                className="text-decoration-line: underline"
              >
                https://coltfox.com
              </Link>{" "}
            </li>
            <li className="pt-6 font-semibold list-none text-xl text-[#F77400]">
              · Facebook:{" "}
              <Link
                to="https://www.facebook.com/COLTFOX Agency/"
                className="text-decoration-line: underline"
              >
                https://www.facebook.com/COLTFOX Agency/
              </Link>
            </li>
            <li className="pt-6 font-semibold list-none text-xl text-[#F77400]">
              · Twitter:{" "}
              <Link
                to="https://twitter.com/COLTFOX Agency/"
                className="text-decoration-line: underline"
              >
                https://twitter.com/COLTFOX Agency/
              </Link>
            </li>
            <li className="pt-6 font-semibold list-none text-xl text-[#F77400]">
              · LinkedIn:{" "}
              <Link
                to="https://www.linkedin.com/company/COLTFOX -agency/"
                className="text-decoration-line: underline"
              >
                https://www.linkedin.com/company/COLTFOX -agency/
              </Link>
            </li>
            <li className="pt-6 font-semibold list-none text-xl text-[#F77400]">
              · YouTube:{" "}
              <Link
                to="https://www.youtube.com/@COLTFOX agency"
                className="text-decoration-line: underline"
              >
                https://www.youtube.com/@COLTFOX agency
              </Link>
            </li>
            <li className="pt-6 font-semibold list-none text-xl text-[#F77400]">
              · Instagram:{" "}
              <Link
                to="https://www.instagram.com/COLTFOX agency/"
                className="text-decoration-line: underline"
              >
                https://www.instagram.com/COLTFOX agency/
              </Link>
            </li>
            <li className="pt-6 font-semibold list-none text-xl text-[#F77400]">
              · TikTok:{" "}
              <Link
                to="https://www.tiktok.com/@COLTFOX .agency"
                className="text-decoration-line: underline"
              >
                https://www.tiktok.com/@COLTFOX .agency
              </Link>
            </li>
            <li className="pt-6 list-seminone">
              We don’t have our own mobile application and would never ask you
              to send personal details or divulge sensitive information using
              other links or apps.
            </li>
            <li className="pt-6 font-semibold list-none">
              We don't tell people to buy cryptocurrency.
            </li>
            <li className="pt-6 list-seminone">
              COLTFOX is not affiliated with any cryptocurrency company and
              would never ask anyone to buy cryptocurrency. If someone asks you
              to buy cryptocurrency or pay upfront as part of your job, it’s a
              scam.
            </li>
            <li className="pt-6 font-semibold list-none">
              We never ask for your banking information over email.
            </li>
            <li className="pt-6 list-seminone">
              At COLTFOX , we keep our clients and employees’ information
              confidential. We would never ask you to share or verify your
              banking information over email, chat, text or phone calls.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            What to Do If You Were Scammed or Questioning an Email You Received:
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            Your report could help COLTFOX stop the scammers. If you received
            suspicious emails, texts or phone calls from someone pretending to
            be a part of our organization, please email us at{" "}
            <Link
              to="abuse@COLTFOXagency.com"
              className="text-decoration-line: underline font-bold text-xl text-[#F77400]"
            >
              abuse@COLTFOX agency.com
            </Link>{" "}
            or call{" "}
            <Link
              to=""
              className="text-decoration-line: underline font-bold text-xl text-[#F77400]"
            >
              843-353-6383
            </Link>
            .
            <li className="pt-6 list-none">
              We will make sure to track down and take appropriate action
              against scammers to protect you, our company, clients and
              employees.
            </li>
            <li className="pt-6 list-none">
              Other measures to protect yourself:
            </li>
            <li className="pt-6">Stop contact with the scammer.</li>
            <li className="pt-6">Secure your finances.</li>
            <li className="pt-6">Change your account passwords.</li>
            <li className="pt-6">
              Review your privacy and security settings on various social
              channels, platforms and devices.
            </li>
            <li className="pt-6 list-none">
              Join us in our fight to stop scams by reporting fraudulent
              activities to{" "}
              <Link
                to="abuse@COLTFOXagency.com"
                className="text-decoration-line: underline font-bold text-xl text-[#F77400]"
              >
                abuse@COLTFOX agency.com
              </Link>
              .
            </li>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Accessibility;
