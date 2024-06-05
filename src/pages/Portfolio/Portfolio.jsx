import React, { useEffect, Suspense, useState } from "react";
import BannerV2 from "../../components/banners/BannerV2";
import PortfolioImg from "../../components/PortfolioSections/PortfolioImg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ContactForm from "../../components/ContactForm";
import PortfolioTabs from "../../components/PortfolioSections/PortfolioTabs";

const Portfolio = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Portfolio";
  }, []);

  const brandImages = [
    "harper-collins",
    "simon-schuster",
    "hatchette",
    "macmillan",
    "hmh",
    "HC-leadership",
    "wiley",
    "CAA",
    "writers-house",
    "park-Fine",
    "sterling-lord",
    "folio",
    "WME",
  ];

  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    Promise.all(
      brandImages.map((imageName) =>
        import(`../../assets/images/portfolio-brand/${imageName}.webp`).then(
          (module) => module.default
        )
      )
    ).then((images) => {
      setLoadedImages(images);
    });
  }, []);
  return (
    <>
      <BannerV2 head="A Glimpse of Our Incredible Projects" />
      <section className="portfolio-notable-wrap">
        <div className="container">
          <div className="porfolio-notable-head">
            <h2>Remarkable Titles</h2>
          </div>
          <PortfolioImg />
        </div>
      </section>

      <section className="portfolio-brand-wrap">
        <div className="container">
          <div className="porfolio-brand-head">
            <h2>Industry Leaders We Work With</h2>
          </div>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="porfolio-brand-inner">
                {loadedImages.map((imageUrl, index) => (
                  <div key={index} className="portfolio-brand-img">
                    <img src={imageUrl} alt="img" className="img-fluid" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioTabs />
      <ContactForm
        head={"Penguin Author House Pens Your Dreams Into Reality"}
        para={
          "Have any inquiries or need further assistance? Reach out to us today. We're here to help you ease the process and make your book project a reality."
        }
      />
    </>
  );
};

export default Portfolio;
