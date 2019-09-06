// import request from "@/core/http/http"
import axios from 'axios'


export const loginAsync = (data,callback) => {
    console.log(data)
    axios({
        method: "get",
        url: "/login",
        params:{
            name:data.name,
            pwd:data.pwd
        }
    }).then((res) => {
        callback(res)
    })   
}

export const registerAsync = (data,callback) => {
    console.log(data)
    axios({
        method: "get",
        url: "/register",
        params:{
            name:data.name,
            pwd:data.pwd
        }
    }).then((res) => {
        callback(res)
    })   
}