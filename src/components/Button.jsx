import classNames from "classnames";
import React from "react";

const Button = ({ primary, text, onClickFunc }) => {
  return (
    <button
      className={classNames(
        "px-4 py-2 m-1 rounded text-white",
        primary  ? "bg-blue-600 " : "bg-red-500  "
      )}
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
};

export default Button;
