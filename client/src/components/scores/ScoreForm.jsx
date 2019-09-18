import React, {useState} from 'react'

import {
    Form,
    Button,
    Card,
    Row,
    Col
} from 'react-bootstrap'

const ScoreForm = (props) => {
    const [score, setScore] = useState({
        score:'',
    });

    const handleChange =(e) =>{
        e.preventDefault();
        setScore({
            ...score,
            [e.target.name] : e.target.name
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newScore = {
            studentId: props.student.id,
            score: score.score
        }
        props.addToScore(newScore);
    }
    return (
        <Card className="my-1"> 
            <Card.Body>
                    <Form onSubmit={handleSubmit}>
                <Row>
                        <Col>
                            {props.student.name}
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control name="score" onChange={handleChange} value={score.score} placeholder="add Score" />
                            </Form.Group>
                        </Col>
                        <Col>
                        <Button type="submit">Submit</Button>
                        </Col>
                </Row>
                    </Form>
            </Card.Body>
        </Card>
    )
}

export default ScoreForm
