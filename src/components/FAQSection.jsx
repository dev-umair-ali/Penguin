import React, { useEffect } from "react";

const FAQSection = () => {
  return (
    <section className="frequently-asked-questions">
      <div className="frequently-heading">
        <h3>FAQs</h3>
        <p>
          Here are some frequently asked questions you might have about our book
          writing company.
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What genres can Penguin Author House write?
                  </button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Penguin Author House has published books across a wide array
                    of genres including fiction, non-fiction, biography,
                    children's literature, and more. Committed to creating
                    high-quality literature that educates, entertains, and
                    inspires readers of all ages, our talented writers
                    consistently produce captivating and thought-provoking
                    literary pieces in every genre imaginable. Whether you're
                    seeking a gripping novel, an insightful biography, or an
                    enchanting children's book, you're sure to discover a
                    literary masterpiece within Penguin Author House's extensive
                    collection of published works.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do I need to have a manuscript?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    No, you don't necessarily need to have a manuscript prepared
                    to collaborate with our team. We understand that not
                    everyone has the time, resources, or expertise to develop a
                    complete manuscript. Whether you have a compelling idea, a
                    unique story, or a message you wish to share, our team of
                    writers and editors is here to assist you. <br />
                    <br />
                    We will guide you through the process of conceptualizing,
                    outlining, and structuring your book. From there, we will
                    write, edit, and polish the manuscript to ensure it aligns
                    with your vision and meets your expectations. With extensive
                    experience in writing and publishing across various genres
                    and markets, we are well-equipped to help navigate the
                    intricate publishing landscape, ensuring your book reaches
                    its intended audience effectively.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How Much Does Writing a Book Cost?
                  </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The cost of writing a book can vary based on the book type
                    and the specific services needed. Whether it's nonfiction,
                    novels, or children's books, each genre may have different
                    pricing structures for various services. To get an accurate
                    estimate, it's advisable to consult with a professional
                    writer or book writing service. They can assess your
                    specific requirements and provide a personalized quote
                    tailored to your project.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What is the typical timeline for Penguin Author House to
                    complete a book?
                  </button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    At Penguin Author House, we prioritize timely project
                    completion. The duration to finish a book can vary based on
                    factors such as project complexity, word count, and research
                    needs. We collaborate closely with our clients to establish
                    realistic timelines and provide regular updates on progress
                    throughout the writing journey.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Who will guide me through the process of writing a book?
                  </button>
                </h4>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our project manager and customer support team will accompany
                    you through every stage of the book writing process. They
                    will provide guidance, keep you informed of progress, and
                    assist with any necessary revisions. You can trust that you
                    have a dedicated team committed to helping you bring your
                    book to fruition.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
