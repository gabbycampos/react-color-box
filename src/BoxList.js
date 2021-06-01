import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const INITIAL_STATE = [
        { id: uuid(), color: 'blue', width: '100px', height: '50px'}
    ]

    const [box, setBox] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBox(box => [...box, { ...newBox, id: uuid() }])
    };

    const remove = id => {
        setBox(box => box.filter(box => box.id !== id));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {box.map(({ id, color, width, height }) => <Box id={id} color={color} width={width} height={height} key={id} handleRemove={remove}/> )}
        </div>
    )
}

export default BoxList;