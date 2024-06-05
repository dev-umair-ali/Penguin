import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Banner = ({ head, para }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://send.penguinauthorhouse.com/email/index.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          swal(
            "Thank You!",
            "Your Form has been Submitted successfully!",
            "success"
          );

          // Optionally, reset form fields after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          swal("Failed to send emails.");
        }
      } else {
        swal("Failed to send emails. Server error.");
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      swal("Failed to send emails. Please try again later.");
    }
  };

  return (
    <section
      id="hero-9"
      className="bg-scroll hero-section division lazy"
      data-src="images/home-banner.webp"
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="hero-9-txt text-left wow fadeInRight">
              <h1 className="h2-sm white-color">{head}</h1>
              <p className="p-xl white-color">{para}</p>
              {/* Replace buttons with actual action buttons or remove if not needed */}
              <div className="about-cta-btns">
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
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="inner-banner-form">
              <h3>
                <span>Let's Work Together</span>
              </h3>
              <p>Tell us about your project</p>
              <form
                className="serv-banner-form text-dark"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ color: "black" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ color: "black" }}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ color: "black" }}
                />

                <textarea
                  name="message"
                  placeholder="About Your Project"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ color: "black" }}
                />
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
