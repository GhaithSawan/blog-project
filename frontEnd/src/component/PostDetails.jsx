import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MdOutlineDeleteOutline,
  MdOutlineEdit,
  MdPhotoSizeSelectLarge,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { Urlaxios } from "../constant";
import axios from "axios";
import CommentForm from "./commentForm";
import Commentlist from "./commentlist ";
import Button from "react-bootstrap/esm/Button";
import { authContext } from "../context/authContextAPI";
import { toast } from "react-toastify";
import PostModel from "./postModel";

const PostDetails = () => {
  let navi = useNavigate()
  let {user} = useContext(authContext)
  const [likestoggel, setlikestoggel] = useState(false)
  const [imageuserselect, setimageuserselect] = useState()
  const [reloadData, setReloadData] = useState(false);
  let { id } = useParams();
  const [postData, setPostData] = useState();
  const [date, setdate] = useState();
  const [reloud, setreloud] = useState(false);
 
  const [show, setShow] = useState(false);

  const handleShow = (comData) => {
    setShow(true);
  };

  function deletePostBtn(id) {
    let anwer = confirm("Are you sure");
    if (anwer) {
      axios.delete(`${Urlaxios}/postRouts/deletePost/${id}`, {
        headers: {
          Authorization: "Bearer " + user.token
        }
      }).then((res) => {
        setreloud(!reloud)
        toast.success("Post is Deleted");
        navi("/")
      }).catch((e) => {
        toast.error(e.response.data.message)
      })
    }
  }

  useEffect(() => {

    let date = new Date(postData?.createdAt);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1
      }/${date.getFullYear()} `;
    setdate(formattedDate);
  }, [postData]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {

    axios(`${Urlaxios}/postRouts/getPost/${id}`)
      .then((res) => {
        console.log(res.data);
        setPostData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reloud]);
  useEffect(() => {
    axios(`${Urlaxios}/postRouts/getPost/${id}`)
      .then((res) => {
        setPostData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reloadData]);

  function likestoggelfun() {
    axios.put(`${Urlaxios}/postRouts/likes/${postData?._id}`,{},
      {
        headers: {
          Authorization: "Bearer " + user.token
        },
      }
    )
      .then((res) => {
        console.log(res);
        setreloud(!reloud)
        setlikestoggel(!likestoggel)
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
              src={imageuserselect ? URL.createObjectURL(imageuserselect) : postData?.image?.url}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {
            postData?.user?._id == user?.id ? <>
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
                onChange={(e) => setimageuserselect(e.target.files[0])}
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
              <Button onClick={() => setimageuserselect(null)} style={{ padding: "3px 6px", fontSize: "17`px", margin: " 0 5px ", backgroundColor: "#4c6177", border: "none", display: `${imageuserselect ? "inline-block" : "none"}` }}>Cancel</Button>

            </> : ""
          }
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
            <h6 style={{ color: "blue", margin: "0" }}>
              {postData?.user?.username}
            </h6>
            <span style={{ color: "#495e74" }}>{date}</span>
          </div>
        </div>
        <div className="postinfo mt-3 " style={{ textAlign: "center" }}>
          <h3 className="title  " style={{ fontSize: "25px" }}>
            {postData?.title}
          </h3>
          <div className="desc">{postData?.description}</div>
        </div>
        <div
          className="icons mt-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={likestoggelfun}
            className="like"
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
             
            }}
          >
            <AiOutlineLike size={"25px"} style={{ color:`${likestoggel?"blue":"black"}`}} />
            <span>{postData?.likes.length}</span>
          </div>
          {
            postData?.user?._id == user?.id ? <>
              <div
                className="edit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <div onClick={handleShow} style={{ cursor: "pointer" }}>
                  <MdOutlineEdit size={"25px"} />
                </div>
                <div onClick={()=>deletePostBtn(postData?.id)} style={{ cursor: "pointer" }}>
                  <MdOutlineDeleteOutline size={"25px"} />
                </div>
              </div>
            </> : ""

          }

        </div>
          <PostModel  setShow={setShow} show={show} data={postData} reloud={reloadData} setReloadData={setReloadData}/>
        <CommentForm setReloadData={setReloadData} />
        <Commentlist data={postData} setreloud={setreloud} reloud={reloud} />
      </div>
    </div>
  );
};

export default PostDetails;
