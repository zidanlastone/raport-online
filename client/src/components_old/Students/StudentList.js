import React from 'react';

import {
    Card
} from 'react-bootstrap';

import {
    FixedSizeList
} from 'react-window';

import StudentsItem from './StudentsItem';

const StudentList = ({items}) => {

    const Row = ({index,style}) =>(
        <StudentsItem data={items[index]} num={index} style={style} loading={index === items.length} />
    );
    const itemCount = items.length;
    return(
        <Card>
            <Card.Body>
                    <FixedSizeList
                    height={530}
                    width={'100%'}
                    itemSize={80}
                    itemCount={itemCount}
                    className="list-container"
                    >
                    {Row}
                </FixedSizeList>
            </Card.Body>
        </Card>
    );
}

export default StudentList;
