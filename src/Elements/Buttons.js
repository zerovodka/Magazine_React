import { signOut } from "firebase/auth";
import React from "react";
//Firebase
import { auth } from "../shared/firebase";

const Button = ({ navigate, is_login }) => {
  return (
    <div className="login-signup">
      {is_login ? (
        <>
          <button
            style={{
              margin: "1rem",
              border: "none",
              width: "8rem",
              height: "2rem",
              cursor: "pointer",
              background: "#ffebee",
              borderRadius: "10px",
            }}
            onClick={() => {
              signOut(auth);
              navigate("/login");
            }}
          >
            로그아웃
          </button>
          <button
            style={{
              margin: "1rem",
              border: "none",
              width: "8rem",
              height: "2rem",
              cursor: "pointer",
              background: "#ffebee",
              borderRadius: "10px",
            }}
            onClick={() => {
              navigate("/mypage");
            }}
          >
            내 정보
          </button>
          <button
            style={{
              margin: "1rem",
              border: "none",
              width: "8rem",
              height: "2rem",
              cursor: "pointer",
              background: "#ffebee",
              borderRadius: "10px",
            }}
            onClick={() => {
              navigate("/writing");
            }}
          >
            게시글 작성
          </button>
        </>
      ) : (
        <>
          <button
            style={{
              margin: "1rem",
              border: "none",
              width: "8rem",
              height: "2rem",
              cursor: "pointer",
              background: "#ffebee",
              borderRadius: "10px",
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </button>
          <button
            style={{
              margin: "1rem",
              border: "none",
              width: "8rem",
              height: "2rem",
              cursor: "pointer",
              background: "#ffebee",
              borderRadius: "10px",
            }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원 가입
          </button>
        </>
      )}
    </div>
  );
};

export default Button;
