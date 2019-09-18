import React, { useState } from "react";

import { Card, Col, Row, Form, Button } from "react-bootstrap";

function SubjectsAdd(props) {
  const [subjects, setSubjects] = useState({
    subjectName: "",
    teacherId: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setSubjects({
      ...subjects,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    const newSubject = {
      subjectName: subjects.subjectName,
      teacherId: subjects.teacherId
    };

    props.onAddSubject(newSubject);
    setSubjects({
      subjectName: "",
      teacherId: ""
    });
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add Subjects</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Subject Name</Form.Label>
                <Form.Control
                  name="subjectName"
                  value={subjects.subjectName}
                  onChange={handleChange}
                  placeholder="Subject name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Subject Teacher</Form.Label>

                <select
                  name="teacherId"
                  onChange={handleChange}
                  value={subjects.teacherId}
                  className="form-control"
                >
                  <option>Select Teacher</option>
                  {props.teachers.map(teacher => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.teacherName}
                    </option>
                  ))}
                </select>
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
}

export default SubjectsAdd;
