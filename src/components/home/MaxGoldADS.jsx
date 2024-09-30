"use client";
import React, { useRef, useState, useEffect } from "react";
import YouTube from "react-youtube";

const MaxGoldADS = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const playerRef = useRef(null);

  // YouTube player ready function
  const onPlayerReady = (event) => {
    playerRef.current = event.target;
    event.target.mute(); // Mute the video
    event.target.playVideo(); // Start playing video when ready
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const optsMobile = {
    height: "185",
    width: "340",
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: "wTTw4m7HUQE",
      controls: 0,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      disablekb: 1,
      mute: 1,
    },
  };

  const optsTablet = {
    height: "350",
    width: "650",
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: "wTTw4m7HUQE",
      controls: 0,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      disablekb: 1,
      mute: 1,
    },
  };

  const opts = {
    height: "580",
    width: "1070",
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: "wTTw4m7HUQE",
      controls: 0,
      modestbranding: 1,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      disablekb: 1,
      mute: 1,
    },
  };

  // Preload the video on page load for smooth playback
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  }, []);

  // Smooth Scrolling CSS
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"; // Add smooth scroll behavior
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-[#C21807] p-10">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
        Max <span className="text-yellow-400">Gold</span> Channel
      </h2>
      <div className="w-20 md:w-28 h-1 bg-white mx-auto mb-12"></div>

      {/* Lazy-loaded YouTube video with smooth scrolling */}
      <div>
        <div className="md:hidden overflow-hidden">
          <YouTube
            videoId="wTTw4m7HUQE"
            opts={optsMobile}
            onReady={onPlayerReady}
            loading="lazy" // Add lazy loading for iframe
          />
        </div>

        <div className="hidden md:block lg:hidden overflow-hidden">
          <YouTube
            videoId="wTTw4m7HUQE"
            opts={optsTablet}
            onReady={onPlayerReady}
            loading="lazy" // Add lazy loading for iframe
          />
        </div>

        {/* Desktop YouTube Video */}
        <div className="hidden lg:block overflow-hidden">
          <YouTube
            videoId="wTTw4m7HUQE"
            opts={opts}
            onReady={onPlayerReady}
            loading="lazy" // Add lazy loading for iframe
          />
        </div>
      </div>
    </div>
  );
};

export default MaxGoldADS;
