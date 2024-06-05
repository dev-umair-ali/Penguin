import React from "react";
import logo from "../../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <div className="header-logo">
              <img src={logo} alt="img" className="img-fluid" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item" id="navItemDrop">
                <a className="nav-link">Services</a>
                <div className="dropdown">
                  <ul>
                    <li id="navItemDropTwo">
                      <button className="dropdown-btn" id="drop2Toggle">
                        <i
                          className="fa-solid fa-chevron-down"
                          style={{ color: "black" }}
                        />
                      </button>
                      <a className="nav-link" href="/ghostwriting">
                        Ghostwriting
                      </a>
                      <ul className="dropdown-two">
                        <li>
                          <a href="/non-fiction">Non-Fiction Writing</a>
                        </li>
                        <li>
                          <a href="/memoir-writing">Memoir Writing</a>
                        </li>
                        <li>
                          <a href="/manuscript-writing">
                            Manuscript Writing
                          </a>
                        </li>
                        <li>
                          <a href="/comic-book-writing">
                            Comic Book Writing
                          </a>
                        </li>
                        <li>
                          <a href="/action-adventure-writing">
                            Action Adventure
                          </a>
                        </li>
                        <li>
                          <a href="/biography-writing">Biography Writing</a>
                        </li>
                        <li>
                          <a href="/military-fiction-writing">
                            Military Fiction Writing
                          </a>
                        </li>
                        <li>
                          <a href="/fantasy-writing">Fantasy Writing</a>
                        </li>
                        <li>
                          <a href="/horror-writing">Horror Writing</a>
                        </li>
                        <li>
                          <a href="/rhyme-writing">Rhyme Writing</a>
                        </li>
                        <li>
                          <a href="/screenplay-writing">
                            Screenplay Writing
                          </a>
                        </li>
                        <li>
                          <a href="/story-writing">Story Writing</a>
                        </li>
                        <li>
                          <a href="/autobiography">Autobiography</a>
                        </li>
                        <li>
                          <a href="/sci-fi-writing">Sci Fi Writing</a>
                        </li>
                        <li>
                          <a href="/childrens-book-writing">
                            Children's Book Writing
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="navItemDropSingle">
                      <button
                        className="dropdown-btn dropsingle1toggle"
                        id="dropSingleToggle"
                      >
                        <i
                          className="fa-solid fa-chevron-down"
                          style={{ color: "black" }}
                        />
                      </button>
                      <a className="nav-link" href="/book-editing">
                        Book Editing
                      </a>
                      <ul className="dropdown-single dropdown-single1">
                        <li>
                          <a href="/book-proofreading-services">
                            Proofreading
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="navItemDropSingle">
                      <button
                        className="dropdown-btn dropsingle2toggle"
                        id="dropSingleToggle"
                      >
                        <i
                          className="fa-solid fa-chevron-down"
                          style={{ color: "black" }}
                        />
                      </button>
                      <a className="nav-link">Book Design</a>
                      <ul className="dropdown-single dropdown-single2">
                        <li>
                          <a href="/book-cover-design">Book Cover Design</a>
                        </li>
                        <li>
                          <a href="/author-website-design">
                            Author Website Design
                          </a>
                        </li>
                        <li>
                          <a href="/book-illustration-design">
                            Book Illustration Design
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="navItemDropSingle">
                      <button
                        className="dropdown-btn dropsingle3toggle"
                        id="dropSingleToggle"
                      >
                        <i
                          className="fa-solid fa-chevron-down"
                          style={{ color: "black" }}
                        />
                      </button>
                      <a className="nav-link" href="/book-marketing">
                        Book Marketing
                      </a>
                      <ul className="dropdown-single dropdown-single3">
                        <li>
                          <a href="/book-video-trailer">
                            Book Video Trailer
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="nav-link" href="/book-publishing">
                        Book Publishing
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="/book-printing">
                        Book Printing
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/blogs">
                  Blogs
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="header-btn">
              <a
                href="javascript:void(Tawk_API.toggle())"
                className="popup-btn"
                // data-bs-toggle="modal"
                // data-bs-target="#penguinBackdrop"
              >
                Let's Get Started
              </a>
              <a href="tel:+1 (414)-296-5327" className="call-btn">
                +1 (414)-296-5327
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
