/* eslint-disable react/jsx-key */
import Climate from "../../assets/Climate.png";
import Nature from "../../assets/Nature.png";
import SpacePhenomena from "../../assets/Space Phenomena.png";
import Wave from "../../assets/wave.mp4"
const FirstData = [
  {
    icon: Climate,
    title: "Climate",
    content:
      "Present-day climate change includes both globalwarming—the ongoing increase in global average temperature—and its wider effects on Earth's climate.Climate change in a broader sense also includes previous long-term changes to Earth's climate",
  },
  {
    icon: Nature,
    title: "Nature",
    content:
      "During the advent of modern scientific method in the last several centuries, nature became the passive reality, organized and moved by divine laws.[3][4] With the Industrial Revolution, nature increasingly became seen as the part of reality deprived from intentional intervention",
  },
  {
    icon: SpacePhenomena,
    title: "Space Phenomena",
    content:
      "Outer space has been a topic of curiosity for centuries. With advancing technology, space exploration continues to expand, offering deeper insights into the universe and the processes that shape it.",
  },
];

const Home = () => {
  return (
    <div className=" bg-gradient-to-b from-black/20 via-black/100 to-black  text-white relative z-20">
      <div className="cont">
        <div className="min-h-[400px]  ">
          <div className="pb-32 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-50">
            {FirstData.map((data) => (
              <div className="min-h-[180px] flex flex-col gap-2 justify-center items-center rounded-2xl bg-blue-500/80 backdrop-blur-sm text-center py-6 px-3 w-full lg:w-[300px] mx-auto">
                <img className="w-32" src={data.icon} />
                <h1>{data.title}</h1>
                <p>{data.content}</p>
              </div>
            ))}
          </div>

          <video
          autoPlay
          loop
          muted
          className="h-[200px] w-full object-cover mix-blend-screen-translate-y-24 relative z-[0]"
        >
          <source src={Wave} type="video/mp4" />
        </video>
          
        </div>
      </div>
    </div>
  );
};
export default Home;
