import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Urlaxios, token } from "../constant";
import { toast } from "react-toastify";
import { authContext } from "../context/authContextAPI";

function CommentModel({ setShow, show, data ,reloud,setreloud}) {
  const { user } = useContext(authContext);

  const [text, settext] = useState(null);
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
            Authorization: "Bearer " + user.token
          },
        }
      )
      .then((res) => {
        handleClose();
        toast.success("comment is updating");
        setreloud(!reloud)
      })
      .catch((e) => {
        toast.error(e.response.data.message)
      });
    
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
