import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/images/research.webp"
import image2 from "../assets/images/concept.webp"
import image3 from "../assets/images/landing-page.webp"
import image4 from "../assets/images/browser.webp"






















const InsideLookSection = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  // Data for inside look items
  const insideLookItems = [
    {
      img: image1,
      title: "Exploring Ideas through Consultation",
      description:
        "Every story originates from a unique and compelling idea that demands attention. Our team begins by thoroughly exploring your initial concept, ensuring the entire process remains aligned with your vision. By delving into your specifications, we strive to understand your expectations and craft the world in which you envision your readers immersing themselves.",
    },
    {
      img: image2,
      title: "Expertly Crafting",
      description:
        "Once we grasp your idea, our team of professionals collaborates to guide your vision to fruition. With extensive experience, crafting stories that capture the spotlight has become our specialty. We meticulously develop vivid settings, dynamic characters, and engaging plots that keep readers eagerly turning pages.",
    },
    {
      img: image3,
      title: "Collaborative Efforts",
      description:
        "Every step we take leads towards your triumph in the realm of storytelling, and your involvement is indispensable for our journey. Our team of professional writers encourages you to actively participate. Through transparent communication and ongoing discussions, we highly value your feedback to seamlessly incorporate any changes you desire at every stage.",
    },
    {
      img: image4,
      title: "Revisions and Polishing",
      description:
        "Our final step ensures that your story is polished to perfection with our meticulous attention to detail. Our expert editors are dedicated to refining your manuscript until it meets your satisfaction. They meticulously review the text, enhancing flow, addressing inconsistencies, and refining language to elevate your story.",
    },
  ];

  return (
    <>
      <section className="sec-inside-look">
        <div className="container">
          <div className="inside-look-head">
            <h3>Our Book Writing Process Include</h3>
          </div>
          <div className="inside-look-col">
            <Slider {...settings}>
              {insideLookItems.map((item, index) => (
                <div key={index} className="inside-look-item item">
                  <div className="inside-look-icon">
                    <img src={item.img} alt="icon" className="img-fluid" />
                  </div>
                  <div className="inside-look-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="sec-inside-look2">
        <div className="container">
          <div className="inside-look-head">
            <h3>Our Book Writing Process Include</h3>
          </div>
          <div className="inside-look-col">
            {insideLookItems.map((item, index) => (
              <div key={index} className="inside-look-item item">
                <div className="inside-look-icon">
                  <img src={item.img} alt="icon" className="img-fluid" />
                </div>
                <div className="inside-look-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InsideLookSection;
