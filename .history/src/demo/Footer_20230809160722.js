import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <h1>Welcome{props.name}</h1>
            <h2>Your number </h2>
        </div>
    );
};

export default Footer;