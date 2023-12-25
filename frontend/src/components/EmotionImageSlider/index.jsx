import React from "react";
import { Carousel, Image } from "antd";
import "./styles.css";

const EmotionImageSlider = ({ img1, img2, img3, img4, img5 }) => {
  return (
    <Carousel autoplay>
      <div>
        <Image style={{"height":"500px"}} src={img1} />
      </div>
      <div>
        <Image style={{"height":"500px"}} src={img2} />
      </div>
      <div>
        <Image style={{"height":"500px"}} src={img3} />
      </div>
      <div>
        <Image style={{"height":"500px"}} src={img4} />
      </div>
      <div>
        <Image style={{"height":"500px"}} src={img5} />
      </div>
    </Carousel>
  );
};

export default EmotionImageSlider;
