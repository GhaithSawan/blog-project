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
      .post(`${Urlaxios}/CommentRouts/CreatComment`, {
        headers: {
          authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjlmN2VkZGM3M2YxMWJhMWVkNWVhOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTE3MDIzNTF9.UMM7VEE2TN2UbGzxvAtRmKOfWWRkbOvtQmz11yFSgmc",
        },
      })
      .then((res) => {
        console.log(res);
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
