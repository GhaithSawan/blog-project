import axios from "axios"
import { Urlaxios } from "../constant"
export function deleteCommentFun(id) {
    axios.delete(`${Urlaxios}/CommentRouts/deleteComment/${id}`, {
        headers: {
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmMyNjMwOGY5NjlhMzg5MDI3ZGE1MyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MTQxNjk0MjN9._3vkFk5RR_t7KQZH2rWxCWd_9ea4dxQ1B6E5y5sYFBM"
        }
    }).then((res) => {
        alert(res.message)
    }).catch((e) => {
        console.log(e)
    })
}