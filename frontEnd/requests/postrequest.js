import axios from "axios";
import { Urlaxios } from "../src/constant";

export async function PostRequest(body, path) {
  console.log("body", body);
  
  try {
    let data = await axios.post(`${Urlaxios}${path}`, body,{
        headers:{
            authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjdjNmVkNWZhZTQ5NmZiMTNjMDdjOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTM4ODI4NzJ9.XPV5VYC7ATi5FySyskiULpxat-sF7bIlI_jzAe72iGw"
        }
    });
    console.log("data", data);
  } catch (error) {
    console.log("PostRequest - error", error);
  }
  //   return data;
}
