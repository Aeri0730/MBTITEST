import React from "react";

const AuthButton = ({ type, text }) => {
  return (
    <>
      <button className="border-2 p-2 text-base rounded-2xl" type={type}>
        {text}
      </button>
    </>
  );
};

export default AuthButton;
