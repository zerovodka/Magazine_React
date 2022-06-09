import React from "react";
import { auth, db } from "../shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { where, query, collection, getDocs } from "firebase/firestore";

const Login = ({ is_login, navigate }) => {
  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  const loginFB = async () => {
    console.log(id_ref.current.value, pw_ref.current.value);
    const user = await signInWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    console.log(user);

    //정보 갖고 오는 법
    const user_docs = await getDocs(
      query(collection(db, "users"), where("user_id", "==", user.user.email))
    );

    user_docs.forEach((u) => {
      console.log(u.data());
    });
    //****

    // is_login ? (window.location.href = "/") : alert("다시 로그인 해주세요");
    navigate("/");
  };
  return (
    <div>
      <div>
        <h3>로그인</h3>
      </div>
      아이디(이메일): <input ref={id_ref} />
      <br />
      비밀번호: <input ref={pw_ref} type="password" />
      <br />
      <button onClick={loginFB}>로그인</button>
    </div>
  );
};

export default Login;
