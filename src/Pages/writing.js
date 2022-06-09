import React from "react";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db, auth } from "../shared/firebase";
//여기서 firebase/storage의 ref를 Ref로 props 땡겨온 이유는
//ref이름 그대로 가져오면 warning이 뜸
const Write = ({ storage, Ref, uploadBytes, getDownloadURL, navigate }) => {
  const uploadFB = async (e) => {
    console.log(e.target.files);
    const uploaded_file = await uploadBytes(
      Ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    console.log(uploaded_file);

    //여기서 쓴 ref는 uploaded_file의 ref임
    const file_url = await getDownloadURL(uploaded_file.ref);
    console.log(file_url);
  };

  //게시글 저장
  const magazineFB = () => {
    const upload_magazine = {
      id: auth.currentUser.email,
      title: title_ref.current.value,
      date: Timestamp.fromDate(new Date()),
      magazine: magazine_ref.current.value,

      //   arrayExample: [5, true, "hello"],
      //   nullExample: null,
      //   objectExample: {
      //     a: 5,
      //     b: {
      //       nested: "foo",
      //     },
      //   },
    };
    setDoc(
      doc(db, "data", `one-${upload_magazine.date.seconds}`),
      upload_magazine
    );
    // const upload_magazine = setDoc(doc(db, "magazines", "magazine"), {
    //   title: title_ref.current.value,
    //   magazine: magazine_ref.current.value,
    //   id: auth.currentUser.email,
    // });
    console.log(upload_magazine);
    navigate("/");
  };
  const title_ref = React.useRef(null);
  const magazine_ref = React.useRef(null);

  //checkbox 하나만 체크
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName("test");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false;
      }
    }
  };
  //checkbox 체크 여부
  //   const [checked, ]
  return (
    <div>
      <div>
        <h3>게시글 작성</h3>
      </div>
      <div>
        이미지 : <input type="file" id="image" onChange={uploadFB} />
        <h4>제목</h4>
        <input type="text" ref={title_ref} />
        <p>게시글 내용</p>
        <textarea
          type="text"
          placeholder="여기에 글을 써주세요!!"
          ref={magazine_ref}
          onChange={() => {}}
        ></textarea>
        <br />
        <h4>글 그림 배치</h4>
        <input
          type="checkbox"
          name="test"
          value="1"
          onChange={(e) => checkOnlyOne(e.target)}
        />{" "}
        위아래
        <br />
        <input
          type="checkbox"
          name="test"
          value="2"
          onChange={(e) => checkOnlyOne(e.target)}
        />{" "}
        오왼
        <br />
        <input
          type="checkbox"
          name="test"
          value="3"
          onChange={(e) => checkOnlyOne(e.target)}
        />{" "}
        왼오
        <br />
        <br />
        <button type="submit" value="magazine" onClick={magazineFB}>
          작성
        </button>
      </div>
    </div>
  );
};

export default Write;
