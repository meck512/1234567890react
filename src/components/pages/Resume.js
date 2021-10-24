import React from "react";
import { Card, Col, Button, Row } from 'react-bootstrap';

const Resume = () => {
  return (
    <div className="ResumeTab">
      <Row className="mx-auto my-3" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Col>
          <Card className="my-2 bg-dark text-white">
            <Card.Body>
              <Card.Text >
                <h2>Frond-End</h2>
                <div className="my-3">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Reaponsive UI</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="my-2 bg-dark text-white">
            <Card.Body>
              <Card.Text >
                <h2>Back-End</h2>
                <div className="my-3">
                  <ul>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>MongoDB/Mongoose</li>
                    <li>Progressive Web Applications</li>
                    <li>User Authentication</li>
                    <li>GraphQL</li>
                    <li>MySQL/Sequelize</li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button href="https://docs.google.com/document/d/e/2PACX-1vTbZ17wGW9Azl5uJlZ7ZQzrIRapkOTI_F8BLOdePAA6dbhrzx-boNArZuZsE4UJmZTLMvHV2Kd5yzan/pub" variant="dark" className="m-2">Download Resume</Button>
    </div>
  );
};
export default Resume;