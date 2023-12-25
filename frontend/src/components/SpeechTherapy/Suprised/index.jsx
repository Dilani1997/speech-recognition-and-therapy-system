import React from "react";
import EmotionImageSlider from "../../EmotionImageSlider";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

import img1 from "../../../assets/images/suprised/sup1.jpg";
import img2 from "../../../assets/images/suprised/sup2.jpg";
import img3 from "../../../assets/images/suprised/sup3.jpg";
import img4 from "../../../assets/images/suprised/sup4.jpg";
import img5 from "../../../assets/images/suprised/sup5.jpg";

const Suprised = () => {
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
        <YouTubeEmbed embedId="-9nc5PuAH74" />
      </div>
    </div>
  );
};

export default Suprised;
