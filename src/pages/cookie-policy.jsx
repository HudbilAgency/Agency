import React, { useEffect, useRef, useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Cookiepolicy = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className="mt-10 px-3 pb-12 sm:pb-20 text-center sm:px-20 lg:px-40 2xl:px-64 text-[#DF2323] text-6xl sm:text-[6rem] font-semibold leading-tight">
        <h1> COOKIE POLICY </h1>
      </div>

      <img className="w-full" src="./cookie-main.png" alt="" />

      <div className="mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 py-16 sm:py-20 text-[#012033] text-xl sm:text-[1.5rem] font-normal leading-9">
        <p>
          This privacy policy has been compiled to better serve those who are
          concerned with how their Personally Identifiable Information' (PII) is
          being used online. PII, as described in US privacy law and information
          security, is information that can be used on its own or with other
          information to identify, contact, or locate a single person, or to
          identify an individual in context. Please read our privacy policy
          carefully to get a clear understanding of how we collect, use, protect
          or otherwise handle your Personally Identifiable Information in
          accordance with our website.
        </p>
        <p className="pt-6 break-words">
          In some cases, we may use Cookies to collect personal information, or
          data that could become personal information if we combine it with
          other data points. In such cases our Privacy Policy (
          <Link to="https://www.coltfox.com/privacy-policy">
            https://www.coltfox.com/privacy-policy
          </Link>{" "}
          or{" "}
          <Link to="www.coltfox.com/privacy-policy">
            www.coltfox.com/privacy-policy
          </Link>
          ) will apply in addition to this Cookie Policy.
        </p>
      </div>

      <div className="mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 pb-20">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            What Are Cookies?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners in order to make their websites work, or to work more
            efficiently, as well as to provide reporting information.
            <li className="pt-4">
              Cookies set by the website owner (in this case, INNsight or
              Fallbrook Country Inn) are called "first party Cookies". Cookies
              set by parties other than the website owner are called "third
              party Cookies". Third party Cookies enable third party features or
              functionality to be provided on or through the website (e.g. like
              advertising, interactive content and analytics). The parties that
              set these third party Cookies can recognize your computer both
              when it visits the website in question and also when it visits
              certain other websites.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Why Do We Use Cookies?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            We use first and third party Cookies for several reasons. Some
            Cookies are required for technical reasons in order for our websites
            to operate, and we refer to these as "essential" or "strictly
            necessary" Cookies. Other Cookies also enable us to track and target
            the interests of our users to enhance the experience on our Online
            Properties. Third parties serve Cookies through our websites for
            advertising, analytics, and other purposes. This is described in
            more detail below.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Processing Purposes
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            We use your information, including personal data, collected through
            Cookies for the following purposes:
            <li className="pt-4">
              Provide usage of our website(s): We use information that we
              collect through Cookies to let you use the website(s) for the
              primary purpose of providing our services.
            </li>
            <li className="pt-4">
              Perform analytics regarding the use of our services: We use
              information that we collect through Cookies to analyze how our
              website is used and to prepare reports on the use of our website.
              We also use Cookies to keep track of your use of the website, and
              to improve your user experience and the quality of the website. It
              is our legitimate business interest to use Cookies for these
              purposes.
            </li>
            <li className="pt-4">
              Providing targeted advertisements: We use certain third-party
              services who collect information through Cookies to pursue our
              legitimate interests by providing targeted advertising suggesting
              tourism-related local businesses such as hotels, restaurants,
              salons, spas, wineries, golf courses, attractions, resorts, guided
              tours and other recreational activities. Where necessary, we will
              obtain prior consent before Cookies are placed for this purpose.
              If consent is given, you can withdraw it at any time. In addition,
              you can object to our processing of your personal data for
              advertising purposes at any time. Market Research: We use common
              third-party services like Google Analytics that we collect
              information through Cookies to pursue our legitimate interests to
              engage in anonymous market research (including the analysis of
              market segmentation or trends, preferences and behaviors, research
              about products or services, or the effectiveness of marketing or
              advertising) or product development (including the analysis of the
              characteristics of a market segment or group of customers or the
              performance of our website, in order to improve our website).
            </li>
            <li className="pt-4">
              If you prefer to opt out of the use of Cookies described in this
              section and no opt-out mechanism is available to you directly
              (e.g. in your browser settings), you can contact us at{" "}
              <Link
                to="legal@coltfox.com"
                className="text-decoration-line: underline"
              >
                legal@coltfox.com
              </Link>
              .
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            How can I control Cookies?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            You have the right to decide whether to accept or reject Cookies.
            You can exercise your cookie preferences by clicking on the
            appropriate opt-out links provided in the cookie table above.
            <li className="pt-4">
              You can set or amend your web browser controls to accept or refuse
              Cookies. If you choose to reject Cookies, you may still use our
              website though your access to some functionality and areas of our
              website may be restricted. As the means by which you can refuse
              Cookies through your web browser controls vary from
              browser-to-browser, you should visit your browser's help menu for
              more information.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Data Retention
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            There is a difference between Session Cookies and Permanent Cookies.
            Session Cookies only exist until you close your browser. Permanent
            Cookies have a longer lifespan and are not automatically deleted
            once you close your browser. We strive to keep Strictly Necessary
            Cookies only as Session Cookies and avoid Cookies with retention of
            more than 1 year.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            How often will you update this Cookie Policy?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            We may update this Cookie Policy from time to time in order to
            reflect, for example, changes to the Cookies we use or for other
            operational, legal, or regulatory reasons. Please therefore re-visit
            this Cookie Policy regularly to stay informed about our use of
            Cookies and related technologies.
            <li className="pt-4">
              The date at the top of this Cookie Policy indicates when it was
              last updated.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Where can I get further information?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            If you have any questions about our use of Cookies or other
            technologies, please email us at legal@coltfox.com or by post to:
            <div className="pt-4 font-bold">
              <li className="font-normal list-none">Hudbil Private Limited</li>
              <li className="list-none">235, 2nd & 3ed Floor,</li>
              <li className="list-none">
                13th Cross Rd, Indiranagar || Stage,
              </li>
              <li className="list-none">Hoysala Nagar, </li>
              <li className="list-none">Bangalore - 560038, </li>
              <li className="list-none">Karnataka, India.</li>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cookiepolicy;
