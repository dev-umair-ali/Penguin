import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title text-center">
          <h3 className="section-id">OUR SERVICES</h3>
          <h4 className="h4-lg deepgrey-color">
            Transforming Your Ideas into Captivating Book Masterpieces
          </h4>
        </div>
        <div className="services-wrapper">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="services-item-wrap one">
                <Link to="/ghostwriting" target="_blank">
                  <div className="services-item">
                    {/* <img
                      src="images/s-1.webp"
                      data-img="images/s-1.webp"
                      alt=""
                    /> */}
                    <div>
                      <h3>Ghostwriting</h3>
                      <p>
                        Imagine having a story within you, ready to be told but
                        struggling to find the right words. Our ghostwriting
                        service bridges that gap, transforming your ideas into
                        fully realized manuscripts. Whether it's fiction or
                        nonfiction, our book writers for hire will convey your
                        thoughts with the perfect tone, voice, and words.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="services-item-wrap two">
                <Link to="/book-editing" target="_blank">
                  <div className="services-item">
                    {/* <img
                      src="images/s-1.webp"
                      data-img="images/s-1.webp"
                      alt=""
                    /> */}
                    <div>
                      <h3>Book Editing</h3>
                      <p>
                        Every exceptional book evolves through numerous drafts,
                        refining and molding its raw material. Our book editing
                        service provides the discerning eye your manuscript
                        requires to sparkle. Whether addressing grammar, plot
                        coherence, or narrative flow, we handle your story with
                        care, enhancing readability for a polished publication.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="services-item-wrap three">
                <Link to="/book-cover-design" target="_blank">
                  <div className="services-item">
                    {/* <img
                      src="images/s-7.webp"
                      data-img="images/s-7.webp"
                      alt=""
                    /> */}
                    <div>
                      <h3>Cover Design</h3>
                      <p>
                        Amidst the vast landscape of books, a compelling book
                        cover serves as your initial chance to captivate your
                        audience and compel them to pause and engage with your
                        story. Our team of imaginative professionals blends
                        artistic creativity with market expertise to craft
                        covers that are distinctive, igniting curiosity.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="services-item-wrap four">
                <Link to="/book-publishing" target="_blank">
                  <div className="services-item">
                    {/* <img
                      src="images/s-3.webp"
                      data-img="images/s-3.webp"
                      alt=""
                    /> */}
                    <div>
                      <h3>Publishing</h3>
                      <p>
                        With our expert team in the publishing industry, we
                        ensure your book reaches a wide audience. Through our
                        extensive distribution network, your book is made
                        available across leading online retailers and
                        brick-and-mortar bookstores in both print and digital
                        editions. Our streamlined publishing process guarantees
                        swift access to your target audience.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="services-item-wrap five">
                <Link to="/book-marketing" target="_blank">
                  <div className="services-item">
                    {/* <img
                      src="images/s-6.webp"
                      data-img="images/s-6.webp"
                      alt=""
                    /> */}
                    <div>
                      <h3>Book Marketing</h3>
                      <p>
                        Crafting an impactful marketing plan involves
                        strategically outlining tailored strategies that
                        resonate with your book. From organizing book tours to
                        creating compelling promotional materials, we generate
                        excitement and anticipation. Leveraging their expertise,
                        our specialists design a captivating cover that
                        creatively engages your audience, drawing heightened
                        attention to your story.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="services-item-wrap six">
                <Link to="/book-illustration-design">
                  <div className="services-item">
                    {/* <img
                      src="images/s-10.webp"
                      data-img="images/s-10.webp"
                      alt=""
                    /> */}
                    <div>
                      <h3>Illustration Design</h3>
                      <p>
                        Paired with compelling visuals, your story ascends to
                        new heights. Whether through intricate, detailed
                        drawings or vibrant, captivating artwork, our
                        illustrations encapsulate the essence of your story's
                        universe, forging a deeper connection with readers.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
