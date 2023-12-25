import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Space,
  Typography,
  Steps,
  Image,
  message,
} from "antd";
import {
  DeleteOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import RecorderControls from "../Audio/RecorderControls";
import useRecorder from "../../hooks/useRecorder";
import useRecordingsList from "../../hooks/useRecordingsList";
import Report from "../Report";
import moment from "moment";
import axios from "axios";

import happy1 from "../../assets/images/happy/happy1.jpg";
import happy2 from "../../assets/images/happy/happy2.jpg";

import angry1 from "../../assets/images/angry/angry1.jpg";
import angry2 from "../../assets/images/angry/angry2.jpg";

import sad1 from "../../assets/images/sad/sad1.jpg";
import sad2 from "../../assets/images/sad/sad2.jpg";

import fear1 from "../../assets/images/fearful/fear1.jpg";
import fear2 from "../../assets/images/fearful/fear2.jpg";

import sup1 from "../../assets/images/suprised/sup1.jpg";
import sup2 from "../../assets/images/suprised/sup2.jpg";

const EmotionTestInterface = ({attemptNo}) => {
  const { recorderState, ...handlers } = useRecorder();
  const { audio, audioTrack } = recorderState;
  const [currentImage, setCurrentImage] = useState();
  const [currentImageType, setCurrentImageType] = useState();
  const [imageIndex, setImageIndex] = useState(0);
  const [audioFileList, setAudioFileList] = useState([]);
  const [marks, setMarks] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emotionImages, setEmotionImages] = useState([
    { id: 1, imgType: "happy", src: happy1 },
    { id: 2, imgType: "happy", src: happy2 },
    { id: 3, imgType: "angry", src: angry1 },
    { id: 4, imgType: "angry", src: angry2 },
    { id: 5, imgType: "sad", src: sad1 },
    { id: 6, imgType: "sad", src: sad2 },
    { id: 7, imgType: "fear", src: fear1 },
    { id: 8, imgType: "fear", src: fear2 },
    { id: 9, imgType: "sup", src: sup1 },
    { id: 10, imgType: "sup", src: sup2 },
  ]);
  const { recordings, deleteAudio } = useRecordingsList(audio);

  useEffect(() => {
    setCurrentImage(emotionImages[imageIndex].src);
    setCurrentImageType(emotionImages[imageIndex].imgType);
  }, [imageIndex]);

  const changeImageForwards = () => {
    let i = imageIndex;
    if (i == emotionImages.length - 1) {
      i = 0;
    } else {
      i = i + 1;
    }
    setImageIndex(i);
  };

  const changeImageBackwards = () => {
    let i = imageIndex;
    if (i == 0) {
      i = emotionImages.length - 1;
    } else {
      i = i - 1;
    }
    setImageIndex(i);
  };

  const addAudio = () => {
    console.log('audioTrack',audioTrack);
    let filename =
      "Emotion_Name_Track_" +
      currentImageType +
      moment().format("_DD_MM_YYYY_h_mm_ss_a") + ".webm";
    const file = new File([audioTrack], filename);
    setAudioFileList((current) => [...current, file]);
  };

  const submitAll = () => {
    console.log('audioFileList',audioFileList);
    var formData = new FormData();

    for (let index = 0; index < audioFileList.length; index++) {
        formData.append("files", audioFileList[index]); 
    }
    
    axios
      .post("http://127.0.0.1:8000/upload-emotion-name-audio-records", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          message.success("File uploaded successfully !");
          calCulateMarks(response.data.data)
        }
      })
      .catch((error) => {
        console.log("error", error);
        message.error("An error occured try again later !");
      });
  };

  const calCulateMarks = (data) => {
    var tempMarks = 0;
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      console.log('element',element);
      if(element.original_emotion == element.transcription.toLowerCase()){
        tempMarks++;
      }
    }
    setMarks(tempMarks)
    console.log('tempMarks',tempMarks);
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Row justify="center" align="middle">
      <Col md={24}>
        <h2 style={{ marginTop: "10px" }}>
          Identify the image and record the emotion
        </h2>
        <div>
          <Row>
            <Col md={12} className="main-container">
              <Card
                title="Study the Image"
                style={{
                  width: 500,
                  marginRight: 20,
                  marginBottom: 20,
                }}
              >
                <Image
                  style={{ height: "200px", marginBottom: "5px" }}
                  src={currentImage}
                />
                <Row>
                  <Col md={24}>
                    <Button
                      type="primary"
                      style={{ marginRight: "5px" }}
                      onClick={() => changeImageBackwards()}
                    >
                      Back
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => changeImageForwards()}
                    >
                      Next
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={12}>
              <Card
                title="Record Audio"
                style={{
                  width: 500,
                  marginBottom: 20,
                }}
              >
                <RecorderControls
                  recorderState={recorderState}
                  handlers={handlers}
                />
                <div className="recordings-container">
                  {recordings.length > 0 ? (
                    <>
                      <h1>Your recordings</h1>
                      <div className="recordings-list">
                        {recordings.map((record) => (
                          <div className="record" key={record.key}>
                            <audio controls src={record.audio} />
                            <div className="delete-button-container">
                              <button
                                className="delete-button"
                                title="Delete this audio"
                                onClick={() => deleteAudio(record.key)}
                              >
                                <DeleteOutlined style={{ fontSize: "2rem" }} />
                              </button>
                            </div>
                            <div className="delete-button-container">
                              <button
                                className="delete-button"
                                title="Delete this audio"
                                onClick={() => addAudio(record.key)}
                              >
                                <PlusCircleOutlined
                                  style={{ fontSize: "2rem" }}
                                />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="no-records">
                      <InfoCircleOutlined />
                      <span>You don't have records</span>
                    </div>
                  )}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <Button style={{ marginBottom: "10px" }} type="primary" onClick={() => submitAll()}>
          Submit & Process
        </Button>
        <Report isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} attemptNo={attemptNo} marks={marks}/>
      </Col>
    </Row>
  );
};

export default EmotionTestInterface;
