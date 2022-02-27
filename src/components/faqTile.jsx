import { useState } from "react";

export default function Faqtile() {
  const [faq, setFaq] = useState(true);
  return (
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
              How to view my NFTs in MetaMask?
            </p>
            <br />
          </label>
          <hr className="w-[500px]" />
        </div>
      ) : (
        <div>
          <label className="flex w-[500px] rounded-[10px] ">
            <p className="  grid  py-[15px] text-2xl text-white">
              Enter the NFT address and collectible ID and your NFT will appear
              under the Collectibles tab on your MetaMask wallet
            </p>
          </label>
          <hr className="w-[500px]" />
        </div>
      )}
    </div>
  );
}
