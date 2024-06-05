import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
// Uncomment the following lines if needed
// import PropTypes from "prop-types";
// import "./StepSection.css"; // Assuming your CSS is in this file

const StepSection = (props) => {
  const [activeTab, setActiveTab] = useState("tab1");

  // Initialize the tabs array with the first three tabs
  let tabs = [
    {
      id: props.id1,
      title: props.title1,
      content: props.content1,
    },
    {
      id: props.id2,
      title: props.title2,
      content: props.content2,
    },
    {
      id: props.id3,
      title: props.title3,
      content: props.content3,
    },
  ];
  if (props.new === true) {
    tabs = [
      ...tabs,
      {
        id: props.id4,
        title: props.title4,
        content: props.content4,
      },
    ];
  }

  // If 'more' is true, add the additional tabs
  if (props.more) {
    tabs = [
      ...tabs,
      {
        id: props.id4,
        title: props.title4,
        content: props.content4,
      },
      {
        id: props.id5,
        title: props.title5,
        content: props.content5,
      },
    ];
  }
  if (props.exmore === true) {
    tabs = [
      ...tabs,
      {
        id: props.id6,
        title: props.title6,
        content: props.content6,
      },
    ];
  }

  return (
    <section className="new-section-developers">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="stick-developers-area">
              <h3 className="developers-title">
                {props.head1}
                <small className="form-text">{props.head2}</small>
              </h3>
              <p>{props.para}</p>
              <div className="newsec-cta-btns">
                <HashLink to="#contactForm">
                  <button className="popup-btn">Get a Quote</button>
                </HashLink>
                <a href="javascript:void(Tawk_API.toggle())">
                  <button className="chat-btn" onClick={() => setButtonURL()}>
                    Let's Talk
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane ${activeTab === tab.id ? "active" : ""}`}
              >
                <div className="developers-right-bg">
                  <div className="media">
                    <div className="number-one">{tabs.indexOf(tab) + 1}</div>
                    <div className="media-body media-icon-main">
                      <h5 className="mt-0">{tab.title}</h5>
                      <p>{tab.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Uncomment the following if needed
// StepSection.propTypes = {
//   id1: PropTypes.string.isRequired,
//   title1: PropTypes.string.isRequired,
//   content1: PropTypes.string.isRequired,
//   id2: PropTypes.string.isRequired,
//   title2: PropTypes.string.isRequired,
//   content2: PropTypes.string.isRequired,
//   id3: PropTypes.string.isRequired,
//   title3: PropTypes.string.isRequired,
//   content3: PropTypes.string.isRequired,
//   id4: PropTypes.string,
//   title4: PropTypes.string,
//   content4: PropTypes.string,
//   id5: PropTypes.string,
//   title5: PropTypes.string,
//   content5: PropTypes.string,
//   more: PropTypes.bool,
// };

export default StepSection;
