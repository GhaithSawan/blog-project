import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { Urlaxios } from '../constant';

const VerifyEmail = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState(null);
    const { user, token } = useParams(); // الحصول على user و token من عنوان URL

    useEffect(() => {
        axios.get(`${Urlaxios}/postRouts/VirfyEmail/${user}/${token}`)
            .then((res) => {
                console.log(res);
                setIsVerified(true); // تحديث حالة التحقق إلى true
            })
            .catch((e) => {
                console.log(e);
                setError("Verification failed. Please try again.");
            });
    }, [user, token]);

    return (
        <div className='allpages d-flex align-items-center justify-content-center'>
            {isVerified ? (
                <div className="box gap-2 d-flex align-items-center justify-content-center flex-column">
                    <h2>Your registration is verified successfully</h2>
                    <Link to={"/"}>
                        <Button variant="primary">Go To Home Page</Button>
                    </Link>
                </div>
            ) : (
                <div className="card d-flex align-items-center justify-content-center gap-2 m-auto p-4" style={{ width: "400px" }}>
                    <h2>{error ? "Verification Failed" : "Not Found"}</h2>
                    <h2 style={{ color: "red" }}>404</h2>
                </div>
            )}
        </div>
    );
}

export default VerifyEmail;
