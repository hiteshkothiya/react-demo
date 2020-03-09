import React from 'react';
import './_scss/_index.scss';

const backDrop = props => (
    <div className="Backdrop" onClick={props.click} />
);

export default backDrop;