import React, { useEffect, useState } from "react";
import Postslist from "../component/postslist";
import axios from "axios";
import { Urlaxios } from "../constant";

const Posts = () => {
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
          <Postslist />

          <div className="catigry col-md-4 col-sm-12  ">
            <h3 className="cat">Categories</h3>
            <div className="catigorylist d-flex align-items-center justify-content-center flex-column gap-3 my-3">
              {catigoryData?.length > 0
                ? catigoryData.map((e, index) => {
                    return (
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
                      </button>
                    );
                  })
                : "no data"}
            </div>
          </div>
        </div>
        <div
          style={{ borderRadius: "5px" }}
          className="pagination d-flex align-items-center justify-content-center  "
        >
          <span
            style={{
              padding: "0 7px",
              width: "max-content",
              borderRadius: " 10px 0 0 10px",
            }}
            className="page"
          >
            Prev
          </span>
          {[1, 2, 3, 4, 5].map((page) => {
            return (
              <div>
                <span className="page">{page}</span>
              </div>
            );
          })}
          <span
            style={{
              padding: "0 7px",
              width: "max-content",
              borderRadius: " 0 10px 10px 0",
            }}
            className="page"
          >
            Next
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
