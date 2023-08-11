import React from 'react';

const Footers = (props) => {
    return (
        <div>
            <h1>Welcome{props.name}</h1>
            <h2>Your number ticket is {props.id}</h2>
        </div>
    );
};

export default Footers;