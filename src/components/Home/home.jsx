/* eslint-disable react/jsx-key */
import Climate from "../../assets/Climate.png";
import Nature from "../../assets/Nature.png";
import SpacePhenomena from "../../assets/Space Phenomena.png";
import Wave from "../../assets/wave.mp4";
import Image1 from "../../assets/01.png";
import Image2 from "../../assets/02.webp";
import Image3 from "../../assets/03.png";

const FirstData = [
  {
    icon: Climate,
    title: "Climate",
    content:
      "Present-day climate change includes both globalwarming—the ongoing increase in global average temperature—and its wider effects on Earth's climate.Climate change in a broader sense also includes previous long-term changes to Earth's climate",
    aosDelay: "100",
  },
  {
    icon: Nature,
    title: "Nature",
    content:
      "During the advent of modern scientific method in the last several centuries, nature became the passive reality, organized and moved by divine laws. With the Industrial Revolution, nature increasingly became seen as the part of reality deprived from intentional intervention",
    aosDelay: "300",
  },
  {
    icon: SpacePhenomena,
    title: "Space Phenomena",
    content:
      "Outer space has been a topic of curiosity for centuries. With advancing technology, space exploration continues to expand, offering deeper insights into the universe and the processes that shape it.",
    aosDelay: "500",
  },
];

const Home = () => {
  return (
    <>
      <div className=" bg-gradient-to-b from-black/20 via-black/100 to-black text-white relative z-20 ">
        <div className="cont">
          <div className="min-h-[400px]  ">
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-50">
              {FirstData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="min-h-[180px] flex flex-col gap-2 justify-center items-center rounded-2xl bg-blue-700/70 backdrop-blur-sm text-center py-6 px-3 w-full lg:w-[300px] mx-auto mt-20"
                >
                  <img className="w-32" src={data.icon} />
                  <h1 className="pt-8  text-xl font-bold uppercase">
                    {data.title}
                  </h1>
                  <p>{data.content}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-b from-black/0 via-black/50 to-black w-full h-52 " />
            {/**************************************************************************************************************************************** */}
            <div className="bg-black/70 min-h-[1000px] h-auto relative text-white  ">
              <video
                autoPlay
                loop
                muted
                className=" absolute top-0 left-0 w-full h-full object-cover -z-10"
              >
                <source src={Wave} type="video/mp4" />
              </video>
              {/*/*******************************+++++++++++++++++++++++++++++++++++++++++++++++++++++**************************************************** */}
              <div className="pl-24 pr-24">
                <div className="grid grid-cols-1 pt-40   sm:grid-cols-2 gap-4 items-center relative z-10">
                  <div>
                    <img
                      data-aos="zoom-in"
                      className="w-[500px]"
                      src={Image1}
                      alt="image"
                    />
                  </div>
                  <div className=" border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
                    <div className="space-y-5 xl:pr-20 p-10">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-sky-500 text-4xl"
                      >
                        Milky Way
                      </h1>
                      <p data-aos="fade-up" data-aos-delay="200">
                        The Milky Way is the galaxy that includes the Solar
                        System, with the name describing the galaxy s appearance
                        from Earth: a hazy band of light seen in the night sky
                        formed from stars that cannot be individually
                        distinguished by the naked eye
                      </p>
                      <button
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="primary-button "
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                {/**************************************************************************************************** */}
                <div className="grid grid-cols-1 pt-40  sm:grid-cols-2 gap-4 items-center relative z-10">
                  <div className="border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
                    <div className="space-y-5 xl:pr-20 p-10">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-sky-500 text-4xl"
                      >
                        Aurora Borealis
                      </h1>
                      <p data-aos="fade-up" data-aos-delay="200">
                        An aurora(pl. aurorae or auroras), also commonly known
                        as the northern lights (aurora borealis) or southern
                        lights (aurora australis), is a natural light display in
                        Earth s sky, predominantly seen in high-latitude regions
                        (around the Arctic and Antarctic). Auroras display
                        dynamic patterns of brilliant lights that appear as
                        curtains, rays, spirals, or dynamic flickers covering
                        the entire sky.
                      </p>
                      <button
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="primary-button"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div>
                    <img
                      data-aos="zoom-in"
                      className="w-[500px] ml-0 sm:ml-40 "
                      src={Image2}
                      alt="image"
                    />
                  </div>
                </div>
                {/************************************************************************************************* */}
                <div className="grid grid-cols-1 pt-40  pb-40  sm:grid-cols-2 gap-4 items-center relative z-10">
                  <div>
                    <img
                      data-aos="zoom-in"
                      className="w-[500px]"
                      src={Image3}
                      alt="image"
                    />
                  </div>
                  <div className=" border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
                    <div className="space-y-5 xl:pr-20 p-10">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-sky-500 text-4xl"
                      >
                        Climate change
                      </h1>
                      <p data-aos="fade-up" data-aos-delay="200">
                        Present-day climate change includes both global
                        warming—the ongoing increase in global average
                        temperature—and its wider effects on Earth s climate.
                        Climate change in a broader sense also includes previous
                        long-term changes to Earth s climate .The current rise
                        in global temperatures is driven by human activities,
                        especially fossil fuel burning since the Industrial
                        Revolution.
                      </p>
                      <button
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="primary-button "
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-t from-blue-950/100 via-blue-950/40 to-blue-950/0 text-white h-20 relative z-20" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
