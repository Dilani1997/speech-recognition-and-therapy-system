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
import LearnEmotions from "../LearnEmotions";
import LearnEmotionsStep2 from "../LearnEmotionsStep2";
import EmotionsTest from "../EmotionsTest";

import "./styles.css";

const { Step } = Steps;
const { Title } = Typography;

const steps = [
  {
    id: 1,
    title: "Learn Emotions",
  },
  {
    id: 2,
    title: "Learn Emotions Step 2",
  },
  {
    id: 3,
    title: "Test",
  },
];

const SpeechTherapy = () => {
  const [current, setCurrent] = useState(0);
  const [emotion, setEmotion] = useState("happy");

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Row justify="center" align="middle" className="main-row-d">
      <Col md={14} className="main-col">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">
          {steps[current].id === 1 ? (
            <LearnEmotions emotion={emotion} setEmotion={setEmotion} />
          ) : steps[current].id === 2 ? (
            <LearnEmotionsStep2 emotion={emotion} />
          ) : (
            <EmotionsTest emotion={emotion} />
          )}
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default SpeechTherapy;
