import React, { useEffect, useRef, useState } from "react";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";

const Termsofservice = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <NavbarAndFullscreenMenu />

      <div className=" mt-10 px-3 pb-12 sm:pb-20 text-center sm:px-20 lg:px-40 2xl:px-64 text-[#DF2323] text-6xl sm:text-[6rem] font-semibold leading-tight">
        <h1> TERMS OF SERVICE </h1>
      </div>

      <img className="w-full" src="./tos-main.png" alt="" />

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
            1. TERMS
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            By accessing this web site, you are agreeing to be bound by these
            web site Terms and Conditions of Use, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this web site are protected by applicable
            copyright and trade mark law.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            2. Use License
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            <div className="flex gap-1">
              <li className="font-bold list-none">A.</li>Permission is granted
              to temporarily download one copy of the materials (information or
              software) on COLTFOX Agency's web site for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </div>
            <div className="pt-4 flex gap-1">
              <li className="font-bold list-none">i.</li>Modify or copy the
              materials;
            </div>
            <div className="pt-4 flex gap-1">
              <li className="font-bold list-none">ii.</li>Use the materials for
              any commercial purpose, or for any public display (commercial or
              non-commercial);
            </div>
            <div className="pt-4 flex gap-1">
              <li className="font-bold list-none">iii.</li>Attempt to decompile
              or reverse engineer any software contained on COLTFOX Agency's web
              site;
            </div>
            <div className="pt-4 flex gap-1">
              <li className="font-bold list-none">iv.</li>Remove any copyright
              or other proprietary notations from the materials
            </div>
            <div className="pt-4 flex gap-1">
              <li className="font-bold list-none">v.</li>Transfer the materials
              to another person or "mirror" the materials on any other server.
            </div>
            <div className="pt-4 flex gap-1">
              <li className="font-bold list-none">B.</li>This license shall
              automatically terminate if you violate any of these restrictions
              and may be terminated by COLTFOX Agency at any time. Upon
              terminating your viewing of these materials or upon the
              termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            3. Disclaimer
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            The materials on COLTFOX Agency's web site are provided "as is".
            COLTFOX Agency makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties, including without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further, COLTFOX
            Agency does not warrant or make any representations concerning the
            accuracy, likely results, or reliability of the use of the materials
            on its Internet web site or otherwise relating to such materials or
            on any sites linked to this site.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            4. Limitations
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            In no event shall COLTFOX Agency or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption,) arising out of the use or
            inability to use the materials on COLTFOX Agency's Internet site,
            even if COLTFOX Agency or a COLTFOX Agency authorized representative
            has been notified orally or in writing of the possibility of such
            damage. Because some jurisdictions do not allow limitations on
            implied warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            5. Revisions and Errata
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            The materials appearing on COLTFOX Agency's web site could include
            technical, typographical, or photographic errors. COLTFOX Agency
            does not warrant that any of the materials on its web site are
            accurate, complete, or current. COLTFOX Agency may make changes to
            the materials contained on its web site at any time without notice.
            COLTFOX Agency does not, however, make any commitment to update the
            materials.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            6. Links
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            COLTFOX Agency has not reviewed all of the sites linked to its
            Internet web site and is not responsible for the contents of any
            such linked site. The inclusion of any link does not imply
            endorsement by COLTFOX Agency of the site. Use of any such linked
            web site is at the user's own risk.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            7. Site Terms of Use Modifications
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            COLTFOX Agency may revise these terms of use for its web site at any
            time without notice. By using this web site you are agreeing to be
            bound by the then current version of these Terms and Conditions of
            Use.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 justify-between pb-8 sm:pb-16">
          <div className="text-3xl sm:text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2">
            8. Governing Law
          </div>
          <div className="font-normal text-xl leading-9 text-[#012033] w-fit sm:w-1/2">
            Any claim relating to COLTFOX Agency's web site shall be governed by
            the laws of the State of Texas without regard to its conflict of law
            provisions.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Termsofservice;
