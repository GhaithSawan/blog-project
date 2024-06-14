import React, { useEffect, useState } from "react";
import Postslist from "../component/postslist";
import axios from "axios";
import { Urlaxios } from "../constant";
import { Link } from "react-router-dom";
import Paginationcom from "../component/pagination";
import Post from "../component/post";

const Posts = () => {
  const [postsData, setpostsData] = useState()
  const [pageNumber, setpageNumber] = useState(1)
  const [catigoryData, setCatigoryData] = useState();
  useEffect(() => {
    axios(`${Urlaxios}/CatigoryRouts/getAllCatigory`)
      .then((res) => {
        setCatigoryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    axios(`${Urlaxios}/postRouts/getAllPosts?pageNumber=${pageNumber}`)
      .then((res) => {
        setpostsData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
    , [pageNumber]);

  return (
    <div className="allpages">
      <div className="container py-5 ">
        <h3
          style={{ width: "max-content" }}
          className="title border-bottom border-2 border-dark "
        >
          All Posts
        </h3>
        <div className="row my-3">



          <div className=" col-md-8 col-sm-12  d-flex flex-column gap-4">
            {postsData?.length > 0
              ? postsData.map((e, index) => {
                return (
                  <div key={index}>
                    <Post data={e} />
                  </div>
                );
              })
              : "no posts found "}
          </div>




          <div className="catigry col-md-4 col-sm-12  ">
            <h3 className="cat">Categories</h3>
            <div className="catigorylist d-flex align-items-center justify-content-center flex-column gap-3 my-3">
              {catigoryData?.length > 0
                ? catigoryData.map((e, index) => {
                  return (
                    <Link style={{ width: "100%" }} to={`/catigoryPage/${e.title}`}>
                      <button
                        key={index}
                        style={{
                          border: "none",
                          fontSize: "18px",
                          backgroundColor: "#c2743e",
                          padding: "5px 15px 5px 15px ",
                          borderRadius: "20px",
                          color: "#fff",
                          width: "100%",
                        }}
                      >
                        {e.title}
                      </button></Link>
                  );
                })
                : "no data"}
            </div>
          </div>
        </div>
        <div style={{ display: "felx", alignItems: "center", justifyContent: "center", margin: "40px 0 0 0 " }}>
          <Paginationcom setpageNumber={setpageNumber} pageNumber={pageNumber} />
         
        </div>

      </div>
    </div>
  );
};

export default Posts;
