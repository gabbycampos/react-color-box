import React from 'react';

function Box({ id, color, width, height, handleRemove }) {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div className="Box" style={{ 
                backgroundColor: `${color}`,
                width: `${width}px`,
                height: `${height}px` }}>
            </div>
            <button onClick={remove}>Remove Box</button>
        </div>
    )
}

export default Box;