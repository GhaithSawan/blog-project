import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Urlaxios } from '../constant'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const register = () => {
  const [username, setusername] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  let navi = useNavigate()
function registerFun() {
      axios.post(`${Urlaxios}/userAuth/register`,{
        username:username,
        email,
        password,
      }).then((res)=>{
        toast.success("you are registred please login")
        console.log(res.data.message);
        navi("/login")
      }).catch((e)=>{
        toast.error(e.response.data.message)
        console.log(e.response.data.message);

      })
}
  
  

  return (
    <div className='allpages d-flex align-items-center'>
      <div className="card d-flex align-items-center justify-content-center gap-2 m-auto p-4" style={{width:"400px"}}>
        <h2>Register</h2>
        <div className="info d-flex align-items-start justify-content-start gap-2 flex-column w-100">
           <label htmlFor="Username">Username</label>
           <input onChange={(e)=>setusername(e.target.value)} type="text" placeholder='Username' id='Username' value={username} style={{width:"100%",padding:"10px",borderRadius:"10px",border:"none",boxShadow: "#d0cece 0px 1px 6px 1px "}}/>
           <label htmlFor="email">Email</label>
           <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder='Email' id='email' value={email} style={{width:"100%",padding:"10px",borderRadius:"10px",border:"none",boxShadow: "#d0cece 0px 1px 6px 1px "}}/>
           <label htmlFor="password">Password</label>
           <input onChange={(e)=>setpassword(e.target.value)} type="text" placeholder='Password' id='password' value={password} style={{width:"100%",padding:"10px",borderRadius:"10px",border:"none",boxShadow: "#d0cece 0px 1px 6px 1px "}}/>
        </div>
        <Button variant="primary" className='mt-2' onClick={registerFun}>Register</Button>
      </div>
    </div>
  )
}

export default register