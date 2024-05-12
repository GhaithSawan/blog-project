import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const Forgot_password = () => {
  return (
    <div className='allpages d-flex align-items-center'>
      <div className="card d-flex align-items-center justify-content-center gap-2 m-auto p-4" style={{width:"400px"}}>
        <h2>Reset Password</h2>
        <div className="info d-flex align-items-start justify-content-start gap-2 flex-column w-100">
           <label htmlFor="email">Password</label>
           <input type="text" placeholder='Password' id='email' style={{width:"100%",padding:"10px",borderRadius:"10px",border:"none",boxShadow: "#d0cece 0px 1px 6px 1px "}}/>
        </div>
        <Button variant="primary" className='mt-2'>Submit</Button>
      </div>
    </div>
  )
}

export default Forgot_password