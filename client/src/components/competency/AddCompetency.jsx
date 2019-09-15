import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
const AddCompetency = props => {
  const [competency, setCompetency] = useState({
    competencyName: "",
    semester: "",
    kkm: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setCompetency({
      ...competency,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newCompetency = {
      subjectId: props.subjectId,
      competencyName: competency.competencyName,
      semester: competency.semester,
      kkm: competency.kkm
    };
    props.onAddCompetency(newCompetency);
    setCompetency({
      competencyName: "",
      semester: "",
      kkm: ""
    });
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label>Competency Name</Form.Label>
                <Form.Control
                  name="competencyName"
                  value={competency.competencyName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  name="semester"
                  value={competency.semester}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>KKM</Form.Label>
                <Form.Control
                  name="kkm"
                  value={competency.kkm}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button className="form-control" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddCompetency;
