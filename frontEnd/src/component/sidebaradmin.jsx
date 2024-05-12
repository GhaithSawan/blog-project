import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { BsFillFilePostFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebaradmin = () => {
    return (
        <div className='p-5' style={{ display: "flex", alignItems: "flex-start", justifyContent: "start", flexDirection: "column", gap: "20px" }}>
            <h3 className="title" style={{ display: "flex", gap: "10px" }}> <MdOutlineSpaceDashboard /> DashBoard</h3>
            <ul style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column", gap: "20px" }}>
                <Link to={`/tables/users`} style={{ color: "black" }}>
                    <li style={{ fontSize: "25px", cursor: "pointer", gap: '20px', display: "flex", alignItems: "center" }}> <LuUsers2 /> Users</li>
                </Link>
                <Link to={`/tables/posts`} style={{ color: "black" }}>
                    <li style={{ fontSize: "25px", cursor: "pointer", gap: '20px', display: "flex", alignItems: "center" }}><BsFillFilePostFill />
                        Posts</li>
                </Link>
                <Link to={`/tables/cat`} style={{ color: "black" }}>

                    <li style={{ fontSize: "25px", cursor: "pointer", gap: '20px', display: "flex", alignItems: "center" }}><BiCategoryAlt />
                        Categories</li>
                </Link>
                <Link to={`/tables/comment`} style={{ color: "black" }}>

                    <li style={{ fontSize: "25px", cursor: "pointer", gap: '20px', display: "flex", alignItems: "center" }}><FaCommentAlt />Comments</li>
                </Link>

            </ul>
        </div>
    )
}

export default Sidebaradmin