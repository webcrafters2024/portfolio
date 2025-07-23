import React, { useEffect, useRef, useState } from "react";
import "../Services/services.css";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { serviceData } from "../../utils/data";
import { motion } from "framer-motion";

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [itemDimensitions, setItemDimensitions] = useState([]); // store dimensions of each service item

  const parentRef = useRef(null); // Ref for the parent container
  const listItemsRef = useRef([]); // ref for each service item

  // update dimensions when the component mounts or hoverIndex changes
  useEffect(() => {
    if (parentRef.current) {
      const parentReact = parentRef.current.getBoundingClientRect(); // Get parent container position
      const dimensions = listItemsRef.current.map((item) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          return {
            height: rect.height, //stroe item height
            left: rect.left - parentReact.left, //Addust left postion relative to parent
            top: rect.top - parentReact.top, // Addust top postion relative to parent
          };
        }
        return null;
      });
      setItemDimensitions(dimensions) // update state with new dimenstions
    }
  }, [hoverIndex]); // run effect when hover index changes

  return (
    <>
      <section className="services light-bg section-spacing " id="services">
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <h1 className="heading primary-clr">My Quality Services</h1>
              <p className="body_text">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and you customers.
              </p>
            </Col>
            <Col md={12} className="mt-4">
              {/* Service List */}
              <div className="position-relative" ref={parentRef}>
                <ListGroup as="ol" className="rounded-0 border-0">
                  {serviceData.map((service, index) => {
                    return (
                      <ListGroup.Item
                        as="li"
                        className={`d-flex flex-lg-row  flex-column align-items-center position-relative py-4 
                    ${hoverIndex === index ? "current-active" : ""}
                   `}
                        key={index}
                        ref={(el) => (listItemsRef.current[index] = el)}
                        onMouseEnter={() => setHoverIndex(index)} // Set hover index on mouse enter
                        onMouseLeave={() => setHoverIndex(0)} // reset hover index on mouse leave
                      >
                        {/* Service Title  */}
                        <div className="flex-grow-2 d-flex align-items-center service-title">
                          <span className="detail_text fw-bold me-2 primary-clr">
                            0{service.id}
                          </span>
                          <h1 className="fw-bold heading ms-2 primary-clr">
                            {service.title}
                          </h1>
                        </div>

                        {/* Service description */}
                        <span className="flex-row-2 service-des body-text">
                          {service.description}
                        </span>

                        {/* Hover Indicator Icon */}

                        <div className=" position-absolute service-link">
                        {
                          hoverIndex === index ? (<i className="bi bi-arrow-up-right h4"></i>) : (<i className="bi bi-arrow-down-right h4"></i>)
                        }
                          
                        </div>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>

                <motion.div
                  className="active-bg wow fadeInup"
                  data-wow-delay=".6s"
                  initial={{ visibility: "hidden", y: 10 }}
                  animate={{ visibility: "visible", y: 0 }}
                  exit={{ visibility: "hidden", y: 10 }}
                  style={{
                    position: "absolute",
                    height:itemDimensitions[hoverIndex]?.height ||  "100px",
                    left: itemDimensitions[hoverIndex]?.left || 0,
                    top: itemDimensitions[hoverIndex]?.top || 0,
                    zIndex: 1,
                  }}
                ></motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
