import React, { useEffect, useState } from "react";
import { PostRequest } from "../../requests/postrequest";

const CreatePost = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [cat, setcat] = useState("");
  const [file, setfile] = useState(null);

  function posthandler(e) {
    // todo react-toastify
    e.preventDefault();
    //todo react toastify
    let form_data = new FormData()
    form_data.append("title",title)
    form_data.append("description",desc)
    form_data.append("caticory",cat)
    form_data.append("img",file)
  }
  return (
    <div className="allpages">
      <div
        className="container d-flex align-items-center justify-content-center flex-column p-3"
        style={{ width: "1000px" }}
      >
        <h2
          style={{ width: "max-content", fontWeight: "500" }}
          className=" border-bottom border-2 border-dark "
        >
          Create New Post
        </h2>

        <form className="container d-flex align-items-center justify-content-center flex-column ">
          <input
            type="text"
            placeholder="Add title to your post"
            style={{
              borderRadius: "5px",
              width: "70%",
              margin: "40px 0 10px 0",
              padding: "10px",
              border: "1px #778697 solid",
            }}
            value={title}
            onChange={(e) => {
              settitle(e.target?.value);
            }}
          />
          <select
            className="select_father"
            style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0 10px 0",
              padding: "10px",
              border: "1px #778697 solid",
            }}
            value={cat}
            onChange={(e) => {
              setcat(e.target?.value);
            }}
          >
            <option disabled value="">
              Select A Category
            </option>
            <option value="Coffee">Coffee</option>
            <option value="music">music</option>
          </select>
          <textarea
            placeholder="Add Description"
            rows="10"
            style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0 10px 0",
              padding: "10px",
              border: "1px #778697 solid",
            }}
            value={desc}
            onChange={(e) => {
              setdesc(e.target?.value);
            }}
          ></textarea>
          <input
            type="file"
            name="file"
            id="file"
            style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0 10px 0",
              padding: "10px",
              backgroundColor: "#778697",
            }}
            onChange={(e) => {
              setfile(e.target?.files[0]);
            }}
          />
          <button
            type="submit"
            style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0 10px 0",
              padding: "10px",
              border: "1px #778697 solid",
              backgroundColor: "#1d2d3d",
              color: "#fff",
              fontSize: "20px",
            }}
            onClick={(e) => posthandler(e)}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
