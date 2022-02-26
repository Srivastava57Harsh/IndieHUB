export default function AboutUS() {
  return (
    <div className="relative z-0">
      <div>
        <img src="/Ellipse 2.svg" className="w-[100vw] h-[100vh]" />
      </div>
      <div className="absolute inset-0 flex z-10">
        <div className="text-white mx-[5vw]">
          <p className="text-5xl font-semibold ml-[70vw] mt-[15vh]">ABOUT US</p>
          <div className="flex">
            <img src="/aboutus.svg" className="" />
            <p className="mt-[10vh] w-[50vw] text-right text-2xl ml-[14vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
