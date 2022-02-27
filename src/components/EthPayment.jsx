import Navbar from "./Navbar";
import Parallax from "./parallax";
import { ethers } from "ethers";
import { useState } from "react";
export default function UploadSong() {
  const startPayment = async ({ ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether),
      });
      console.log({ ether, addr });
      console.log("tx", tx);
    } catch (err) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await startPayment({
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };

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
          <form onSubmit={handleSubmit}>
            <div className="w-full mt-[2vh]">
              <p className="text-6xl font-semibold text-white text-center ">
                Send ETH Payment
              </p>
            </div>
            <div className="w-full absolute z-30">
              <div className="text-center flex flex-col gap-9 mt-[9vh]">
                <div>
                  <input
                    type="text"
                    name="addr"
                    class="placeholder:text-gray-300 placeholder-shown:text-3xl 
                 focus:border-blue-300  w-[40%] h-[8vh]  outline-none border-2 border-red-400 bg-[#ffffff20] rounded-[15px] px-[15px] text-3xl  text-white"
                    placeholder="Account Address"
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
                    name="ether"
                    type="text"
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
                    <button type="submit">Make Payment</button>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
