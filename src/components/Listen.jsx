import Fade from "react-reveal/Fade";
import TextLoop from "react-text-loop";
import Parallax from "./parallax";
import MainContainer from "./MainContainer";
import Navbar from "./Navbar";
export default function Listen() {
  return (
    <div className="relative z-0 overflow-y-hidden">
      <div className="bg-[#10061E] w-[100%] h-[100vh] ">
        <img src="/Ellipse 1.svg" className="w-[100vw] h-[100vh] blur-2xl" />
      </div>
      <div className="absolute inset-0 flex z-10">
        <div className="absolute inset-0 z-0 ml-[20vh]">
          <Parallax />
        </div>
        <div className="absolute z-20">
          {" "}
          <Navbar />
          <h1 className="text-white text-[4rem] font-semibold ml-[10vh]">
            Listen to the Top Trending List
          </h1>
          <h1 className="text-white text-[3rem] font-semibold ml-[10vh]">
            #Indiechoice
          </h1>
        </div>
        <div className=" text-white w-full absolute z-30">
          <MainContainer />
        </div>
      </div>
    </div>
  );
}
