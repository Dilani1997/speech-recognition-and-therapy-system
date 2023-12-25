import React, { useState, useEffect } from "react";
import { Button, Form, Input, Radio, DatePicker, message } from "antd";
import axios from 'axios';
import "./styles.css";


const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);
  const [bday, setBday] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    let isAuthenticated = sessionStorage.getItem("token");
    isAuthenticated && (window.location.pathname = "/dashboard");
  }, []);

  const onFinish = (values) => {
    let data = {
      name: values.name,
      email: values.email,
      gender: values.gender,
      bday: bday,
      password: values.password
    }

    console.log('data',data);
    axios
      .post("http://127.0.0.1:8000/users", data)
      .then((response) => {
        if(response.status == 200) {
          message.success("Account created successfully!")
          setTimeout(() => {
            window.location.pathname = "/login"
          }, 3000);
        }else{
          message.error("An error occured. try again later!")
        }
      })
      .catch((error) => {
        console.log(error);
        message.error(error.response.data.detail.message)
      });

    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onGenderChange = (e) => {
    console.log("gender checked", e.target.value);
    setGender(e.target.value);
  };

  const onBdayChange = (date, dateString) => {
    console.log(date, dateString);
    setBday(dateString)
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Emotion Recognition & Learning System</p>
          <p>Create an account</p>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input onChange={(name) => setName(name)} placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input onChange={(email) => setEmail(email)} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select your gender!",
              },
            ]}
          >
            <Radio.Group onChange={onGenderChange} value={gender}>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        
          <Form.Item
            name="bday"
            rules={[
              {
                required: true,
                message: "Please select your birth day!",
              },
            ]}
          >
            <DatePicker onChange={onBdayChange} placeholder="Birth Day" style={{ width: '100%' }}/>
          </Form.Item>

          

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password onChange={(password) => setPassword(password)} placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="cpassword"
            rules={[
              {
                required: true,
                message: "Please input your confirm password!",
              },
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              REGISTER
            </Button>
            <Button
              type="link"
              href="/login"
              className="login-form-button"
            >
              Already have an account ? Login here
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
