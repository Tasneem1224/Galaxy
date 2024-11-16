import bgVid from "./assets/earthmove.mp4";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Home from "./components/Home/home";
import Footer from "./components/footer/footer";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <div className="h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[800px] w-full object-cover -scale-x-100 z[-1]"
        >
          <source src={bgVid} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <Home />

      <Footer />
    </>
  );
};
export default App;
