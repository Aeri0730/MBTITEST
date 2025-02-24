import classNames from "classnames";
import React from "react";

const Button = ({ primary, text, onClickFunc }) => {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded text-white",
        primary ? "bg-blue-500 w-10" : "bg-red-300 w-6 "
      )}
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
};

export default Button;
