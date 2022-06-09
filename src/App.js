import React from "react";
//Router
import { Routes, Route, useNavigate } from "react-router-dom";
//Pages
import Login from "./Pages/login";
import SignUp from "./Pages/signup";
import Main from "./Pages/main";
import Write from "./Pages/writing";
//Elements, Components
import Header from "./Components/Header";

//Firebase
import { auth, storage } from "./shared/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Mypage from "./Pages/mypage";
//Image upload
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function App() {
  const navigate = useNavigate();
  //로그인 여부 확인
  const [is_login, setIsLogin] = React.useState(false);
  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  console.log(auth.currentUser);
  return (
    <div className="App" style={{ maxWidth: "90vw", margin: "0 auto" }}>
      <div>
        <Header navigate={navigate} is_login={is_login} />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login navigate={navigate} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route
          path="/writing"
          element={
            <Write
              storage={storage}
              Ref={ref}
              uploadBytes={uploadBytes}
              getDownloadURL={getDownloadURL}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
