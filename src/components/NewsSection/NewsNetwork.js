import { newsOne } from "@/data/newsSection";
import useActive from "@/hooks/useActive";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleNewsOne from "./SingleNewsOne";
import bg from "@/images/backgrounds/map.jpg";

const { tagline, title, newsData } = newsOne;

const NewsNetwork = ({
  className = "news-one",
  showShape = false,
  id = "",
  hideTitle = false,
  children,
}) => {
  const ref = useActive(id);

  return (
    <section ref={ref} className={className} id={id}>
      {showShape && (
        <>
          <div className="news-one-shape-1 shapemover2"></div>
          <div className="news-one-shape-2 float-bob-x-2"></div>
        </>
      )}
      <Container>
        {!hideTitle && (
          <Title title={title} tagline={''} className="text-center" />
        )}
      </Container>
      <div>
        <img src={bg.src} alt="map" width="100%" height="100%" />
      </div>
      {/* <Container>
        {!hideTitle && (
          <Title title={title} tagline={''} className="text-center" />
        )}
        <Row>
          {newsData.slice(0, !hideTitle ? 3 : undefined).map((news) => (
            <Col
              xl={4}
              lg={hideTitle ? 6 : 4}
              md={hideTitle ? 6 : undefined}
              key={news.id}
              className="animated fadeInUp"
            >
              <SingleNewsOne news={news} />
            </Col>
          ))}
        </Row>
        {children}
      </Container> */}

      {/* <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col>
            <table class="table table-bordered" style={{ width: '100%', textAlign: 'center' }}>
              <thead style={{ background: '#191825', textAlign: 'center', color: 'white' }}>
                <tr>
                  <th colspan="4" >Our Local PoP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dhaka</td>
                  <td>Sylhet</td>
                  <td>Rajsahi</td>
                </tr>
                <tr>
                  <td>Dhaka</td>
                  <td>Sylhet</td>
                  <td>Rajsahi</td>
                </tr>
                <tr>
                  <td>Dhaka</td>
                  <td>Sylhet</td>
                  <td>Rajsahi</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container> */}

      <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col md={12}>
            <h4 style={{ marginBottom: '20px' }}>Local PoP</h4>
            <Row>
              <Col>
                <ul>
                  <li style={{ listStyleType: 'circle' }}>Dhaka</li>
                  <li style={{ listStyleType: 'circle' }}>Rangpur</li>
                  <li style={{ listStyleType: 'circle' }}>Joypurhat</li>
                  <li style={{ listStyleType: 'circle' }}>Naogaon</li>
                  <li style={{ listStyleType: 'circle' }}>Rajshahi</li>
                  <li style={{ listStyleType: 'circle' }}>Bogra</li>
                  <li style={{ listStyleType: 'circle' }}>Jamalpur</li>
                  <li style={{ listStyleType: 'circle' }}>Sirajganj</li>
                  <li style={{ listStyleType: 'circle' }}>Pabna</li>
                </ul>
              </Col>
              <Col>
              <ul>
                <li style={{ listStyleType: 'circle' }}>Tangail</li>
                <li style={{ listStyleType: 'circle' }}>Manikganj</li>
                <li style={{ listStyleType: 'circle' }}>Mymensingh</li>
                <li style={{ listStyleType: 'circle' }}>Kishoreganj</li>
                <li style={{ listStyleType: 'circle' }}>Sylhet</li>
                <li style={{ listStyleType: 'circle' }}>Moulvibazar</li>
                <li style={{ listStyleType: 'circle' }}>Gazipur</li>
                <li style={{ listStyleType: 'circle' }}>Narshindi</li>
                <li style={{ listStyleType: 'circle' }}>Narayanganj</li>
              </ul>
              </Col>
              <Col>
              <ul>
                <li style={{ listStyleType: 'circle' }}>Brahmanbaria</li>
                <li style={{ listStyleType: 'circle' }}>Comilla</li>
                <li style={{ listStyleType: 'circle' }}>Shariatpur</li>
                <li style={{ listStyleType: 'circle' }}>Munshiganj</li>
                <li style={{ listStyleType: 'circle' }}>Chittagong</li>
                <li style={{ listStyleType: 'circle' }}>Cox's Bazar</li>
                <li style={{ listStyleType: 'circle' }}>Feni</li>
                <li style={{ listStyleType: 'circle' }}>Noakhali</li>
                <li style={{ listStyleType: 'circle' }}>Chuadanga</li>
              </ul>
              </Col>
              <Col>
              <ul>
                <li style={{ listStyleType: 'circle' }}>Jhenaida</li>
                <li style={{ listStyleType: 'circle' }}>Faridpur</li>
                <li style={{ listStyleType: 'circle' }}>Madaripur</li>
                <li style={{ listStyleType: 'circle' }}>Gopalganj</li>
                <li style={{ listStyleType: 'circle' }}>Brishal</li>
                <li style={{ listStyleType: 'circle' }}>Khulna</li>
                <li style={{ listStyleType: 'circle' }}>Kushtia</li>
                <li style={{ listStyleType: 'circle' }}>Bagerhat</li>
              </ul>
              </Col>
            </Row>
          </Col>

          <Col md={6} className="mt-5">
            <h4 style={{ marginBottom: '20px' }}>International PoP</h4>
            <div className="d-flex">
              <ul style={{ width: '50%' }}>
                <li style={{ listStyleType: 'circle' }}>Chennai</li>
                <li style={{ listStyleType: 'circle' }}>Dusseldorf</li>
                <li style={{ listStyleType: 'circle' }}>Frankfaurt</li>
                <li style={{ listStyleType: 'circle' }}>Hamburg</li>
                <li style={{ listStyleType: 'circle' }}>Marseille</li>
              </ul>

              <ul style={{ width: '50%' }}>
                <li style={{ listStyleType: 'circle' }}>Moscow</li>
                <li style={{ listStyleType: 'circle' }}>Mumbai</li>
                <li style={{ listStyleType: 'circle' }}>Munich</li>
                <li style={{ listStyleType: 'circle' }}>New York</li>
                <li style={{ listStyleType: 'circle' }}>Singapore</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>


  );
};

export default NewsNetwork;
