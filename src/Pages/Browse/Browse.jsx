import React from "react";
import "./Browse.css";
import { MostPopularLiveStream, StartStream } from "../../sections/index";
const Browse = () => {
  return (
    <div>
      <StartStream />
      <MostPopularLiveStream />
    </div>
  );
};

export default Browse;
