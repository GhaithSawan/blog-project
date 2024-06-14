import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Urlaxios, token } from "../constant";
import { toast } from "react-toastify";
import { authContext } from "../context/authContextAPI";

function PostModel({ setShow, show, data, reloud, setReloadData }) {
  const { user } = useContext(authContext);

  const [allcat, setallcat] = useState(null);


  const [text, setText] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);

  const [cat, setcat] = useState(data?.caticory);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setText(data?.title);
    setDescription(data?.description || '');
  }, [data]);
  useEffect(() => {
    axios(`${Urlaxios}/CatigoryRouts/getAllCatigory`)
      .then((res) => {
        setallcat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCloseandsave() {
    axios
      .put(
        `${Urlaxios}/postRouts/updatePost/${data._id}`,
        {
          title: text,
          description: description,
          caticory: cat
        },
        {
          headers: {
            Authorization: "Bearer " + user.token
          }
        }
      )
      .then((res) => {
        handleClose();
        toast.success("Post is updating");
        setReloadData(!reloud)
      })
      .catch((e) => {
        toast.error(e?.response?.data?.message)
      });

  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto" }}>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="gap-3 d-flex align-items-center justify-content-center flex-column">
          <input
            type="text"
            onChange={(e) => setText(e?.target?.value)}
            style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0",
              padding: "10px",
              border: "1px #778697 solid",
            }}
            placeholder="Edit Title"
            value={text}
          />
          <input
            type="text"
            onChange={(e) => setDescription(e?.target?.value)}
            style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0",
              padding: "10px",
              border: "1px #778697 solid",
            }}
            placeholder="Edit Description"
            value={description}

          />
          <select
            className="select_father"
            style={{
              borderRadius: "5px",
              width: "70%",
              margin: "10px 0 ",
              padding: "10px",
              border: "1px #778697 solid",
            }}
            value={cat ? cat : data?.caticory}
            onChange={(e) => {
              setcat(e.target?.value);
            }}
          >
            <option disabled value="">
              Select A Category
            </option>
            {
              allcat?.map((e) => {
                return (
                  <option >{e.title}</option>
                )
              })
            }
          </select>
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

export default PostModel;
