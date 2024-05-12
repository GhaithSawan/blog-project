import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Urlaxios, token } from "../constant";
import { toast } from "react-toastify";
import { authContext } from "../context/authContextAPI";

function ProfileModel({ setShow, show ,data,setreloud,reloud}) {
  const { user } = useContext(authContext);

  const [username, setusername] = useState();
  const [bio, setbio] = useState();
  const [password, setpassword] = useState();
  const handleClose = () => setShow(false);

  function handleCloseandsave() {
    axios
      .put(
        `${Urlaxios}/usermethod/updateUser/${data.id}`,
        {
          username:username,
          password:password,
          bio:bio
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
      .then((res) => {
        toast.success("profile is updating");
        setreloud(!reloud)
      })
      .catch((e) => {
        toast.error(e.message)
      });
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto" }}>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{margin:"0"}}>username</p>
          <input
            type="text"
            onChange={(e) => setusername(e?.target?.value)}
            value={username ? username : data?.username}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #4c6177",

            }}
          />
          <p style={{margin:"0"}}>Bio</p>

          <input
            type="text"
            onChange={(e) => setbio(e?.target?.value)}
            value={bio ? bio : data?.bio}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #4c6177",
            }}
          />
          <p  style={{margin:"0"}}>password</p>

          <input
            type="password"
            onChange={(e) => setpassword(e?.target?.value)}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #4c6177",

            }}
            placeholder="Password"
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

export default ProfileModel;
