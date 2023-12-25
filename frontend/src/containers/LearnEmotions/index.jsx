import React, { useState } from "react";
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
import Happy from "../../components/SpeechTherapy/Happy";
import Angry from "../../components/SpeechTherapy/Angry";
import Sad from "../../components/SpeechTherapy/Sad";
import Fearful from "../../components/SpeechTherapy/Fearful";
import Suprised from "../../components/SpeechTherapy/Suprised";

import "./styles.css";

const LearnEmotions = ({emotion,setEmotion}) => {

  return (
    <Row justify="center" align="middle" className="main-row-d">
      <Col md={24}>
        <h2>Let's Learn Emotion Types</h2>
        <div>
          <Button
            type="primary"
            className="mr-2"
            onClick={() => setEmotion("happy")}
          >
            Happy 😊
          </Button>
          <Button
            type="primary"
            className="mr-2"
            onClick={() => setEmotion("angry")}
          >
            Angry 😡
          </Button>
          <Button
            type="primary"
            className="mr-2"
            onClick={() => setEmotion("fearful")}
          >
            Fearful 😰
          </Button>
          <Button
            type="primary"
            className="mr-2"
            onClick={() => setEmotion("sad")}
          >
            Sad 😭
          </Button>
          <Button
            type="primary"
            className="mr-2"
            onClick={() => setEmotion("suprised")}
          >
            Suprised 😲
          </Button>
        </div>
        <div className="emotion-component-div">
          {emotion === "happy" ? (
            <Happy />
          ) : emotion === "angry" ? (
            <Angry />
          ) : emotion === "fearful" ? (
            <Fearful />
          ) : emotion === "sad" ? (
            <Sad />
          ) : (
            emotion === "suprised" && <Suprised />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default LearnEmotions;
