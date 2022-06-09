import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../shared/firebase";

const Card = () => {
  //   const querySnapshot = getDocs(collection(db, "data"));
  //   console.log(querySnapshot);
  getDocs(collection(db, "data")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const id = doc._document.data.value.mapValue.fields.id.stringValue;
      const magazine =
        doc._document.data.value.mapValue.fields.magazine.stringValue;
      const title = doc._document.data.value.mapValue.fields.title.stringValue;
      const time = doc._document.data.value.mapValue.fields.date.timestampValue;
      console.log(doc);
    });
  });

  return (
    <div>
      <div
        style={{
          height: "300px",
          border: "2px solid gray",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "2px solid gray",
          }}
        >
          <div>id</div>
          <div>Date</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "2px solid gray",
            padding: "10px",
          }}
        >
          Title
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px",
            borderBottom: "2px solid gray",
          }}
        >
          게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용게시글
          내용게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용게시글
          내용게시글 내용게시글 내용게시글 내용게시글 내용게시글 내용
        </div>
        <div>Image</div>
      </div>
    </div>
  );
};

export default Card;
