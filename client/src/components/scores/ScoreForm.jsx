import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const ScoreForm = props => {
  const [score, setScore] = useState({
    score: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setScore({
      ...score,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newScore = {
      studentId: props.student.id,
      competencyId: props.competency,
      score: score.score
    };
    props.addToScore(newScore);
    props.removeStudent(props.student.id);
  };

  return (
    <Card className="my-1">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <h5>{props.student.name}</h5>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      name="score"
                      onChange={handleChange}
                      value={score.score}
                      placeholder="add Score"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  removeStudent: id => dispatch({ type: "DELETE_STUDENT", payload: id })
});
export default connect(
  null,
  mapDispatchToProps
)(ScoreForm);
