import React from "react";
import PortfolioImg from "./PortfolioImg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="our-portfolio-sec">
      <div className="container">
        <div className="portfolio-head">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="portfolio-head-content text-center">
                <h3>Our Portfolio</h3>
                <p>
                Let Our Work Speak for Itself. Explore the Benefits of Choosing Penguin Author House for Your Dream Book.
                </p>
              </div>
            </div>
          </div>
        </div>
       <PortfolioImg />
        <div className="counter-cta-btns mt-5">
        <HashLink to="#contactForm">
          <button
            className="popup-btn"
          >
            Get a Quote
          </button>
          </HashLink>
          <Link to="/portfolio"  className="link-btn">
            Our Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
