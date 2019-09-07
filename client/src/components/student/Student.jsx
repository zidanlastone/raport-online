import React, {lazy, Suspense} from 'react'
import {
    Accordion,
    Button,
    Row,
    Col
} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Loading from '../loader/Loading';

const StudentAdd = lazy(() => import('./StudentAdd')); 
const List = lazy(() => import('./List')); 

const loading = () => <Loading/>;
function Student() {
    return (
        <Suspense fallback={loading()}>
        <div className="container-fluid mt-2">
        <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Button}>
                <FontAwesomeIcon icon="plus"/>
            </Accordion.Toggle>
            <Accordion.Collapse className="mt-2">
                <StudentAdd />
            </Accordion.Collapse>
        </Accordion>
        <Row>
            <Col>
                <List/>
            </Col>
        </Row>
        
        </div>
        </Suspense>
    )
}

export default Student