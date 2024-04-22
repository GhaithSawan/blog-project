import React, { useEffect, useState } from "react";

const CreatePost = () => {

  const [addpost, setaddpost] = useState()

  useEffect(() => {
    PostRequest(
      {
        title:,
        description,
        caticory
      },"/postRouts/createPost"
    )
  }, [])
  
  return (
    <div className="allpages">
      <div
        className="container d-flex align-items-center justify-content-center flex-column p-3"
        style={{ width: "1000px"}}
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
          >
            <option disabled value=" ">
              Select A Category
            </option>
            <option value="Coffee">Coffee</option>
            <option value="music">music</option>
          </select>
          <textarea placeholder="Add Description" rows="10"  style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0 10px 0",
              padding: "10px",
              border: "1px #778697 solid",
            
            }}></textarea>
          <input type="file" name="file" id="file" style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0 10px 0",
              padding: "10px",
              backgroundColor:"#778697"
            
            }}/>
          <button type="submit" style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0 10px 0",
              padding: "10px",
              border: "1px #778697 solid",
              backgroundColor:"#1d2d3d",
              color:"#fff",
              fontSize:"20px"
            
            }}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
