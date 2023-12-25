import React, { useState } from "react";
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

import EmotionTestInterface from "../../components/EmotionTestInterface";

const EmotionsTest = ({ emotion }) => {
  const [attempt, setAttempt] = useState(false);
  const [attemptNo, setAttemptNo] = useState(0);

  const handleAttempt = (attNo) => {
    setAttempt(true)
    setAttemptNo(attNo)
  }

  return (
    <Row justify="center" align="middle">
      <Col md={24}>
        <h2  >Take the test</h2>
        <div style={{ marginBottom: "10px" }}>
          <Button type="primary" className="mr-2" onClick={()=>handleAttempt(1)}>
            Attempt 1
          </Button>
          <Button type="primary" className="mr-2" onClick={()=>handleAttempt(2)}>
            Attempt 2
          </Button>
          <Button type="primary" className="mr-2" onClick={()=>handleAttempt(3)}>
            Attempt 3
          </Button>
        </div>
        <div>
            {attempt && <EmotionTestInterface attemptNo={attemptNo} />}
        </div>
      </Col>
    </Row>
  );
};

export default EmotionsTest;
