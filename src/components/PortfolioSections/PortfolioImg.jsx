import React, { useEffect, useState } from "react";

const PortfolioImg = () => {
  const bookImages = [
    "book1",
    "book2",
    "book3",
    "book4",
    "book5",
    "book6",
    "book7",
    "book8",
    "book9",
    "book10",
  ];

  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    Promise.all(
      bookImages.map((imageName) =>
        import(`../../assets/images/${imageName}.webp`).then(
          (module) => module.default
        )
      )
    ).then((images) => {
      setLoadedImages(images);
    });
  }, []);

  return (
    <div className="portfolio-main-box">
      <ul className="portfolio-list">
        {loadedImages.slice(0, 5).map((imageUrl, index) => (
          <li key={index} className="fancy-box-item imglist">
            <img src={imageUrl} alt={`Book ${index + 1}`} />
          </li>
        ))}
      </ul>
      <ul className="portfolio-list">
        {loadedImages.slice(5).map((imageUrl, index) => (
          <li key={index} className="fancy-box-item imglist">
            <img src={imageUrl} alt={`Book ${index + 6}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioImg;
