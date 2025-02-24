import React, { useEffect, useState } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile, register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = async (formData) => {
    try {
      const data = await register(formData);
      if (data.success) {
        navigate("/login");
      } else {
        alert("회원가입 실패!");
      }
    } catch (error) {
      console.error("Signup error: ", error);
      alert("회원가입 실패!!");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-4 ">
        <h1 className="font-bold text-3xl">회원가입</h1>
        <AuthForm mode="signup" onSubmitFunc={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요? <Link to="/login">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
