import React from "react";
import Link from "next/link";
import Image from "next/image";

import access_shape_1 from "@assets/img/shape/shape6.png";
import access_img from "@assets/img/bg/social-bg.png";
import about_us_img from "@assets/img/bg/hw-img.png";

const access_content = {
  title: <> Who We Are </>,
  sm_des: (
    <>
      {" "}
      {/* Ghartak Tech Services is a cutting-edge IT company specializing in
      providing innovative technological solutions to businesses across various
      industries. With a focus on excellence and customer satisfaction, we
      strive to empower organizations by leveraging the latest advancements in
      technology. */}
      We are pleased to introduce ourselves as a result-oriented Website Design
      Service, Website Development Service, Mobile Application Development
      Service, E-commerce Website development Service, Social Media Marketing
      Service, Logo Design Service, Graphics Design & Online Business Consulting
      agency. We provide end-to-end marketing solutions for your business
      whether it is building a website, apps on the web or mobile, leads
      generation, Content Marketing, Youtube Marketing, Graphics Design,Search
      Engine Optimization and Management, E-commerce Website, Social Media
      Marketing and Account handling, Paid Online Promotions, Growth Hacking,
      Performance Marketing.
    </>
  ),
};
const { title, sm_des } = access_content;

const AccessArea = () => {
  return (
    <>
      <section className="access-area pos-relative pt-80">
        <div className="shape-section">
          <Image
            className="shape shape-a "
            src={access_shape_1}
            alt="theme-pure"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 ">
              <div>
                <Image
                  className="w-100 h-auto"
                  src={about_us_img}
                  alt="theme-pure"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="acces-text pt-35">
                <h3>{title}</h3>
                <p>{sm_des}</p>
                <div data-aos="fade-up">
                  <Link href="/contact" className="x-btn">
                    Let's Talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessArea;
