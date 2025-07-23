import React from "react";
import "../Footer/footer.css"
const Footer = () => {
  return (
    <>
      <footer className="py-4 footer">
        <ul className="nav justify-content-center border-bottom pb-3 my-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 border-text"> Services</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 border-text"> Work</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 border-text"> Resume</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 border-text"> Skills</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 border-text"> Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 border-text"> Contact</a>
          </li>

        </ul>
        <p className="text-center body-text mb-0"> @2025 Web Crafters</p>
      </footer>
    </>
  );
};

export default Footer;
