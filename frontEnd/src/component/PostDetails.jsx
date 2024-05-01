import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MdOutlineDeleteOutline,
  MdOutlineEdit,
  MdPhotoSizeSelectLarge,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Urlaxios } from "../constant";
import axios from "axios"
import CommentForm from "./commentForm";
import Commentlist from "./commentlist ";

const PostDetails = () => {
  const [key, setKey] = useState(0);

  const reloadPostData = () => {
    setReloadData(prevState => !prevState);
  };
  

  let { id } = useParams();

  const [postData, setPostData] = useState();
  const [date, setdate] = useState();

  //////////////////////////date

  useEffect(() => {
    let date = new Date(postData?.createdAt)
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `;
    setdate(formattedDate)
  }, [postData])


  useEffect(() => {
    window.scrollTo(0, 0)
    axios(`${Urlaxios}/postRouts/getPost/${id}`)
      .then((res) => {
        setPostData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);





  return (
    <div className="allpages p-3 ">
      <div
        className="container col-7 p-3 "
        style={{ boxShadow: "0 0 1px black" }}
      >
        <div className="fatherofimg  m-auto">
          <div
            style={{
              height: "300px",
              marginBottom: "10px",
              borderRadius: "20px  20px 0 0",
              overflow: "hidden",
            }}
          >
            <img
              className="imagePostHover"
              src={postData?.image?.url}

              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <label
            htmlFor="inputimg"
            style={{ color: "var(--blue-color)", fontSize: "15px" }}
          >
            <MdPhotoSizeSelectLarge style={{ marginRight: "8px" }} />
            Select image
          </label>
          <input
            type="file"
            placeholder="sa"
            id="inputimg"
            style={{ display: "none" }}
          />
          <button
            style={{
              border: "none",
              backgroundColor: "var(--secondary-color)",
              marginLeft: "5px",
              borderRadius: "5px",
              padding: "3px 6px",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            Upload
          </button>
        </div>
        <div
          className="profile d-flex gap-2 "
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              height: "70px",
              width: "70px",
            }}
          >
            <img
              src={postData?.user?.profilePhoto?.url}
              style={{
                backgroundColor: "red",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
          <div className="info">
            <h6 style={{ color: "blue", margin: "0" }}>{postData?.user?.username}</h6>
            <span style={{ color: "#495e74" }}>{date}</span>
          </div>
        </div>
        <div className="postinfo mt-3 " style={{ textAlign: "center" }}>
          <h3 className="title  " style={{ fontSize: "25px" }}>
            {postData?.title}
          </h3>
          <div className="desc">
            {postData?.description}
          </div>
        </div>
        <div
          className="icons mt-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="like" style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
            <AiOutlineLike size={"25px"} />
            <span>{postData?.likes.length}</span>
          </div>
          <div
            className="edit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <div style={{ cursor: "pointer" }}>
              <MdOutlineEdit size={"25px"} />
            </div>
            <div style={{ cursor: "pointer" }}>
              <MdOutlineDeleteOutline size={"25px"} />
            </div>
          </div>
        </div>


        <CommentForm  setKey={setKey}/>
        <Commentlist data={postData} />





      </div>
    </div>
  );
};

export default PostDetails;
