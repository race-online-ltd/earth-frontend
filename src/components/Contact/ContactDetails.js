import { contactDetails } from "@/data/contact";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GoogleMap from "../GoogleMap/GoogleMap";

const { phone, phoneHref, email, title, text, address, contactIcon } =
  contactDetails;

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="contact-details__inner">
              <GoogleMap
                containerClassName="contact-details__map-box"
                mapClassName="contact-details__map"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4342.20433826084!2d90.40157217988022!3d23.770759378219893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7479bee6099%3A0xc561649d7b386cb7!2sImpetus%20Center!5e0!3m2!1sen!2sbd!4v1685594644276!5m2!1sen!2sbd"
              />
              <div className="contact-details__content">
                <div className="contact-details__title-box">
                  <h4 className="contact-details__title">{title}</h4>
                  <p className="contact-details__text">{address}</p>
                </div>
                {/* <p className="contact-details__address">{address}</p> */}
               <div className="contact-details__contact-info">
                   <div className="contact-details__contact-icon">
                    <span className={contactIcon}></span>
                  </div>
                    <h4 className="contact-details__contact-number-email d-flex">
                    <a
                      href={`tel:+8809613-234111`}
                      className="contact-details__contact-number"
                      style={{fontSize:'23px'}}
                    >
                      {/*{phone}*/}+8809613-234111
                    </a>
                      {" , "}
                      <a
                          href={`tel:+8809643001122`}
                          className="contact-details__contact-number ms-3"
                          style={{fontSize:'23px'}}
                      >
                        {/*{phone}*/} +8809643-001122
                      </a>
                      {/*
                    <a
                      href={`mailto:${email}`}
                      className="contact-details__contact-email"
                    >
                      {email}
                    </a>*/}
                  </h4>
                </div>

                {/* <div>
                <h4 className="contact-details__title">Compliance Management</h4>
                <p className="contact-details__text">Md. Obaidullah-Al-Masum</p>
                <p className="contact-details__text">Assistant General Manager (AGM)</p>
                <p className="contact-details__text">+880-1322811634</p>
                <p className="contact-details__contact-email">obaidullah.masum@earth.net.bd</p>
                




                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactDetails;
