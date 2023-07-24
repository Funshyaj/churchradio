import React, { useState } from "react";
import { Button } from "../button";
import { MediaControllerContainer, CurrentlyPlayingContainer } from "./styled";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaMusic,
} from "react-icons/fa";

interface CurrentlyPlayingProps {
  songName?: string;
}

export const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  songName,
}) => {
  return (
    <CurrentlyPlayingContainer>
      <FaMusic />
      <p>{songName || ""}</p>
    </CurrentlyPlayingContainer>
  );
};

export const MediaController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songName , setSongName] = useState<string>('Jesus is Lord - Drake')
  // const [songAudio, setSongAudio] = useState<string>('')

  const songs = [
    {songName:'Halleluja - donny',songAudio:'link to song'},
    {songName:'bles lord - joghn',songAudio:'link to song'},
    {songName:'yes lord - funsho',songAudio:'link to song'},
    {songName:'Hall - d',songAudio:'link to song'}
   ]

   const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/38"); 

   const play = async () => {
        await audio.play();
   }

   const pause = async () => {
    await audio.pause();
   }

   const prev = () => {
    // find the index of the current song and subtract it by one to get the prev

  // picks a random song and plays it
   setSongName(songs[Math.floor(Math.random()*songs.length)].songName);
    setIsPlaying(true)
    play()
  }

   const next = () => {
  // picks a random song and plays it
   setSongName(songs[Math.floor(Math.random()*songs.length)].songName);
   setIsPlaying(true)
   play()
}
   
   const player = () => {

    setIsPlaying(!isPlaying);

    if(!isPlaying){
    play()
    console.log('playing');
   } else if (isPlaying){
    console.log('pasused')
    pause()
   }
  }

  return (
    <>
      <CurrentlyPlaying songName={songName}/>
      <MediaControllerContainer>
        {/* prev button */}
        <Button size="large" variant="outlined" onClick={()=>{ prev()}}>
          <FaBackward/>
        </Button>

        {/* play button */}
        <Button
          variant="outlined"
          size="large"
          onClick={() => player()}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>

          {/* next button */}
        <Button variant="outlined" size="large" onClick={()=>{ next()}}>
          <FaForward/>
        </Button>
      </MediaControllerContainer>
    </>
  );
};
