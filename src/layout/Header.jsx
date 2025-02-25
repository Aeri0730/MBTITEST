import { FaHamburger, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authsStore";
import { IoHome } from "react-icons/io5";
import { useState } from "react";
const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const toggleMenu = () => setIsToggleOpen(!isToggleOpen);
  return (
    <div className="flex justify-between items-center px-5 bg-gray-200 h-10 text-red-600">
      <Link to="/">
        <IoHome />
      </Link>
      {isAuthenticated ? (
        <>
          {" "}
          <div className="hidden md:block ">
            <div className="flex text-center">
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
          </div>
          <div className="block md:hidden ">
            {" "}
            <div className="cursor-pointer p-4" onClick={toggleMenu}>
              {" "}
              <FaHamburger size={24} />
            </div>
            {/* 배경 오버레이 */}
            {isToggleOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={toggleMenu}
              ></div>
            )}
            {/* 사이드바 */}
            <div
              className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
                isToggleOpen ? "translate-x-0" : "-translate-x-full"
              } transition-all duration-300 ease-in-out z-50`}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">메뉴</h2>
                <FaTimes
                  className="cursor-pointer"
                  size={24}
                  onClick={toggleMenu}
                />
              </div>
              <nav className="flex flex-col p-4 space-y-4">
                <Link
                  to="/profile"
                  className="text-lg font-medium hover:text-blue-600"
                >
                  프로필
                </Link>
                <Link
                  to="/test"
                  className="text-lg font-medium hover:text-blue-600"
                >
                  테스트
                </Link>
                <Link
                  to="/results"
                  className="text-lg font-medium hover:text-blue-600"
                >
                  결과보기
                </Link>
                <p
                  className="text-lg font-medium hover:text-blue-600"
                  onClick={handleLogout}
                >
                  로그아웃
                </p>
              </nav>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:block">
            <div className="flex text-center">
              <Link className="px-1" to="/login">
                로그인
              </Link>
              <Link className="px-1" to="/signup">
                회원가입
              </Link>
            </div>
          </div>
          <div className="block md:hidden ">
            {" "}
            <div className="cursor-pointer p-4" onClick={toggleMenu}>
              {" "}
              <FaHamburger size={24} />
            </div>
            {/* 배경 오버레이 */}
            {isToggleOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={toggleMenu}
              ></div>
            )}
            {/* 사이드바 */}
            <div
              className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
                isToggleOpen ? "translate-x-0" : "-translate-x-full"
              } transition-all duration-300 ease-in-out z-50`}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">메뉴</h2>
                <FaTimes
                  className="cursor-pointer"
                  size={24}
                  onClick={toggleMenu}
                />
              </div>
              <nav className="flex flex-col p-4 space-y-4">
                <Link
                  to="/login"
                  className="text-lg font-medium hover:text-blue-600"
                >
                  로그인
                </Link>
                <Link
                  to="/signup"
                  className="text-lg font-medium hover:text-blue-600"
                >
                  회원가입
                </Link>
                <Link
                  to="/"
                  className="text-lg font-medium hover:text-blue-600"
                >
                  소개
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
