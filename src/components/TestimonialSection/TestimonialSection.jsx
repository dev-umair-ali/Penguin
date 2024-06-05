import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from "react-owl-carousel";
import { HashLink } from "react-router-hash-link";

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  };

  const testimonials = [
    {
      name: "Mia Johnson",
      text: "Penguin Author House turned my aspiration into a reality. They helped me conquer writer's block, shaping my thoughts into fluid prose. Their professionalism and dedication made the journey enjoyable. Thanks to their exceptional and affordable ghostwriting services, my book now stands as a testament to their expertise.",
    },
    {
      name: "Alex Parker",
      text: "Partnering with Penguin Author House marked a pivotal moment in my journey as an author. Their seamless collaboration demonstrated unwavering dedication, from understanding my concept to delivering a polished manuscript. Through their expert craftsmanship, my book sprang to life, perfectly capturing the essence of my vision. The positive reception my book received is undoubtedly attributed to the invaluable contribution of Penguin Author House",
    },
    {
      name: "John Anderson",
      text: "Collaborating with Penguin Author House has been truly enlightening. Their dedication to capturing the essence of my story was remarkable. Not only did they refine my manuscript, but they also provided invaluable guidance through the complexities of the publishing journey. Thanks to their unwavering support, my book is gaining recognition and leaving its imprint on the literary landscape.",
    },
    {
      name: "Sarah Mitchell",
      text: "I'm immensely grateful for the collaboration with Penguin Author House and their exceptional ghostwriting services. They took my fragmented ideas and transformed them into a captivating narrative that struck a chord with readers. Their knack for comprehending and articulating my vision surpassed all expectations. Today, my book is garnering positive feedback, and much of its success is owed to their expertise",
    },
  ];

  return (
    <>
      <section
        className="testimonial_section testi"
        style={{ zIndex: 10, backgroundColor: "white" }}
      >
        <div className="container" style={{ zIndex: 10 }}>
          <div className="row" style={{ zIndex: 10 }}>
            <div className="col-lg-7" style={{ zIndex: 10 }}>
              <div className="about_content" style={{ zIndex: 10 }}>
                <div className="background_layer" style={{ zIndex: 10 }}></div>
                <div className="layer_content" style={{ zIndex: 10 }}>
                  <div className="section_title" style={{ zIndex: 10 }}>
                    <h5 style={{ zIndex: 10 }}>CLIENTS</h5>
                    <h2 style={{ zIndex: 10 }}>
                      Happy with<strong>Customers & Clients</strong>
                    </h2>
                    <div className="heading_line">
                      <span style={{ zIndex: 10 }}></span>
                    </div>
                    <p style={{ zIndex: 10 }}>
                      If you are seeking an industrial solution, our team is
                      dedicated and ready to assist you every step of the way.
                      Whether you require expert advice, innovative solutions,
                      or comprehensive support, we are committed to meeting your
                      needs with professionalism and reliability.
                    </p>
                  </div>
                  <div className="counter-cta-btns justify-content-start mt-5">
                    <HashLink to="#contactForm">
                      <button className="popup-btn">Get a Quote</button>
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ zIndex: 10 }}>
              <div className="testimonial_box" style={{ zIndex: 10 }}>
                <div className="testimonial_container" style={{ zIndex: 10 }}>
                  <div
                    className="background_layer"
                    style={{ zIndex: 10 }}
                  ></div>
                  <div className="layer_content" style={{ zIndex: 10 }}>
                    <Slider
                      {...settings}
                      className="testimonial_owlCarousel"
                      style={{ zIndex: 10 }}
                    >
                      <div className="testimonials" style={{ zIndex: 10 }}>
                        <div
                          className="testimonial_content"
                          style={{ zIndex: 10 }}
                        >
                          <div
                            className="testimonial_caption"
                            style={{ zIndex: 10 }}
                          >
                            <h6 style={{ zIndex: 10 }}>Mia Johnson</h6>
                          </div>
                          <p style={{ zIndex: 10 }}>
                            Penguin Author House turned my aspiration into a
                            reality. They helped me conquer writer's block,
                            shaping my thoughts into fluid prose. Their
                            professionalism and dedication made the journey
                            enjoyable. Thanks to their exceptional and
                            affordable ghostwriting services, my book now stands
                            as a testament to their expertise.
                          </p>
                        </div>
                        <div className="images_box" style={{ zIndex: 10 }}>
                          <div
                            className="testimonial_img"
                            style={{ zIndex: 10 }}
                          ></div>
                        </div>
                      </div>
                      <div className="testimonials" style={{ zIndex: 10 }}>
                        <div
                          className="testimonial_content"
                          style={{ zIndex: 10 }}
                        >
                          <div
                            className="testimonial_caption"
                            style={{ zIndex: 10 }}
                          >
                            <h6 style={{ zIndex: 10 }}>Alex Parker</h6>
                          </div>
                          <p style={{ zIndex: 10 }}>
                            Partnering with Penguin Author House marked a
                            pivotal moment in my journey as an author. Their
                            seamless collaboration demonstrated unwavering
                            dedication, from understanding my concept to
                            delivering a polished manuscript. Through their
                            expert craftsmanship, my book sprang to life,
                            perfectly capturing the essence of my vision. The
                            positive reception my book received is undoubtedly
                            attributed to the invaluable contribution of Penguin
                            Book Writers.
                          </p>
                        </div>
                        <div className="images_box" style={{ zIndex: 10 }}>
                          <div
                            className="testimonial_img"
                            style={{ zIndex: 10 }}
                          ></div>
                        </div>
                      </div>
                      <div className="testimonials" style={{ zIndex: 10 }}>
                        <div
                          className="testimonial_content"
                          style={{ zIndex: 10 }}
                        >
                          <div
                            className="testimonial_caption"
                            style={{ zIndex: 10 }}
                          >
                            <h6 style={{ zIndex: 10 }}>John Anderson</h6>
                          </div>
                          <p style={{ zIndex: 10 }}>
                            Collaborating with Penguin Author House has been
                            truly enlightening. Their dedication to capturing
                            the essence of my story was remarkable. Not only did
                            they refine my manuscript, but they also provided
                            invaluable guidance through the complexities of the
                            publishing journey. Thanks to their unwavering
                            support, my book is gaining recognition and leaving
                            its imprint on the literary landscape.
                          </p>
                        </div>
                        <div className="images_box" style={{ zIndex: 10 }}>
                          <div
                            className="testimonial_img"
                            style={{ zIndex: 10 }}
                          ></div>
                        </div>
                      </div>
                      <div className="testimonials" style={{ zIndex: 10 }}>
                        <div
                          className="testimonial_content"
                          style={{ zIndex: 10 }}
                        >
                          <div
                            className="testimonial_caption"
                            style={{ zIndex: 10 }}
                          >
                            <h6 style={{ zIndex: 10 }}>Sarah Mitchell</h6>
                          </div>
                          <p style={{ zIndex: 10 }}>
                            I'm immensely grateful for the collaboration with
                            Penguin Author House and their exceptional
                            ghostwriting services. They took my fragmented ideas
                            and transformed them into a captivating narrative
                            that struck a chord with readers. Their knack for
                            comprehending and articulating my vision surpassed
                            all expectations. Today, my book is garnering
                            positive feedback, and much of its success is owed
                            to their expertise.
                          </p>
                        </div>
                        <div className="images_box" style={{ zIndex: 10 }}>
                          <div
                            className="testimonial_img"
                            style={{ zIndex: 10 }}
                          ></div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="testimonial_section testi testi2"
        style={{ zIndex: 10, backgroundColor: "white" }}
      >
        <div className="container" style={{ zIndex: 10 }}>
          <div className="row" style={{ zIndex: 10 }}>
            <div className="col-lg-7" style={{ zIndex: 10 }}>
              <div className="about_content" style={{ zIndex: 10 }}>
                <div className="background_layer" style={{ zIndex: 10 }}></div>
                <div className="layer_content" style={{ zIndex: 10 }}>
                  <div className="section_title" style={{ zIndex: 10 }}>
                    <h5 style={{ zIndex: 10 }}>CLIENTS</h5>
                    <h2 style={{ zIndex: 10 }}>
                      Happy with<strong>Customers & Clients</strong>
                    </h2>
                    <div className="heading_line">
                      <span style={{ zIndex: 10 }}></span>
                    </div>
                    <p style={{ zIndex: 10 }}>
                      If you are seeking an industrial solution, our team is
                      dedicated and ready to assist you every step of the way.
                      Whether you require expert advice, innovative solutions,
                      or comprehensive support, we are committed to meeting your
                      needs with professionalism and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ zIndex: 10 }}>
              <div className="testimonial_box" style={{ zIndex: 10 }}>
                <div className="testimonial_container" style={{ zIndex: 10 }}>
                  <div
                    className="background_layer"
                    style={{ zIndex: 10 }}
                  ></div>
                  <div className="layer_content" style={{ zIndex: 10 }}>
                    <div
                      className="testimonial_owlCarousel"
                      style={{ zIndex: 10, paddingBottom: "80px" }}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div
                          className="testimonials"
                          key={index}
                          style={{ padding: "36px 50px 0 100px", margin: 0 }}
                        >
                          <div className="testimonial_slide">
                            <div className="testimonial_content">
                              <div className="testimonial_caption">
                                <h6>{testimonial.name}</h6>
                                <span>{testimonial.position}</span>
                              </div>
                              <p>{testimonial.text}</p>
                            </div>
                            <div className="images_box">
                              <div className="testimonial_img">
                                <img
                                  className="img-center"
                                  src={testimonial.image}
                                  alt="images not found"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
