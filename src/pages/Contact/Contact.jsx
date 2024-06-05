import React, { useEffect } from "react";
import BannerV2 from "../../components/banners/BannerV2";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Contact";
  }, []);
  return (
    <>
      <BannerV2 head={"Contact Us"} />

      <section className="contact-section">
        <div className="container">
          <ContactForm
            text={"GET TO KNOW MORE ABOUT OUR SERVICES!"}
            head={"GET IN TOUCH, CONNECT WITH US!"}
            para={
              "Our support agents will assist you and address all your queries!"
            }
          />{" "}
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="contact-page-links contact-page-links-flex">
              <div className="contact-box-main">
                <i className="fa fa-phone text-decoration-none"></i>
                <div className="contact-box-content">
                  <h4>Call Us:</h4>
                  <a href="tel:+1 (414)-296-5327">+1 (414)-296-5327</a>
                </div>
              </div>
              <div className="contact-box-main">
                <i className="fa fa-envelope text-decoration-none"></i>
                <div className="contact-box-content">
                  <h4>Mail Us:</h4>
                  <a href="mailto:penguinauthorhouse.com">
                    <span>info@penguinauthorhouse.com</span>
                  </a>
                </div>
              </div>
              <div className="contact-box-main">
                <i className="fa-solid fa-location-dot" />
                <div className="contact-box-content">
                  <h4>Location:</h4>
                  <a>4715 S 39 STREET GREENFIELD, Milwaukee, WI, United States, Wisconsin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
