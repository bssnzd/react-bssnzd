const proxy = require("http-proxy-middleware");
const bodyparser = require('body-parser');
const url= require('url')
const axios = require("axios");
const qs = require("qs");
//这个里面是nodejs范畴
//输出在命令行里面
module.exports = function (app) {
    // console.log(app) 
    // var userInfo=[];
    app.use(bodyparser.urlencoded({
        extende: true
    }));
    app.get("/test", (req, res) => {
        res.send("OK !!!!!")
    })
    // usr /api
    // https://cnodejs.org/api/v1/topics
    app.use(proxy("/apis",{
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/apis":""
        }
    }))
    let params=[
        {
            name:'bssnzd',
            pwd:'123456',
            id:'115180'
        }
    ]
    app.get("/login", (req, res) => {
        let userdata=url.parse(req.url,true).query;

        params.map((item)=>{
            if(item.name==userdata.name){
                if(item.pwd==userdata.pwd){
                    item.pwd='***'
                    console.log(userdata)
                    res.json(item)
                }
            }
        })
        res.json({msg:'账号或密码错误',status:'300'})
    })
    app.get("/register", (req, res) => {
        let userdata=url.parse(req.url,true).query;
        params.map((item)=>{
            if(item.name==userdata.name){
                res.json({msg:'账号已被注册',status:'300'})
            }
        })
        userdata.id=parseInt(Math.random()*1000000)
        params.push(userdata)
        res.json({msg:'注册成功',status:'200'})
    })
    
    // app.get("/sapis", (req, res) => {
    //     let params=req.body
    //     let get=params.get
    //     delete params.get
    //     console.log(params)
    //     axios({
    //         method: "get",
    //         url: `https://m.juooo.com/Search/${get}`,
    //         parmas: params,
    //         headers: {
    //             Referer: `https://m.juooo.com/show/showsLibrary`
    //         }
    //     }).then((rel) => {
    //         res.json(rel.data)
    //     })
    // })

}

// var express= require("express");
// var app= express();

