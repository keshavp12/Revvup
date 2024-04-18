import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                <p>At Revv up, your safety is our top priority. We have implemented the following precautions to ensure a secure and enjoyable rental experience:</p>
      <ul>
        <li><strong>Thorough Cleaning:</strong> All vehicles are thoroughly cleaned and sanitized before each rental.</li>
        <li><strong>Maintenance Checks:</strong> Regular maintenance checks are conducted to ensure the vehicles are in optimal condition.</li>
        <li><strong>Insurance Coverage:</strong> All rentals come with comprehensive insurance coverage for added peace of mind.</li>
        <li><strong>Emergency Assistance:</strong> Our customer support team is available 24/7 to provide assistance in case of emergencies.</li>
        <li><strong>Driver Verification:</strong> Drivers must meet certain criteria and provide valid documentation to rent a vehicle.</li>
        <li><strong>COVID-19 Measures:</strong> In light of the ongoing pandemic, we adhere to strict COVID-19 safety protocols recommended by health authorities.</li>
      </ul>
                </p>

                <p className="section__description">
                
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
