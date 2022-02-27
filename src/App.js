import "./App.css";
import Hero from "./components/Hero";
import AboutUS from "./components/AboutUs";
import TopPlaylists from "./components/TopArtists";
import Faq from "./components/Faq";
import React from "react";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import SingleMusicPlayer from "./components/SingleMusicPlayer";

// import ReactJkMusicPlayer from 'react-jinke-music-player'
// import 'react-jinke-music-player/assets/index.css'

function App() {
  return (
    <div className="bg-[#10061E] h-[100vh] overflow-x-hidden scrollbar-thin scrollbar-thumb-scrollCol overflow-y-scroll">
      <div className="absolute top-0 z-50">
        <Navbar />
      </div>
      <div className="">
        <Hero />
        {/* <MainContainer /> */}
        <AboutUS />
        <TopPlaylists />
        <Faq />
        <div className="absolute bg-[#ffffff41]  bottom-0 w-[100vw] js-show-on-scroll h-[13vh] overflow-y-hidden">
          <SingleMusicPlayer />
        </div>
      </div>
    </div>
  );
}

export default App;
