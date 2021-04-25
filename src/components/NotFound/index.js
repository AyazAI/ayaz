import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
  return (
    <Container fluid className="about-section">
      <Row>
        <Col>
          <div
            style={{
              height: "100vh",
            }}
          >
            <h1>PAGE NOT FOUND</h1>
          </div>
          {/* <h1>Not Found</h1> */}
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
