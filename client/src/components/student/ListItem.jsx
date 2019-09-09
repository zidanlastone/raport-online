import React from 'react'
import {
    Card,
    Row,
    Col
} from 'react-bootstrap'
function ListItem(props) {
    return (
        <Card className="my-1">
            <Card.Body style={{ display:'flex'}}>

                    <div style={{width:80, height:80, border: '1px solid #f4f4f4'}}>
                        <img src={'/assets/image/'+props.image}  style={{maxHeight:80, maxWidth:80}} alt={props.image}/>
                    </div>
                    <div className="mx-2">
                    <ul className="list-group list-group-horizontal-md my-3">
                        <li className="list-group-item">Name : {props.name}</li>
                        <li className="list-group-item">NIS : {props.nis}</li>
                        <li className="list-group-item">NISN : {props.nisn}</li>
                    </ul>
                    </div>
            </Card.Body>
        </Card>
    )
}

export default ListItem
