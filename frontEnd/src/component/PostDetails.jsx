import React from 'react'

const PostDetails = () => {
    return (
        <div className="allpages">
            <div className="container col-8 py-5">
                <div className="fatherofimg col-10 m-auto">
                    <div style={{height:"300px",marginBottom:"10px"}}>
                        <img  src={"dsa"} alt="" style={{ backgroundColor: "red" ,width:"100%" , height:"100%" ,objectFit:'cover'}} />
                    </div>
                    <label htmlFor="inputimg" style={{color:"var(--blue-color)"}}>
                        Select image 
                    </label>
                    <input type="file" placeholder='sa' id="inputimg" style={{display:"none"}} />
                    <button style={{border:"none",backgroundColor:"var(--secondary-color)",marginLeft:"5px",borderRadius:"5px",padding:"5px",color:"#fff"}}>Upload</button>
                </div>

                <div className="profile d-flex gap-2 " style={{alignItems:"center",justifyContent:"center"}}>
                    <div style={{borderRadius:"50%",overflow:"hidden", height:"100px",width:"100px",}}>
                        <img src={"dsa"}  style={{ backgroundColor: "red" ,width:"100%" , height:"100%" ,objectFit:'cover'}} alt="" />
                    </div>
                    <div className="info">
                        <h4 style={{color:"blue"}}>ghaith</h4>
                        <span style={{color:"#495e74"}}>3/3/432</span>
                    </div>
                </div>

                <div className="postinfo mt-3 " style={{textAlign:"center"}}>
                    <h3 className="title mb-5">
                        ghaithdsad'lksla;kmd;saljdklsajd
                    </h3>
                    <div className="desc">
                        dsjaldkdjisa;dklsajdkjsakjdsk;ad'sajdihjdsad'sakdaksuj
                    </div>
                </div>
                <div className="icons">
                    <div className="like"></div>
                    <div className="edit">
                    <div></div>
                    <div></div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default PostDetails