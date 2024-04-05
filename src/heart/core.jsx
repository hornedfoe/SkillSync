import React from "react";
import "./Core.css"; // Import CSS file for styling

const LeftComponent = () => {
  return <div className="left">
    <div className="default"></div>
    <div className="channel"></div>
    <div className="profile"></div>
  </div>;
};

const CenterComponent = () => {
  return <div className="center">
    <div className="search"></div>
    <div className="content"></div>
  </div>;
};

const RightComponent = () => {
  return <div className="right">
    <div className="chat"></div>
    <div className="chats"></div>
  </div>;
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
