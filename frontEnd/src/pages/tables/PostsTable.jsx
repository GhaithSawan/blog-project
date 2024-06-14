import React, { useContext, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Sidebaradmin from '../../component/sidebaradmin';
import Button from 'react-bootstrap/esm/Button';
import { useEffect } from 'react';
import axios from 'axios';
import { Urlaxios } from '../../constant';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/authContextAPI';
import { toast } from 'react-toastify';

const PostsTable = () => {
  const { user } = useContext(authContext);
  const [reloud, setreloud] = useState(false)
  const [dataposts, setdataposts] = useState()
  useEffect(() => {
    axios(`${Urlaxios}/postRouts/getAllPosts`).then((res) => {
      console.log(res);
      setdataposts(res.data)
    })
  }, [reloud])


  function deleteUserFun(id) {
    let shecked = confirm("are you shour")
    if (shecked) {
      axios.delete(`${Urlaxios}/postRouts/deletePost/${id}`, {
        headers: {
          Authorization: "Bearer " + user.token,

        }
      }).then((res) => {
        toast.success("Post Deleted")
        setreloud(!reloud)
      }).catch((e)=>{
        toast.error(e.response.data.message)
      })
    }
  }
  return (
    <div className="allpages w-100" style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>
      <Sidebaradmin />
      <div className="table p-5 " style={{ borderLeft: "1px #4c6177 solid", width: "80%" }}>
        <h3 className="title mb-3" style={{ borderBottom: "2px gray solid", width: "max-content" }}>
          Posts
        </h3>
        <Table responsive className='table'>
          <thead>
            <tr>
              <th className='--dark-color ' style={{ textAlign: "center", color: "#fff", fontWeight: "600", border: "1px gray solid" }}>#</th>
              <th className='--dark-color ' style={{ textAlign: "center", color: "#fff", fontWeight: "600", border: "1px gray solid" }}>User</th>
              <th className='--dark-color ' style={{ textAlign: "center", color: "#fff", fontWeight: "600", border: "1px gray solid" }}>Post Title</th>
              <th className='--dark-color ' style={{ textAlign: "center", color: "#fff", fontWeight: "600", border: "1px gray solid" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              dataposts?.map((e, index) => {
                return (<tr>
                  <td style={{ backgroundColor: "#efeef2", border: "1px gray solid", textAlign: "center" }}>{index + 1}</td>
                  <td style={{ backgroundColor: "#efeef2", border: "1px gray solid", textAlign: "center" }}>{e?.user?.username}</td>
                  <td style={{ backgroundColor: "#efeef2", border: "1px gray solid", textAlign: "center" }}>{e?.title}</td>
                  <td style={{ backgroundColor: "#efeef2", border: "1px gray solid", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <Link to={`/post/details/${e.id}`}>
                      <Button variant="success">View Post</Button>
                    </Link>
                    <Button variant="danger" onClick={() => { deleteUserFun(e.id) }}>Delete Post</Button>
                  </td>
                </tr>)
              })
            }

          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default PostsTable