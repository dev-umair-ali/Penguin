import React from "react";
import { HashLink } from "react-router-hash-link";
import book from "../../assets/images/will-book.webp"

const AboutSection = (props) => {
  return (
    <section className="about-sec-wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about-main-content">
              <span>
                <i className="fa-solid fa-bolt"></i> {props.text}
              </span>
              <h2>{props.headText}</h2>
              <p>{props.para1}</p>
              <p>{props.para2}</p>
              <p> {props.para3}</p>
              <div className="about-cta-btns">
                <HashLink to="#contactForm">
                  <button className="popup-btn">Get a Quote</button>
                </HashLink>
                <a href="javascript:void(Tawk_API.toggle())">
                  <button className="chat-btn" onClick={() => setButtonURL()}>
                    Let's Talk
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="about-main-img">
              <img src={props.picture} alt="img" className="img-fluid" />
              {props.img && (
                <div className="about-book-img">
                  <img
                    src={book}
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
