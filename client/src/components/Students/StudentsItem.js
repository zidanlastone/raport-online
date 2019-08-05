import React from 'react';

import {Row,Col, Card} from 'react-bootstrap';

const Loader = (style) => (
    <div className="mx-auto text-center">
        <div style={style} className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const Item = ({ data, style}) => (
    <Card style={style} className="">
        <Card.Body className="my-2">
            <Row>
                <Col sm={4} xs={4} md={3} lg={2}>
                        <img alt="avatar" style={{width:'100%', height:'100%'}} src={data.image} />
                </Col>
                <Col>
                    <div className="details">
                        <div className="info">
                            <p className="number">{data.name}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

const StudentsItem = ({ data, num, style, loading}) => {
    return loading ? <Loader /> : <Item data={data} num={num} style={style}/>
}

export default StudentsItem;