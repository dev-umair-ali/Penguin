import React, { useEffect } from "react";
import Banner from "../../components/banners/Banner";
import BrandsSection from "../../components/BrandsSection ";
import AboutSection from "../../components/AboutSection/AboutSection ";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import ReviewsBanner from "../../components/banners/ReviewsBanner";
import InsideLookSection from "../../components/InsideLookSection";
import StepSection from "../../components/StepsSection/StepSection";
import CounterStatsSection from "../../components/CounterStatsSection";
import LoveUsSection from "../../components/LoveUsSection";
import PortfolioSection from "../../components/PortfolioSections/PortfolioSection.jsx";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import FAQSection from "../../components/FAQSection";
import ContactForm from "../../components/ContactForm";
import sideImg from "../../assets/images/about-will.webp";

export const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Home";
  }, []);
  return (
    <>
      <Banner
        head={
          "Welcome to Penguin Author House – Where Professional Book Writing Expertise Meets Trustworthiness"
        }
        para={
          "Infusing characters with emotions births narratives that not only ignite the reader's imagination but also wield profound influence."
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Why Choose Us"}
        headText="Unleash Your Story with Professional Book Writers for Hire"
        para1="The heart of Penguin Author House lies in its expert team of storytellers and ingenious writers, dedicated to crafting words to perfection. We have assembled the best in the industry, delving deep into every aspect of your story, from plot to characters. With in-depth knowledge and a passion for uncovering the untold, Penguin Author House stands out for its expertise in storytelling."
        para2="Our writers excel at crafting stories that captivate audiences, creating characters that come to life, and weaving in twists that keep readers thrilled. By partnering with our team, you can let your story find the perfect words. Our seamless process and transparent communication make the journey to becoming a bestseller smooth and effortless."
        para3="Connect with us to embark on the imaginative journey ahead."
        img={true}
        picture={sideImg}
      />

      <ServicesSection />
      <ReviewsBanner />
      <InsideLookSection />
      <StepSection
        head1={"Why Choose"}
        head2={"Professional Writers?"}
        para={
          "Our professional book writers can help you realize your dream of becoming a bestselling author. We offer sought-after writers for hire across various genres."
        }
        id1={"tab1"}
        title1={"Captivate Your Readers"}
        content1={`In a sea of stories vying for attention, readers seek narratives that captivate and compel them to delve deeper. Engaging professional writers is essential to ensure your story stands out. With meticulous plotting, vivid descriptions, and authentic characters, these experts construct impactful narratives. As readers' interest grows, so does their loyalty, paving the way for your book to achieve bestseller status.`}
        id2={"tab1"}
        title2={"Artistry"}
        content2={`Like any other art form, storytelling requires skilled individuals who can vividly depict worlds through their compelling expressions. Proficient writers excel in selecting precise words and evoking emotions, enhancing stories with their expertise and professionalism. Beyond filling pages with words, their craft offers readers an adventurous journey. Our team of book writers for hire is ready to accompany you on a voyage of creativity unlike any other.`}
        id3={"tab1"}
        title3={"Efficiency and Excellence"}
        content3={`Conceptualizing ideas, conducting research, outlining drafts, and bringing a new world to life is a time-intensive endeavor that demands dedication and effort. However, when you collaborate with industry experts, this process becomes more efficient. Professional writers save you valuable time while delivering exceptional quality that surpasses many others. They streamline everything from initial conception to effective marketing strategies, alleviating burdens and paving the path to your book's success.`}
        more={false}
      />
      <CounterStatsSection />
      <LoveUsSection />

      <PortfolioSection />

      <TestimonialSection />

      <ContactForm
        head={"Penguin Author House Pens Your Dreams Into Reality"}
        para={
          "Have questions or need further assistance? Contact us today. We're here to streamline the process and bring your book project to fruition."
        }
      />

      <FAQSection />
    </>
  );
};
