import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Radio,
  Space,
  Typography,
  Steps,
  Tabs,
  message,
} from "antd";
import SpeechRecognition from "../SpeechRecognition";
import SpeechTherapy from "../SpeechTherapy";
import LayoutPage from "../LayoutPage";
import "./styles.css";

const Dashboard = () => {
  return (
    <LayoutPage>
      <Tabs>
        <Tabs.TabPane tab="Speech Recognition" key="item-1">
          <SpeechRecognition />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Speech Therapy" key="item-2">
          <SpeechTherapy />
        </Tabs.TabPane>
      </Tabs>
      ;
    </LayoutPage>
  );
};

export default Dashboard;
