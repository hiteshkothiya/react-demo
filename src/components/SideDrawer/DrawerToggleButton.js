import React from 'react';
import './_scss/_index.scss';

const drawerToggleButton = props => (
    <button className="Toggle-button" onClick={props.click}>
        <div className="Toggle-button__line" />
        <div className="Toggle-button__line" />
        <div className="Toggle-button__line" />
    </button>
);

export default drawerToggleButton;