import React, { useContext, useEffect, useState } from 'react'
import Sidebaradmin from '../component/sidebaradmin'
import Card from '../component/card';
import Button from 'react-bootstrap/esm/Button';
import axios from "axios"
import { Urlaxios } from '../constant';
import { authContext } from '../context/authContextAPI';
import { toast } from 'react-toastify';
const admin = () => {
  const { user } = useContext(authContext);

  const [cartegory, setcartegory] = useState()
  const [datausers, setdatausers] = useState()
  const [datacomment, setcomment] = useState()
  const [dataCat, setCat] = useState()
  const [dataposts, setdataposts] = useState()
  const [reloud, setreloud] = useState(false);

  useEffect(() => {
    console.log(cartegory);
  }, [cartegory])

  let data = [
    {
      name: "Users",
      path: "/tables/users",
      totle: datausers?.length || 0
    }, {
      name: "Posts",
      path: "/tables/posts",
      totle: dataposts?.length || 0
    },
    {
      name: "Category",
      path: "/tables/cat",
      totle: dataCat?.length || 0
    },
    {
      name: "Commments",
      path: "/tables/comment",
      totle: datacomment?.length || 0
    }
  ]

  useEffect(() => {
    axios(`${Urlaxios}/usermethod/getAllUsers`, {
      headers: {
        Authorization: "Bearer " + user.token,
      }
    }).then((res) => {
      setdatausers(res.data)
    })
  }, [])
  useEffect(() => {
    axios(`${Urlaxios}/CommentRouts/getAllComment`, {
      headers: {
        Authorization: "Bearer " + user.token,
      }
    }).then((res) => {
      console.log(res);
      setcomment(res.data)
    })
  }, [])

  useEffect(() => {
    axios(`${Urlaxios}/CatigoryRouts/getAllCatigory`).then((res) => {
      console.log(res);
      setCat(res.data)
    })
  }, [reloud])
  useEffect(() => {
    axios(`${Urlaxios}/postRouts/getAllPosts`).then((res) => {
      console.log(res);
      setdataposts(res.data)
    })
  }, [])



  function createCat() {
    axios.post(`${Urlaxios}/CatigoryRouts/CreateCatigory`, {
      title: cartegory
    }, {
      headers: {
        Authorization: "Bearer " + user.token,
      }
    }).then((res) => {
      setcartegory("")
      toast.success("Category Added")
      setreloud(!reloud)

      console.log(res);
    }).catch((e)=>{
      toast.error(e.response.data.message)
    })
  }
  return (


    <div className='allpages' style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>
      <Sidebaradmin />
      <div className="right" style={{ borderLeft: "1px #4c6177 solid", width: "80%" }}>
        <div className="cards p-5" style={{ width: "95%", margin: "auto", borderBottom: "1px #4c6177 solid", display: "flex", alignItems: 'center', justifyContent: "center", flexWrap: 'wrap', gap: "30px" }}>
          {
            data.map((e) => {
              return <Card data={e} />
            })
          }
        </div>
        <div className="addcat p-2" style={{ margin: "30px  auto", width: "90%", height: "150px", borderRadius: "10px", boxShadow: "#d0cece 0px 1px 6px 1px " }}>
          <h2 className="name" style={{ borderBottom: "1px gray solid", marginTop: "10px", color: "#4c6177" }}>Add Category</h2>
          <div className="d-flex align-items-center justify-content-center gap-2" style={{ height: "max-content", marginTop: "20px " }}>
            <input onChange={(e) => { setcartegory(e.target.value) }} value={cartegory} type="text" placeholder='Add Category' style={{ width: "90%", border: "none", borderRadius: "10px", boxShadow: "#d0cece 0px 1px 6px 1px ", padding: '10px' }} />
            <Button variant="success" onClick={createCat}>Add</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default admin