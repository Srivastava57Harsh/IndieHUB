import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.css";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { FaStepForward, FaStepBackward, FaPlay, FaPause } from "react-icons/fa";
import { Songs } from "./Songs";

function MusicPlayer({ song, imgSrc, auto }) {
  const [number, setNumber] = useState(1);
  const [allSongs, setAllSongs] = useState(Songs);
  const [nextSong, setNextSong] = useState(allSongs[0].song);
  const [isPlaying, setPlay] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to our audio component
  const progressBar = useRef(); //   reference to our prgressbar
  const animationRef = useRef(); //  reference to our animation
  const [image, setImage] = useState(allSongs[0].imgSrc);
  const [songName, setSongName] = useState(allSongs[0].songName);
  const [artist, setArtist] = useState(allSongs[0].artist);
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  const previous = () => {
    if (number <= 10 && number > 1) setNumber(number - 1);
    forwardSong();
    console.log(number);
  };

  const next = () => {
    if (number < 10 && number >= 1) setNumber(number + 1);
    forwardSong();
    console.log(number);
  };

  const forwardSong = () => {
    {
      setMainSong(
        allSongs[number].song,
        allSongs[number].imgSrc,
        allSongs[number].songName.substring(0, 6),
        allSongs[number].artist.substring(0, 10)
      );
      // allSongs &&
      //   allSongs.map((song, index) => {
      //     if (song.id === number) {
      //       setNextSong(song.song);
      //     }
      //   });
    }
    console.log(nextSong);
    changePlayPause();
  };

  const setMainSong = (songSrc, imgSrc, songNameSrc, artistSrc) => {
    setNextSong(songSrc);
    setImage(imgSrc);
    setSongName(songNameSrc);
    setArtist(artistSrc);
  };

  return (
    <div className="musicPlayer">
      <div className="flex w-[200px] text-white">
        <div className="songImage">
          <img src={image} alt="" />
        </div>
        <div className="grid grid-cols-1 grid-rows-2">
          <p className="pl-[1vh] text-2xl pb-0 mb-0">{songName}</p>
          <p className="pl-[1vh]">{artist}</p>
        </div>
      </div>

      <div className="songAttributes">
        <audio src={nextSong} preload="metadata" ref={audioPlayer} />

        <div className="top mr-[10vw]">
          <div className="middle flex ">
            <div
              className="back -ml-[2vw] mr-[.2vw] -mt-[1vh]"
              onClick={previous}
            >
              <i>
                <FaStepBackward />
              </i>
            </div>
            <div
              className="playPause mt-[2vh] mb-[0vh]"
              onClick={changePlayPause}
            >
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward ml-[.8vw] -mt-[1vh]" onClick={next}>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
        </div>
        <div className="w-full -mt-[2vh] overflow-y-hidden">
          <div className="bottom flex justify-center w-full">
            <div className="currentTime pl-[5vw]">
              {calculateTime(currentTime)}
            </div>
            <input
              type="range"
              className="progressBar "
              ref={progressBar}
              defaultValue="0"
              onChange={changeProgress}
              autoPlay={auto}
            />
            <div className="duration ">
              {duration && !isNaN(duration) && calculateTime(duration)
                ? duration && !isNaN(duration) && calculateTime(duration)
                : "00:00"}
            </div>

            <i className="pl-[6vw]">
              <BsFillVolumeUpFill className="" />
            </i>
            <input type="range" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
