import Navbar from "./Navbar";
import Parallax from "./parallax";
export default function UploadSong() {
  return (
    <div className="bg-[#10061E] w-[100%] h-[100vh] ">
      <img
        src="Ellipse 2.svg"
        className="w-[100%] h-[100vh] relative z-0 blur-2xl"
      />

      <div className="absolute inset-0  z-10">
        <div className="absolute inset-0 z-0 ml-[15vh]">
          <Parallax />
        </div>
        <div>
          <Navbar />
          <div className="w-full mt-[2vh]">
            <p className="text-6xl font-semibold text-white text-center ">
              Send ETH Payment
            </p>
          </div>
          <div className="w-full absolute z-30">
            <div className="text-center flex flex-col gap-9 mt-[9vh]">
              <div>
                <input
                  class="placeholder:text-gray-300 placeholder-shown:text-3xl 
                 focus:border-blue-300  w-[40%] h-[8vh]  outline-none border-2 border-red-400 bg-[#ffffff20] rounded-[15px] px-[15px] text-3xl  text-white"
                  placeholder="IPFS Hash"
                />
              </div>

              <div>
                <input
                  class="placeholder:text-gray-300 placeholder-shown:text-3xl 
                 focus:border-blue-300  w-[40%] h-[8vh]  outline-none border-2 border-red-400 bg-[#ffffff20] rounded-[15px] px-[15px] text-3xl  text-white"
                  placeholder="Artist Name"
                />
              </div>
              <div>
                <input
                  class="placeholder:text-gray-300 placeholder-shown:text-3xl 
                 focus:border-blue-300  w-[40%] h-[8vh]  outline-none border-2 border-red-400 bg-[#ffffff20] rounded-[15px] px-[15px] text-3xl  text-white"
                  placeholder="Ammount in ETH"
                />
              </div>
              <div className="flex gap-6 w-full justify-center mt-[3vh]">
                <a
                  href="#_"
                  class="flex items-center text-[1.2rem] justify-center w-[240px] px-4 py-3 font-medium leading-6 text-white whitespace-no-wrap bg-red-400 border-2 border-transparent rounded-md shadow-sm hover:bg-transparent  hover:border-red-400 focus:outline-none"
                >
                  Make Payment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
