import React from "react";
import EmotionImageSlider from "../../EmotionImageSlider";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

import img1 from "../../../assets/images/sad/sad1.jpg";
import img2 from "../../../assets/images/sad/sad2.jpg";
import img3 from "../../../assets/images/sad/sad3.jpg";
import img4 from "../../../assets/images/sad/sad4.jpg";
import img5 from "../../../assets/images/sad/sad5.jpg";

const Sad = () => {
  return (
    <div>
      <div style={{ "margin-top": "10px", "margin-bottom": "10px" }}>
        <h2>Emotion Images</h2>
        <EmotionImageSlider
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
        />
      </div>
      <div style={{ "margin-top": "10px", "margin-bottom": "10px" }}>
        <h2>Emotion Video</h2>
        <YouTubeEmbed embedId="uaaBjA_EQpc" />
      </div>
    </div>
  );
};

export default Sad;
