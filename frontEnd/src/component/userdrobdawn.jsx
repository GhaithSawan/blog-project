import React, { useContext, useState } from 'react'
import { authContext } from '../context/authContextAPI';
import { Link, useNavigate } from 'react-router-dom';

const Userdrobdawn = () => {
    let navi = useNavigate()
    const { user } = useContext(authContext);
    const [shacked, setshacked] = useState(false)
    const { updateUser } = useContext(authContext);

    function logOut() {
        setshacked(!shacked)
        updateUser(null)
        navi("/login")
    }
    return (
        <div className='position-relative ' style={{cursor:"pointer"}}>
            <div className="userinfo d-flex align-items-center" onClick={() => setshacked(!shacked)} id="dropdown-basic-button" title="Dropdown button">
                <span style={{ color: "#fff", fontSize: "20px" }}>{user.username}</span>
                <img src={user.profilePhoto.url} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%", margin: "0 5px" }} alt="" />
            </div>
            <div className="drob" style={{ zIndex: "100", display: `${shacked ? "block" : "none"}`, position: "absolute", backgroundColor: "#fff", width: "100px", boxShadow: "#d0cece 0px 1px 6px 1px ", bottom: "-50", left: "-20px" }}>
                <Link to={`/profile/${user.id}`}>
                    <button className='btndrob' onClick={() => setshacked(!shacked)}>Profile</button>
                </Link>
                <button className='btndrob' onClick={logOut}>Log Out</button>
            </div>
        </div >
    )
}

export default Userdrobdawn