import axios from 'axios'
import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link, useNavigate } from 'react-router-dom'
import { Urlaxios } from '../constant'
import { authContext } from '../context/authContextAPI'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  let navi = useNavigate()
  const { updateUser } = useContext(authContext);

  function LoginFun() {
    axios.post(`${Urlaxios}/userAuth/login`, {
      email,
      password,
    }).then((res) => {
      toast.success("you login success")

      localStorage.setItem("user", JSON.stringify(res.data))
      updateUser(JSON.parse(localStorage.getItem("user")))
      navi("/")
    }).catch((e)=>{
      toast.error(e.response.data.message)
    })
  }


  return (
    <div className='allpages d-flex align-items-center'>
      <div className="card d-flex align-items-center justify-content-center gap-2 m-auto p-4" style={{ width: "400px" }}>
        <h2>Login</h2>
        <div className="info d-flex align-items-start justify-content-start gap-2 flex-column w-100">
          <label htmlFor="email">Email</label>
          <input onChange={(e) => setemail(e.target.value)} type="text" placeholder='Email' id='email' style={{ width: "100%", padding: "10px", borderRadius: "10px", border: "none", boxShadow: "#d0cece 0px 1px 6px 1px " }} />
          <label htmlFor="password">Password</label>
          <input onChange={(e) => setpassword(e.target.value)} type="text" placeholder='Password' id='password' style={{ width: "100%", padding: "10px", borderRadius: "10px", border: "none", boxShadow: "#d0cece 0px 1px 6px 1px " }} />
          <Link to={"/forgetPasswrd"}><span>Forget your password</span></Link>
        </div>
        <Button variant="primary" className='mt-2' onClick={LoginFun}>Login</Button>
      </div>
    </div>
  )
}

export default Login