import React, { useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
const AddGrade = props => {
  const [grade, setGrade] = useState({
    gradeName: "",
    departementId: "",
    homeroomTeacherId: "",
    yearOfEntry: "2019",
    outYear: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setGrade({
      ...grade,
      [e.target.name]: e.target.value
    });
  };

  const handleYearChange = e => {
    e.preventDefault();
    setGrade({
      ...grade,
      yearOfEntry: e.target.value,
      outYear: parseInt(e.target.value) + 1
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newGrade = {
      gradeName: grade.gradeName,
      departementId: grade.departementId,
      homeroomTeacherId: grade.homeroomTeacherId,
      yearOfEntry: grade.yearOfEntry,
      outYear: grade.outYear.toString()
    };
    props.onSaveGrade(newGrade);
    setGrade({
      gradeName: "",
      departementId: "",
      homeroomTeacherId: "",
      yearOfEntry: "",
      outYear: ""
    });
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label>Grade Name</Form.Label>
                <Form.Control
                  name="gradeName"
                  onChange={handleChange}
                  value={grade.gradeName}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Departement</Form.Label>
                <select
                  name="departementId"
                  onChange={handleChange}
                  value={grade.departementId}
                  className="form-control"
                  required
                >
                  <option>Select departement</option>
                  {props.departement.map(departement => (
                    <option key={departement.id} value={departement.id}>
                      {departement.departementName}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Homeroom Teacher</Form.Label>
                <select
                  name="homeroomTeacherId"
                  onChange={handleChange}
                  value={grade.homeroomTacherId}
                  className="form-control"
                  required
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

            <Col md={6}>
              <Form.Group>
                <Form.Label>Year Of entry</Form.Label>
                <Form.Control
                  name="yearOfEntry"
                  type="number"
                  onChange={handleYearChange}
                  value={grade.yearOfEntry}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Out Year</Form.Label>
                <Form.Control
                  name="outYear"
                  type="number"
                  value={grade.outYear}
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

export default AddGrade;
