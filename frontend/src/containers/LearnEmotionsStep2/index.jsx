import React from "react";
import {
  Row,
  Col,
  Button,
  Radio,
  Space,
  Typography,
  Steps,
  Image,
  message,
} from "antd";

import happy1 from "../../assets/images/happy/happy1.jpg";
import happy2 from "../../assets/images/happy/happy2.jpg";
import happy3 from "../../assets/images/happy/happy3.jpg";

import angry1 from "../../assets/images/angry/angry1.jpg";
import angry2 from "../../assets/images/angry/angry2.jpg";
import angry3 from "../../assets/images/angry/angry3.jpg";

import sad1 from "../../assets/images/sad/sad1.jpg";
import sad2 from "../../assets/images/sad/sad2.jpg";
import sad3 from "../../assets/images/sad/sad3.jpg";

import fear1 from "../../assets/images/fearful/fear1.jpg";
import fear2 from "../../assets/images/fearful/fear2.jpg";
import fear3 from "../../assets/images/fearful/fear3.jpg";

import sup1 from "../../assets/images/suprised/sup1.jpg";
import sup2 from "../../assets/images/suprised/sup2.jpg";
import sup3 from "../../assets/images/suprised/sup3.jpg";

import "./styles.css";

const LearnEmotionsStep2 = ({ emotion }) => {
  const images = [
    { id: 1, imgType: "happy", src: happy1 },
    { id: 2, imgType: "happy", src: happy2 },
    { id: 3, imgType: "happy", src: happy3 },
    { id: 4, imgType: "angry", src: angry1 },
    { id: 5, imgType: "angry", src: angry2 },
    { id: 6, imgType: "angry", src: angry3 },
    { id: 7, imgType: "sad", src: sad1 },
    { id: 8, imgType: "sad", src: sad2 },
    { id: 9, imgType: "sad", src: sad3 },
    { id: 10, imgType: "fearful", src: fear1 },
    { id: 11, imgType: "fearful", src: fear2 },
    { id: 12, imgType: "fearful", src: fear3 },
    { id: 13, imgType: "suprise", src: sup1 },
    { id: 14, imgType: "suprise", src: sup2 },
    { id: 15, imgType: "suprise", src: sup3 },
  ];
  
  const checkClickedImage = (imgType) => {
    if(imgType === emotion){
        message.success("Congratulations, you got it right!");
    }else{
        message.error("That's bad, you got it wrong!");
    }
  }
  
  return (
    <Row justify="center" align="middle">
      <Col md={24}>
        <h2 style={{marginTop: "10px"}}>Select People in {emotion}</h2>
        <div className="hover-effect">
          {images.map((image) => {
            return (
                <figure key={image.id}><img preview={false} style={{ height: "200px", margin:"5px" }} src={image.src} onClick={()=>checkClickedImage(image.imgType)} /></figure>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default LearnEmotionsStep2;
