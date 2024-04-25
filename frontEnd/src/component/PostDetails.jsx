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

const PostDetails = () => {
  let { id } = useParams();
  
  const [postData, setPostData] = useState();

  useEffect(() => {
    axios(`${Urlaxios}/postRouts/getPost/${id}`)
      .then((res) => {
        console.log(res);
        setPostData(res.data);
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
              src={"/images/baghdad.jpg"}
              alt=""
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
              src={"/images/user-avatar.png"}
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
            <h6 style={{ color: "blue", margin: "0" }}>ghaith</h6>
            <span style={{ color: "#495e74" }}>3/3/432</span>
          </div>
        </div>
        <div className="postinfo mt-3 " style={{ textAlign: "center" }}>
          <h3 className="title  " style={{ fontSize: "25px" }}>
            ghaithdsad'lksla;kmd;saljdklsajd
          </h3>
          <div className="desc">
            dsjaldkdjisa;dklsajdkjsakjdsk;ad'sajdihjdsad'sakdaksuj
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
          <div className="like" style={{ cursor: "pointer" }}>
            <AiOutlineLike size={"25px"} />
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
      </div>
    </div>
  );
};

export default PostDetails;
