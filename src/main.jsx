import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Homepage/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root-layout/Root";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Ghostwriting from "./pages/Services/Ghostwriting";
import BookPrinting from "./pages/Services/BookPrinting";
import BookEditing from "./pages/Services/BookEditing";
import BookMarketing from "./pages/Services/BookMarketing";
import BookPublishing from "./pages/Services/BookPublishing";
import BookVideoTrailer from "./pages/Services/SubServices/BookVideoTrailer";
import BookIllustrationDesign from "./pages/Services/SubServices/BookIllustrationDesign";
import BookCoverDesign from "./pages/Services/SubServices/BookCoverDesign";
import AuthorWebsiteDesign from "./pages/Services/SubServices/AuthorWebsiteDesign";
import Proofreading from "./pages/Services/SubServices/Proofreading";
import Blog from "./pages/Blog/Blog";
import NonFiction from "./pages/Services/SubServices/GhostWriting-Services/NonFiction";
import MemoirWriting from "./pages/Services/SubServices/GhostWriting-Services/MemoirWriting";
import ManuscriptWriting from "./pages/Services/SubServices/GhostWriting-Services/ManuscriptWriting";
import ComicWriting from "./pages/Services/SubServices/GhostWriting-Services/ComicWriting";
import ActionWriting from "./pages/Services/SubServices/GhostWriting-Services/ActionWriting";
import BiographyWriting from "./pages/Services/SubServices/GhostWriting-Services/BiographyWriting";
import MilitaryFiction from "./pages/Services/SubServices/GhostWriting-Services/MilitaryFiction";
import FantasyWriting from "./pages/Services/SubServices/GhostWriting-Services/FantasyWriting";
import HorrorWriting from "./pages/Services/SubServices/GhostWriting-Services/HorrorWriting";
import RhymeWriting from "./pages/Services/SubServices/GhostWriting-Services/RhymeWriting";
import ScreenplayWriting from "./pages/Services/SubServices/GhostWriting-Services/ScreenplayWriting";
import StoryWriting from "./pages/Services/SubServices/GhostWriting-Services/StoryWriting";
import Autobiography from "./pages/Services/SubServices/GhostWriting-Services/Autobiography";
import SciFicWriting from "./pages/Services/SubServices/GhostWriting-Services/SciFicWriting";
import PrivacyPolicy from "./pages/Term-&-Policies/PrivacyPolicy";
import TermsConditions from "./pages/Term-&-Policies/TermsConditions";
import ChildrenBookWriting from "./pages/Services/SubServices/GhostWriting-Services/ChildrenBookWriting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/ghostwriting",
        element: <Ghostwriting />,
      },
      {
        path: "/book-editing",
        element: <BookEditing />,
      },
      {
        path: "/book-marketing",
        element: <BookMarketing />,
      },
      {
        path: "/book-publishing",
        element: <BookPublishing />,
      },
      {
        path: "/book-printing",
        element: <BookPrinting />,
      },
      {
        path: "/book-video-trailer",
        element: <BookVideoTrailer />,
      },
      {
        path: "/book-proofreading-services",
        element: <Proofreading />,
      },
      {
        path: "/book-cover-design",
        element: <BookCoverDesign />,
      },
      {
        path: "/author-website-design",
        element: <AuthorWebsiteDesign />,
      },
      {
        path: "/book-illustration-design",
        element: <BookIllustrationDesign />,
      },
      {
        path: "/non-fiction",
        element: <NonFiction />,
      },
      {
        path: "/memoir-writing",
        element: <MemoirWriting />,
      },
      {
        path: "/manuscript-writing",
        element: <ManuscriptWriting />,
      },
      {
        path: "/comic-book-writing",
        element: <ComicWriting />,
      },
      {
        path: "/action-adventure-writing",
        element: <ActionWriting />,
      },
      {
        path: "/biography-writing",
        element: <BiographyWriting />,
      },
      {
        path: "/military-fiction-writing",
        element: <MilitaryFiction />,
      },
      {
        path: "/fantasy-writing",
        element: <FantasyWriting />,
      },
      {
        path: "/horror-writing",
        element: <HorrorWriting />,
      },
      {
        path: "/rhyme-writing",
        element: <RhymeWriting />,
      },
      {
        path: "/screenplay-writing",
        element: <ScreenplayWriting />,
      },
      {
        path: "/story-writing",
        element: <StoryWriting />,
      },
      {
        path: "/autobiography",
        element: <Autobiography />,
      },
      {
        path: "/sci-fi-writing",
        element: <SciFicWriting />,
      },
      {
        path: "/childrens-book-writing",
        element: <ChildrenBookWriting />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsConditions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
