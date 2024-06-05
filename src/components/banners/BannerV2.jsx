import React from "react";

const BannerV2 = ({head}) => {
  return (
    <section className="abour-banner-wrap bg-pink">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
            <div className="about-banner-content">
              <h1>{head}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerV2;
