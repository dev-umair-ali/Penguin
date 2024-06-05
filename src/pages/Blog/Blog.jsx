import React, { useEffect } from "react";
import Banner from "../../components/banners/Banner";
import BannerV2 from "../../components/banners/BannerV2";
import img1 from "../../assets/images/loveus-card1.webp";
import img2 from "../../assets/images/loveus-card2.webp";
import img3 from "../../assets/images/loveus-card3.webp";
import img4 from "../../assets/images/loveus-card4.webp";

const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Penguin Author House | Blogs";
  }, []);

  const blogPosts = [
    {
      img: img1,
      heading: "Michelle Obama to be joined by Winfrey, Letterman, DeGeneres as Moderators for her upcoming “The Light We Carry” Book Tour",
      date: "Jul 06,2023",
      time: "6:22 AM",
      desc: "Michelle Obama, a renowned author, lawyer, and former first lady, is embarking on a nationwide tour this fall to promote her forthcoming book, 'The Light We Carry: Overcoming in Uncertain Times.' Each event boasts an impressive lineup of moderators, including iconic figures such as Oprah Winfrey, David Letterman, and Ellen DeGeneres, who will be making special appearances during the tour.",
    },
    {
      img: img2,
      heading: "Now Every Californian Kid Will Receive Free Books; Dolly Parton’s Struggles Brought Results",
      date: "Jul 06,2023",
      time: "6:19 AM",
      desc: "Dolly Parton, an American singer, songwriter, and businesswoman, is renowned not only for her musical talents but also for her impactful philanthropic endeavors.",
    },
    {
      img: img3,
      heading: "It Starts With Us Book Novel By Colleen Hoover: Everything You Should Know About It!",
      date: "Jul 06,2023",
      time: "6:18 AM",
      desc: "Colleen Hoover, an esteemed American author, excels in the romance genre, particularly in young adult romance. Her novel 'It Ends With Us' stands as a pinnacle of her career, having sold over a million copies globally and translated into over 20 languages, solidifying its status as a masterpiece in contemporary romance literature.",
    },
    {
      img: img4,
      heading: "Matthew Perry’s Friends, Lovers, and the Big Terrible Thing: Everything You Must Know About the Memoir",
      date: "Jul 06,2023",
      time: "6:17 AM",
      desc: "The highly anticipated book release of the year is just on the horizon. Matthew Perry, renowned for his portrayal of Chandler Bing in the beloved television sitcom 'Friends,' is an esteemed American-Canadian actor whose career is synonymous with the iconic series.",
    },
  ];

  return (
    <>
      <BannerV2
        head={"Welcome To The Penguin Author House Blog"}
        para={"One-stop resource to learn everything about book writing."}
      />
      <section className="sec-blog mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  {blogPosts.map((post, index) => (
                    <div key={index} className="card blog-card">
                      <div className="img-main">
                        <img src={post.img} className="img-fluid thumb" alt="" />
                      </div>
                      <div className="desc">
                        <a className="heading">{post.heading}</a>
                        <ul>
                          <li><a>{post.date}</a></li>
                          <li><a>{post.time}</a></li>
                        </ul>
                        <p>{post.desc}</p>
                        <a className="btn read-btn">read more</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
              <aside>
                <div className="recent-post">
                  <h4>Recent Posts</h4>
                  {blogPosts.map((post, index) => (
                    <div key={index} className="card rc-pst-card">
                      <div className="row gx-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                          <div className="img-main">
                            <img src={post.img} className="img-fluid thumb" alt="" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                          <div className="desc">
                            <a className="heading">{post.heading}</a>
                            <ul>
                              <li><a>{post.date}</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
