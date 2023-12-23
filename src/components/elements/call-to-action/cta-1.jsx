import Link from "next/link";

const CallToActionOne = () => {
  return (
    <>
      <div className="cta-area pt-80 pb-60 gn-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="cta-text mb-30">
                <span>do you have any project ?</span>
                <h1>Let's collaborate about innovative business solutions.</h1>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="cta-button text-lg-right mb-30">
                <Link className="x-btn x-btn-white" href="/contact">
                  <span className="btn-text">
                    join with us
                    <i className="far fa-long-arrow-right"></i>
                  </span>
                </Link>
                <Link className="cta-link" href="tel:9329384316">
                  <i className="far fa-phone"></i> +91 93293 84316
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToActionOne;
