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
              No hassle, Just connect your metamask wallet and you are good to
              go.
            </p>
          </label>
          <hr className="w-[500px]" />
        </div>
      )}
    </div>
  );
}
