import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Skills/skills.css";
import { skillsData } from "../../utils/data";

const Skills = () => {
  return (
    <>
      <section className="skills  section-spacing " id="skills">
        <Container>
          <Row>
            <Col lg={7} md={10} sm={12} className="text-center m-auto">
              <h1 className="heading primary-clr">My Skills</h1>
              <p className="mt-3 body_text">
                {" "}
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and you customers.
              </p>
            </Col>
          </Row>

          <Row className="mt-md-5 mt-3">
            {skillsData.map((skill, index) => {
              return (
                <Col lg={2} md={4} sm={6} key={index}>
                  <Card className="text-center p-3 border-0">
                    <div className="img-container p-4 rounded-4">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="img-fluid m-auto"
                      />
                      <h5 className="mt-3 detail-text fw-bold">
                        {" "}
                        {skill.percentage}
                      </h5>
                    </div>
                    <Card.Body>
                      <h3 className=" detail-text primary-clr">
                        {" "}
                        {skill.title}
                      </h3>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skills;
