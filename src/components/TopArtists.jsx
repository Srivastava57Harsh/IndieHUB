import { useState } from "react";

export default function Faq() {
  const [pic1, setPic1] = useState("/singer 1.svg");
  const [pic2, setPic2] = useState("/singer 2.svg");
  const [pic3, setPic3] = useState("/singer 3.svg");

  return (
    <div className="relative z-0">
      <div>
        <img src="/Ellipse 3.svg" className="w-[100vw] h-[100vh]" />
      </div>
      <div className="absolute inset-0 z-40">
        <p className="text-5xl font-semibold ml-[10vh] text-white mt-[5vh] h-fit">
          TOP ARTISTS
        </p>
        <div className="grid grid-cols-3 gap-x-[25vh] gap-y-[10vh] text-white mx-[5vw] mt-[10vh] ">
          <img
            className="cursor-pointer"
            src={pic1}
            onMouseEnter={() => setPic1("/singer 1 hover.svg")}
            onMouseLeave={() => setPic1("/singer 1.svg")}
          />
          <img
            className="cursor-pointer"
            src={pic2}
            onMouseEnter={() => setPic2("/singer 2 hover.svg")}
            onMouseLeave={() => setPic2("/singer 2.svg")}
          />
          <img
            className="cursor-pointer"
            src={pic3}
            onMouseEnter={() => setPic3("/singer 3 hover.svg")}
            onMouseLeave={() => setPic3("/singer 3.svg")}
          />
        </div>
        <div className="mt-[10vh] ml-[45vw] justify-center absolute">
          <a
            href="#_"
            class="relative items-center justify-start inline-block px-[2vw] py-[2vh] overflow-hidden font-bold rounded-md group"
          >
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span class="absolute top-0  left-0 w-52 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-[35deg] -translate-x-56 -translate-y-24 bg-[#FC4754] opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Support them
            </span>
            <span class="absolute inset-0 border-2 border-[#FC4754] rounded-md"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
