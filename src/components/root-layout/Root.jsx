import React, { useEffect } from "react";
import Navbar from "../layout-components/Navbar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

import Footer from "../layout-components/Footer";
// import "../../assets/js/"


// Simple ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default function Root() {
  // useEffect(() => {
  //   Promise.all([
  //     // import("../../assets/js/jquery-3.6.0.min.js"),
  //     // import("../../assets/css/owl.carousel.min.css"),
  //   ])
  //     .then(([jqueryModule, owlCarouselModule]) => {
  //       // Modules are loaded, do something with them
  //       console.log("jQuery loaded:", jqueryModule);
  //       console.log("Owl Carousel CSS loaded:", owlCarouselModule);
  //     })
  //     .catch((error) => {
  //       // Handle error for all imports
  //       console.error("Error loading module:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   // Dynamically load JavaScript libraries
  //   const loadScript = (src) => {
  //     return new Promise((resolve, reject) => {
  //       const script = document.createElement("script");
  //       script.src = src;
  //       script.onload = resolve;
  //       script.onerror = reject;
  //       document.body.appendChild(script);
  //     });
  //   };

  //   loadScript("https://code.jquery.com/jquery-3.6.0.min.js")
  //     .then(() =>
  //       loadScript(
  //         "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
  //       )
  //     )
  //     .then(() =>
  //       loadScript(
  //         "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
  //       )
  //     )
  //     .then(() =>
  //       loadScript(
  //         "https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.6/dist/jquery.fancybox.min.js"
  //       )
  //     )
  //     .then(() =>
  //       loadScript(
  //         "https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js"
  //       )
  //     )
  //     .then(() =>
  //       loadScript(
  //         "https://cdn.jsdelivr.net/npm/owl.carousel/dist/owl.carousel.min.js"
  //       )
  //     )
  //     .then(() => {
  //       // Initialize any plugins here
  //       window.$(".slick").slick();
  //       window.$(".owl-carousel").owlCarousel();
  //     })
  //     .catch((err) => console.error("Error loading scripts", err));
  // }, []);

  return (
    <div className="min-h-screen overflow-hidden relative">
      <Navbar />
      <ErrorBoundary>
        <main>
          <Outlet className="z-10" />
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
