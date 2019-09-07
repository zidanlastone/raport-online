import React from 'react';

import {
    Button 
} from 'react-bootstrap';

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome';


function IconButton(props) {
    return (
        <Button onClick={props.onClick} variant={props.variant}>
            <FontAwesomeIcon icon={props.icon} />
        </Button>
    )
}
export default IconButton
