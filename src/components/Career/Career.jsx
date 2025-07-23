import React from "react";
import "../Career/career.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { educationData, experienceData } from "../../utils/data";

export const Career = () => {
  return (
    <>
      <section className="section-spacing light-bg resume" id="resume">
        <Container>
          <Row className="g-3 g-md-5">
            {/* Experience Section */}
            <Col className="" md={6}>
              <div className="experience-item">
                <h1 className="heading primary-clr mb-4 mb-md-5">
                  My Experience
                </h1>
                {/* Loop through experienceData and render each experience */}
                {experienceData.map((val, index) => {
                  return (
                    <Card className="mb-4 border-0 rounded-3" key={index}>
                      <Card.Body>
                        <h5 className="detail-text primary-clr fw-bold">
                          {val.year}
                        </h5>
                        <h5 className="title py-1 fw-bold"> {val.name}</h5>
                        <p className="body-text"> {val.address}</p>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </Col>

            {/* Education Section */}
            <Col className="" md={6}>
              <div className="experience-item">
                <h1 className="heading primary-clr mb-4 mb-md-5">
                  My Education
                </h1>
                {/* Loop through educationData and render each experience */}
                {educationData.map((val, index) => {
                  return (
                    <Card className="mb-4 border-0 rounded-3" key={index}>
                      <Card.Body>
                        <h5 className="detail-text primary-clr fw-bold">
                          {val.year}
                        </h5>
                        <h5 className="title py-1 fw-bold"> {val.name}</h5>
                        <p className="body-text"> {val.address}</p>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
