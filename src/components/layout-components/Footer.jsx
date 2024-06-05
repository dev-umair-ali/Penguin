import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
const Footer = () => {
  return (
    <footer className="footer-main-sec">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="footer-links-area">
                <h4>Ghostwriting</h4>
                <div className="footer-services-nav-links">
                  <ul className="footer-nav-links">
                    <li>
                      <Link to={"/non-fiction"}>Non-Fiction Writing</Link>
                    </li>
                    <li>
                      <Link to={"/memoir-writing"}>Memoir Writing</Link>
                    </li>
                    <li>
                      <Link to={"/manuscript-writing"}>Manuscript Writing</Link>
                    </li>
                    <li>
                      <Link to={"/comic-book-writing"}>Comic Book Writing</Link>
                    </li>
                    <li>
                      <Link to={"/action-adventure-writing"}>
                        Action Adventure
                      </Link>
                    </li>
                    <li>
                      <Link to={"/biography-writing"}>Biography Writing</Link>
                    </li>
                    <li>
                      <Link to={"/military-fiction-writing"}>
                        Military Fiction Writing
                      </Link>
                    </li>
                    <li>
                      <Link to={"/fantasy-writing"}>Fantasy Writing</Link>
                    </li>
                  </ul>
                  <ul className="footer-nav-links">
                    <li>
                      <Link to={"/horror-writing"}>Horror Writing</Link>
                    </li>
                    <li>
                      <Link to={"/rhyme-writing"}>Rhyme Writing</Link>
                    </li>
                    <li>
                      <Link to={"/screenplay-writing"}>Screenplay Writing</Link>
                    </li>
                    <li>
                      <Link to={"/story-writing"}>Story Writing</Link>
                    </li>
                    <li>
                      <Link to={"/autobiography"}>Autobiography</Link>
                    </li>
                    <li>
                      <Link to={"/sci-fi-writing"}>Sci Fi Writing</Link>
                    </li>
                    <li>
                      <Link to={"/childrens-book-writing"}>
                        Children's Book Writing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="footer-links-area">
                <h4>Book Design</h4>
                <ul className="footer-nav-links">
                  <li>
                    <Link to={"/book-cover-design"}>Book Cover Design</Link>
                  </li>
                  <li>
                    <Link to={"/author-website-design"}>
                      Author Website Design
                    </Link>
                  </li>
                  <li>
                    <Link to={"/book-illustration-design"}>
                      Book Illustration Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="footer-links-area">
                <h4>Other Services</h4>
                <ul className="footer-nav-links">
                  <li>
                    <Link to={"/ghostwriting"}>Ghostwriting</Link>
                  </li>
                  <li>
                    <Link to={"/book-editing"}>Book Editing</Link>
                  </li>
                  <li>
                    <Link to={"/book-proofreading-services"}>Proofreading</Link>
                  </li>
                  <li>
                    <Link to={"/book-marketing"}>Book Marketing</Link>
                  </li>
                  <li>
                    <Link to={"/book-video-trailer"}>Book Video Trailer</Link>
                  </li>
                  <li>
                    <Link to={"/book-publishing"}>Book Publishing</Link>
                  </li>
                  <li>
                    <Link to={"/book-printing"}>Book Printing</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="footer-links-area">
                <h4>Company</h4>
                <ul className="footer-nav-links">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/portfolio"}>Portfolio</Link>
                  </li>
                  <li>
                    <Link to={"/blogs"}>Blog</Link>
                  </li>
                  <li>{/* <Link to={}>Reviews</Link> */}</li>
                  <li>
                    <Link to={"/contact-us"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="footer-links-area footer-links-area-last">
                <h4>Policies</h4>
                <ul className="footer-nav-links">
                  <li>
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"/terms-and-conditions"}>
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="footer-brands-area">
                <div className="footer-brands-logos">
                  {/* <img
                    src="/src/assets/images/google-reviews.webp"
                    alt="img"
                    className="img-fluid"
                  />
                  <img
                    src="/src/assets/images/trust-pilot.webp"
                    alt="img"
                    className="img-fluid"
                  />
                  <img
                    src="/src/assets/images/amazon-kindle.webp"
                    alt="img"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="footer-dmc-logos">
                  {/* <img
                    src="/src/assets/images/dmc-2.webp"
                    alt="img"
                    className="img-fluid"
                  />
                  <img
                    src="/src/assets/images/dmc-1.webp"
                    alt="img"
                    className="img-fluid"
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="footer-disclaimer-area">
                <p>
                  <b>Disclaimer:</b> Penguin Author House owns the trademarks
                  for its logo, name, and graphics associated with its products
                  and services. All other business titles, brands, trademarks,
                  and logos stated on this website belong to their rightful
                  owners and do not encompass or imply endorsement, sponsorship,
                  or recommendation by penguin Author House, nor do they
                  represent or imply endorsement, sponsorship, or recommendation
                  by the respective trademark holder of penguin Author House.
                  After successful completion of service, the client bears the
                  right to ownership and penguin Author House is entitled to
                  revoking all ownership rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="container">
          <div className="footer-logo-area">
            <div className="footer-logo">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
            <div className="footer-info">
              <ul>
                <li>
                  <a href="mailto:info@penguinauthorhouse.com">
                    info@penguinauthorhouse.com
                  </a>
                </li>
                <li>
                  <a href="tel: +1 (414)-296-5327">+1 (414)-296-5327 </a>
                </li>
              </ul>
            </div>
            <ul className="footer-social-links">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61559656964716&mibextid=LQQJ4d"
                >
                  <i className="fa-brands fa-square-facebook" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  // href="https://www.facebook.com/profile.php?id=61559656964716&mibextid=LQQJ4d"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/penguinauthorhouse?igsh=MXZwaGhrdG12MHdkZA=="
                >
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="footer-copyright">
                <p>
                  Copyright © 2020-2024 Penguin Author House All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
