import React from "react";
import { HashLink } from "react-router-hash-link";
import image from "../../assets/images/give-story-imgh.webp"
const MidBanner = (props) => {
  return (
    <section className="about-sec-wrap bg-gray">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about-main-img">
              <img
                src={image}
                alt="img"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about-main-content">
              <h2>{props.head}</h2>
              <p>{props.para1}</p>
              <p> {props.para2}</p>
              <p> {props.para3}</p>
              <div className="about-cta-btns">
                <HashLink to="#contactForm">
                  <button className="popup-btn">Get a Quote</button>
                </HashLink>
                <a href="javascript:void(Tawk_API.toggle())">
                  <button className="chat-btn" >
                    Let's Chat
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidBanner;
