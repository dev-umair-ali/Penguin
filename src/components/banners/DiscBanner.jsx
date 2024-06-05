import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import image from "../../assets/images/discount.webp" 
const DiscBanner = ({ head, text }) => {
  return (
    <section className="sec_cta">
      <div className="container">
        <div className="row">
          <div className="cta_inner d-flex">
            <div className="col-md-5">
              <div
                className="cta_left wow fadeInUp animate__animated"
                style={{ visibility: "visible" }}
              >
                <img
                  loading="lazy"
                  src={image}
                  alt="discount"
                  width={206}
                  height={211}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="cta_right wow fadeInRight animate__animated"
                style={{ visibility: "visible" }}
              >
                <h3>{head}</h3>
                <p>{text}</p>
                <div className="button-chat">
                  <a
                    href="javascript:void(Tawk_API.toggle())"
                    className="btn-pink"
                  >
                    Write My Book
                  </a>
                  <HashLink to="#contactForm" className="link-btn ">
                    {" "}
                    Contact Us
                  </HashLink>
                </div>
                <div className="number">
                  <a href="tel:+1 (414)-296-5327">+1 (414)-296-5327</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscBanner;
