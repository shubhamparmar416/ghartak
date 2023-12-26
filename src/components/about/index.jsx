import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import AboutUs from "./about-us";
import ServiceArea from "../homes/home-5/service-area";
import TestimonialAreaHomeSix from "../homes/home-6/testimonial-area";
import BrandArea from "./brand-area";
import Footer from "@/src/layout/footers/footer";
import AccessArea from "../homes/home-7/access-area";
import CallToActionOne from "../elements/call-to-action/cta-1";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="About Us" title="About" />
        <AccessArea />
        {/* <ServiceArea about={true} /> */}
        <TestimonialAreaHomeSix />
        {/* <BrandArea /> */}
        <CallToActionOne />
      </main>
      <Footer />
    </>
  );
};

export default About;
