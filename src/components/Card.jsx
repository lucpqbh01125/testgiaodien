import React from "react";

const Card = ({
  title = "",
  children,
  style = {},
  className = "",
  onClick = null,
}) => {
  return (
    <div
      className={`card ${className}`}
      style={style}
      onClick={onClick}
    >
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;