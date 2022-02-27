import Parallax from "./parallax";
export default function AboutUS() {
  return (
    <div className="relative z-0" id="about">
      <div>
        <img src="/Ellipse 2.svg" className="w-[100vw] h-[100vh]" />
      </div>
      <div className="absolute inset-0 flex z-10">
        <div className="absolute inset-0 z-0">
          <Parallax />
        </div>
        <div className="text-white mx-[5vw]">
          <p className="text-5xl font-semibold ml-[70vw] mt-[15vh]">ABOUT US</p>
          <div className="flex">
            <img src="/aboutus.svg" className="" />
            <p className="mt-[10vh] w-[50vw] text-right text-2xl ml-[14vw]">
              IndieHUB creates a fully decentralised platform for Indie
              musicians, where they can upload their own albums and songs
              without needing of a mediator. The whole process is done by the
              singer itself, with the help of IPFS. IPFS atores the song in a
              P2P network and secures it with a Hash which proves it
              authenticity.Wth the implememtation of IPFS our platform also
              allows artists to release their limited albums/songs and can sell
              those as NFTs.The platform also allows fans to support their
              favourite artists through tips as preffered by the singer or you
              can even support them with the amount you wish to
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
