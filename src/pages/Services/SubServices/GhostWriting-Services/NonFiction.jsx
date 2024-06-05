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

const NonFiction = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Non Ficiton";
  }, []);
  return (
    <>
      <Banner
        head={
          "Exceptional Non-Fiction Writing Services Delivered by Creative Writers"
        }
        para={
          "Transform your knowledge, stories, and ideas into a compelling book. Rely on our skilled nonfiction writers to take your scattered thoughts and craft them into engaging narratives, whether it's a memoir, journal, autobiography, or guide."
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Hire Non Fiction Writers"}
        headText="Looking to Become a Non-Fiction Author? You’ve Come to the Right Place!"
        para1="At Hire Non Fiction Writers, we provide comprehensive non-fiction writing services, ensuring authenticity and originality every step of the way. We'll handle your book from inception, allowing you to embrace the journey of becoming a bestselling nonfiction author. "
        img={false}
        picture={sideImg}
      />
      <DiscBanner
        head={
          "Ready to Publish Your First Non-Fiction Novel? Let Our Writers Help You!"
        }
        text={
          "Our non-fiction writers and editors are highly skilled at transforming your ideas into engaging content. Book our services today!"
        }
      />

      <ExceptionalSection
        head="What a Seamless Content Production Process Involves"
        text={
          "Crafting a non-fiction book involves these five key steps. Explore our content production process to discover why we excel in the field."
        }
        pTab1Title={"Draft Submission"}
        pTab1Content={
          "Authors and writers provide project details along with their instructions for our team of writers and editors."
        }
        pTab2Title={"Thorough Research"}
        pTab2Content={
          "Our experts will assess your concepts and ideas and craft content with a cohesive flow and structure."
        }
        pTab3Title={"Fixing Errors"}
        pTab3Content={
          "Our proofreaders meticulously correct punctuation mistakes and grammatical errors during the editing phase, ensuring your manuscript is polished and readable. "
        }
        pTab4Title={"Publishing "}
        pTab4Content={
          "We'll send you the final draft for approval before proceeding with publication. The manuscript will be formatted according to your specifications."
        }
        pTab5Title={"Marketing"}
        pTab5Content={
          "We maintain promotion efforts for your book even after its release, enhancing its market exposure."
        }
        more={true}
      />
      <StepSection
        head1={"What Makes Our Non-Fiction"}
        head2={" Writers Worth Your Investment?"}
        para={
          "Our professional team of nonfiction writers can help bring you closer to realizing your dream of becoming a renowned author. Here are the types of nonfiction books we specialize in"
        }
        id1={"tab1"}
        title1={"Autobiographies"}
        content1={`Believe you have a story that can inspire the world? Entrust our ghostwriters to articulate your thoughts in the most impactful tone.`}
        id2={"tab1"}
        title2={"Memoirs"}
        content2={`Looking to leave a lasting legacy? Engage our ghostwriters to craft a memoir for you!`}
        id3={"tab1"}
        title3={"Self-Help"}
        content3={`Engage our ghostwriters if you believe the world can benefit from your experiences`}
        id4={"tab1"}
        title4={"Academic Journals"}
        content4={`Need to submit a dissertation or thesis? Trust our expert nonfiction writers to manage the project for you.`}
        id5={"tab1"}
        title5={"How To’s"}
        content5={`Believe you can instruct your audience in new recipes, lessons, or creative skills? Utilize our nonfiction writing services to publish a "how-to" book under your name`}
        id6={"tab1"}
        title6={"Travelogues"}
        content6={`Looking to ignite inspiration with your genuine travel adventures? Our team is here to make it happen!`}
        more={true}
        exmore={true}
      />
      <CounterStatsSection heading="Ready to Become a Nonfiction Author? Let Us Help You Master Nonfiction Writing Techniques Effortlessly." para={"Our nonfiction writing services can help you craft a compelling portrayal of your true-life events. Collaborate with our team today for the opportunity to publish a bestselling book."} />
      <MidBanner
        head={"Dedicated Nonfiction Writers & Editors at Your Service!"}
        para1={
          "Penguin Book Writers caters to writing excellent content. We further increase your book’s worth with our rigorous book editing service. Hire us today "
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

export default NonFiction;
