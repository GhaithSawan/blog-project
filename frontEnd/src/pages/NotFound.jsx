import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='allpages d-flex align-items-center'>
            <div className="card d-flex align-items-center justify-content-center gap-2 m-auto p-4" style={{ width: "400px" }}>
                <h2>NotFound</h2>
                <h2 style={{ color: "red" }}>404</h2>
                <Link to={"/"}>
                    <Button variant="primary" className='mt-2'>Go to home page</Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound