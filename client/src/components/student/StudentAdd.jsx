import React, { useState } from "react";

import { Card, Col, Row, Form, Button } from "react-bootstrap";

function StudentAdd(props) {
  const [student, setStudent] = useState({
    name: "",
    address: "",
    nis: "",
    nisn: "",
    birthDate: "",
    birthLocation: "",
    gender: "",
    religion: "",
    dateOfEntry: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onAddStudent(student);
    setStudent({
      name: "",
      address: "",
      nis: "",
      nisn: "",
      birthDate: "",
      birthLocation: "",
      gender: "",
      religion: "",
      dateOfEntry: ""
    });
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>Add Student</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>NIS</Form.Label>
                <Form.Control
                  name="nis"
                  value={student.nis}
                  onChange={handleChange}
                  placeholder="NIS"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>NISN</Form.Label>
                <Form.Control
                  name="nisn"
                  value={student.nisn}
                  onChange={handleChange}
                  placeholder="NISN"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Fullame</Form.Label>
                <Form.Control
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                  placeholder="Fullame"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Birth Location</Form.Label>
                <Form.Control
                  name="birthLocation"
                  value={student.birthLocation}
                  onChange={handleChange}
                  placeholder="Birth Location"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="date"
                  name="birthDate"
                  value={student.birthDate}
                  onChange={handleChange}
                  placeholder="Birth Date"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <select
                  name="gender"
                  onChange={handleChange}
                  value={student.gender}
                  className="form-control"
                >
                  {["select gender", "Male", "Female"].map((g, i) => (
                    <option key={i} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Religion</Form.Label>
                <select
                  name="religion"
                  onChange={handleChange}
                  value={student.religion}
                  className="form-control"
                >
                  {[
                    "select religion",
                    "Islam",
                    "Kristen",
                    "Katholik",
                    "Hindu",
                    "Budha",
                    "Konghucu"
                  ].map((g, i) => (
                    <option key={i} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Date Of entry</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfEntry"
                  value={student.dateOfEntry}
                  onChange={handleChange}
                  placeholder="Birth Date"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={student.address}
                  onChange={handleChange}
                  placeholder="Address"
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
}

export default StudentAdd;
