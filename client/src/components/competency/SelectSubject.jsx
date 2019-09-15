import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
const SelectSubject = props => {
  const [subject, setSubject] = useState(1);

  const handleChange = e => {
    e.preventDefault();
    setSubject(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSelectSubject(subject);
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Label>
            <h4>Select Subject</h4>
          </Form.Label>
          <Row>
            <Col md={10}>
              <Form.Group>
                <select
                  name="subject"
                  onChange={handleChange}
                  value={subject}
                  className="form-control"
                >
                  {props.subjects.map(subjects => (
                    <option key={subjects.id} value={subjects.id}>
                      {subjects.subjectName}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group>
                <Button className="form-control" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SelectSubject;
