import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import accordian from "../../Assets/Projects/accordian.png";
import colorGen from "../../Assets/Projects/color-gen.png";
import eCommerce from "../../Assets/Projects/e-commerce.png";
import exp from "../../Assets/Projects/exp.png";

import grocery from "../../Assets/Projects/grocery.png";
import menu from "../../Assets/Projects/menu.png";

import review from "../../Assets/Projects/review.png";
import textGenerator from "../../Assets/Projects/text-generator.png";
import tours from "../../Assets/Projects/tours.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accordian}
              isBlog={false}
              title="Accordian"
              description="Accordion showing details of different FAQ"
              link="https://ayaz-accordian.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorGen}
              isBlog={false}
              title="Color Generator"
              description="Color generator for every type of color"
              link="https://ayaz-colors-genetator.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCommerce}
              isBlog={false}
              title="Ecommerce website"
              description="Ecommerce app for your ecommerce store with features that you desire"
              link="https://ecommerce-ayaz.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exp}
              isBlog={false}
              title="Experience Tabs"
              description="Showing experience with this amazing little tabs that can be reused across multipe sites ."
              link="https://ayaz-exp-tabs.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="Emotion Predcition from EEG Signals"
              description="Using EEG signals from 'AMIGOS' Dataset to extract features and train a classifier that helps in detection of human emotions from Brain Signals."
              link="https://gist.github.com/soumyajit4419/dc94177bc4954752051798f88fbce1df"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={menu}
              isBlog={false}
              title="Today's Menu"
              description="Showing today's menu with delicious design"
              link="https://ayaz-menu.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={review}
              isBlog={false}
              title="Reviews"
              description="Reviews of your client's. Just it up, Design is enough"
              link="https://ayaz-slider.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textGenerator}
              isBlog={false}
              title="Text generator"
              description="Text Generator with unlimited text lenght capability to generate"
              link="https://ayaz-text-generator.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tours}
              isBlog={false}
              title="Tours of Amazing places"
              description="Amazing places show within single page"
              link="https://ayaz-tours.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
