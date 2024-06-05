import React, { useRef, useState } from "react";
import swal from "sweetalert";

const ContactForm = ({ text, head, para }) => {
  const form = useRef();
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
      const response = await fetch("https://send.penguinauthorhouse.com/email/index.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          swal("Thank You!", "Your Form has been Submitted successfully!", "success");
          form.current.reset();
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          alert("Failed to send emails.");
        }
      } else {
        alert("Failed to send emails. Server error.");
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      alert("Failed to send emails. Please try again later.");
    }
  };

  return (
    <section className="contact-section" id="contactForm">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
            <div className="contact-head-sec">
              <span>{text}</span>
              <h2>{head}</h2>
              <p>{para}</p>
            </div>
          </div>
        </div>
        <div className="pt-80" id="contact-section">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7 col-xxl-7">
              <div className="frm_area_btm">
                <form className="form-submit" onSubmit={handleSubmit} ref={form}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Enter Message"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <button type="submit">
                      LET’S TALK
                  </button>
                </form>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 col-xxl-5">
              <div className="contact-flow">
                <h4 className="contact-flow__title">
                  Here’s what you can expect from{" "}
                  <span className="in-violet-450 font-700">Penguin Author House:</span>
                </h4>
                <ol className="ordered-list pt-0">
                  <li className="contact-flow__list-item ordered-list__item">
                    Our representative will contact you once your application has been submitted.
                  </li>
                  <li className="contact-flow__list-item ordered-list__item">
                    We will ensure that we have all the necessary details to proceed with the book
                    writing process.
                  </li>
                  <li className="contact-flow__list-item ordered-list__item">
                    Once that's arranged, a dedicated book writer will be assigned to your project.
                    They will possess the expertise and knowledge necessary to deliver the content
                    you desire.
                  </li>
                  <li className="contact-flow__list-item ordered-list__item">
                    A project manager will oversee the entire book-writing process to ensure timely
                    delivery.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
