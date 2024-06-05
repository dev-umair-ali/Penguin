import React, { useEffect } from "react";
import Banner from "../../components/banners/Banner";
import BrandsSection from "../../components/BrandsSection ";
import AboutSection from "../../components/AboutSection/AboutSection ";
import sideImg from "../../assets/images/marketing-will.webp";
import DiscBanner from "../../components/banners/DiscBanner";
import ExceptionalSection from "../../components/Ghostwriting/ExceptionalSection";
import StepSection from "../../components/StepsSection/StepSection";
import CounterStatsSection from "../../components/CounterStatsSection";
import MidBanner from "../../components/banners/MidBanner";
import PortfolioSection from "../../components/PortfolioSections/PortfolioSection";
import FAQSection from "../../components/FAQSection";
import ContactForm from "../../components/ContactForm";
const BookMarketing = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Book Marketing Services";
  }, []);
  return (
    <>
      <Banner
        head={"We Provide Expert Book Marketing Services"}
        para={
          "Announce your latest release to the world. Access our premium book marketing service to connect with your target audience."
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Book Marketing Agency"}
        headText="Seeking Book Promotion Services? Get in Touch Today!"
        para1="Ready to give your book the exposure it deserves? You've come to the right place! Our book promotion services are tailored to help authors like you expand their audience and boost book sales. Leveraging our expertise and strategic marketing methods, we craft personalized promotional campaigns to ignite excitement and amplify your book's presence. Whether you're a self-published author or partnered with a traditional publisher, our dedicated team is committed to guiding you through the process. Reach out today, and together, let's elevate your book to new heights!"
        img={false}
        picture={sideImg}
      />
      <DiscBanner
        head={
          "READY TO BECOME A BESTSELLING AUTHOR? OUR ONLINE BOOK MARKETING CAN HELP!"
        }
        text={
          "Our book promoters and marketers have the right experience and knowledge to attract the attention of your target audience."
        }
      />

      <ExceptionalSection
        head="Our Extensive Book Marketing Process Comprises"
        text={
          "Our distinctive book marketing approach can pave the way for you to become the next bestselling author!"
        }
        pTab1Title={"Content Review"}
        pTab1Content={
          "Our experts will meticulously review your manuscript and craft a tailored marketing plan designed to captivate your target audience."
        }
        pTab2Title={"Document Development"}
        pTab2Content={
          "Our marketing experts draft unique and engaging book promotional activities both online and offline to yield desired results."
        }
        pTab3Title={"Book Promotion"}
        pTab3Content={
          "Our marketing experts conceptualize distinctive and captivating book promotion strategies, both online and offline, to achieve the desired outcomes. "
        }
        pTab4Title={"Post-Launch Promotion"}
        pTab4Content={
          "We employ various channels to sustain the momentum of your book post-launch. This encompasses social media marketing, email campaigns, LinkedIn articles, blogs, and Amazon promotional strategies."
        }
        more={false}
      />
      <StepSection
        head1={"Learn How Our Experts"}
        head2={"Market Your Book"}
        para={
          "We've garnered acclaim for our high-quality and trendsetting book promotion services. Here's what sets our marketing services apart as the best in the industry"
        }
        id1={"tab1"}
        title1={"Social Media Marketing"}
        content1={`Our experts leverage social media platforms such as Instagram, Facebook, Twitter, and more to promote your book`}
        id2={"tab1"}
        title2={"Google Ads"}
        content2={`We can assist you in reaching your target audience by launching compelling Google ads for your book`}
        id3={"tab1"}
        title3={"Website Creation"}
        content3={`In our promotions division, we develop a website for you to connect with your audience and showcase your book`}
        id4={"tab1"}
        title4={"Book Cover Designs"}
        content4={`Did you know that your book's cover design plays a pivotal role in its promotion? Our graphic designers craft captivating cover designs to entice readers to purchase a copy of your book`}
        id5={"tab1"}
        title5={"Client Reviews"}
        content5={`OOur team will strive to gather positive reviews from your readers and showcase them on your website, encouraging more people to consider purchasing your book`}
        more={true}
      />
      <CounterStatsSection heading={"Ready to Publish Your First Book? Consider Promotion First!"} para={"Don't let your efforts go to waste by neglecting a proper promotional strategy for your book. Hire our services today and watch your words come alive for the world to see."} />
      <MidBanner
        head={"Ensure your story gets the attention it deserves!"}
        para1={
          "Backed by our team of book marketing experts, we'll devise tailored strategies to promote your book to the perfect audience. through captivating online campaigns or strategic advertising, we possess the expertise and tools to enhance your book's. Don't let your story fade into the background. Seize the opportunity to elevate your book to new heights. Reach out to us today, and together,let's make your book the talk of the town"}
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

export default BookMarketing;
