import React from "react";
import {
  Row,
  Col,
  Button,
  Radio,
  Space,
  Typography,
  Steps,
  message,
} from "antd";
import EmotionImageSlider from "../../EmotionImageSlider";
import YouTubeEmbed from "../../../components/YouTubeEmbed";

import img1 from "../../../assets/images/angry/angry1.jpg";
import img2 from "../../../assets/images/angry/angry2.jpg";
import img3 from "../../../assets/images/angry/angry3.jpg";
import img4 from "../../../assets/images/angry/angry4.jpg";
import img5 from "../../../assets/images/angry/angry5.jpg";

const Angry = () => {
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
        <YouTubeEmbed embedId="n5_TB2fS94w" />
      </div>
    </div>
  );
};

export default Angry;
