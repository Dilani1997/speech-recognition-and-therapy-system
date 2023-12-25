import React from "react";
import { Layout, Menu } from "antd";
import {
    PoweroffOutlined
  } from '@ant-design/icons';
//   import { Link } from 'react-router-dom'  

const { Header, Content, Footer } = Layout;

const LayoutPage = ({children}) => {
  const logOut = () => {
    sessionStorage.clear()
    window.location.pathname = "/login"
  }

  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="autismdetectionsystem" label="Emotion Recognition & Learning System">
          Emotion Recognition & Learning System
          </Menu.Item>
          <Menu.Item key="logout" icon={<PoweroffOutlined />} label="Logout" onClick={logOut}>
          Logout
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Emotion Recognition & Learning System © 2022
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
