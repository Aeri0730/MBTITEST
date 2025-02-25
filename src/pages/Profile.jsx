import React, { useEffect, useState } from "react";
import useAuthStore from "../zustand/authsStore";
import { useNavigate } from "react-router-dom";
import { getUserProfile, updateProfile } from "../api/auth";
import Input from "../components/Input";
import AuthButton from "../components/AuthButton";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [newNickname, setNewNickname] = useState("");
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();
  useEffect(() => {
    // localStorage에서 데이터 가져오기
    const storedData = JSON.parse(localStorage.getItem("now-user-storage"));

    if (storedData) {
      try {
        // token 값 추출
        const token = storedData?.state?.token;

        console.log("Token:", token);
      } catch (error) {
        console.error("JSON 파싱 오류:", error);
      }
    } else {
      console.log("저장된 데이터 없음");
    }

    if (!isAuthenticated) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      const fetchUserInfo = async () => {
        try {
          const data = await getUserProfile();
          setUserInfo(data);
        } catch (error) {
          console.error("Failed to fetch user info:", error);
        }
      };
      fetchUserInfo();
    }
  }, [isAuthenticated, navigate]);

  const handleNicknameChange = async () => {
    if (!newNickname.trim()) {
      alert("닉네임을 입력하세요.");
      return;
    }
    try {
      const data = await updateProfile({ nickname: newNickname.trim() });

      if (data.success) {
        setUserInfo((prev) => ({
          ...prev,
          nickname: data.nickname,
        }));
        alert("닉네임이 변경되었습니다.");
        setNewNickname("");
      } else {
        alert("닉네임 변경에 실패했습니다!");
      }
    } catch (error) {
      console.error("Failed to updata nickname:", error);
      alert("닉네임 변경에 실패했습니다!!");
    }
  };
  if (!userInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col items-center gap-4 my-4 ">
      <div className="flex flex-col p-10 gap-4 my-4 bg-sky-50">
        <h1 className="font-bold text-3xl">프로필 수정</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNicknameChange();
          }}
        >
          <label htmlFor={newNickname}>닉네임</label>
          <Input
            type="text"
            placeholder={userInfo.nickname}
            value={newNickname}
            onChangeFunc={(e) => setNewNickname(e.target.value)}
          />
          <AuthButton type="submit" text="수정하기" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
