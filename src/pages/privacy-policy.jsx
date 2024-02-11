import React, { useEffect, useRef, useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

const Privacypolicy = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className=" mt-10 px-3 pb-12 sm:pb-20 text-center sm:px-20 lg:px-40 2xl:px-64 text-[#DF2323] text-6xl sm:text-[6rem] font-semibold leading-tight">
        <h1> PRIVACY POLICY </h1>
      </div>

      <img className="w-full" src="./policy-main.png" alt="" />

      <div className="mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 py-16 sm:py-20 text-[#012033] text-xl sm:text-[1.5rem] font-normal leading-9">
        <p>
          {" "}
          This privacy policy has been compiled to better serve those who are
          concerned with how their Personally Identifiable Information' (PII) is
          being used online. PII, as described in US privacy law and information
          security, is information that can be used on its own or with other
          information to identify, contact, or locate a single person, or to
          identify an individual in context. Please read our privacy policy
          carefully to get a clear understanding of how we collect, use, protect
          or otherwise handle your Personally Identifiable Information in
          accordance with our website.{" "}
        </p>
      </div>

      <div className="mx-6 sm:mx-12 lg:mx-40 2xl:mx-64 pb-20">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            What personal information do we collect from the people that visit
            our blog, website or app?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            When ordering or registering on our site, as appropriate, you may be
            asked to enter your name, email address, phone number or other
            details to help you with your experience.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            When do we collect information?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            We collect information from you when you subscribe to a newsletter,
            fill out a form, Use Live Chat or enter information on our site.
            Provide us with feedback on our products or services.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            How do we use your information?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            We may use the information we collect from you when you register,
            make a purchase, sign up for our newsletter, respond to a survey or
            marketing communication, surf the website, or use certain other site
            features in the following ways:
            <li className="pt-4">
              To personalize your experience and to allow us to deliver the type
              of content and product offerings in which you are most interested.
            </li>
            <li>To improve our website in order to better serve you.</li>
            <li>
              To allow us to better service you in responding to your customer
              service requests.
            </li>
            <li>
              To administer a contest, promotion, survey or other site feature.
            </li>
            <li>
              To follow up with them after correspondence (live chat, email or
              phone inquiries)
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            How do we protect your information?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2 ">
            Our website is scanned on a regular basis for security holes and
            known vulnerabilities in order to make your visit to our site as
            safe as possible.
            <ul className="pt-4 list-none gap-4 flex flex-col">
              <li>We use regular Malware Scanning.</li>
              <li>
                Your personal information is contained behind secured networks
                and is only accessible by a limited number of persons who have
                special access rights to such systems, and are required to keep
                the information confidential. In addition, all sensitive/credit
                information you supply is encrypted via Secure Socket Layer
                (SSL) technology.
              </li>
              <li>
                We implement a variety of security measures when a user enters,
                submits, or accesses their information to maintain the safety of
                your personal information.
              </li>
              <li>
                All transactions are processed through a gateway provider and
                are not stored or processed on our servers.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Do we use 'cookies'?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            Yes. Cookies are small files that a site or its service provider
            transfers to your computer's hard drive through your Web browser (if
            you allow) that enables the site's or service provider's systems to
            recognize your browser and capture and remember certain information.
            <ul className="pt-4 list-none">
              <li>
                For instance, we use cookies to help us remember and process the
                items in your shopping cart. They are also used to help us
                understand your preferences based on previous or current site
                activity, which enables us to provide you with improved
                services. We also use cookies to help us compile aggregate data
                about site traffic and site interaction so that we can offer
                better site experiences and tools in the future.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            We use cookies to:
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            <li>
              Help remember and process clients' requests pertaining to our
              online marketing services.
            </li>
            <li>
              Understand and save user's preferences for future visits. Keep
              track of advertisements.
            </li>
            <li>Keep track of advertisements.</li>
            <li>
              Compile aggregate data about site traffic and site interactions in
              order to offer better site experiences and tools in the future. We
              may also use trusted third-party services that track this
              information on our behalf.
            </li>
            <li className="pt-4 list-none">
              You can choose to have your computer warn you each time a cookie
              is being sent, or you can choose to turn off all cookies. You do
              this through your browser settings. Since browser is a little
              different, look at your browser's Help Menu to learn the correct
              way to modify your cookies.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            If users disable cookies in their browser:
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            If you turn cookies off, Some of the features that make your site
            experience more efficient may not function properly. Some of the
            features that make your site experience more efficient and may not
            function properly.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Third-party disclosure
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information unless we provide users with
            advance notice. This does not include website hosting partners and
            other parties who assist us in operating our website, conducting our
            business, or serving our users, so long as those parties agree to
            keep this information confidential. We may also release information
            when it's release is appropriate to comply with the law, enforce our
            site policies, or protect ours or others' rights, property or
            safety.
            <li className="pt-4 list-none">
              However, non-personally identifiable visitor information may be
              provided to other parties for marketing, advertising, or other
              uses.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Third-party links
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            We do not include or offer third-party products or services on our
            website.
          </div>
        </div>
        <div className="google flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Google
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-full sm:w-1/2 break-words">
            Google's advertising requirements can be summed up by Google's
            Advertising Principles. They are put in place to provide a positive
            experience for users.{" "}
            <Link to="https://support.google.com/adwordspolicy/answer/1316548?hl=en">
              {" "}
              https://support.google.com/adwordspolicy/answer/1316548?hl=en
            </Link>
            <li className="pt-4 list-none">
              We use Google AdSense Advertising on our website.
            </li>
            <li className="pt-4 list-none">
              Google, as a third-party vendor, uses cookies to serve ads on our
              site. Google's use of the DART cookie enables it to serve ads to
              our users based on previous visits to our site and other sites on
              the Internet. Users may opt-out of the use of the DART cookie by
              visiting the Google Ad and Content Network privacy policy.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            We have implemented the following:
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033]  w-fit sm:w-1/2">
            <li>Remarketing with Google AdSense</li>
            <li className="pb-4">Demographics and Interests Reporting</li>
            We, along with third-party vendors such as Google use first-party
            cookies (such as the Google Analytics cookies) and third-party
            cookies (such as the DoubleClick cookie) or other third-party
            identifiers together to compile data regarding user interactions
            with ad impressions and other ad service functions as they relate to
            our website.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Opting out:
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033]  w-fit sm:w-1/2">
            Users can set preferences for how Google advertises to you using the
            Google Ad Settings page. Alternatively, you can opt out by visiting
            the Network Advertising Initiative Opt Out page or by using the
            Google Analytics Opt Out Browser add on.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            California Online Privacy Protection Act
          </div>
          <div className="break-words font-normal text-xl leading-9 text-[#012033] w-full sm:w-1/2">
            CalOPPA is the first state law in the nation to require commercial
            websites and online services to post a privacy policy. The law's
            reach stretches well beyond California to require any person or
            company in the United States (and conceivably the world) that
            operates websites collecting Personally Identifiable Information
            from California consumers to post a conspicuous privacy policy on
            its website stating exactly the information being collected and
            those individuals or companies with whom it is being shared. See
            more at: <br />
            <Link
              className="break-words w-fit"
              to="http://consumercal.org/california-online-privacy-protection-act-caloppa/"
            >
              {" "}
              http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            According to CalOPPA, we agree to the following:
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            <li className="pb-4 list-none">
              Users can visit our site anonymously.
            </li>
            <li className="pb-4 list-none">
              Once this privacy policy is created, we will add a link to it on
              our home page or as a minimum, on the first significant page after
              entering our website.
            </li>
            <li className="pb-4 list-none">
              Our Privacy Policy link includes the word 'Privacy' and can easily
              be found on the page specified above.
            </li>
            <li className="pb-4 list-none">
              You will be notified of any Privacy Policy changes:
            </li>
            <li className="pb-4">On our Privacy Policy Page</li>
            <li className="pb-4 list-none">
              Can change your personal information:
            </li>
            <li>By emailing us</li>
            <li>By logging in to your account</li>
            <li>By chatting with us or by sending us a support ticket</li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            How does our site handle Do Not Track signals?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            We honor Do Not Track signals and Do Not Track, plant cookies, or
            use advertising when a Do Not Track (DNT) browser mechanism is in
            place.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Does our site allow third-party behavioral tracking?
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            It's also important to note that we do not allow third-party
            behavioral tracking.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            COPPA (Children Online Privacy Protection Act)
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            When it comes to the collection of personal information from
            children under the age of 13 years old, the Children's Online
            Privacy Protection Act (COPPA) puts parents in control. The Federal
            Trade Commission, United States' consumer protection agency,
            enforces the COPPA Rule, which spells out what operators of websites
            and online services must do to protect children's privacy and safety
            online. ow third-party behavioral tracking
            <li className="pt-4 list-none">
              We do not specifically market to children under the age of 13
              years old.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            Fair Information Practices
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            The Fair Information Practices Principles form the backbone of
            privacy law in the United States and the concepts they include have
            played a significant role in the development of data protection laws
            around the globe. Understanding the Fair Information Practice
            Principles and how they should be implemented is critical to comply
            with the various privacy laws that protect personal information.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            In order to be in line with Fair Information Practices we will take
            the following responsive action, should a data breach occur:
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            We will notify you via email
            <li className="pt-4">Within 7 business days</li>
            <li>Within 4 business days</li>
            <li className="pt-4 list-none">
              We also agree to the Individual Redress Principle which requires
              that individuals have the right to legally pursue enforceable
              rights against data collectors and processors who fail to adhere
              to the law. This principle requires not only that individuals have
              enforceable rights against data users, but also that individuals
              have recourse to courts or government agencies to investigate
              and/or prosecute non-compliance by data processors.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            CAN SPAM Act
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            The CAN-SPAM Act is a law that sets the rules for commercial email,
            establishes requirements for commercial messages, gives recipients
            the right to have emails stopped from being sent to them, and spells
            out tough penalties for violations.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            To be in accordance with CANSPAM, we agree to the following:
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            <li>Not use false or misleading subjects or email addresses.</li>
            <li>
              Identify the message as an advertisement in some reasonable way.
            </li>
            <li>
              Include the physical address of our business or site headquarters.
            </li>
            <li>
              Monitor third-party email marketing services for compliance, if
              one is used.
            </li>
            <li>Honor opt-out/unsubscribe requests quickly.</li>
            <li>
              Allow users to unsubscribe by using the link at the bottom of each
              email.
            </li>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            If at any time you would like to unsubscribe from receiving future
            emails, you can email us at
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            If there are any questions regarding this privacy policy, you may
            contact us using the information below.
            <li className="pt-4 list-none flex items-center gap-1">
              Web:{" "}
              <div className="text-decoration-line: underline font-bold text-xl text-[#F77400]">
                www.reachfirst.com
              </div>
            </li>
            <li className="pt-4 list-none">
              Address: 10060 Jasper Ave, Tower 1 Suite 2020Edmonton, Alberta T5J
              3R8,Canada
            </li>
            <li className="pt-4 list-none flex items-center gap-1">
              Email:{" "}
              <div className="text-decoration-line: underline font-bold text-xl text-[#F77400]">
                info@reachfirst.com
              </div>
            </li>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacypolicy;
