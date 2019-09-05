import React from 'react'
import {
    Row,
    Col,
    Card,
    Accordion,
    Button
} from 'react-bootstrap';

function Student() {
    return (
        <div>
        <Accordion>
            <Accordion.Toggle as={Button}>
                Tambah Siswa
            </Accordion.Toggle>
            <Row>
                <Col>
                    <Accordion.Collapse>

                    </Accordion.Collapse>
                </Col>
            </Row>
        </Accordion>
        <Card>
            <Card.Body>

            </Card.Body>
        </Card>
        </div>
    )
}

export default Student
