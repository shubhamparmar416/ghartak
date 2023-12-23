import React from "react";
import Image from "next/image";
// feature img & icons import here
import feature_img_1 from "@assets/img/shape/shape-tri.png";
import feature_img_2 from "@assets/img/shape/shape-zigzag.png";
import feature_img_3 from "@assets/img/bg/fea-img.png";

import feature_icon_1 from "@assets/img/icon/fea-icon-1.png";
import feature_icon_2 from "@assets/img/icon/fea-icon-2.png";
import feature_icon_3 from "@assets/img/icon/fea-icon-3.png";
import feature_icon_4 from "@assets/img/icon/fea-icon-4.png";

// feature data here
const feature_data = [
  {
    id: 1,
    icon: feature_icon_1,
    title: "Creative",
    info: (
      <>
        We just don’t create a websites, we bring in a experience that converts
        visitors into your customers.{" "}
      </>
    ),
  },
  {
    id: 2,
    icon: feature_icon_2,
    title: "Approach",
    info: (
      <>
        Our primary objective is to understand your needs and deliver beyond
        your expectations
      </>
    ),
  },
  {
    id: 3,
    icon: feature_icon_3,
    title: "Relevant",
    info: (
      <>
        We understand that User Interests are the primary concern for your
        business andweb development services.
      </>
    ),
  },
  {
    id: 4,
    icon: feature_icon_4,
    title: "Experts",
    info: (
      <>
        The thing which makes Maven Cluster a leading IT Firm in this Industry
        is its Incredible Team.
      </>
    ),
  },
];

const FeaturesArea = () => {
  return (
    <>
      <section className="features-area pos-relative pt-80 pb-80">
        <div className="shape-slider">
          <span className="shape shape-circle shape-c-2 "></span>
          <Image
            className="shape shape-af-1"
            src={feature_img_1}
            alt="theme-pure"
          />
          <Image
            className="shape shape-af-2"
            src={feature_img_2}
            alt="theme-pure"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section-title-2 text-center mb-20">
                <span>PHENOMENAL ASPECT</span>
                <h2>The most impactful method for envisioning the future.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div
                className="features-image wow fadeInLeft animated"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
              >
                <Image src={feature_img_3} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="row features-parent pt-90">
                {feature_data.map((item, i) => (
                  <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="features-list mb-55">
                      <div className="fea-icon mb-20">
                        <span></span>
                        <Image src={item.icon} alt="theme-pure" />
                      </div>
                      <div className="fea-text">
                        <h3>{item.title}</h3>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tech-use wrapper-padding sbm-pd-wrap">
        <div className="container cstm-container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section-title-2 text-center mb-40">
                <span>Technology</span>
                <h2>We focus on cutting-edge technology</h2>
              </div>
            </div>
          </div>
          <div className="tech-row mt-4 sbm-tech-row">
            <div class="five-tech">
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/php.png"
                    width="150"
                    height="96"
                    alt="PHP Web Development Services"
                    className="img-fluid"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/node-tech.png"
                    width="150"
                    height="96"
                    alt="Node JS Development Services"
                    className="img-fluid"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/angular.png"
                    width="150"
                    height="96"
                    alt="Angular Web Development"
                    className="img-fluid"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/python.png"
                    width="150"
                    height="96"
                    alt="Python Web Development"
                    className="img-fluid"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/dot-net-framework.png"
                    width="150"
                    height="96"
                    alt="Dot Net Framework Development"
                    className="img-fluid"
                  ></Image>
                </a>
              </div>
            </div>
            <div class="five-tech">
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/tech-android.png"
                    alt="Android App Development"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
              <div className="tech-column ioss">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/iOS-Logo-2017.jpg"
                    alt="iOS App Development Services"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/hybrid.png"
                    alt="Hybrid App Development Services"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/react-native.png"
                    alt="React Native Development Services"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/xamarin.png"
                    alt="Xamarin Development Services"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
            </div>
            <div class="five-tech">
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/tech-codeigniter.png"
                    alt="Codeigniter Framework Development"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/tech-laravel.png"
                    alt="Laravel Development Services"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/shopify-tech.png"
                    alt="Shopify Development Services"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/magento.png"
                    alt="Magento Development Services"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
              <div className="tech-column">
                <a href="#">
                  {" "}
                  <Image
                    src="/assets/img/WordPress.png"
                    alt="WordPress Development Services"
                    className="img-fluid"
                    width="150"
                    height="96"
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesArea;
