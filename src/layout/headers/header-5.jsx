import useSticky from "@/src/hooks/use-sticky";
import Link from "next/link";
import React from "react";
import NavMenu from "./nav-menu";
import MobileMenus from "./mobile-menus";

const HeaderThree = ({ style_7 }) => {
  const { sticky } = useSticky();

  return (
    <>
      <section className="bg-darkblue">
        <div className="container">
          <div className="row align-items-center">
            <div className=" col-lg-6">
              <ul class="d-flex ">
                <li class="">
                  <a target="_blank" href="tel:9329384316">
                    <span class="">
                      <i aria-hidden="true" class="fas fa-phone"></i>{" "}
                    </span>
                    <span class="">+919329384316</span>
                  </a>
                </li>
                <li class="">
                  <a target="_blank" href="mailto:info@ghartaktech.com">
                    <span class="">
                      <i aria-hidden="true" class="far fa-envelope"></i>{" "}
                    </span>
                    <span class="">info@ghartaktech.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className=" col-lg-6  ">
              <ul class="d-flex justify-content-end">
                <li class="">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/ghartaktech/"
                  >
                    <span class="">
                      <i aria-hidden="true" class="fab fa-facebook"></i>{" "}
                    </span>
                  </a>
                </li>

                <li class="">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ghartaktech/"
                  >
                    <span class="">
                      <i aria-hidden="true" class="fab fa-instagram"></i>{" "}
                    </span>
                  </a>
                </li>
                <li class="">
                  <a target="_blank" href="https://twitter.com/GhartakTech">
                    <span class="">
                      <i aria-hidden="true" class="fab fa-twitter"></i>{" "}
                    </span>
                  </a>
                </li>
                <li class="">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/ghartak-tech/"
                  >
                    <span class="">
                      <i aria-hidden="true" class="fab fa-linkedin-in"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <header
        id="header-sticky"
        className={`${
          style_7 ? "header-transparent header-green" : "header-normal"
        }  ${sticky && "sticky-bar"}`}
      >
        <div className="header-area">
          <div className="container">
            <div className="position-relative">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link href="/">
                      {" "}
                      <img
                        className="w-75"
                        src="assets/img/logo/logo.png"
                        alt="theme-pure"
                      />{" "}
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 position-static">
                  <div
                    className={`main-menu ${
                      style_7 ? "" : "pink-menu"
                    } text-center d-none d-lg-block`}
                  >
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                  <div className="mobile-menu mean-container d-lg-none">
                    <div className="mean-push"></div>
                    <div className="mean-bar">
                      <MobileMenus />
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                  <div className="header-btn text-right">
                    <Link
                      href="/contact"
                      className={`x-btn  ${style_7 ? "" : "btn-radius"}`}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderThree;
