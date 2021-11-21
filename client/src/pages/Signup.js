import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Signup() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = () => {
    const { email, password, nickname } = userinfo;
    if (!email || !password || !nickname) {
      return setErrorMessage("모든 항목은 필수입니다");
    }
    axios.post(
      "https://localhost:8080/auth/signup",
      { email, password, nickname },
      { headers: { "Content-Type": "application/json" } }
    );
    history.push("/signin");
  };
  return (
    <div>
      <center>
        <h1>Sign Up</h1>
        <div>모든 항목은 필수입니다</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type="email" onChange={handleInputValue("email")} />
          </div>
          <div>
            <span>비밀번호</span>
            <input type="password" onChange={handleInputValue("password")} />
          </div>
          <div>
            <span>닉네임</span>
            <input type="text" onChange={handleInputValue("nickname")} />
          </div>
          <div>
            <Link to="/login">이미 아이디가 있으신가요?</Link>
          </div>
          <button
            className="btn btn-signup"
            type="submit"
            onClick={handleSignup}
          >
            회원가입
          </button>
          <div className="alert-box">{errorMessage}</div>
        </form>
      </center>
    </div>
  );
}
