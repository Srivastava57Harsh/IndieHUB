import { useState } from "react";
import Faqtile from "./faqTile";
import Parallax from "./parallax";
export default function Faq() {
  const [faq, setFaq] = useState(true);
  const [faq2, setFaq2] = useState(true);
  const [faq3, setFaq3] = useState(true);
  const [faq4, setFaq4] = useState(true);
  return (
    <div className="relative z-0">
      <div>
        <img src="/Ellipse 4.svg" className="w-[100vw] h-[100vh]" />
      </div>
      <div className="absolute inset-0 justify-center z-10 ">
        <div className="absolute inset-0 z-0 ml-[15vh]">
          <Parallax />
        </div>
        <p className="text-5xl font-semibold ml-[45vw] 2xl:ml-[50vw] mt-[15vh] text-white">
          Frequently Asked Questions
        </p>
        <div className="grid grid-cols-2 gap-x-[18vh] 2xl:gap-x-[25vh] gap-y-1 h-[50vh] mt-[15vh] ml-[10vh] 2xl:ml-[20vh] absolute z-30">
          <div
            className="mb-[20px]"
            onClick={() => {
              setFaq(!faq);
            }}
          >
            {faq ? (
              <div>
                <label className="flex w-[500px] rounded-[10px] text-left text-[#ffffff50] hover:font-bold hover:text-[#ffffff]">
                  <p className=" grid  py-[15px] text-left text-2xl  ">
                    How can I sign up?
                  </p>
                  <br />
                </label>
                <hr className="w-[500px]" />
              </div>
            ) : (
              <div>
                <label className="flex w-[500px] rounded-[10px] ">
                  <p className="  grid  py-[15px] text-2xl text-white">
                    No hassle, Just connect your metamask wallet and you are
                    good to go.
                  </p>
                </label>
                <hr className="w-[500px]" />
              </div>
            )}
          </div>
          <div
            className="mb-[20px]"
            onClick={() => {
              setFaq2(!faq2);
            }}
          >
            {faq2 ? (
              <div>
                <label className="flex w-[500px] rounded-[10px] text-left text-[#ffffff50] hover:font-bold hover:text-[#ffffff]">
                  <p className=" grid  py-[15px] text-left text-2xl  ">
                    Which crypto currencies are we accepting?
                  </p>
                  <br />
                </label>
                <hr className="w-[500px]" />
              </div>
            ) : (
              <div>
                <label className="flex w-[500px] rounded-[10px] ">
                  <p className="  grid  py-[15px] text-2xl text-white">
                    Currently the smart contract is deployed on Ethereum we'll
                    be implementing cross chain solutions soon.
                  </p>
                </label>
                <hr className="w-[500px]" />
              </div>
            )}
          </div>
          <div
            className="mb-[20px]"
            onClick={() => {
              setFaq3(!faq3);
            }}
          >
            {faq3 ? (
              <div>
                <label className="flex w-[500px] rounded-[10px] text-left text-[#ffffff50] hover:font-bold hover:text-[#ffffff]">
                  <p className=" grid  py-[15px] text-left text-2xl  ">
                    How to upload songs?
                  </p>
                  <br />
                </label>
                <hr className="w-[500px]" />
              </div>
            ) : (
              <div>
                <label className="flex w-[500px] rounded-[10px] ">
                  <p className="  grid  py-[15px] text-2xl text-white">
                    Upload songs using the IPFS file system and paste the hash
                    while uploading it to our platform.
                  </p>
                </label>
                <hr className="w-[500px]" />
              </div>
            )}
          </div>
          <div
            className="mb-[20px]"
            onClick={() => {
              setFaq4(!faq4);
            }}
          >
            {faq4 ? (
              <div>
                <label className="flex w-[500px] rounded-[10px] text-left text-[#ffffff50] hover:font-bold hover:text-[#ffffff]">
                  <p className=" grid  py-[15px] text-left text-2xl  ">
                    How is my song secure?
                  </p>
                  <br />
                </label>
                <hr className="w-[500px]" />
              </div>
            ) : (
              <div>
                <label className="flex w-[500px] rounded-[10px] ">
                  <p className="  grid  py-[15px] text-2xl text-white">
                    With IPFS the song is provided with an unique hash which
                    authenticates the ownership of the song
                  </p>
                </label>
                <hr className="w-[500px]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
