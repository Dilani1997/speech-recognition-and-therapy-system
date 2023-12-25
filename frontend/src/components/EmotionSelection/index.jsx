import React, { useState } from "react";
import { Row, Col, Button, Radio, Space, Typography } from "antd";
import "./styles.css";

const { Title } = Typography;

const EmotionSelection = ({emotion,setEmotion}) => {

  const emotionList = [
    { emotion: "Angry", emoji: "😡" },
    { emotion: "Disgust", emoji: "🤢" },
    { emotion: "Fearful", emoji: "😰" },
    { emotion: "Happy", emoji: "😊" },
    { emotion: "Neutral", emoji: "😕" },
    { emotion: "Sad", emoji: "😭" },
    { emotion: "Suprised", emoji: "😲" },
  ];

  const onChange = (e) => {
    console.log("emotion checked", e.target.value);
    setEmotion(e.target.value);
  };

  return (
    <div className="emotion-selection-maindiv">
      <h2>Select emotion to continue</h2>
      <Radio.Group onChange={onChange} value={emotion} size="large">
        <Space direction="vertical">
          <Radio className="emotion-radios" value="Angry">Angry 😡</Radio>
          <Radio className="emotion-radios" value="Disgust">Disgust 🤢</Radio>
          <Radio className="emotion-radios" value="Fearful">Fearful 😰</Radio>
          <Radio className="emotion-radios" value="Happy">Happy 😊</Radio>
          <Radio className="emotion-radios" value="Neutral">Neutral 😕</Radio>
          <Radio className="emotion-radios" value="Sad">Sad 😭</Radio>
          <Radio className="emotion-radios" value="Suprised">Suprised 😲</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};

export default EmotionSelection;
