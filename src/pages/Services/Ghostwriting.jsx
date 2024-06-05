import React, { useEffect } from "react";
import Banner from "../../components/banners/Banner";
import BrandsSection from "../../components/BrandsSection ";
import AboutSection from "../../components/AboutSection/AboutSection ";
import sideImg from "../../assets/images/ghostwriting-will.webp";
import ServicesSection from "../../components/Ghostwriting/ServicesSection";
import DiscBanner from "../../components/banners/DiscBanner";
import ExceptionalSection from "../../components/Ghostwriting/ExceptionalSection";
import MidBanner from "../../components/banners/MidBanner";
import CounterStatsSection from "../../components/CounterStatsSection";
import PortfolioSection from "../../components/PortfolioSections/PortfolioSection";
import ContactForm from "../../components/ContactForm";
import FAQSection from "../../components/FAQSection";

const Ghostwriting = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | GhostWriting Services";
  }, []);
  return (
    <React.Fragment>
      <Banner
        head={
          "The Invisible Wordsmiths Who Bring You and Your Book Into the Spotlight"
        }
        para={
          "We may be unseen, but our words carry weight and presence—exactly what your idea needs to become the next big thing in the book world."
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Ghostwriting Agency"}
        headText="Meet Our Creative Ghostwriters and Experience True Ghostwriting Expertise"
        para1="Meet our team of ghostwriting experts, dedicated to crafting trend-setting books that readers worldwide adore and helping aspiring authors achieve their dreams. We might have flippers for hands, but that doesn't stop us from writing best-sellers every month. If you have a great book idea that needs a professional touch, you won't find better ghostwriting services than ours!"
        para2="Why are we so confident? Aside from our impeccable track record of producing well-selling books, our team comprises some of the world's best ghostwriting talents. We meticulously scoured the market for months, conducting interviews, tests, and evaluations to hire the exceptional ghostwriters who make up our team."
        img={false}
        picture={sideImg}
      />
      <ServicesSection />
      <DiscBanner
        head={"Your story is eagerly awaited by the world."}
        text={"Let's work together to take the first step towards achieving your goal of becoming a world-class author. Our ghost writing agency is primed to polish and shape your ideas into a compelling narrative that launches your author career. With our partnership, your idea can be converted into a professional and entertaining book that resonates with readers, pushing you into the spotlight. Join us, and as a team, let's give the readers what they are waiting for!"
        }
      />
      <ExceptionalSection
        head="Unlocking the Secrets of Professional Ghostwriting Services"
        text={
          " Behind every triumph lies a meticulously crafted process. By refining this process to perfection, success becomes a commodity we deliver to each and every client. This principle underpins our approach to ghostwriting services. We meticulously honed our methodology, documenting and enhancing it until the books we produced were nothing short of excellence"
        }
        pTab1Title={"Vision & Idea Understanding"}
        pTab1Content={
          "Understanding the Client's Vision: The Key to Success No matter your skill level, delivering the desired book or results hinges on understanding the client's needs. That's why we prioritize listening to our customers, comprehensively grasping their vision and concept for the book."
        }
        pTab2Title={"Book Strategizing"}
        pTab2Content={
          "With the headings in place, our team of professionals can confidently commence the strategic planning of your book. This blueprint will form the cornerstone upon which your book will be built."
        }
        pTab3Title={"Collaboration & Feedback"}
        pTab3Content={
          "Upon reaching significant milestones, our writers will promptly send you the manuscript for your review and feedback. Your input is invaluable to us; once we receive your thoughts, we'll incorporate any changes you desire before progressing further."
        }
        pTab4Title={"Finishing Touches"}
        pTab4Content={
          "After your book is finished and meets your satisfaction, our team of editors and formatters will work their magic, refining it to stand out and exude a premium quality that sets it apart from the rest."
        }
      />
      <CounterStatsSection />

      <MidBanner
        head={"Your Friendly Neighborhood Ghostwriters for Hire!"}
        para1={
          "You're someone who takes your daily tasks and responsibilities seriously, leaving little time for pursuing your dream of writing a book. But fear not! Our team of ghostwriting professionals is here to help!"
        }
        para2={
          "We understand that writing a book is a monumental task that requires endless hours of dedication and creativity. Unfortunately, not everyone has the luxury of time to devote to this endeavor. That's where we step in! Our ghostwriters specialize in bringing your vision to life, crafting a book that resonates with your target audience."
        }
        para3={
          "Hiring our team not only streamlines the process and ensures your book's success but also allows you to focus on your daily life with the confidence that your book is progressing toward completion"
        }
        more={false}
      />

      <PortfolioSection />

      <FAQSection />

      <ContactForm
        head={"Penguin Author House Pens Your Dreams Into Reality"}
        para={
          "Have any inquiries or need further assistance? Reach out to us today. We're here to help you ease the process and make your book project a reality."
        }
      />
    </React.Fragment>
  );
};

export default Ghostwriting;
