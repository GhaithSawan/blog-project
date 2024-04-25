import React, { useEffect, useState } from "react";
import axios from "axios"
import Post from "../component/post";
import { Urlaxios } from "../constant";

const Postslist = () => {
  const [postsData, setPostsData] = useState();
  useEffect(() => {
    console.log("res");

    axios(`${Urlaxios}/postRouts/getAllPosts?pageNumber=1`)
      .then((res) => {
        console.log(res);
        setPostsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
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
  );
};

export default Postslist;
