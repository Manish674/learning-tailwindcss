import React from "react";
import bgVid from "../../assets/videos/video-1.mp4";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <video
          className="fixed z-2/1 object-cover w-full h-full"
          src={bgVid}
          autoPlay=""
          loop=""
        />
        <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full mt-12 text-white ">
          <h3 className="text-5xl font-black text-center lg:text-7xl">
            Adventure awaits
          </h3>
          <h3 className="text-3xl font-bold lg:text-4xl">
            What are you waiting for?
          </h3>
          <div className="flex flex-col items-center justify-center w-full lg:flex-row">
            <button className="w-2/4 h-10 mt-2 mr-1 font-bold bg-transparent border-2 border-white outline-none lg:w-44 md:max-w-xs max-w-1/2 hover:bg-white hover:text-black duration-300">
              Get started
            </button>
            <button className="flex items-center justify-center w-2/4 h-10 p-4 mt-2 mr-1 font-semibold text-black bg-white outline-none md:max-w-xs max-w-1/2">
              WATCH TRAILER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
