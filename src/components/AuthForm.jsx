import React, { useRef, useState } from "react";
import Input from "../components/Input";
import AuthButton from "./AuthButton";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode, onSubmitFunc }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");
  const logRef = useRef("");
  if (mode === "login") {
    logRef.current = "로그인";
  } else {
    logRef.current = "회원가입";
  }

  return (
    <div className="flex flex-col items-center text-center p-10 gap-4 my-4 bg-sky-50 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (logRef.current === "login") {
            const formData = {
              id,
              password: pw,
            };
            console.log(`id= ${id}, pw=${pw}`);
            onSubmitFunc(formData);
          } else {
            const formData = {
              id,
              password: pw,
              nickname: nickname,
            };
            console.log(`id= ${id}, pw=${pw}`);
            onSubmitFunc(formData);
          }
        }}
      >
        <Input
          name="id"
          value={id}
          type="text"
          placeholder="아이디"
          onChangeFunc={(e) => setId(e.target.value)}
        />
        <Input
          name="password"
          value={pw}
          type="text"
          placeholder="비밀번호"
          onChangeFunc={(e) => setPw(e.target.value)}
        />
        {logRef.current === "로그인" || (
          <Input
            name="nickname"
            value={nickname}
            type="text"
            placeholder="닉네임"
            onChangeFunc={(e) => setNickname(e.target.value)}
          />
        )}
        <AuthButton type="submit" text={logRef.current}></AuthButton>
      </form>{" "}
    </div>
  );
};

export default AuthForm;
