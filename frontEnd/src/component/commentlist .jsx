import React from 'react'
import { MdOutlineDeleteOutline, MdOutlineEdit } from 'react-icons/md'

const Commentlist = ({ data }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h4 style={{ borderBottom: "1px black solid" }}>
        {data?.Comments.length} Comment
      </h4>
      {
        data?.commment?.length > 0 ? data.commment.map((e) => {
          return (
            <div className="commentinfo " style={{ border: "1px gray solid", padding: "5px", borderRadius: "5px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h5 className="username">
                 {e?.user.username}
                </h5>
                <div className="date" style={{ color: "red" }}>{e?.user.createdAt}</div>
              </div>

              <div className="desc my-2"></div>
              <div
                className="edit"
                style={{
                  display: "flex",
                  alignItems: "center",

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
          )
        }) : "No Comment"
      }

    </div>
  )
}

export default Commentlist 