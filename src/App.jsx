import bgVid from "./assets/earthmove.mp4";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Home from "./components/Home/home";

const App = () => {
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
      <Home/>
    </>
  );
};
export default App;
