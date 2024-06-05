import React, { useEffect } from "react";
import Banner from "../../components/banners/Banner";
import BrandsSection from "../../components/BrandsSection ";
import AboutSection from "../../components/AboutSection/AboutSection ";
import sideImg from "../../assets/images/publishing-will.webp";
import DiscBanner from "../../components/banners/DiscBanner";
import ExceptionalSection from "../../components/Ghostwriting/ExceptionalSection";
import StepSection from "../../components/StepsSection/StepSection";
import ContactForm from "../../components/ContactForm";
import FAQSection from "../../components/FAQSection";
import PortfolioSection from "../../components/PortfolioSections/PortfolioSection";
import MidBanner from "../../components/banners/MidBanner";
import CounterStatsSection from "../../components/CounterStatsSection";

const BookPublishing = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Book Publishing Services";
  }, []);
  return (
    <React.Fragment>
      <Banner
        head={"Engage Our Book Publishers & Enjoy Stress-Free Book Publishing Services"}
        para={
          "In search of a streamlined book publishing journey? Our agents are here to facilitate the publishing of your book with ease and efficiency"
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Book Publication Agency"}
        headText="Seeking a Dependable Book Publishing Company?"
        para1="We are a dependable and reputable agency capable of connecting you with top publishers in the industry. "
        img={false}
        picture={sideImg}
      />
      <DiscBanner
        head={"READY TO LAUNCH YOUR FIRST BOOK?"}
        text={
          "Our online book publishing services will showcase your creative ideas and captivating concepts to the world."
        }
      />

      <ExceptionalSection
        head="Explore Our Impeccable Book Publishing Process"
        text={
          "Our book publishing service ensures a seamless process to help you effectively reach your target audience."
        }
        pTab1Title={"Draft Submission"}
        pTab1Content={
          "Our process commences with writers submitting their finalized drafts to our agency along with publishing and printing instructions"
        }
        pTab2Title={"Editing And Proofreading"}
        pTab2Content={
          "Our team will review your manuscript and ensure it is fit for publication. Here, we will proofread your work and correct any grammatical errors or punctuation mistakes we encounter."
        }
        pTab3Title={"Typesetting"}
        pTab3Content={
          "After finalizing the draft, we will format the manuscript to ensure it adheres to the appropriate font style and incorporates any imagery as needed"
        }
        pTab4Title={"Book Designing"}
        pTab4Content={
          "Our design team will then step in to craft a captivating and visually appealing book cover for your content."
        }
        pTab5Title={"Publication And Distribution"}
        pTab5Content={
          "We'll submit the final draft to you for approval before proceeding with publication. The published manuscript will adhere to the format you've specified."
        }
        more={true}
      />
      <StepSection
        head1={"How Do We Offer"}
        head2={"The Best Publishing Services?"}
        para={
          "We take pride in our esteemed reputation within the literary industry, aiding numerous individuals in their journey to become successful authors. Here's how:"
        }
        id1={"tab1"}
        title1={"Hype"}
        content1={`Before your book is published, our agents will work to generate significant excitement and anticipation for it across the internet`}
        id2={"tab1"}
        title2={"Build Your Audience "}
        content2={`Our skilled publishers make it a priority to cultivate your audience before your book is launched`}
        id3={"tab1"}
        title3={"Market Research "}
        content3={`Our publishing experts will analyze current market trends to establish the optimal price for your book`}
        id4={"tab1"}
        title4={"Publish Your Book "}
        content4={`Our team possesses the necessary resources and connections with reputable publishing houses to ensure your book is published promptly.`}
        id5={"tab1"}
        title5={"Read Events "}
        content5={`We can also coordinate reading events post-book launch, providing you with the opportunity to personally engage with your target audience`}
        id6={"tab1"}
        title6={"Post-Marketing "}
        content6={`Our team remains committed to marketing your book even after publication, aiming to increase sales and maximize profits for you.`}
        more={true}
        exmore={true}
        />
      <CounterStatsSection heading={"Ready to Chase Your Dream of Becoming an Author?"} para={"We're here to support you in achieving your dream of becoming a recognized author. Simply submit your manuscript, and our agent will handle the publication process for you "} />
      <MidBanner
        head={"Your book could be the next bestseller. Contact our book publishing services today."}
        para1={
          "Seeking to guarantee your book finds its way onto your target reader's shelf? Our book publishing services are here to assist. Our team will ensure your book meets publication standards for a seamless process."
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

export default BookPublishing;
