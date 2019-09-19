import React, { useState } from "react";

import { Card, Form, Button, Row, Col } from "react-bootstrap";

const SelectData = props => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Select Grade</Form.Label>
                <select
                  name="gradeId"
                  onChange={props.handleChange}
                  value={props.params.grade}
                  className="form-control"
                >
                  <option value="">Select Grade</option>
                  {props.grades.map(grd => (
                    <option key={grd.id} value={grd.id}>
                      {grd.gradeName}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Select Subject</Form.Label>
                <select
                  name="subject"
                  onChange={props.handleChange}
                  value={props.params.subject}
                  className="form-control"
                >
                  <option>Select Subject</option>
                  {props.subjects.map(subject => (
                    <option key={subject.id} value={subject.id}>
                      {subject.subjectName}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SelectData;
