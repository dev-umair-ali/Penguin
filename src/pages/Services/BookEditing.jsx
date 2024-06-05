import React, { useEffect } from "react";
import Banner from "../../components/banners/Banner";
import BrandsSection from "../../components/BrandsSection ";
import AboutSection from "../../components/AboutSection/AboutSection ";
import sideImg from "../../assets/images/editing-will.webp";
import DiscBanner from "../../components/banners/DiscBanner";
import ExceptionalSection from "../../components/Ghostwriting/ExceptionalSection";
import StepSection from "../../components/StepsSection/StepSection";
import CounterStatsSection from "../../components/CounterStatsSection";
import MidBanner from "../../components/banners/MidBanner";
import PortfolioSection from "../../components/PortfolioSections/PortfolioSection";
import FAQSection from "../../components/FAQSection";
import ContactForm from "../../components/ContactForm";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";


const BookEditing = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Book Editing Services";
  }, []);
  return (
    <React.Fragment>
      <Banner
        head={
          "Access Top-tier Book Editing Services from Our Team of Expert Book Editors"
        }
        para={
          "Partner with a professional book editing company to guarantee your book is polished, free from typos, grammatical errors, plagiarism, and awkward phrasing."
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Book Editing Agency"}
        headText="Looking For Book Editors? “Our Professional Book Editing Service Company Is At Your Service!"
        para1="We offer cost-effective book editing services catering to both authors and publishers. Our seasoned team of editors understands the art of writing, emphasizing precision, meticulous attention to detail, and creative finesse. Specializing in fiction, non-fiction, memoirs, and academic works, we ensure the manuscripts we edit are refined and publication-ready. Going the extra mile, we provide personalized assistance, working closely with authors to align their works with their vision. Committed to delivering original, non-plagiarized content, we tailor our services to meet the distinct requirements of each client. Choose us for unparalleled book editing services"
        img={false}
        picture={sideImg}
      />
      <DiscBanner
        head={"Ready to showcase your work to the audience?"}
        text={
          "Let our editors refine your book's content. We carefully review your manuscript, ensuring the tone and flow are perfected."
        }
      />
      <ExceptionalSection
        head="Our Professional Book Editing Process"
        text={
          "Elevate Your Book to Masterpiece Status with Expert Book Editing"
        }
        pTab1Title={"Content Review"}
        pTab1Content={
          "Have you recently completed your manuscript? Our book editors will meticulously review your content and conduct comprehensive research to fact-check all information"
        }
        pTab2Title={"Editing"}
        pTab2Content={
          "Your book will be assigned to one of our seasoned editors, who will carefully evaluate your content, making necessary additions, modifications, and subtractions"
        }
        pTab3Title={"Proofreading"}
        pTab3Content={
          "After the editing process, our proofreading department will handle the final touches. This phase ensures your book maintains optimal pacing, flow, organization, voice, characterization, and exposition"
        }
        pTab4Title={"Formatting"}
        pTab4Content={
          "After your book clears the editorial team, our professionals will format it to ensure consistency in headings, text, font style, and tables throughout"
        }
        pTab5Title={"Publishing"}
        pTab5Content={
          "After you've given your approval on our final draft, we'll proceed to publish your book and implement promotional strategies to maximize its exposure"
        }
        more={true}
      />
      <StepSection
        head1={"How Do We Rank"}
        head2={"the Top in Literary World?"}
        para={
          "We provide professional, precise, and completely reliable editing services in the book industry. Here's how:"
        }
        id1={"tab1"}
        title1={"Line Editing"}
        content1={`Our editors enhance the clarity of your writing through meticulous line editing.`}
        id2={"tab1"}
        title2={"Developmental Editing"}
        content2={`We guarantee your story is captivating and readily comprehensible before it's shared with the world.`}
        id3={"tab1"}
        title3={"Structural Editing"}
        content3={`Also referred to as substantive editing, structural editing ensures your story maintains a consistent flow. Our editors provide comprehensive structural editing services at competitive rates.`}
        id4={"tab1"}
        title4={"Structural Editing"}
        content4={`Copy editing follows structural editing, during which our team identifies errors and fact-checks all past events, dates, names, times, and places mentioned in the book.`}
        id5={"tab1"}
        title5={"Structural Editing"}
        content5={`Mechanical editing involves applying specific writing styles to your content. Our editors are highly proficient in various style guides, including APA, Chicago, Harvard, and more.`}
        more={true}
      />
      <CounterStatsSection heading={"Ready to Publish Your First Book? Take Advantage of Our Affordable Book Editing Service."} para={"The best book editing company can assist you in crafting a compelling storyline for your book. Our writers and editors will work closely with you at every stage to create unique and engaging content 	  "} />
      <MidBanner
        head={"Diligent Book Editors and Proofreaders"}
        para1={
          "Our team of expert book editing services is dedicated to refining and polishing your manuscript to the highest standards. Entrust us with your literary masterpiece and let us assist you in realizing your publishing aspirations"
        }
        more={false}
      />
      <PortfolioSection />
      {/* <TestimonialSection /> */}
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

export default BookEditing;
