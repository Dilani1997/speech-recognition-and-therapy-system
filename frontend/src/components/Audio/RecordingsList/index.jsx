import {
    DeleteOutlined,
    InfoCircleOutlined
  } from '@ant-design/icons';
import useRecordingsList from '../../../hooks/useRecordingsList';
import "./styles.css";




const RecordingsList = ({ audio }) => {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
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
                    <DeleteOutlined style={{ fontSize: '2rem' }}/>
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
  );
}

export default RecordingsList