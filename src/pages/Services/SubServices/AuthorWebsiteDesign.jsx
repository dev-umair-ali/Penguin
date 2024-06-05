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
const AuthorWebsiteDesign = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House |Author Website Design";
  }, []);
  return (
    <React.Fragment>
      <Banner
        head={
          "Enhance Your Online Presence with Exceptional Author Website Design Services!"
        }
        para={
          "We specialize in crafting visually stunning and user-friendly author websites that reflect your unique voice and brand. From intuitive navigation to personalized design features, our expert team will create an author website that resonates with your audience"
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Author Web Design Agency"}
        headText="Hire the Best Author Website Design Agency"
        para1="Our team of skilled professionals will craft a visually stunning and fully functional author website tailored to reflect your unique style and captivate your audience. From intuitive navigation to responsive layouts, we prioritize user experience, ensuring visitors can seamlessly explore your books, engage with your content, and connect with you."
        para2="Drawing on our expertise in author website design, we seamlessly blend aesthetics and functionality to create a platform that not only showcases your writing but also establishes your brand identity. As a seasoned author website design agency, we recognize the significance of personalized solutions. Stand out from the crowd, captivate your readers, and elevate your online presence with our dedicated team of author website designers for hire."
        img={false}
        picture={sideImg}
      />
      <DiscBanner
        head={"Bespoke Book Author Website Designed by Expert Designers!"}
        text={
          "Our dedicated author website designers specialize in crafting beautiful websites that capture your unique voice, attract readers, and enhance your online presence. Choose us for a website that truly represents your author brand."
        }
      />

      <ExceptionalSection
        head="Our Smooth Website Design Process"
        // text={
        //   "Our book publishing service guarantees a flawless process to help you reach out to your target audience more effectively."
        // }
        pTab1Title={"Order Placement"}
        pTab1Content={
          "Embark on your author website design journey by placing an order with us. Our streamlined process guarantees a seamless experience, empowering you to kickstart the creation of your professional online presence"
        }
        pTab2Title={"Share Your Requirements"}
        pTab2Content={
          "Share your vision, branding, and specific requirements for your author's website with us. Our team will collaborate closely with you to grasp your needs and develop a customized design plan that reflects your goals"
        }
        pTab3Title={"Design Creation"}
        pTab3Content={
          "Our seasoned designers will breathe life into your vision, sculpting a visually arresting and user-friendly design for your author's website. Prioritizing aesthetics, functionality, and user experience, we'll craft a website that mirrors your distinctive style and captivates your audience."
        }
        pTab4Title={"Approval"}
        pTab4Content={
          "After completing the initial design, we'll present it to you for approval. Your input and feedback are invaluable to us, and we'll incorporate any necessary revisions to guarantee your complete satisfaction with the design."
        }
        pTab5Title={"Development And Revisions"}
        pTab5Content={
          "Upon approval of the design, our developers will transform it into a fully functional website. We'll keep you updated and engaged throughout the development phase, making any necessary revisions to align with your preferences."
        }
        pTab6Title={"Website Launch"}
        pTab6Content={
          "After completing development and revisions, your author's website is primed for launch. We'll manage all technical aspects for a seamless and successful launch, enabling you to spotlight your books, connect with readers, and establish a polished online presence  "
        }
        more={true}
        exmore={true}
      />
      <StepSection
        head1={"Why We Are"}
        head2={" The Ultimate Author Website Choice"}
        para={
          "In the realm of author websites, we stand as the premier choice. Leveraging our writing and web design prowess, we provide a distinctive fusion of captivating content and visually stunning website design. Rely on us to craft an author website that flawlessly showcases your brand."
        }
        id1={"tab1"}
        title1={"Comic Book Website Design"}
        content1={`Our expert website designers for authors specialize in crafting visually dynamic and immersive comic book websites that captivate readers and spotlight your unique storytelling style.`}
        id2={"tab1"}
        title2={"Fiction Book Website Design"}
        content2={`Capture the essence of your fiction books with our bespoke website design. We craft visually stunning and user-friendly websites that enthrall readers and elevate your author brand.`}
        id3={"tab1"}
        title3={"Storybook Website Design"}
        content3={`Spark the imagination of young readers with a captivating storybook website. Our designers craft enchanting and interactive websites that breathe life into your stories, captivating children and parents alike.`}
        id4={"tab1"}
        title4={"Horror Book Website Design"}
        content4={`We specialize in designing websites that evoke the spine-chilling atmosphere of horror books. Our expert team creates visually striking and eerie websites that immerse readers in the terrifying world of your tales.`}
        new={true}
        more={false}
      />
      <CounterStatsSection
        heading={"Ready to Unveil a Captivating Website for Your Book?"}
        para={
          "Looking for a captivating website design for your book? Our team of expert author website designers will craft an attractive, engaging, and informative platform, facilitating connections with readers worldwide."
        }
      />
      <MidBanner
        head={"Professional Author Website Designs Tailored for Your Books"}
        para1={
          "Obtain expert designs for your author's website, captivating readers and showcasing your books in the best possible light. Our attractive, engaging, and informative content ensures users choose us for their premier book website design needs."
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

export default AuthorWebsiteDesign;
