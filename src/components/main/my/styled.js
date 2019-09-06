import styled from "styled-components"
function r(px) {
    let baseSize = 75 /2;
    return px / baseSize + "rem";
}


export const MyWrap=styled.div`
    height: 100%;
    background-color: #f5f5f5;
    .top{
        height: 5.58667rem;
        background:url(${require('@/assets/img/mbg.png')}) no-repeat 50%;
        background-size: 100%;
        position: relative;
        overflow: hidden;
        >div{
            background: #fff;
            box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
            border-radius: .10667rem;
            margin: 1.53333rem .4rem 0;
            position: relative;
            .t1{
                padding: 0 .4rem;
                position: relative;
                div{
                    display: inline-block;
                    width: 1.6rem;
                    height: 1.6rem;
                    border-radius: 50%;
                    border: .02667rem solid #fff;
                    margin-top: -.32rem;
                    margin-right: .26667rem;
                    background: #f5f5f5;
                    overflow: hidden;
                    img{
                        border: none;
                        border-color: transparent;
                        vertical-align: middle;
                        width: 100%;
                        height: 100%;
                    }
                }
                span:nth-child(2){
                    position: absolute;
                    top: .33333rem;
                    color: #232323;
                    font-size: .4rem;
                    font-weight: 700;
                }
                span:last-child{
                    position: absolute;
                    color: #999;
                    font-size: .32rem;
                    bottom: 0;
                }
            }
            .t2{
                margin-top: -.09333rem;
                overflow: hidden;
                p{
                    float: right;
                    font-size: .37333rem;
                    color: #454341;
                    font-weight: 700;
                    padding: .09333rem .28rem .09333rem .38667rem;
                    background: linear-gradient(-45deg,#f5dea9,#f8d583);
                    border-radius: .36rem 0 0 .36rem;
                }
            }
            .t3{
                display: flex;
                align-items: center;
                a{
                    flex: 1;
                    text-align: center;
                    position: relative;
                    padding: .52rem 0 .52rem;
                    color: #666;
                    font-weight: 500;
                    font-size: .32rem;
                    p:nth-child(1){
                        color: #ff6743;
                        font-size: .53333rem;
                        margin-bottom: .2rem;
                    }
                    div{
                        position: absolute;
                        width: 1px;
                        height: .8rem;
                        background: #ebebeb;
                        top: .8rem;
                        right: 0;
                    }
                }
                a:last-child{
                    p:nth-child(1){
                        color: #232323;
                        font-size: .34667rem;
                    }
                }
            }
        }
    }
    .bot{
        padding: 0 .4rem;
        .b1{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: .32rem;
            background-color: #fff;
            box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
            border-radius: .10667rem;
            li{
                width: 25%;
                text-align: center;
                padding: .44rem 0 .53333rem;
                font-size: .32rem;
                color: #666;
                img{
                    display: inline-block;
                    width: .88rem;
                    height: .88rem;
                }
            }
        }
        .b2{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: .32rem;
            background-color: #fff;
            box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
            border-radius: .10667rem;
            li{
                width: 25%;
                text-align: center;
                padding: .44rem 0 .53333rem;
                font-size: .32rem;
                color: #666;
                img{
                    display: inline-block;
                    width: .88rem;
                    height: .88rem;
                }
            }
            li:last-child{
                color: #ff6743;
            }
        }
    }
`
export const LonginWrap=styled.div`
    position: relative;
    width: 100%;
    height: ${r(667)};
    z-index: 2;
    background-image: url(${require('@/assets/img/bg.png')});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    .navbar{
        width: 100%;
        height: ${r(44)};
        font-size: ${r(32)};
        color: #212121;
        line-height:${r(40)};
        div{
            height:100%;
            text-indent:${r(10)};
        }
    }
    .main{
        position: relative;
        padding: 0 ${r(32)} ;
        height: ${r(916/2)};
        >div{
            padding-top: ${r(115/2)};
            h1{
                height: ${r(24)};
                font-size: ${r(25)};
                font-weight: 700;
                font-stretch: normal;
                line-height: ${r(24)};
                color: #232323;
                text-align: center;
                margin:0;
            }
            >div{
                padding-top: ${r(75)};
                input{
                    padding: ${r(12.5)} 0;
                    margin-bottom: ${r(10)};
                    list-style: none;
                    width: 100%;
                    border: none;
                    background-color: #fdfdfd;
                    border-bottom: ${r(0.1)} solid #666;
                    font-size: ${r(16)};
                    color: #232323;
                    line-height: ${r(20)};
                }
                div{
                    padding-top:  ${r(50)};
                    button{
                        display: block;
                        width: 100%;
                        height: ${r(50)};
                        line-height: ${r(50)};
                        font-size: ${r(18)};
                        color: #fefefe;
                        border-radius: ${r(22.5)};
                        background-color: #ebebeb;
                        border: none;
                    }
                    .active{
                        background: -webkit-linear-gradient(left, #ff9a34, #ff4d4a);
                    }
                }
            }
            >div:last-child{
                    margin-top: ${r(20)};
                    padding-top: 0;
                    span{
                        float: right;
                        font-size:  ${r(15)};
                        color: #232323;
                    }
            }
        }
    }
    .footer{
        padding-left: ${r(70)};
        padding-right: ${r(70)};
        position: relative;
        width: 100%;
        box-sizing: border-box;
        .f1{
            position: relative;
            height: ${r(30.5)};
            border-top: 1px solid #999999;
            p{
                position: absolute;
                left: 50%;
                padding: 0 ${r(10)};
                font-size: ${r(13)};
                color: #999999;
                height: ${r(25)};
                line-height: ${r(25)};
                background-color: #FEFEFE;
                -webkit-transform: translate3d(-50%, -50%, 0);
            }
        }
        .f2{
            display:flex;
            div{
                width:50%;
                a{  
                    width:100%;
                    display: flex;
                    justify-content:center;
                    height: ${r(36)};
                    span{
                        display: inline-block;
                        width: ${r(36)};
                        height: ${r(36)};
                        background-image: url(${require('@/assets/img/qq.png')});
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                    }
                }
            }
            div:last-child{
                span{
                    background-image: url(${require('@/assets/img/weibo.png')});
                        background-size: cover;
                        background-position: center center;
                        background-repeat: no-repeat;
                }
            }
        }
    }
`