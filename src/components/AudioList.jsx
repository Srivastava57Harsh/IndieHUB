import React, { useEffect, useState } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "./LeftMenu.css";
import { Songs } from "./Songs";
import MusicPlayer from "./MusicPlayer";

export default function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [nextsong, setNextSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [auto, setAuto] = useState(false);
  const setMainSong = (songSrc, imgSrc) => {
    setNextSong(songSrc);
    setImage(imgSrc);
    setAuto(true);
  };

  return (
    <div className="AudioList">
      <h2 className="title">
        The list <span>10 songs</span>
      </h2>

      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}{" "}
                    <span className="songSpan">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      02:34
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <MusicPlayer song={nextsong} imgSrc={img} autoplay={auto} />
    </div>
  );
}

// useEffect(() => {
//   const allSongs = document.querySelectorAll(".songs");
//   function changeActive() {
//     allSongs.forEach((n) => n.classList.remove("active"));
//     this.classList.add("active");
//   }

//   allSongs.forEach((n) => n.addEventListener("click", changeActive));
// }, []);
