import axios from "axios";
import React, { useState } from "react";
import { Urlaxios } from "../constant";
import { useParams } from "react-router-dom";

const CommentForm = () => {
  let { id } = useParams();
  const [comment, setcomment] = useState("");

  function createCommentFun(e) {
    e.preventDefault();
    axios
      .post(`${Urlaxios}/CommentRouts/CreatComment`,{
        text:comment,
        postId : id,
      }, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzFmNzE4MzQ5MTgyYzIxMzNiMjQ4NyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTQ1NTA1NTd9.f65kkJjxPvIZupuCvYDpvavIH5-ioDGNVBZ0epo0n_s",
        },
      })
      .then((res) => {
          console.log(res);
          reloadPostData(); // استدعاء دالة إعادة تحميل البيانات
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <form
      style={{
        marginTop: "15px",
        display: "flex",
        gap: "5px",
        flexWrap: "wrap",
      }}
    >
      <input
        value={comment}
        onChange={(e) => {
          setcomment(e?.target?.value);
        }}
        type="text"
        style={{
          flex: "1",
          padding: "4px",
          border: "none",
          borderRadius: "8px ",
        }}
        placeholder="write Comment"
      />
      <button
        onClick={(e) => createCommentFun(e)}
        type="submit"
        style={{
          padding: "3px 5px",
          borderRadius: "8px ",
          border: "none",
          backgroundColor: "#4c6177",
          color: "#fff",
        }}
      >
        Create Comment
      </button>
    </form>
  );
};

export default CommentForm;
