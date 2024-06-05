import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "/src/assets/images/company-brands/brand-1.webp"
import image2 from "/src/assets/images/company-brands/brand-2.webp"
import image3 from "/src/assets/images/company-brands/brand-3.webp"
import image4 from "/src/assets/images/company-brands/brand-4.webp"
import image5 from "/src/assets/images/company-brands/brand-5.webp"
import image6 from "/src/assets/images/company-brands/brand-6.webp"
import image7 from "/src/assets/images/company-brands/brand-7.webp"
import image8 from "/src/assets/images/company-brands/brand-8.webp"
import image9 from "/src/assets/images/company-brands/brand-9.webp"
import image10 from "/src/assets/images/company-brands/brand-10.webp"
import image11 from "/src/assets/images/company-brands/brand-11.webp"
import image12 from "/src/assets/images/company-brands/brand-12.webp"
import image13 from "/src/assets/images/company-brands/brand-13.webp"
import image14 from "/src/assets/images/company-brands/brand-14.webp"
import image15 from "/src/assets/images/company-brands/brand-15.webp"
import image16 from "/src/assets/images/company-brands/brand-16.webp"
import image17 from "/src/assets/images/company-brands/brand-17.webp"
import image18 from "/src/assets/images/company-brands/brand-18.webp"

const BrandsSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        dots: false,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    // ... (Slider settings remain the same)
  
    const brandImages = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
    ];
  
  return (
    <>
      <section className="brands-main-sec">
        <div className="an-custom-container">
          <div className="bottom">
            <div className="container">
              <Slider {...settings}>
                {brandImages.map((image, index) => (
                  <div className="brand-logo opacity-07" key={index}>
                    <img
                      className="img-fluid"
                      src={image}
                      alt={`brand-logo-${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsSection;
