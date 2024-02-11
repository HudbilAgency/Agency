/* eslint-disable no-unused-vars */
import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom"; // Import BrowserRouter as Router

import Contact from "../pages/contact.jsx";
import Who from "../pages/about-us.jsx";
import Approach from "../pages/approach.jsx";
import Achievers from "../pages/culture.jsx";
import Team from "../pages/team.jsx";
import Industries from "../pages/industries.jsx";
import Home from "../pages/Home.jsx";
import Awards from "../pages/awards.jsx";
import WeDo from "../pages/weDo.jsx";
import Acma from "../pages/acma.jsx";
import Foximpact from "../pages/fox-impact.jsx";
import Permarketing from "../pages/performance-marketing.jsx";
import Hudbilservices from "../pages/hudbil-services.jsx";
import Kalacodeservices from "../pages/kalacode-services.jsx";
import Ourblogs from "../pages/our-blogs.jsx";
import Blog1 from "../pages/blog-1.jsx";
import Blog2 from "../pages/blog-2.jsx";
import Blog3 from "../pages/blog-3.jsx";
import Blog4 from "../pages/blog-4.jsx";
import Blog5 from "../pages/blog-5.jsx";
import Blog6 from "../pages/blog-6.jsx";
import Blog7 from "../pages/blog-7.jsx";
import Blog8 from "../pages/blog-8.jsx";
import Blog9 from "../pages/blog-9.jsx";
import Blog10 from "../pages/blog-10.jsx";
import Faq from "../pages/faq.jsx";
import Privacypolicy from "../pages/privacy-policy.jsx";
import Cookiepolicy from "../pages/cookie-policy.jsx";
import Termsofservice from "../pages/terms-of-service.jsx";
import Accessibility from "../pages/accessbility.jsx";
import Omnimarketing from "../pages/omnichannel-marketing.jsx";
import Leadgen from "../pages/lead-generation.jsx";
import Contentmarketing from "../pages/content-marketing.jsx";
import Toolstation from "../pages/toolstation.jsx";
import Soloexpenses from "../pages/solo-expenses.jsx";
import Cedevita from "../pages/cedevita.jsx";
import Sockshop from "../pages/sock-shop.jsx";
import Rec from "../pages/rec.jsx";
import Itv from "../pages/itv.jsx";
import Support from "../pages/support.jsx";
import Charge from "../pages/charge.jsx";
import Whoweare from "../pages/who-we-are.jsx";
import Whatwedo from "../pages/what-we-do.jsx";
import Page1 from "../pages/page1.jsx";
import OurBrand from "../pages/our-brand.jsx";
import Whowehire from "../pages/Whowehire.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/support-us" element={<Support />} />
      <Route path="/about-us" element={<Who />} />
      <Route path="/our-approach" element={<Approach />} />
      <Route path="/our-culture" element={<Achievers />} />
      <Route path="/our-team" element={<Team />} />
      <Route path="/our-industries" element={<Industries />} />
      <Route path="/our-awards" element={<Awards />} />
      <Route path="/our-services" element={<WeDo />} />
      <Route path="/acma" element={<Acma />} />
      <Route path="/toolstation" element={<Toolstation />} />
      <Route path="/solo-expenses" element={<Soloexpenses />} />
      <Route path="/cedevita" element={<Cedevita />} />
      <Route path="/sock-shop" element={<Sockshop />} />
      <Route path="/rec" element={<Rec />} />
      <Route path="/itv" element={<Itv />} />
      <Route path="/who-we-are" element={<Whoweare />} />
      <Route path="/what-we-do" element={<Whatwedo />} />
      <Route path="/what-we-did" element={<Foximpact />} />
      <Route path="/what-we-charge" element={<Charge />} />
      <Route path="/performance-marketing" element={<Permarketing />} />
      <Route path="/omni-channel-marketing" element={<Omnimarketing />} />
      <Route path="/lead-generation" element={<Leadgen />} />
      <Route path="/content-marketing" element={<Contentmarketing />} />
      <Route path="/hudbil-services" element={<Hudbilservices />} />
      <Route path="/kalacode-services" element={<Kalacodeservices />} />
      <Route path="/our-blogs" element={<Ourblogs />} />
      <Route path="/blog-1" element={<Blog1 />} />
      <Route path="/blog-2" element={<Blog2 />} />
      <Route path="/blog-3" element={<Blog3 />} />
      <Route path="/blog-4" element={<Blog4 />} />
      <Route path="/blog-5" element={<Blog5 />} />
      <Route path="/blog-6" element={<Blog6 />} />
      <Route path="/blog-7" element={<Blog7 />} />
      <Route path="/blog-8" element={<Blog8 />} />
      <Route path="/blog-9" element={<Blog9 />} />
      <Route path="/blog-10" element={<Blog10 />} />
      <Route path="/privacy-policy" element={<Privacypolicy />} />
      <Route path="/cookie-policy" element={<Cookiepolicy />} />
      <Route path="/terms-of-service" element={<Termsofservice />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/our-brand" element={<OurBrand />} />
      <Route path="/who-we-hire" element={<Whowehire />} />
    </Routes>
  );
};

export default Routers;
