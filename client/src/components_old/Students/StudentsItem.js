import React from 'react';

import {Row,Col, ListGroup} from 'react-bootstrap';

const Loader = (style) => (
    <div className="mx-auto text-center">
        <div style={style} className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const Item = ({ data, style}) => (
        <Row style={style} className="border">
            <Col sm={4} xs={4} md={3} lg={2}>
                <img alt="avatar" style={{width:'80px', height:'80px', padding:'5px'}} src={`/assets/image/${data.image}`} />
            </Col>
            <Col>
                <div className="detail m-2">
                    <h4>{data.name}</h4>
                    <Row>
                        <Col>
                            <p>NIS: {data.nis}</p>
                        </Col>
                        <Col>
                            <p>NISN: {data.nisn}</p>
                        </Col>
                        <Col>
                            <p>Gender: {data.gender}</p>
                        </Col>
                        <Col>
                            <p>Religion: {data.religion}</p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
);

const StudentsItem = ({ data, num, style, loading}) => {
    return loading ? <Loader /> : <Item data={data} num={num} style={style}/>
}

export default StudentsItem;