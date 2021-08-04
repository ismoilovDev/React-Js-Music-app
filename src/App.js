import React, {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Ya Habibi Ya Muhammad",
      artist: "Sayyid Taleh",
      imgSrc: "./images/nasheed3.jpg",
      src: "./music/one.mp3"
    },
    {
      title: "Al-Madina",
      artist: "Madina",
      imgSrc: "./images/nasheed2.jpg",
      src: "./music/Al-Madina.mp3"
    },
    {
      title: "Intagirini",
      artist: "Artist 2",
      imgSrc: "./images/nasheed1.png",
      src: "./music/Intagirini.mp3"
    },
    {
      title: "Maher Zain",
      artist: "Maher Zain",
      imgSrc: "./images/nasheed6.jpg",
      src: "./music/uch.mp3"
    },
    {
      title: "Rasululloh sizni sog'indim",
      artist: "Muhammadloiq Qori",
      imgSrc: "./images/nasheed4.jpg",
      src: "./music/four.mp3"
    },
    {
      title: "Kuntu Maitan",
      artist: "Abu Ali & Abu Muhammad",
      imgSrc: "./images/nasheed5.jpg",
      src: "./music/six.mp3"
    },
    {
      title: "Nasheed",
      artist: "Unknow",
      imgSrc: "./images/nasheed3.jpg",
      src: "./music/seven.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex +1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex])
  return (
    <div className="App">
      <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
      />
    </div>
  );
}

export default App;
