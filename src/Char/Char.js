import React from 'react';

const char = (props) => {
    return (
        <div className="Char" onClick={props.click}>
            {props.char}
        </div>
    )
}

export default char;