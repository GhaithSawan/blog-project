import React from 'react'

const CommentForm = () => {
  return (
        <form style={{marginTop:"15px",display:"flex",gap:"5px",flexWrap:"wrap"}}>
            <input type="text" style={{flex:"1",padding:"4px",border:"none", borderRadius:"8px "}} placeholder='write Comment'/>
            <button type='submit' style={{padding:"3px 5px" , borderRadius:"8px " ,border:"none", backgroundColor:"#4c6177",color:"#fff"}}>Create Comment</button>
        </form>
  )
}

export default CommentForm