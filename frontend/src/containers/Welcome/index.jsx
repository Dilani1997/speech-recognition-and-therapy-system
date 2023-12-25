import React from "react";
import { Carousel, Typography, Row, Col, Card, Button } from "antd";
import "./styles.css";

const { Title } = Typography;

const contentStyle = {
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const Welcome = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Row justify="center" align="middle" className="main-row">
      <Col md={14} className="main-col">
        <Col className="title-style">
          <Title>Autism Detection System</Title>
        </Col>
        <Col>
          <Card>
            <Carousel autoplay>
              <div>
                <img
                  src="https://via.placeholder.com/728x200.png"
                  alt="placeholder"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/728x200.png"
                  alt="placeholder"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/728x200.png"
                  alt="placeholder"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/728x200.png"
                  alt="placeholder"
                />
              </div>
            </Carousel>
          </Card>
        </Col>
        <Col className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nihil
            fugiat nemo pariatur quo esse error perspiciatis molestiae quasi
            dolorem veniam ab earum vel obcaecati, minima laborum, vero
            blanditiis! Adipisci. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Optio nihil fugiat nemo pariatur quo esse error
            perspiciatis molestiae quasi dolorem veniam ab earum vel obcaecati,
            minima laborum, vero blanditiis! Adipisci.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio nihil fugiat nemo pariatur quo
            esse error perspiciatis molestiae quasi dolorem veniam ab earum vel
            obcaecati, minima laborum, vero blanditiis! Adipisci.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Optio nihil fugiat nemo
            pariatur quo esse error perspiciatis molestiae quasi dolorem veniam
            ab earum vel obcaecati, minima laborum, vero blanditiis!
            Adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio nihil fugiat nemo pariatur quo esse error perspiciatis
            molestiae quasi dolorem veniam ab earum vel obcaecati, minima
            laborum, vero blanditiis! Adipisci.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio nihil fugiat nemo pariatur quo
            esse error perspiciatis molestiae quasi dolorem veniam ab earum vel
            obcaecati, minima laborum, vero blanditiis! Adipisci.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Optio nihil fugiat nemo
            pariatur quo esse error perspiciatis molestiae quasi dolorem veniam
            ab earum vel obcaecati, minima laborum, vero blanditiis! Adipisci.
          </p>
          <Button type="primary" href="/login">CONTINUE</Button>
        </Col>
      </Col>
    </Row>
  );
};

export default Welcome;
