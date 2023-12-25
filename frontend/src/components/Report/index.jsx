import React, { createRef } from "react";
import { Button, Modal } from "antd";
import Pdf from "react-to-pdf";

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const Report = ({ isModalOpen, handleOk, handleCancel, attemptNo, marks }) => {
  const ref = createRef();

  return (
    <Modal
      title="Results"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Pdf targetRef={ref} filename="Report.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
        </Pdf>,
      ]}
    >
      <div ref={ref}>
        <h2>Results</h2>
        <h2>Name : {sessionStorage.getItem("name")}</h2>
        <h2>Date : {`${day}-${month}-${year}`}</h2>
        <h2>Attempt No : {attemptNo}</h2>
        <h2>Marks : {marks} / 10</h2>
      </div>
    </Modal>
  );
};

export default Report;
