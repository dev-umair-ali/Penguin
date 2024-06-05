import React, { useEffect } from "react";
import BannerV2 from "../../components/banners/BannerV2";
import AboutSection from "../../components/AboutSection/AboutSection ";
import ContactForm from "../../components/ContactForm";
import sideImg from "../../assets/images/about-will.webp";
import DiscBanner from "../../components/banners/DiscBanner";
import MidBanner from "../../components/banners/MidBanner";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | About";
  }, []);
  return (
    <>
      <BannerV2 head={"About Penguin Author House"} />
      <AboutSection
        headText="Get to Know Us"
        para1="We are a team of writers driven by imagination and fueled by creativity. Our company was founded with a singular goal: to provide our clients with the platform they need to become successful writers and best-sellers. Nearly a decade later, we have helped a diverse range of clients—from celebrities to business executives—achieve their dreams of becoming successful authors."
        para2="We are proud to say that our team of creative writers is highly skilled and among the best in the industry. A distinctive feature of our writers is their professionalism and dedication to their work. We ensure timely delivery of every project, meeting the deadlines set by our clients."
        img={false}
        picture={sideImg}
      />
      <MidBanner
        head={"Once your project is with us, you can sit back and relax."}
        para1={
          "We don’t just meet our clients' expectations; we aim to exceed them. Throughout every stage of production, we keep our clients informed with updates and queries. Our mission is to be a one-stop solution for authors."
        }
        para2={
          "At Penguin Author House, our core values are customer satisfaction, high-quality work, and professionalism. We strive to redefine the book writing, publishing, and marketing industry with our extensive experience and dedication to excellence."
        }
        para3={""}
      />
      <DiscBanner
        head={"WANT TO BECOME A SUCCESSFUL AUTHOR?"}
        text={
          "Hire our team of highly experienced and dedicated book writers today, and leverage their expertise to create your best-selling book!"
        }
      />
      <ContactForm
        head={"Penguin Author House Pens Your Dreams Into Reality"}
        para={
          "Have any inquiries or need further assistance? Reach out to us today. We're here to help you ease the process and make your book project a reality."
        }
      />
    </>
  );
};

export default About;
