import React from "react";

const Button = ({ text, hanldeClick }) => {
  return <button onClick={hanldeClick}>{text}</button>;
};

export default Button;
