import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authsStore";

const Login = () => {
  const log_in = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const handleLogin = async (userData) => {
    try {
      const data = await login(userData);
      if (data.success) {
        navigate("/");
        console.log(data);
        console.log(data.userId, data.nickname);
        log_in(data.accessToken, data.userId, data.nickname);
      } else {
        alert("Login failed!!!");
      }
    } catch (error) {
      console.log("Login error:", error);
      alert("Login failed");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-4 ">
        <h1 className="font-bold text-3xl">로그인</h1>
        <AuthForm mode="login" onSubmitFunc={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
