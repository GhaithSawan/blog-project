import axios from "axios"
import { Urlaxios, token } from "../constant"
export function deleteCommentFun(id) {
    axios.delete(`${Urlaxios}/CommentRouts/deleteComment/${id}`, {
        headers: {
            authorization: token
        }
    }).then((res) => {
        alert(res.message)
    }).catch((e) => {
        console.log(e)
    })
}