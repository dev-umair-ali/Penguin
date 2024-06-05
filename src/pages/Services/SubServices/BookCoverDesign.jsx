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

const BookCoverDesign = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Book Cover Design";
  }, []);
  return (
    <React.Fragment>
      <Banner
        head={
          "Elevate Your Book with Stunning Cover Designs from Our Book Cover Designers."
        }
        para={
          "We boast an exceptional team of book cover artists for hire, ready to give your book a captivating and exotic cover design."
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Book Publication Agency"}
        headText="In Search of Professional Book Cover Design Services? You've Come to the Right Place."
        para1="Our experts possess the skills to enhance your book's sales potential. With our team's ability to create professional book cover designs, you can expect a lucrative return on your investment."
        img={false}
        picture={sideImg}
      />
      <DiscBanner
        head={"Ready to introduce your first book to the world?"}
        text={
          "Our designers can enhance any book with stunning imagery, typography, and creative concepts, making it unique and attractive."
        }
      />

      <ExceptionalSection
        head="Review Our Flawless Book Publishing Process"
        text={
          "Our team of book cover illustrators for hire is brimming with excellent ideas to promote your book. Our book cover design process includes the following steps"
        }
        pTab1Title={"Brainstorming"}
        pTab1Content={
          "Our team of fantasy book cover artists for hire will assess your book and brainstorm ideas to create imaginative images and graphics that resonate with its content."
        }
        pTab2Title={"Designing"}
        pTab2Content={
          "The subsequent stage entails crafting distinctive and visually captivating book cover designs. Our team employs state-of-the-art tools and software to generate unparalleled digital art. Additionally, our designers specialize in providing interior illustrations for authors of children's books."
        }
        pTab3Title={"Approvals"}
        pTab3Content={
          "Engage our fantasy book cover artists to receive several book cover design options. Upon your approval of a design, our team will finalize the book cover content and proceed with publishing"
        }
        pTab4Title={"Revisions"}
        pTab4Content={
          "If there's anything you're not satisfied with or if you wish to make minor edits, we're here to listen. Our team ensures unlimited revisions, which is why we maintain a high rate of customer satisfaction. Once the edits are incorporated, our designers will proceed with the book publication process"
        }
        more={false}
      />
      <StepSection
        head1={"How our Designers"}
        head2={"Excel in Book Cover Design?"}
        para={
          "Elevate your book with a captivating cover design! Discover the reliability behind our book cover design services with these key features"
        }
        id1={"tab1"}
        title1={"format"}
        content1={`Our team specializes in crafting tailored cover designs suitable for both print and e-book formats.`}
        id2={"tab1"}
        title2={"copy"}
        content2={`Our designers excel in creating compelling front and back book covers that captivate your audience's attention.`}
        id3={"tab1"}
        title3={"graphic"}
        content3={`We employ cutting-edge software and tools to craft your book's cover design meticulously. Additionally, we ensure to gather and incorporate all essential details, including the publishing company's logo, pricing, barcodes, and more.`}
        id4={"tab1"}
        title4={"budget"}
        content4={`Our experts tailor book covers according to the author's budgetary preferences.`}
        id5={"tab1"}
        title5={"Colors, Fonts, & Texts"}
        content5={`At PBW, we leverage a diverse array of colors, text styles, and fonts in our book cover designs to appeal to a broad audience, whether online or in brick-and-mortar bookstores.`}
        id6={"tab1"}
        title6={"feedback"}
        content6={`Ensuring customer satisfaction is our foremost priority, and we're committed to revising back cover content multiple times until it aligns perfectly with your requirements.`}
        more={true}
        exmore={true}
      />
      <CounterStatsSection
        heading={"Ready to Embark on Your Authorial Journey?"}
        para={
          "Contact us today and start living your dream of becoming a celebrated author in just a few weeks"
        }
      />
      <MidBanner
        head={"Get Your Story the Attention It Deserves!"}
        para1={
          "Tailored to specific genres, our designs feature thematic elements, blended collages, diverse layouts, and captivating typography, ensuring your book garners the attention it deserves in the literary world.From crafting compelling back cover narratives to designing stunning covers, our team excels at capturing your audience's interest from the outset. Our fantasy book cover artists offer a range of design types"
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

export default BookCoverDesign;
