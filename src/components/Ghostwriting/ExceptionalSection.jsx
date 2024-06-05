import React, { useState } from "react";
import image from "../../assets/images/brand-tab-img.webp"
const ExceptionalSection = (props) => {
  const [activeTab, setActiveTab] = useState("pTab1");

  let tabData = {
    pTab1: {
      title: props.pTab1Title,
      content: props.pTab1Content,
    },
    pTab2: {
      title: props.pTab2Title,
      content: props.pTab2Content,
    },
    pTab3: {
      title: props.pTab3Title,
      content: props.pTab3Content,
    },
    pTab4: {
      title: props.pTab4Title,
      content: props.pTab4Content,
    },
  };
  if (props.more) {
    tabData.pTab5 = {
      title: props.pTab5Title,
      content: props.pTab5Content,
    };
  }
  if (props.exmore === true) {
    tabData.pTab6 = {
      title: props.pTab6Title,
      content: props.pTab6Content,
    };
  }
  if (props.max === true) {
    tabData.pTab6 = {
      title: props.pTab6Title,
      content: props.pTab6Content,
    };
    tabData.pTab7 = {
      title: props.pTab7Title,
      content: props.pTab7Content,
    };
    tabData.pTab8 = {
      title: props.pTab8Title,
      content: props.pTab8Content,
    };
  }

  return (
    <section>
      <div className="exceptional">
        <div className="container">
          <div className="custom-header">
            <h3>{props.head}</h3>
            <p>{props.text}</p>
          </div>
          <div className="exceptional-row">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="exceptional-tabs">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-4">
                      <ul className="prodNav">
                        {Object.keys(tabData).map((key, index) => (
                          <li
                            key={key}
                            id={key}
                            className={`ptItem ${
                              activeTab === key ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(key)}
                          >
                            Step {index + 1}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-9 col-sm-9 col-lg-8">
                      <div className="prodBody">
                        {Object.keys(tabData).map((key) => (
                          <div
                            key={key}
                            className={`prodMain ${
                              activeTab === key ? "active" : ""
                            }`}
                            id={`${key}C`}
                          >
                            <div className="exceptional-tab-body">
                              <h4>{tabData[key].title}</h4>
                              <p>{tabData[key].content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-5">
                <div className="exceptional-img">
                  <img
                    src={image}
                    className="img-fluid"
                    alt="kreativewebsol"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="exceptional-bottom"></div>
      </div>
    </section>
  );
};

export default ExceptionalSection;
