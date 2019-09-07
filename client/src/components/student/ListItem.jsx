import React from 'react'
import {
    Card,
    Row,
    Col
} from 'react-bootstrap'
function ListItem(props) {
    return (
        <Card className="my-1">
            <Card.Body>
                <Row>
                    <Col sm>
                        <img src={props.image} alt={props.image}/>
                    </Col>
                    <Col>
                        <h3>{props.name}</h3>
                        <p>{props.nis}</p>
                        <p>{props.nisn}</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ListItem
