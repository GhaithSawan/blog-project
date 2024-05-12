import React, { useEffect, useState } from "react";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import CommentModel from "./commentModel";
import { deleteCommentFun } from "../utils/deletepost";
const Commentlist = ({ data }) => {
  ///modeleditpost
  const [show, setShow] = useState(false);
  const [dataformodel, setdataformodel] = useState();
  const handleShow = (comData) => {
    setdataformodel(comData);
    setShow(true);
  };

  function deletebtn(id) {
    let anwer = confirm("Are you sure");
    if (anwer) {
      deleteCommentFun(id);
      window.location.reload();
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
                </div>
              </div>
            );
          })
        : "No Comment"}
      <CommentModel setShow={setShow} show={show} data={dataformodel} />
    </div>
  );
};

export default Commentlist;
