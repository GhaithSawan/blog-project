import axios from "axios";
import { Urlaxios } from "../src/constant";

export async function PostRequest(body, path) {
  let header = {};
  let data = await axios.post(`${Urlaxios}${path}`, header, body);
  console.log("data", data);
//   return data;
}
