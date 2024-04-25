import React, { useEffect, useState } from "react";
import axios from "axios";
import { Urlaxios } from "../constant";
import Postslist from "../component/postslist";

const homePage = () => {
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
    <div className='allpages '>
      <div
        className="header w-100"
        style={{
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            backgroundColor: "#efefef",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          welcome to Blog{" "}
        </h1>
      </div>
      <div className="posts container mt-5 p-2 ">
        <h3
          style={{ width: "max-content" }}
          className="title border-bottom border-2 border-dark "
        >
          Latest Posts
        </h3>
        <div className="row mt-3">
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
      </div>
    </div>
  );
};

export default homePage;
