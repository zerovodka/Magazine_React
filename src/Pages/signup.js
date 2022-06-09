import React from "react";
import { auth, db } from "../shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const SignUp = (props) => {
  const signupFB = async () => {
    const user = await createUserWithEmailAndPassword(
      auth,
      id_ref.current.value,
      pw_ref.current.value
    );
    console.log(user);

    const user_doc = await addDoc(collection(db, "users"), {
      user_id: user.user.email,
      name: name_ref.current.value,
    });
    console.log(user_doc.id);
  };

  const id_ref = React.useRef(null);
  const name_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  return (
    <div>
      <div>
        <div>
          <h3>회원 가입</h3>
        </div>
        아이디(email) : <input ref={id_ref} /> <br />
        이름 : <input ref={name_ref} />
        <br />
        비밀번호 : <input ref={pw_ref} type="password" />
        <br />
        <button onClick={signupFB}>회원 가입</button>
      </div>
    </div>
  );
};

export default SignUp;
