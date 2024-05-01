import axios from "axios";
import React, { useState } from "react";
import { Urlaxios, token } from "../constant";
import { useParams } from "react-router-dom";

const CommentForm = ({setKey}) => {
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
          Authorization: token ,
        },
      })
      .then((res) => {
          console.log(res);
          setKey(prevKey => prevKey + 1); // تحديث قيمة key
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
