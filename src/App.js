import React from "react";
import { scroller } from "react-scroll";
import "fontsource-montserrat";
import logo from "./logo.svg";
import cover from "./ep.JPG";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import TabbedContent from "./components/TabbedContent";
import PortfolioInfo from "./components/PortfolioInfo";

function App() {
  function handleScroll() {
    //animateScroll.scrollTo(500);
    scroller.scrollTo("scrollDiv", {
      duration: 500,
      smooth: "easeInExpo",
      offset: -80,
    });
  }

  return (
    <div>
      <Header />
      <div className="flex flex-wrap items-center mt-18 h-100">
        <div className="w-full sm:w-1/2 max-h-screen">
          {
            <img
              src={cover}
              className="bg-white rounded-full object-contain object-top content-center h-100"
              alt="ep-cover"
            />
          }
        </div>
        <div className="w-full sm:w-1/2 app-contours py-36 max-h-screen content-center">
          <div className="text-center">
            <h1 className="font-semibold text-4xl text-ep-blue-dark">
              Emma Lu
            </h1>
            <div className="text-md">
              <div className="hidden md:block lg:block">
                <code>
                  GIS Professional &bull; Full-Stack Developer &bull; Tech
                  Enthusiast
                </code>
              </div>
            </div>
            <div className="text-sm">
              <div className="block md:hidden lg:hidden">
                <p>
                  <code>GIS Professional</code>
                </p>
                <p>
                  <code>Full-Stack Developer</code>
                </p>
                <p>
                  <code>Tech Enthusiast</code>
                </p>
              </div>
            </div>
            <div>
              {
                <img
                  src={logo}
                  className="object-contain h-48 w-full"
                  alt="logo"
                />
              }
            </div>
            <div className="mb-2">
              <span className="block uppercase tracking-widest">
                Bienvenidos
              </span>
              &amp; thanks for visiting!
            </div>
            <PortfolioInfo />
            Please,&nbsp;
            <span
              className="cursor-pointer underline"
              href="#"
              onClick={handleScroll}
            >
              have a look
            </span>
            &nbsp;around...
          </div>
        </div>
      </div>
      <div className="bg-ep-yellow sm:h-6 md:h-8 lg:h-10 opacity-75"></div>
      <div className="items-center" id="scrollDiv">
        <TabbedContent />
      </div>
    </div>
  );
}

export default App;
