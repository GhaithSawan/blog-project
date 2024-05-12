import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Postslist from "../component/postslist"
import { MdPhotoSizeSelectLarge } from 'react-icons/md';
import axios from 'axios';
import { Urlaxios } from '../constant';
import { json, useNavigate, useParams } from 'react-router-dom';
import ProfileModel from "../component/ProfileModel";
import { authContext } from '../context/authContextAPI';
import updateUser from "../context/authContextAPI"
import { toast } from 'react-toastify';
const profile = () => {

  const { user } = useContext(authContext);

  const [userpostboolen, setuserpostboolen] = useState(false)
  let { id } = useParams();
  let navi = useNavigate()
  const [imageuserselect, setimageuserselect] = useState()
  const [data, setdata] = useState("")
  const [date, setdate] = useState();

  const [show, setShow] = useState(false);
  const [reloud, setreloud] = useState(false);

  const handleShow = () => setShow(true);


  useEffect(() => {
    window.scrollTo(0, 0);
    axios(`${Urlaxios}/usermethod/getUser/${id}`).then((res) => {
      setdata(res.data)
      console.log(res.data)
    })
  }, [imageuserselect,reloud])

  useEffect(() => {
    let date = new Date(data?.createdAt);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1
      }/${date.getFullYear()} `;
    setdate(formattedDate);
  }, [data]);


  function deleteUserFun() {
    axios.delete(`${Urlaxios}/usermethod/deleteUser/${id}`, {
      headers: {
        Authorization: "Bearer " + user.token
      }
    }).then((res) => {
      toast.success("User deleted")
      console.log(res.data.message)
      navi("/")
    }).catch((e)=>{
      toast.error(e.response.data.message)

    })
  }
  function upludimge(e) {
    setimageuserselect(e.target.files[0])
  }
  function upludimg() {
    let form_data = new FormData()
    form_data.append("img", imageuserselect)
    axios.post(`${Urlaxios}/usermethod/uploudImg`,
      form_data
      , {
        headers: {
          Authorization: "Bearer " + user.token
        }
      }).then((res) => {
        toast.success("Photo Changed")

        setimageuserselect(res?.profilePhoto?.url)
        console.log(res);
        // user.profilePhoto = res?.profilePhoto?.url
        // console.log(user.profilePhoto);

        // localStorage.setItem("user", JSON.stringify(user))
      // updateUser(JSON.parse(localStorage.getItem("user")))

      }).catch((e)=>{
        toast.error(e.response.data.message)

      })
      
  }


  return (
    <div className='allpages '>
      <ProfileModel reload={reloud} setShow={setShow} show={show} data={data} setreloud={setreloud} />
      <div className="box col-10 container " style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1d2d3d" }}>
        <Card style={{ width: '18rem', width: "500px", padding: "20px", backgroundColor: "#1d2d3d", border: "none" }}>
          <Card.Img style={{ objectFit: "cover", height: "150px", borderRadius: "50%", width: "150px", margin: "auto" }} variant="top" src={imageuserselect ? URL.createObjectURL(imageuserselect) : data?.profilePhoto?.url} />
          <Card.Body style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Card.Title style={{ textAlign: "center", color: "#fff" }}><h3 style={{ marginBottom: "0" }}>{data.username}</h3> </Card.Title>
            <Card.Text className='m-0' style={{ textAlign: "center", color: "#fff" }}>
              {data.bio ? data.bio : ""}
            </Card.Text>
            <span className="Date" style={{ textAlign: "center", color: "#fff" }}> Date joined :<span style={{ color: "#27ae60" }}>{date}</span></span>
            <input type="file"
              id="inputimg" style={{ display: "none" }}
              onChange={(e) => { upludimge(e) }} />
            <label
              htmlFor="inputimg"
              style={{ color: "var(--blue-color)", fontSize: "15px" }}
            >
              <MdPhotoSizeSelectLarge style={{ marginRight: "8px" }} />
              Select image
            </label>
            <Button style={{ margin: "10px auto", backgroundColor: "#4c6177", border: "none" }} onClick={upludimg}>Change Photo </Button>
            <Button onClick={() => setimageuserselect(null)} style={{ margin: "10px auto", backgroundColor: "#4c6177", border: "none", display: `${imageuserselect ? "block" : "none"}` }}>Cancel</Button>
          </Card.Body>
        </Card>
        <Button variant="outline-success" onClick={handleShow} style={{ position: "absolute", top: "10px", right: "10px" }}>
          Update Profile
        </Button>

      </div>
      <div className="userposts py-5 container col-10 d-flex align-items-center justify-content-center flex-column">
        <h2 className="title text-center m-auto mb-5" style={{ borderBottom: "1px solid black", width: "max-content" }}> {data.username} Posts</h2>
        <Postslist userpostboolen={userpostboolen} postscurentuser={data?.posts} />
        <div className="deleteAccount mt-5  ">
          <Button variant="outline-danger" onClick={deleteUserFun}>Delete Your Account</Button>
        </div>

      </div>

    </div>
  )
}

export default profile