import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Non-Fiction Writing",
    description:
      "Powerfully convey reality in such a compelling way that readers can't put the book down and eagerly anticipate the next one.",
    imgSrc: () => import("/src/assets/images/st-icons/st-icon-01.webp"),
    link: "/non-fiction",
  },
  {
    title: "Manuscript Writing",
    description:
      "Transform all your ideas and visions into an engaging and informative manuscript.",
    imgSrc: () => import("/src/assets/images/st-icons/st-icon-04.webp"),
    link: "/manuscript-writing",
  },
  {
    title: "Action Adventure",
    description:
      "Share thrilling and fascinating adventures with your readers, immersing them in experiences brought to life through your words.",
    imgSrc: () => import("/src/assets/images/st-icons/st-icon-03.webp"),
    link: "/action-adventure-writing",
  },
  {
    title: "Military Fiction Writing",
    description:
      "Exciting tales of military operations and battles that cater to the desires of action enthusiasts.",
    imgSrc: () => import("/src/assets/images/st-icons/st-icon-05.webp"),
    link: "/military-fiction-writing",
  },
  {
    title: "Horror Writing",
    description:
      "Publish a worldwide horror story that keeps readers on the edge of their seats.",
    imgSrc: () => import("/src/assets/images/st-icons/st-icon-09.webp"),
    link: "/horror-writing",
  },
  {
    title: "Screenplay Writing",
    description:
      "Bring all your stories to life through compelling and entertaining screenplays.",
    imgSrc: () => import("/src/assets/images/st-icons/st-icon-08.webp"),
    link: "/screenplay-writing",
  },
  {
    title: "Autobiography",
    description:
      "Share your story with the world and leave a lasting impression through a professionally crafted autobiography.",
    imgSrc: () => import("/src/assets/images/st-icons/st-icon-07.webp"),
    link: "/autobiography",
  },
  {
    title: "Children's Book Writing",
    description:
      "Become the author of bedtime stories that children won't want to sleep without.",
    imgSrc: () => import("/src/assets/images/st-icons/st-icon-06.webp"),
    link: "/childrens-book-writing",
  },
  {
    title: "Memoir Writing",
    description:
      "Artfully express your memories and personal life experiences to share with readers globally.",
    imgSrc: () => import("/src/assets/images/st-icons/st-icon-02.webp"),
    link: "/memoir-writing-services",
  },
  // ... (the rest of your services with corrected imgSrc paths)
];
const ServicesSection = () => (
  <section className="services-together-wrap">
    <div className="container">
      <div className="services-together-head">
        <h2>Ghostwriting Services You Can Count On</h2>
      </div>
      <div className="services-together-inner">
        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
              key={index}
            >
              <div className="services-together-box">
                <div className="services-together-icon">
                  <LazyImage src={service.imgSrc} alt="icon img" />
                </div>
                <div className="services-together-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// LazyImage component
const LazyImage = ({ src, alt }) => {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    src().then(setImage);
  }, [src]);

  return image ? (
    <img src={image.default} alt={alt} className="img-fluid" />
  ) : null;
};

export default ServicesSection;
