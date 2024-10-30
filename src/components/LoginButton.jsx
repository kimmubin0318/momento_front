import React from "react";

const LoginButton = ({ type, name, logo, image, click }) => {
  return (
    <button className={type} onClick={click}>
      <img className={logo} src={image} alt="Logo" />
      {name}
    </button>
  );
};

export default LoginButton;
