import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authsStore";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center px-5 bg-gray-200 h-10 text-red-600">
      <Link to="/">홈</Link>
      {isAuthenticated ? (
        <div className="flex justify-between">
          <Link className="px-1" to="/profile">
            프로필
          </Link>
          <Link className=" px-1" to="/test">
            테스트
          </Link>
          <Link className="px-1" to="/results">
            결과보기
          </Link>
          <p className="cursor-pointer px-1" onClick={handleLogout}>
            로그아웃
          </p>
        </div>
      ) : (
        <Link className="cursor-pointer" to="/login">
          로그인
        </Link>
      )}
    </div>
  );
};

export default Header;
