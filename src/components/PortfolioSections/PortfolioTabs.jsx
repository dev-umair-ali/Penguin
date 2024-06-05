import React, { useEffect, useState, Suspense } from "react";
const PortfolioTabs = () => {
  const tabImageFolders = {
    "pills-business": "biography", // Tab ID : Folder Name
    "pills-personald": "informative",
    "pills-health": "fiction",
    "pills-celebrity": "non-fiction",
    "pills-memoir": "memoir",
  };

  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const loadImagesForTab = async (tabId) => {
      const folderName = tabImageFolders[tabId];
      const imagesToLoad = Array.from({ length: 10 }, (_, i) => i + 1); // 1 to 10

      const loadedImages = await Promise.all(
        imagesToLoad.map(async (num) => {
          try {
            const module = await import(
              `../../assets/images/portfolio-brand/${folderName}/${num}.webp`
            );
            return module.default;
          } catch (error) {
            console.error(
              `Failed to load image ${num} in ${folderName}:`,
              error
            );
            return null; // Or a placeholder image URL
          }
        })
      );

      setLoadedImages((prev) => ({ ...prev, [tabId]: loadedImages }));
    };

    for (const tabId of Object.keys(tabImageFolders)) {
      loadImagesForTab(tabId);
    }
  }, []);
  return (
    <section className="portfolio-tab-wrap">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="porfolio-tab-dropmain">
              <a href="void:;" className="port-tab-dropdown">
                <h3 id="tab-drop-text">Biography</h3>
                <ul
                  className="nav nav-pills drop-list mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link portfolio-tab active"
                      id="pills-business-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-business"
                      type="button"
                      role="tab"
                      aria-controls="pills-business"
                      aria-selected="true"
                    >
                      Biography
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link portfolio-tab"
                      id="pills-personald-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-personald"
                      type="button"
                      role="tab"
                      aria-controls="pills-personald"
                      aria-selected="false"
                    >
                      Informative
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link portfolio-tab"
                      id="pills-health-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-health"
                      type="button"
                      role="tab"
                      aria-controls="pills-health"
                      aria-selected="false"
                    >
                      Fiction
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link portfolio-tab"
                      id="pills-celebrity-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-celebrity"
                      type="button"
                      role="tab"
                      aria-controls="pills-celebrity"
                      aria-selected="false"
                    >
                      Non-Fiction
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link portfolio-tab"
                      id="pills-memoir-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-memoir"
                      type="button"
                      role="tab"
                      aria-controls="pills-memoir"
                      aria-selected="false"
                    >
                      Memoir
                    </button>
                  </li>
                </ul>
              </a>
            </div>
            <div className="tab-content" id="pills-tabContent">
              {Object.keys(tabImageFolders).map((tabId) => (
                <div
                  key={tabId}
                  className={`tab-pane fade ${
                    tabId === "pills-business" ? "show active" : ""
                  }`}
                  id={tabId}
                  role="tabpanel"
                  aria-labelledby={`${tabId}-tab`}
                >
                  <div className="porfolio-notable-inner">
                    {loadedImages[tabId] &&
                      loadedImages[tabId].map(
                        (imageUrl, index) =>
                          imageUrl && (
                            <div key={index} className="portfolio-notable-img">
                              <img
                                src={imageUrl}
                                alt="img"
                                className="img-fluid"
                              />
                            </div>
                          )
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTabs;
