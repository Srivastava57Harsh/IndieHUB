import { useState } from "react";

const Navbar = () => {
  const [drop, setDrop] = useState(false);

  return (
    <nav className=" p-1 mb-2 z-[99] w-full bg-transparent overflow-hidden">
      <div className="flex justify-between items-center m-4">
        <div className="max-w-[150px]">
          <a
            className="w-fit md:ml-[3vw] text-white font-semibold text-2xl pl-[0.8vw]"
            href="/"
          >
            IndieHUB{" "}
          </a>
        </div>
        <div className="md:block hidden ml-[50vw] ">
          <div>
            <ul className="space-x-8 flex font-normal -ml-[5vw] xl:ml-[7vh] 2xl:ml-[20vh]">
              <a>
                <li
                  className="text-white transition-all duration-150 transform hover:scale-105 hover:underline "
                  href="#about"
                >
                  Top Artists
                </li>
              </a>

              <a>
                <li className="text-white transition-all duration-150 transform hover:scale-105 hover:underline">
                  FAQs
                </li>
              </a>

              <a>
                <li className="text-white transition-all duration-150 transform hover:scale-105 hover:underline">
                  Listen
                </li>
              </a>

              <div className="flex md:mr-[2vw]">
                <a className="md:block hidden">
                  <p className="text-white duration-150 transform text-whitetransition-all hover:scale-105 hover:underline mr-[2vw]">
                    About US
                  </p>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
