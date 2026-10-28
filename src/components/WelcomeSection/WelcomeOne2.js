import React, { useState } from "react";
import { services, welcomeOne } from "@/data/welcomeSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import VideoModal from "../Reuseable/VideoModal";
import VisibilityCountUp from "../Reuseable/VisibilityCountUp";
import SingleFeatureOne from "./SingleFeatureOne";
import {BsCheckLg} from 'react-icons/bs';

const { tagline, title, counter, bg, videoBg, videoId, bottomText, features } =
  welcomeOne;

const WelcomeOne2 = ({ id = "" }) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useActive(id);

  return (
      <>
        <section ref={ref} className="welcome-one2" id={id}>
          <div
              className="welcome-one-shape"
              style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
          <Container>
            <Row>
              {services && services.map((item, key) => (
                  <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Card className="w-100 mb-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                      <Card.Header className="h4 fw-bolder text-dark">{item.title}</Card.Header>
                      <Card.Body>
                        <Card.Text className="lh-base" style={{ color: 'black', textAlign: 'justify' }}>
                          {item.description}
                        </Card.Text>
                      </Card.Body>
                      {item.key_feature ? (
                          <div className="card-body">
                            <h5 className="fw-bold">Key Features</h5>
                            <ul className="ps-5">
                              {item.key_feature.map((sub, key) => (
                                  <li className="list-unstyled text-dark lh-base">
                                    <small><BsCheckLg className="me-2" />{sub.list}</small>
                                  </li>
                              ))}
                            </ul>
                          </div>
                      ) : ('')}
                    </Card>
                  </Col>
              ))}
            </Row>
          </Container>
        </section>
        <VideoModal isOpen={isOpen} setOpen={setOpen} videoId={videoId} />
      </>
  );
};

export default WelcomeOne2;
