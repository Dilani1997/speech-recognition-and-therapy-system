import React, { useEffect } from "react";
import { Col, Row, Card, Button, Form, Input, message } from "antd";
import axios from "axios";
import "./styles.css";

const Login = () => {
  useEffect(() => {
    let isAuthenticated = sessionStorage.getItem("token");
    isAuthenticated && (window.location.pathname = "/dashboard");
  }, []);

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  const storeTokenData = (token,user_id, name, email) => {
    sessionStorage.setItem('user_id',user_id)
    sessionStorage.setItem('name',name)
    sessionStorage.setItem('email',email)
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("isAuthenticated", true);
  }

  const onFinish = (values) => {
    var bodyFormData = new FormData();
    bodyFormData.append("username", values.email);
    bodyFormData.append("password", values.password);

    axios
      .post("http://127.0.0.1:8000/token", bodyFormData)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          let data = parseJwt(response.data.access_token)
          storeTokenData(response.data.access_token,data.id,data.name,data.email)
          window.location.pathname = "/dashboard"
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          message.error("Email or password is incorrect !");
        } else {
          message.error(error.message);
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          <p>Login to the Dashboard</p>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              LOGIN
            </Button>
            <Button type="link" href="/register" className="login-form-button">
              Don't have an account ? Register here
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
