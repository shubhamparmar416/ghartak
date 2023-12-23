import React from "react";
import Image from "next/image";

import shape_line_img from "@assets/img/shape/line.png";
import work_img_1 from "@assets/img/icon/hw-1.png";
import work_img_2 from "@assets/img/icon/hw-2.png";
import work_img_3 from "@assets/img/icon/hw-3.png";
import work_img_4 from "@assets/img/icon/hw-4.png";

const work_data = [
  {
    id: 1,
    icon: work_img_1,
    title: "SOFTWARE SOLUTIONS",
    description: (
      <>
        We design and develop custom software solutions tailored to meet the
        unique needs of our clients. Our expertise ranges from web and mobile
        applications to enterprise software systems.
      </>
    ),
  },
  {
    id: 2,
    icon: work_img_2,
    title: "WEBSITE DEVELOPMENT",
    description: (
      <>
        GT Tech is a premier provider of comprehensive website development
        services, dedicated to creating captivating, functional, and
        user-friendly websites for your businesses .
      </>
    ),
  },
  {
    id: 3,
    icon: work_img_3,
    title: "APPLICATION DEVELOPMENT",
    description: (
      <>
        We design and develop custom application development services, dedicated
        to crafting innovative and tailored software solutions for businesses of
        all sizes and industries.
      </>
    ),
  },
  {
    id: 4,
    icon: work_img_4,
    title: "DIGITAL MARKETING:",
    description: (
      <>
        GT Tech is a results-driven digital marketing agency dedicated to
        helping businesses thrive in the online landscape. With a focus on
        innovation, strategy, and measurable outcomes.
      </>
    ),
  },
];
const HWArea = ({ style_service_2, process, style_fancy }) => {
  return (
    <>
      <div
        className={`${
          style_service_2
            ? "hw-area-2 mb-120"
            : process
            ? "hw-area pt-145 pb-120"
            : style_fancy
            ? "hw-area "
            : "hw-area  mt-80 mb-80"
        } fix`}
      >
        <div className="container">
          {style_fancy ? null : (
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="section-title-2 text-center mb-40">
                  <span className="st-sub">How we works</span>
                  <h2 className="mb-20 f-600">Our Services</h2>
                  <Image src={shape_line_img} alt="theme-pure" />
                </div>
              </div>
            </div>
          )}
          <div className="row">
            {work_data.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="hw-list text-center">
                  <div className="ex-fea-img hw-list-img">
                    <Image src={item.icon} alt="theme-pure" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tech-use wrapper-padding sbm-pd-wrap p-50">
        <div className="container cstm-container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section-title-2 text-center mb-40">
                <span>INDUSTRIES</span>
                <h2>Explore our served industries</h2>
              </div>
            </div>
          </div>
          <div className="tech-row mt-4 sbm-tech-row">
            <div class="industries-tech">
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/loc.jpeg"
                  width="150"
                  height="96"
                  alt="PHP Web Development Services"
                  className="img-fluid"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/med.jpeg"
                  width="150"
                  height="96"
                  alt="Node JS Development Services"
                  className="img-fluid"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/game.jpeg"
                  width="150"
                  height="96"
                  alt="Angular Web Development"
                  className="img-fluid"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/hotel.jpeg"
                  width="150"
                  height="96"
                  alt="Python Web Development"
                  className="img-fluid"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/men.jpeg"
                  width="150"
                  height="96"
                  alt="Dot Net Framework Development"
                  className="img-fluid"
                ></Image>
              </div>
            </div>
            <div class="industries-tech">
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/graph.jpeg"
                  alt="Android App Development"
                  className="img-fluid"
                  width="150"
                  height="96"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/menmob.jpeg"
                  alt="iOS App Development Services"
                  className="img-fluid"
                  width="150"
                  height="96"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/ride.jpeg"
                  alt="Hybrid App Development Services"
                  className="img-fluid"
                  width="150"
                  height="96"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/bank.jpeg"
                  alt="React Native Development Services"
                  className="img-fluid"
                  width="150"
                  height="96"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/laptop.jpeg"
                  alt="Xamarin Development Services"
                  className="img-fluid"
                  width="150"
                  height="96"
                ></Image>
              </div>
            </div>
            <div class="industries-tech">
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/menmob.jpeg"
                  width="150"
                  height="96"
                  alt="PHP Web Development Services"
                  className="img-fluid"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/leave.jpeg"
                  width="150"
                  height="96"
                  alt="Node JS Development Services"
                  className="img-fluid"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/lappi.jpeg"
                  width="150"
                  height="96"
                  alt="Angular Web Development"
                  className="img-fluid"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/mem.jpeg"
                  width="150"
                  height="96"
                  alt="Python Web Development"
                  className="img-fluid"
                ></Image>
              </div>
              <div className="tech-column-1">
                {" "}
                <Image
                  src="/assets/img/med.jpeg"
                  width="150"
                  height="96"
                  alt="Node JS Development Services"
                  className="img-fluid"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HWArea;
