import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
const AddDepatement = props => {
  const [departement, setDepartement] = useState({
    departementName: ""
  });

  const handleChange = e => {
    setDepartement({
      ...departement,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSaveDepartement(departement);
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Departement Name</Form.Label>
            <Form.Control
              name="departementName"
              value={departement.departementName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button className="form-control" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddDepatement;
