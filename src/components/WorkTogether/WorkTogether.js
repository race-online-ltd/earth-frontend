import { workTogether } from "@/data/workTogether";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

const {
  shape,
  image1,
  image2,
  tagline,
  title,
  text,
  points,
  parsonImage,
  parsonImage2,
  parsonImage3,
  personName,
} = workTogether;

const WorkTogether = ({ id = "" }) => {
  const ref = useActive(id);

  return (
    <section ref={ref} className="work-together" id={id}>
      <Container>
        <Row>
          <Col xl={6}>
            <div className="work-together__left animated slideInLeft">
              <div className="work-together__img-box">
                <div className="work-together-shape-1">
                  <Image src={shape.src} alt="" />
                </div>
                <div className="work-together__img-1">
                  <Image src={image1.src} alt="" />
                  <div className="work-together__img-2">
                    <Image src={image2.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="work-together__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="work-together__right-text">{text}</p>
              <ul className="list-unstyled work-together__points">
                {points.map((point, i) => (
                  <li key={i}>
                    <div className="icon">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                    <div className="text">
                      <p>{point}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {/* <div className="work-together__person">
                <div className="work-together__person-img">
                  <Image src={parsonImage.src} alt="" />
                </div>
                <h2 className="work-together__person-name">{personName}</h2>
              </div>
              <div className="work-together__person mt-5">
                <div className="work-together__person-img">
                  <Image src={parsonImage2.src} alt="" />
                </div>
                <h2 className="work-together__person-name">Md. Kamal Hossain</h2>
              </div> */}
            </div>
          </Col>
          <Row className="mt-5">
            
            <Col xl={4} className="mb-4">
              <div className="work-together__person">
                <div className="work-together__person-img">
                  <Image src={parsonImage3.src} alt="" />
                </div>
                <div>
                  <h4 style={{ marginLeft: '22px' }}>Chairman</h4>
                  <h2 className="work-together__person-name">Ela Ahmed</h2>
                </div>
              </div>
            </Col>
			
            <Col xl={4} className="mb-4">
              <div className="work-together__person">
                <div className="work-together__person-img">
                  <Image src={parsonImage2.src} alt="" />
                </div>
                <div>
                  <h4 style={{ marginLeft: '22px' }}>Managing Director</h4>
                  <h2 className="work-together__person-name">Md. Kamal Hossain</h2>
                </div>
              </div>
            </Col>
			<Col xl={4} className="mb-4">
              <div className="work-together__person">
                <div className="work-together__person-img">
                  <Image src={parsonImage.src} alt="" />
                </div>
                <div>
                  <h4 style={{ marginLeft: '22px' }}>Executive Director</h4>
                  <h2 className="work-together__person-name">Nasir Uddin Ahmed</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default WorkTogether;
