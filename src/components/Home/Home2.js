import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an entrepreneur keen to solve problems for startups. I have a
              wider talent for managing and establishing startups/companies to
              tackle complex grooming period. I have achieved to be a developer
              that can think creatively and produce out of the box ideas. 😀
              <br />
              <br />I have touched almost every modern Technology but I am
              fluent in
              <br />
              <i>
                <b className="purple"> Python </b> and{" "}
                <b className="purple"> Javascript. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">Full Stack Development</b>
              </i>
              <br />
              <br />I also work on
              <i>
                <b className="purple"> Javascript Framework</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Javascript Runtime like</b>
              </i>{" "}
              <i>
                <b className="purple"> Node.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AyazAI"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayaztheentrepreneur/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
