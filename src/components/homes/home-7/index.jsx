import React from "react";
import HeroArea from "./hero-area";
import HeaderThree from "@/src/layout/headers/header-3";
import ServiceArea from "./service-area";
import AccessArea from "./access-area";
import FeatureArea from "../home-2/features-area";
import AccessAreaTwo from "./access-area-2";
import PriceAreaHomeSeven from "./price-area-home-7";
import TestimonialAreaHomeSix from "../../homes/home-6/testimonial-area";
import BrandArea from "./brand-area";
import NewsletterArea from "./newsletter-area";
import Footer from "@/src/layout/footers/footer";
import WhatWeDoArea from "../home-2/what-we-do-area";
import FooterTwo from "@/src/layout/footers/footer-2";
import HWArea from "../home-4/hw-area";
import CounterArea from "../../elements/counter/counter-area";
import CallToActionOne from "../../elements/call-to-action/cta-1";

const HomeSeven = () => {
  return (
    <>
      <HeaderThree style_7={true} />
      <main>
        <HeroArea />

        {/* <ServiceArea /> */}
        <AccessArea />
        <HWArea />
        <CounterArea />
        <FeatureArea />
        {/* <AccessAreaTwo /> */}
        {/* <PriceAreaHomeSeven /> */}
        <TestimonialAreaHomeSix />
        <BrandArea />
        <CallToActionOne />
        {/* <NewsletterArea /> */}
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeSeven;
