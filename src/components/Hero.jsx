import Fade from "react-reveal/Fade";
import TextLoop from "react-text-loop";
import Parallax from "./parallax";
export default function Hero() {
  return (
    <div className="relative z-0">
      <div>
        <img src="/Ellipse 1.svg" className="w-[100vw] h-[100vh] blur-2xl" />
      </div>
      <div className="absolute inset-0 flex z-10">
        <div className="absolute inset-0 z-0">
          <Parallax />
        </div>
        <div className="grid grid-cols-2 text-white mx-[5vw] mt-[10vh] ">
          <Fade bottom>
            <div>
              <p className="text-[3.5rem] font-Roboto">
                Upload, Listen <br />
                Earn and boost your <br />
                music career
              </p>
              <p className="font-normal">
                Now upload numerous songs hassle free
                <br />
                No third party interference
              </p>
              <div className="mt-[10vh] text-[1.1rem]">
                <a
                  href="#_"
                  class="relative items-center justify-start inline-block px-[2vw] py-[2vh] overflow-hidden font-bold rounded-md group"
                >
                  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span class="absolute top-0  left-0 w-52 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-[35deg] -translate-x-56 -translate-y-24 bg-[#FC4754] opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                    Get Started
                  </span>
                  <span class="absolute inset-0 border-2 border-[#FC4754] rounded-md"></span>
                </a>
                {/* <label className="px-[3vw] py-[2vh] border-2 border-[#FC475455] rounded-md  hover:ease-in-out hover:delay-500  hover:-translate-x-2 hover:scale-110 hover:bg-indigo-500 duration-300">Get started</label> */}
              </div>
              <img src="/Stats.svg" className="mt-[6vh]" />
            </div>
          </Fade>
          <Fade>
            <div className="pl-[15vh] pt-[5vh] h-full w-full">
              <TextLoop>
                <img src="/pic 1.svg" />
                <img src="/pic 2.svg" />
                <img src="/pic 3.svg" />
              </TextLoop>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
