import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import CommentModel from "./commentModel";
import { authContext } from "../context/authContextAPI";
import axios from "axios";
import { Urlaxios } from "../constant";
import { toast } from "react-toastify";
const Commentlist = ({ data, setreloud, reloud }) => {
  const { user } = useContext(authContext);

  const [show, setShow] = useState(false);
  const [dataformodel, setdataformodel] = useState();

  const handleShow = (comData) => {
    setdataformodel(comData);
    setShow(true);
  };

  function deletebtn(id) {
    let anwer = confirm("Are you sure");
    if (anwer) {
      axios.delete(`${Urlaxios}/CommentRouts/deleteComment/${id}`, {
        headers: {
          Authorization: "Bearer " + user.token
        }
      }).then((res) => {
        setreloud(!reloud)
        toast.success("comment is Deleted");
      }).catch((e) => {
        toast.error(e.response.data.message)
      })
    }
  }
  return (
    <div style={{ marginTop: "20px" }}>
      <h4 style={{ borderBottom: "1px black solid" }}>
        {data?.Comments.length} Comment
      </h4>
      {data?.Comments?.length > 0
        ? data?.Comments?.map((e) => {
          return (
            <div
              key={e._id}
              className="commentinfo "
              style={{
                border: "1px gray solid",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h5 className="username">{e?.username}</h5>
                <div className="date" style={{ color: "red" }}>
                  {e?.user.createdAt}
                </div>
              </div>

              <div className="desc my-2">{e?.text}</div>
              {
                data?.user?._id == user?.id ? <>
                  <div
                    className="edit"
                    style={{
                      display: "flex",
                      alignItems: "center",

                      gap: "10px",
                    }}
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handleShow(e)}
                    >
                      <MdOutlineEdit size={"25px"} />
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => deletebtn(e?._id)}
                    >
                      <MdOutlineDeleteOutline size={"25px"} />
                    </div>
                  </div></> : ""
              }
            </div>
          );
        })
        : "No Comment"}
      <CommentModel reloud={reloud} setreloud={setreloud} setShow={setShow} show={show} data={dataformodel} />
    </div>
  );
};

export default Commentlist;
