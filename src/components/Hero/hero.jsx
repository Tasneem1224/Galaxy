const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-20 pt-60 pl-20 ">
      <div className="flex h-full p-10">
        <div className="cont1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className=" space-y-5 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              The Earth
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl">
              Earth is the third planet from the Sun and the only astronomical
              object known to harbor life. This is enabled by Earth being an
              ocean world, the only one in the Solar System sustaining liquid
              surface water
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="primary-button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
