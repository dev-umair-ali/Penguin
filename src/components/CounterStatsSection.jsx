import React from "react";
import { HashLink } from "react-router-hash-link";

const CounterStatsSection = (props) => {
  return (
    <section className="counter-stats-wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="counter-content">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="counter-content-box">
                    <h5 id="number1">40</h5>
                    <p>
                      #1 New York Times <br />
                      Bestsellers
                    </p>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="counter-content-box">
                    <h5 id="number2">75</h5>
                    <p>
                      National <br />
                      Bestsellers
                    </p>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="counter-content-box">
                    <h5 id="number3">480</h5>
                    <p>
                      Traditionally <br />
                      Published Books
                    </p>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="counter-content-box">
                    <h5 id="number4">320</h5>
                    <p>
                      Books <br />
                      Bestsellers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="stats-heading">
              <h2>{props.heading}</h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="stats-content">
              <p>{props.para}</p>
              <div className="counter-cta-btns">
                <HashLink to="#contactForm">
                  <button
                    className="popup-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#penguinBackdrop"
                  >
                    Get A Free
                  </button>
                </HashLink>
                <a href="javascript:void(Tawk_API.toggle())">
                  <button className="chat-btn">Consultation Now!</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CounterStatsSection.defaultProps = {
  heading: "Are You Ready to Publish Your Book?",
  para: "Your story deserves to be told—let our expertly crafted words give voice to your ideas in the realm of literature.",
};
export default CounterStatsSection;
