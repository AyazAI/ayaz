import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Ayaz </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br /> I have Bachelor of Science in Computer Science
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Cricket
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Exploring Technologies
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Hiking
            </li>

            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Family Gathering
            </li>

            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Public Speaking
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Always be patience and keep learning!"{" "}
          </p>
          <footer className="blockquote-footer">Ayaz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
