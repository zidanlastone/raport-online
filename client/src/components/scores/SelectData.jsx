import React, {useState} from 'react'

import {
    Card,
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'

const SelectData = (props) => {

    const [params, setParams] = useState({
        grade:"",
        subject:""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setParams({
            ...params,
            [e.target.name]: e.target.value
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSelectData(params);
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group>
                            <Form.Label>Select Grade</Form.Label>
                            <select
                                name="grade"
                                onChange={handleChange}
                                value={params.grade}
                                className="form-control"
                            >
                                <option>Select Grade</option>
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
                                    onChange={handleChange}
                                    value={params.subject}
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
                    <Button className="form-control" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default SelectData
