const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-20 pt-60">
      <div className="flex h-full p-4">
        <div className="cont1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="pl-10 space-y-5 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">The Earth</h1>
            <p className="">
              Earth is the third planet from the Sun and the only astronomical
              object known to harbor life. This is enabled by Earth being an
              ocean world, the only one in the Solar System sustaining liquid
              surface water
            </p>
            <button className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-1 rounded-md duration-200">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
