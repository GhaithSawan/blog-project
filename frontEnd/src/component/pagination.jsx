import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Urlaxios } from '../constant';

function Paginationcom({ setpageNumber, pageNumber }) {
    console.log(pageNumber);
    let genratedpages = []
    let postsinpage = 3
    const [allpages, setallpages] = useState();

    for (let i = 1; i <= allpages; i++) {
        genratedpages.push(i)
    }
    useEffect(() => {
        axios(`${Urlaxios}/postRouts/getAllPosts`)
            .then((res) => {
                setallpages(Math.ceil(res.data.length / postsinpage));
            })
            .catch((err) => {
                console.log(err);
            });
    }
        , []);
    return (
        <Pagination className='pagination' style={{ display: "felx", alignItems: "center", justifyContent: "center", margin: "auto !important" }}>

            <Pagination.Prev   onClick={() => { setpageNumber(prev => prev - 1) }} style={{display : `${pageNumber == 1 ? "none" : "block"}`}} />
            {
                genratedpages.map((e) => {
                    return (
                        <Pagination.Item className={e == pageNumber ? "active" :""} onClick={() => { setpageNumber(e) }}>{e}</Pagination.Item>
                    )
                })
            }

            <Pagination.Next onClick={() => { setpageNumber(prev => prev + 1) }} style={{display : `${pageNumber == allpages ? "none" : "block"}`}} />

        </Pagination>

    );
}

export default Paginationcom;