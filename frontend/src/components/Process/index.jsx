import React, { useState } from "react";
import { Card, Button, message, notification } from "antd";
import RecorderControls from "../Audio/RecorderControls";
import RecordingsList from "../Audio/RecordingsList";
import useRecorder from "../../hooks/useRecorder";
import moment from "moment";
import axios from "axios";

import "./styles.css";

import happy1 from "../../assets/audios/OAF_bar_happy.wav";
import happy2 from "../../assets/audios/OAF_back_happy.wav";

import angry1 from "../../assets/audios/OAF_back_angry.wav";
import angry2 from "../../assets/audios/OAF_bar_angry.wav";

import sad1 from "../../assets/audios/OAF_back_sad.wav";
import sad2 from "../../assets/audios/OAF_bar_sad.wav";

import fear1 from "../../assets/audios/OAF_bar_fear.wav";
import fear2 from "../../assets/audios/OAF_back_fear.wav";

import disgust1 from "../../assets/audios/OAF_back_disgust.wav";
import disgust2 from "../../assets/audios/OAF_bar_disgust.wav";

import neutral1 from "../../assets/audios/OA_bite_neutral.wav";
import neutral2 from "../../assets/audios/OAF_back_neutral.wav";

import suprise1 from "../../assets/audios/OAF_bar_ps.wav";
import suprise2 from "../../assets/audios/OAF_back_ps.wav";

const Process = ({ selectedEmotion }) => {
  const { recorderState, ...handlers } = useRecorder();
  const { audio, audioTrack } = recorderState;
  // const [audioFile, setAudioFile] = useState();

  const openNotification = (predicted_emotion) => {
    notification.info({
      message: `Predicted Emotion`,
      description: "Predicted Emotion : " + predicted_emotion,
      placement: "topRight",
      duration: 10,
    });
  };

  const handleSave = () => {
    // setAudioFile(audio);
    // setAudioFile(Object.assign(audio, {
    //   preview: URL.createObjectURL(audio),
    // }))
    let filename =
      "Audio_Track_" + moment().format("DD_MM_YYYY_h_mm_ss_a") + ".wav";
    const file = new File([audioTrack], filename);

    console.log(file);

    submitRecording(file);
  };

  const submitRecording = (audioFile) => {
    var formData = new FormData();
    formData.append("file", audioFile);
    axios
      .post("http://127.0.0.1:8000/upload-audio-records", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          message.success("File uploaded successfully !");
          console.log(response.data.predicted_emotion);
          openNotification(response.data.predicted_emotion);
        }
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
        message.error("An error occured try again later !");
      });
  };

  return (
    <div className="emotion-selection-maindiv">
      <div>
        <h2>Selected Emotion : {selectedEmotion}</h2>
      </div>
      <div>
        <div className="secondary-container">
          <Card
            title="Sample Audio"
            style={{
              width: 500,
              marginRight: 20,
              marginBottom: 20,
            }}
          >
            {selectedEmotion === "Angry" ? (
              <div>
                <audio controls src={angry1} />
                <audio controls src={angry2} />
              </div>
            ) : selectedEmotion === "Disgust" ? (
              <div>
                <audio controls src={disgust1} />
                <audio controls src={disgust2} />
              </div>
            ) : selectedEmotion === "Fearful" ? (
              <div>
                <audio controls src={fear1} />
                <audio controls src={fear2} />
              </div>
            ) : selectedEmotion === "Happy" ? (
              <div>
                <audio controls src={happy1} />
                <audio controls src={happy2} />
              </div>
            ) : selectedEmotion === "Neutral" ? (
              <div>
                <audio controls src={neutral1} />
                <audio controls src={neutral2} />
              </div>
            ) : selectedEmotion === "Sad" ? (
              <div>
                <audio controls src={sad1} />
                <audio controls src={sad2} />
              </div>
            ) : (
              <div>
                <audio controls src={suprise1} />
                <audio controls src={suprise2} />
              </div>
            )}
          </Card>
          <Card
            title="Phrases"
            style={{
              width: 500,
              marginBottom: 20,
            }}

          >
            <p>"Say the word back"</p>
            <p>"Say the word bar"</p>
          </Card>
        </div>
        <div className="secondary-container">
          <Card
            title="Requirements"
            style={{
              width: 500,
              marginRight: 20,
              marginBottom: 20,
            }}
          >
            <p>
              
                <ul>
                  <li>"Recording should be get in quiet environment"</li>
                  <li>"When starting to record pronounce the above Phrases with that emotion"</li>
                  <li>"Listen to the recording mentioned above to get an idea about it. "</li>
                  <li>"When you are recording consider about the duration of the recording"</li>
                </ul>
               
            </p>
          </Card>
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
            <RecordingsList audio={audio} />
          </Card>
        </div>
        <Button type="primary" onClick={handleSave}>
          Submit & Process
        </Button>
      </div>
    </div>
  );
};

export default Process;
