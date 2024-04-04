import React from 'react';
import './Core.css'; // Import CSS file for styling

const LeftComponent = () => {
    return (
        <div className="left">Left Component</div>
    );
};

const CenterComponent = () => {
    return (
        <div className="center">Center Component</div>
    );
};

const RightComponent = () => {
    return (
        <div className="right">Right Component</div>
    );
};

const Core = () => {
    return (
        <div className="core">
            <LeftComponent />
            <CenterComponent />
            <RightComponent />
        </div>
    );
};

export default Core;
