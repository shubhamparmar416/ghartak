import Image from "next/image";
import Slider from "react-slick";
import React, { useRef } from "react";

import testimonial_shape_1 from "@assets/img/shape/shape-f-1.png";
import testimonial_shape_2 from "@assets/img/shape/shape2.png";
// testimonial data
const testimonial_data = [
  {
    id: 1,
    name: "Vinit Agrawal",
    job_title: "",
    info: (
      <>
        Their expertise in implementing cutting-edge solutions is unparalleled. The team's commitment to excellence and proactive support have been instrumental in our company's success.
      </>
    ),
  },
  {
    id: 2,
    name: "Stuti Sinha",
    job_title: "",
    info: (
      <>
      Their strategic approach to IT solutions has streamlined our operations and enhanced overall efficiency. Responsive, reliable, and truly innovative – GT Tech is the real deal."
      </>
    ),
  },
  {
    id: 3,
    name: "Shreeniwas jain",
    job_title: "",
    info: (
      <>
         Collaborating with GT Tech has been a pleasure. Their creative approach to web development elevated our online presence. Responsive design, seamless functionality – GT Tech exceeded our expectations.
      </>
    ),
  },
];
// setting
const setting = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 700,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TestimonialArea = ({ style_testimonial }) => {
  const { sliderRef } = useRef(null);
  return (
    <>
      <div
        className={`testimonial-area pos-relative ${
          style_testimonial ? "pt-120 pb-120" : "pb-80 pt-80"
        }`}
      >
        <div className="shape-slider">
          <Image
            className="shape shape-1 shape-5-1 "
            src={testimonial_shape_1}
            alt="theme-pure"
          />
          <Image
            className="shape shape-5 "
            src={testimonial_shape_2}
            alt="theme-pure"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section-title-2 text-center mb-40">
                <span>Testimonials</span>
                <h2>Client's positive feedback</h2>
              </div>
            </div>
          </div>

          <Slider
            {...setting}
            ref={sliderRef}
            className="row testimonial-text-active dot-style"
          >
            {testimonial_data.map((item, i) => (
              <div key={i} className="col-xl-6 pl-15 pr-15">
                <div className="testi-wrapper">
                  <div className="client-info-text mb-20">
                    <h4>{item.name}</h4>
                    <span>{item.job_title}</span>
                  </div>
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialArea;
