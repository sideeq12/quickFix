// YouTubeVideo.jsx
import React from "react";

const YouTubeVideo = ({ videoId}) => {
  if (!videoId) {
    return <p>Video ID is required to display the video.</p>;
  }

  return (
   <div className="bg-[#FF3131] h-screen flex  flex-col items-center justify-center">
    <h3 className="text-4xl my-10 text-white">How it works</h3>
     <div className="w-2/3 h-96 mx-auto">
      <iframe
      className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        // style={{ width: "100%", height: "500px" }}
      ></iframe>
    </div>
   </div>
  );
};

export default YouTubeVideo;