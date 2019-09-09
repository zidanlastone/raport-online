import React, { useState } from 'react'

import {
    Card,
    Col,
    Row,
    Form,
    Button
} from 'react-bootstrap';

import { connect } from 'react-redux';

import {
    addSubject
} from '../../redux/actions/subjectActions';

import {
    getTeachers
} from '../../redux/actions/teacherActions';


function SubjectsAdd(props) {

    const [subjects, setSubjects] = useState(
        {
            subjectName: '',
            teacherId: '',
        }
    );

    const handleChange = (e) => {
        e.preventDefault();
        setSubjects({
            ...subjects,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSubject(subjects);
        setSubjects({
            subjectName: '',
            teacherId: '',
        });
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title>Add Subjects</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Subject Name</Form.Label>
                                <Form.Control name="subjectName" value={subjects.subjectName} onChange={handleChange} placeholder="Subject name" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Gender</Form.Label>
                                <select name="gender" onChange={handleChange} value={subjects.gender} className="form-control">
                                    {['select gender', 'Male', 'Female'].map((g, i) => (
                                        <option key={i} value={g}>{g}</option>
                                    ))}
                                </select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button className="form-control" name="submit" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}


export default connect(null, { SubjectsAdd, getTeacher })(SubjectsAdd)
