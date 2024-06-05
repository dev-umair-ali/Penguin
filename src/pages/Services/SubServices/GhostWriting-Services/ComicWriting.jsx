import React, { useEffect } from "react";
import Banner from "../../../../components/banners/Banner";
import BrandsSection from "../../../../components/BrandsSection ";
import AboutSection from "../../../../components/AboutSection/AboutSection ";
import sideImg from "../../../../assets/images/editing-will.webp";
import DiscBanner from "../../../../components/banners/DiscBanner";
import ExceptionalSection from "../../../../components/Ghostwriting/ExceptionalSection";
import StepSection from "../../../../components/StepsSection/StepSection";
import CounterStatsSection from "../../../../components/CounterStatsSection";
import MidBanner from "../../../../components/banners/MidBanner";
import PortfolioSection from "../../../../components/PortfolioSections/PortfolioSection";
import FAQSection from "../../../../components/FAQSection";
import ContactForm from "../../../../components/ContactForm";

const ComicWriting = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Manuscript Writing";
  }, []);
  return (
    <>
      <Banner
        head={
          "Harness the expertise of professional comic book writers with our specialized comic book writing services."
        }
        para={
          "Do you have an amazing comic book concept? Let our comic book writing company bring your distinct ideas to life, crafting mesmerizing tales and unforgettable characters for your epic comic book."
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Comic Writers For Hire"}
        headText="Looking For Book Promotion Services? Contact Us Today!"
        para1="The comic book industry's vastness is undeniable, presenting a prime opportunity to seize. Our team of expert comic book script writers specializes in crafting fantastical universes that appeal to diverse audiences. Whether you aspire to become a top-selling author or have specific goals in mind, our experienced professionals can help you achieve them. Collaborate with our comic book writing company to meet your requirements and efficiently meet deadlines."
        para2={
          "Contact us today to discover more about our comprehensive array of comic book writing services!"
        }
        img={false}
        picture={sideImg}
      />
      <DiscBanner
        head={"Are you ready to share your work with the audience?"}
        text={
          "Discover the enchantment of storytelling with our professional comic writers. Our team of talented comic writers excels in transforming your ideas into visually engaging and captivating comic stories. Whether you envision a superhero epic or a whimsical comedy, our experts infuse creativity and imagination into every narrative, guaranteeing an unforgettable comic book experience. Don't miss out on the opportunity to elevate your story with a comic writer who will bring it to new heights."
        }
      />

      <ExceptionalSection
        head="The flawless process behind our comic book writing"
        text={
          "Our process is straightforward, efficient, and swift! We'll have you on your way to becoming a comic book author in no time!"
        }
        pTab1Title={"Order Details"}
        pTab1Content={
          "To reserve your spot, just fill out a short form, and one of our friendly project managers will contact you to collect all the necessary details about your book."
        }
        pTab2Title={"Research & Outline Draft"}
        pTab2Content={
          "Our writer will carefully analyze the available information to craft an outline for your comic. You will then have the opportunity to review and approve it."
        }
        pTab3Title={"Development Of Main Characters"}
        pTab3Content={
          "Throughout the process, we prioritize your ideas and input. We meticulously define each character's background, appearance, strengths, weaknesses, powers, and other attributes to keep the audience engaged."
        }
        pTab4Title={"Writing The Story"}
        pTab4Content={
          "Our writer focuses on drafting the complete narrative of the comic, emphasizing storytelling over visual direction."
        }
        pTab5Title={"Conversion To A Final Script"}
        pTab5Content={
          "Upon your approval, our writer transforms it into a formal comic book script format, incorporating essential elements such as artist directions."
        }
        more={true}
      />
      <StepSection
        head1={"Why Our Comic Writers"}
        head2={"Are Worth The Investment"}
        para={
          "Curious about what sets our comic scripting services apart as the best in the industry? Our hired comic book writers are experienced, approachable, and certified! Here’s a quick overview of what makes our services exceptional!"
        }
        id1={"tab1"}
        title1={"Wonderfully produced and formatted comic book script"}
        content1={`Our team meticulously crafts comic book scripts that adhere to industry standards, ensuring the final product is of the highest quality and prepared for publication.`}
        id2={"tab1"}
        title2={"Compelling storytelling"}
        content2={`Our writers possess a deep understanding of storytelling nuances, adept at creating characters and plots that resonate as both relatable and memorable.`}
        id3={"tab1"}
        title3={"Comic books in all genres"}
        content3={`We provide comic book writing services across all genres, whether it's superhero epics, horror tales, or romance comics. Whatever your vision, we have the expertise to bring it to life.`}
        id4={"tab1"}
        title4={"Script editing and polishing"}
        content4={`Our team of editors diligently reviews each comic book script to ensure it is polished and free of errors.`}
        id5={"tab1"}
        title5={"Effective communication"}
        content5={`We prioritize effective communication with our clients throughout the entire process, ensuring we address any questions or concerns they may have.`}
        more={true}
      />
      <CounterStatsSection
        heading={
          "Ready to access affordable comic writing services? Hire our expert comic book writers today!"
        }
        para={
          "Our comic writing experts can design, write, and publish epic comic books based on your ideas and creativity. Contact us today to seize the opportunity to author your own comic book!"
        }
      />
      <MidBanner
        head={"Dedicated Comic Book Writers & Editors"}
        para1={
          "If you lack the necessary writing skills, creating a comic book can seem daunting. However, if you have a brilliant storyline in mind, collaborate with our experienced comic writers to transform your idea into a masterpiece."
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
    </>
  );
};

export default ComicWriting;
