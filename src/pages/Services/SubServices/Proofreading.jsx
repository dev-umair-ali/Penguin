import React, { useEffect } from "react";
import Banner from "../../../components/banners/Banner";
import BrandsSection from "../../../components/BrandsSection ";
import AboutSection from "../../../components/AboutSection/AboutSection ";
import sideImg from "../../../assets/images/publishing-will.webp";
import DiscBanner from "../../../components/banners/DiscBanner";
import ExceptionalSection from "../../../components/Ghostwriting/ExceptionalSection";
import StepSection from "../../../components/StepsSection/StepSection";
import ContactForm from "../../../components/ContactForm";
import FAQSection from "../../../components/FAQSection";
import PortfolioSection from "../../../components/PortfolioSections/PortfolioSection";
import MidBanner from "../../../components/banners/MidBanner";
import CounterStatsSection from "../../../components/CounterStatsSection";

const Proofreading = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Book Video Trailer";
  }, []);
  return (
    <React.Fragment>
      <Banner
        head={
          "Trustworthy, Professional, and Impeccable Book Proofreading Service"
        }
        para={
          "Penguin Author House caters to your needs as an author, providing exceptional manuscript proofreading services for your convenience."
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Penguin Author House"}
        headText="Searching for an Online Proofreading and Editing Service? We're here to assist you!"
        para1="The experts at Penguin Author House have years of experience in editing and proofreading. With a strong command of the English language and the ability to eliminate plot holes and grammatical errors, we can transform your book into a masterpiece!"
        img={false}
        picture={sideImg}
      />
      <DiscBanner
        head={"Planning to publish a book? Let our team proofread it first!"}
        text={
          "Hire professional book editing services to ensure your readers fully enjoy the masterpiece that is your book!"
        }
      />

      <ExceptionalSection
        head="Our Flawless Proofreading Process"
        text={
          "We have assisted a diverse range of clients from various backgrounds in entering the literary industry with remarkable books. Our process involves the following steps:"
        }
        pTab1Title={"Draft Submission"}
        pTab1Content={
          "Authors and writers submit their manuscripts along with specific instructions for our editors and proofreaders."
        }
        pTab2Title={"Thorough Reading And Review"}
        pTab2Content={
          "Our experts will thoroughly review your manuscript to understand its story, flow, and structure."
        }
        pTab3Title={"Fixing Errors"}
        pTab3Content={
          "Our proofreaders will correct any mistakes and errors, ensuring your manuscript is clean, crisp, and readable."
        }
        pTab4Title={"Software Tools"}
        pTab4Content={
          "Penguin Author House utilizes AI tools and software such as Hemingway, Copyscape, and Grammarly to ensure 100% accurate results."
        }
        pTab5Title={"Design Finalization"}
        pTab5Content={
          "Once the draft has been thoroughly proofread, our team will proceed with designing and typesetting."
        }
        more={true}
      />
      <StepSection
        head1={"What sets Penguin Author House "}
        head2={"apart from others?"}
        para={
          "Our professional team of proofreaders can help you achieve your dream of becoming a renowned author. Here’s why our proofreading services are unmatched in the industry:"
        }
        id1={"tab1"}
        title1={"Grammar"}
        content1={`Our proofreaders meticulously review your book multiple times to correct all grammatical mistakes.`}
        id2={"tab1"}
        title2={"Punctuation"}
        content2={`Incorrect punctuation can deter your readers. We ensure your content uses proper punctuation, enhancing reader understanding of your story.`}
        id3={"tab1"}
        title3={"Spelling"}
        content3={`Many authors overlook spell-checking their work. Our proofreaders can assist you in identifying and correcting all typos and spelling mistakes.`}
        id4={"tab1"}
        title4={"Omitted or Repeated Words"}
        content4={`Proofreading helps identify repeated or omitted words in the text. Penguin Author House offers exceptional proofreading services to ensure your content is free from redundancy and missing words.`}
        id5={"tab1"}
        title5={"Spacing and Format"}
        content5={`Formatting enhances the visual appeal and readability of your book. Let our proofreaders manage the formatting and spacing aspects for you.`}
        id6={"tab1"}
        title6={"Spacing and Format"}
        content6={`Our proofreaders attend to various aspects of typography, including letter spacing, line spacing, line lengths, point sizes, and more.
        `}
        more={true}
        exmore={true}
      />
      <CounterStatsSection heading={"Ready to set new records in the literary world?"} para={"Penguin Author House has successfully assisted over a hundred authors in creating impactful books. Our professional proofreading services can help make your content a #1 bestseller!"} />
      <MidBanner
        head={"High-Quality Book Proofreading at Competitive Rates"}
        para1={
          "Our premium book proofreading service can assist you in identifying grammatical errors, plot holes, punctuation mistakes, and formatting issues in your manuscript. Hire us today"
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

export default Proofreading;
