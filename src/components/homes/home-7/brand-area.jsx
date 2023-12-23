import React from "react";
import InnerBrandArea from "./../../common/inner-brand-area";

const BrandArea = () => {
  return (
    <>
      <section className="brand-area  pb-80 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="section-title-2 text-center mb-70">
                <span>Elevating Businesses with Our Accomplished Partners</span>
                <h2>Trusted Connections</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <InnerBrandArea />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandArea;
