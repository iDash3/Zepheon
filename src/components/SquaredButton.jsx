import React from "react";

const SquaredButton = ({ color, onClick }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "90px",
        height: "90px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <span></span>
    </div>
  );
};

export default SquaredButton;
