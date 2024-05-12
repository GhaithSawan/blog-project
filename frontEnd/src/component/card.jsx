import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    return (
        <div className="card p-2" style={{ width: "35%", height: "150px", borderRadius: "10px", boxShadow: "#d0cece 0px 1px 6px 1px " }}>
            <h2 className="name" style={{ borderBottom: "1px gray solid", marginTop: "10px", color: "#4c6177" }}>{data?.name}</h2>
            <div className="info d-flex align-items-center justify-content-between " style={{ height: "100%" }}>
                <span className="num" style={{ fontSize: "20px" }}>{data?.totle}</span>
                <Link to={data.path}>
                    <Button variant="success">See All {data?.name}</Button>
                </Link>
            </div>
        </div>
    )
}

export default Card