import React, { useState } from "react";

import { Card, Row, Col, Form, Button } from "react-bootstrap";

const TeacherAdd = props => {
  const [teacher, setTeacher] = useState({
    nip: "",
    teacherName: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onAddTeacher(teacher);
    setTeacher({
      nip: "",
      teacherName: ""
    });
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add Teacher</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>NIP</Form.Label>
                <Form.Control
                  name="nip"
                  value={teacher.nip}
                  onChange={handleChange}
                  placeholder="NIP"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Teacher Name</Form.Label>
                <Form.Control
                  name="teacherName"
                  value={teacher.teacherName}
                  onChange={handleChange}
                  placeholder="Teacher Name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button className="form-control" name="submit" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TeacherAdd;
