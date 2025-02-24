import React from "react";
import styled from "styled-components";
const Input = ({ value, type, placeholder, onChangeFunc }) => {
  return (
    <div>
      <StInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeFunc}
      />
    </div>
  );
};
const StInput = styled.input`
  // styles폴더에 styledComponents.js로 관리해야할것같음
  width: ${(props) => props.width || "200px"};
  height: 40px;
  border-radius: 15px;
  border: 1px solid #757576;
  font-size: 12px;
  padding: 0 20px;
`;
export default Input;
