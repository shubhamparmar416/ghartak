import React from "react";
import { CopyRight } from "@/src/components/common/social-links";
import Link from "next/link";
import Image from "next/image";

const footer_content = {
  footer_links: [
    {
      id: 1,
      title: "Quick Links",
      links: [
        { title: "Home", link: "#" },
        { title: "About Us", link: "about" },
        { title: "Services", link: "#" },
        { title: "Readymade Solution", link: "#" },
        { title: "Technology We Served", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Solutions",
      links: [
        { title: "Logostic App", link: "#" },
        { title: "Trading Software", link: "#" },
        { title: "Warehouse Management", link: "#" },
        { title: "Pathology Management", link: "#" },
        { title: "Automatic Attendance", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Services",
      links: [
        { title: "Website Development", link: "#" },
        { title: "App Development", link: "#" },
        { title: "Software solution ", link: "#" },
        { title: "Digital marketing", link: "#" },
      ],
    },
    {
      id: 4,
      title: "Technology",
      links: [
        { title: "PHP", link: "#" },
        { title: "Dotnet", link: "#" },
        { title: "React js", link: "#" },
        { title: "Shopify", link: "#" },
        { title: "Wordpress", link: "#" },
      ],
    },
  ],
  address:
    "Address: 405, 4th floor, Industry House, AB Rd, Near Industry House, Old Palasia, Indore, Madhya, Pradesh 452001",
  phone: "+91 93293 84316",
  email: "info@ghartaktech.com",
  footer_info:
    "And herb over image place asfemale green seasons rule herb hath To gon rule third upon fish.",
};
const { footer_links, address, phone, email, footer_info } = footer_content;

const FooterTwo = () => {
  return (
    <>
      <footer className="footer-5-bg footer-5">
        <div className="footer-area pt-100 pb-60">
          <div className="container">
            <div className="row">
              {footer_links.map((item, i) => (
                <div key={i} className="col-xl-2 col-lg-4 col-md-4">
                  <div className="footer-widget mb-40">
                    <h3>{item.title}</h3>
                    <ul>
                      {item.links.map((link, index) => (
                        <li key={index}>
                          <Link href={link.link}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="footer-widget mb-40">
                  <h3>Contact Info</h3>
                  <div className="footer-contact">
                    <ul>
                      <li>
                        <i className="far fa-map-marked-alt"></i>
                        <p>{address}</p>
                      </li>
                      <li>
                        <i className="far fa-phone"></i>
                        <p>
                          <a href="tel:9329384316">{phone}</a>
                        </p>
                      </li>
                      <li>
                        <i className="fal fa-envelope-open"></i>
                        <p>
                          {" "}
                          <a href="mailto:info@ghartaktech.com">{email}</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20">
          <div className="container">
            <div className="copyright-border-none">
              <div className="row">
                <div className="col-xl-12 col-lg-6 col-md-6">
                  <h3>Reviewed On</h3>
                  <ul className="d-flex">
                    <li className="me-3">
                      <a
                        target="_blank"
                        href="https://clutch.co/profile/ghartak-tech"
                      >
                        <img
                          className=""
                          src="assets/img/logo/clutch.webp"
                          alt="theme-pure"
                        />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className=""
                          src="assets/img/logo/glassdoor.webp"
                          alt="theme-pure"
                        />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area cop-sep pt-20 pb-20">
          <div className="container">
            <div className="copyright-border-none">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="copyright">
                    <p>
                      <CopyRight />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="whatsappimg hidden-xs hidden-sm">
        <a class="imgwtsapp" href="https://wa.me/+919329384316" target="_blank">
          <img
            src="assets/img/whatsapp-icon.png"
            id="youtubeimg"
            loading="lazy"
            alt="whatsapp icon"
          />
        </a>
      </div>
    </>
  );
};

export default FooterTwo;
