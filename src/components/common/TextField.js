import React from "react";

const TextField = ({ style, text, ...props }) => {
  return (
    <span {...props} style={{ fontFamily: "Poppins", ...style }}>
      {text}
    </span>
  );
};

export default TextField;
