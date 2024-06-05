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

const StoryWriting = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Manuscript Writing";
  }, []);
  return (
    <>
      <Banner
        head={
          "Spark creativity with our premier short story writers available for hire!"
        }
        para={
          "Our team of professional storyline writers specializes in crafting narratives that transport readers to mesmerizing worlds. With our expertise, we guarantee engaging storytelling that captivates and inspires your audience. We are dedicated to creating gripping narratives that forge a special connection with readers, immersing them in extraordinary experiences."
        }
      />
      <BrandsSection />
      <AboutSection
        text={"Story Writing Agency"}
        headText="Hire our story writers to bring your stories to life!"
        para1="We recognize the profound impact of storytelling. Every idea, character, and plotline holds the potential to captivate and inspire readers. With our skilled team of story writers for hire, we breathe life into your narratives with passion, creativity, and expertise. Whether you're an aspiring author, a business seeking to elevate your brand through compelling storytelling, or an individual with a unique tale to tell, we offer the perfect writer for your needs."
        para2={
          "We take pride in delivering original, high-quality content that embodies the essence of your ideas and ignites readers' imaginations. Choose us to hire story writers, and together, let's craft stories that resonate and endure."
        }
        img={false}
        picture={sideImg}
      />
      <DiscBanner
        head={
          "Are you prepared to embark on the journey of storybook writing? Partner with us today!"
        }
        text={
          "Immerse yourself in a realm of enchantment with our skilled team of storytellers. Opt for our creative story-writing services and begin an adventure brimming with wonder, adventure, and endless possibilities."
        }
      />

      <ExceptionalSection
        head="The Process of Crafting Stories Without Interruption"
        // text={
        //   "Our unique book marketing process can get you a chance to become the next bestselling author!"
        // }
        pTab1Title={"Place Your Order"}
        pTab1Content={
          "Start your storytelling journey by placing an order with us. We simplify the process, making it effortless for you to begin and articulate your needs, ensuring a smooth experience right from the start."
        }
        pTab2Title={"Share Your Requirements"}
        pTab2Content={
          "Share your vision and storytelling requirements with our expert team. Provide the details, themes, and preferences that will guide your story, allowing us to create a narrative that reflects your distinct vision."
        }
        pTab3Title={"Outline Creation"}
        pTab3Content={
          "Our adept writers carefully develop a detailed outline that maps out your story's plot, characters, and essential elements. This pivotal step establishes a strong foundation for crafting an engaging tale."
        }
        pTab4Title={"Draft Submission"}
        pTab4Content={
          "Our talented writers work diligently to breathe life into your story, delivering a draft that captures the essence of your vision and sets the stage for an immersive reading experience."
        }
        pTab5Title={"Edits And Revisions"}
        pTab5Content={
          "Engage closely with our team throughout the editing and revision process. Your feedback is highly valued, and we make necessary adjustments to polish the story, ensuring it meets your expectations and resonates with readers."
        }
        pTab6Title={"Publication"}
        pTab6Content={
          "Witness the fulfillment of your story. Upon your approval, we manage the publication process, transforming your narrative into a polished and professional book ready to be shared with the world."
        }
        more={true}
        exmore={true}
      />
      <StepSection
        head1={"Immerse Yourself in "}
        head2={"Our Captivating Story Writing Service!"}
        para={
          "Embark on a journey of imagination and emotion with our skilled storytellers and comprehensive range of services, all at your fingertips. Hire story writers adept in various genres and formats to breathe life into your tales."
        }
        id1={"tab1"}
        title1={"Creative story writing"}
        content1={`Spark your imagination with our team of top-notch short story writers. We specialize in creating original and captivating narratives that whisk readers away to extraordinary worlds of your design.`}
        id2={"tab1"}
        title2={"Narrative stories"}
        content2={`Allow our seasoned story writers to bring your ideas to life. We expertly craft narratives that unfold effortlessly, captivating readers from start to finish.`}
        id3={"tab1"}
        title3={"Comic story writing"}
        content3={`Discover the enchantment of storytelling with our comic story-writing service. Our skilled writers blend humor, visuals, and engaging narratives to craft captivating and entertaining comic stories.`}
        id4={"tab1"}
        title4={"Expository writing"}
        content4={`Our adept writers specialize in presenting information clearly and succinctly. With our expository writing service, we engage readers through well-researched and informative content.`}
        id5={"tab1"}
        title5={"Descriptive writing"}
        content5={`Transport readers to vibrant worlds with our descriptive writing service. Our writers skillfully depict scenes with vivid detail, crafting rich sensory experiences that linger in the mind.`}
        id6={"tab1"}
        title6={"Persuasive story writing"}
        content6={`Influence and captivate your audience with our persuasive story-writing service. Our talented writers specialize in crafting narratives that resonate deeply, provoke thought, and motivate action.`}
        more={true}
        exmore={true}
      />
      <CounterStatsSection
        heading={
          "Unlock the potential of your story with a professional story writing company!"
        }
        para={
          "Step into a realm where words wield infinite power. Our team of skilled storytellers crafts enchanting narratives, blending creativity and craftsmanship to fashion literary masterpieces that transcend the ordinary."
        }
      />
      <MidBanner
        head={"Professional storytellers ready to bring your ideas to life!"}
        para1={
          "We are more than just story writers; we are masters of the craft, infusing every word with brilliance and depth. With our team of storytelling artisans at your side, we not only create captivating stories but also provide short story editing services to polish your work to perfection.  "
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

export default StoryWriting;
