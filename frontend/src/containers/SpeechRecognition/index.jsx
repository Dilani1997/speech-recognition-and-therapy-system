import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Typography,
  Steps,
} from "antd";
import EmotionSelection from "../../components/EmotionSelection";
import Process from "../../components/Process";
import "./styles.css";

const { Step } = Steps;
const { Title } = Typography;

const steps = [
  {
    id: 1,
    title: "Select Emotion",
  },
  {
    id: 2,
    title: "Process",
  },
];

const SpeechRecognition = () => {
  const [current, setCurrent] = useState(0);
  const [emotion, setEmotion] = useState(null);

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
          {steps[current].id == 1 ? (
            <EmotionSelection emotion={emotion} setEmotion={setEmotion} />
          ) : (
            <Process selectedEmotion={emotion} />
          )}
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {/* {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Submit & Process
            </Button>
          )} */}
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

export default SpeechRecognition;
