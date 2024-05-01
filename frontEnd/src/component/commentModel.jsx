import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Urlaxios } from "../constant";
import { toast } from "react-toastify";

function CommentModel({ setShow, show, data }) {
  const [text, settext] = useState();
  const handleClose = () => setShow(false);

  function handleCloseandsave() {
    axios
      .put(
        `${Urlaxios}/CommentRouts/updateComment/${data._id}`,
        {
          text: text,
        },
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmMyNjMwOGY5NjlhMzg5MDI3ZGE1MyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTQxNjk0MjN9._3vkFk5RR_t7KQZH2rWxCWd_9ea4dxQ1B6E5y5sYFBM",
          },
        }
      )
      .then((res) => {
        toast.apply("comment is updating");
      })
      .catch((e) => {
        toast.error(e);
      });
    handleClose();
    window.location.reload();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto" }}>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => settext(e?.target?.value)}
            value={text ? text : data?.text}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #4c6177",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseandsave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentModel;
