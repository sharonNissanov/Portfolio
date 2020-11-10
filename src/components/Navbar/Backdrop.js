import React from 'react';

import './Navbar.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;
