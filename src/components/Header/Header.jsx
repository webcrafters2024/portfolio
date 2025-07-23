import React, { useEffect, useState } from "react";
import "../Header/header.css";
import { Container, Row, Navbar, Offcanvas, Nav } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  // Handle Sticky header on scroll
  useEffect(()=>{
    window.addEventListener("scroll", isSticky);
    return ()=>{
      window.removeEventListener("scroll", isSticky)
    }
  },[])

  // Function to add/remove 'is-sticky' class based on scroll position
  const isSticky = ()=>{
    const header = document.querySelector('.header'); // select the header element
    const scrollTop = window.scrollY; //get the current scroll position
    scrollTop >= 320 ? header.classList.add('is-sticky') // add class when scrolled 320px or more 
    : header.classList.remove("is-sticky") // remove class when scrolled up 
  }

  return (
    <>
      <header className="header">
        <Container fluid="md">
          <Row>
            <Navbar key="lg" expand="lg" className="mb-3">
              <Container fluid>
                {/* Logo */}
                <Navbar.Brand href="#">Web Crafters</Navbar.Brand>

                {/* Offcanvas for mobile Menu  */}
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                  placement="end"
                  show={show}
                >
                  {/* Offcanvas Header (only visible on mobile )  */}
                  <Offcanvas.Header className="d-flex justify-content-between d-lg-none">
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg m-0`}>
                      Web Crafters
                    </Offcanvas.Title>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setShow(false)}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#services">Services</Nav.Link>
                      <Nav.Link href="#works">Works</Nav.Link>
                      <Nav.Link href="#resume">Resume</Nav.Link>
                      <Nav.Link href="#skills">Skills</Nav.Link>
                      <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className="header-action d-flex">
                  <a href="#contact" className="primary-btn">
                    {" "}
                    Hire Me!
                  </a>

                  {/* Mobile Menu Toggle Button */}
                  <button
                    className="toggle-btn d-block d-lg-none ms-2"
                    onClick={() => setShow(!show)} // Toggle Menu visibility
                  >
                    <i className={`bi ${show ? "bi-x" : "bi-list"}`}></i>
                  </button>
                </div>
              </Container>
            </Navbar>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
