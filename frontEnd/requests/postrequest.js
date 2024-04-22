import axios from "axios";
import { Urlaxios } from "../src/constant";

export function PostRequest (body,path,state){
    let header  = {}
    axios.post(`${Urlaxios}${path}`,header,body).then((res)=>{
         console.log("res",res);
    })
}