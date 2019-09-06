import styled from "styled-components"
import city from '@/assets/img/city.png'

function r(px) {
    let baseSize = 75 /2;
    return px / baseSize + "rem";
}
export const CityWrap=styled.div`
height: 1.17333rem;
width: 100%;
padding: 0 .4rem;
position: fixed;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
z-index: 150;
  .noshow{
    width: 1.56rem;
    height: .74667rem;
    border-radius: .46667rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,.3);
    border: 1px solid hsla(0,0%,88%,.3);
    strong{
        background-image: url(${city});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        width: .29333rem;
        height: .34667rem;
    }
    span{
        width: .86667rem;
        font-size: .4rem;
        color: #fefefe;
        font-weight: 700;
        margin-left: .08rem;
    }
  }
  .show{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#f5f5f5;
    z-index:100;
    overflow:auto;
    .d{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 1.17333rem;
        font-size:${r(18)};
        line-height: 1.17333rem;
        text-align: center;
        box-sizing: border-box;
        border-bottom: 1px solid #ebebeb;
        background-color: #fefefe;
        z-index: 100;
        
    }
    
    .d1{
        padding-top:${r(43)};
        >div{
            padding:0 ${r(38)} 0 ${r(15)};
            display:flex;
            justify-content: space-between;
            flex-wrap:wrap;
            div{
                display: inline-block;
                width:${r(100)};
                height:${r(37)};
                text-align:center;
                border: ${r(1)} solid #ebebeb;
                background-color: #fefefe;
                border-radius: ${r(3)};
                color:#232323;
                font-size:${r(13)};
                line-height:${r(37)};
                margin-bottom:${r(7.5)};
            }
        }
        >p{
            padding:${r(13)} ${r(38)} ${r(5)} ${r(15)};
            height:${r(26.5)};
            color:#999;
            font-size:${r(12)}
        }
    }
    .d2{
        position:fixed;
        top:${r(124)};
        right:${r(10)};
        width:${r(24)};
        text-align:center;
        font-size: .26667rem;
        color: #666;
        >p{
            margin-bottom: .08rem;
            height:${r(16)}
        }
        li{
            margin-bottom: .08rem;
            p{
                height:${r(14)} 
            }
            .active{
                color:#ff6618;
            }
        }      
    }
    .u{
        li{
            background: #fff;
            p{
                height: .77333rem;
                line-height:.77333rem;
                padding-left: .4rem;
                font-size: .34667rem;
                color: #999;
                background: #f5f5f5;
            }
            div{
                height: 1.33333rem;
                font-size: .34667rem;
                line-height:1.33333rem;
                color: #232323;
                border-bottom: ${r(1)} solid #ebebeb;
                margin: 0 1.13333rem 0 .4rem;
                background-color: #fefefe;
            }
        }
    }
  }

  .search{
    width: 6.34667rem;
    height: .74667rem;
    display: flex;
    align-items: center;
    border: 1px solid hsla(0,0%,88%,.2);
    background-color: rgba(0,0,0,.2);
    border-radius: .53333rem;
    margin-left: .10667rem;
    img{
        width: .53333rem;
        height: .53333rem;
        margin-left: .29333rem;
        margin-right: .13333rem;
    }
    span{
        font-size: .34667rem;
        color: #fefefe;
    }
  }
  >span{
    width: .72rem;
    height: .66667rem;
    a{
        display: block;
        width: 100%;
        height: 100%;
        img{
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
        }
    }
  }
  
`

export const SearchWrap=styled.div`
.searcht{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#fff;
    z-index:150;
    overflow:auto;
      header{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 1.17333rem;
        width: 100%;
        padding: 0 .4rem;
        justify-content: space-between;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        background-color: #fefefe;
        >div{
            display: flex;
            align-items: center;
            box-sizing: border-box;
            width: 8.05333rem;
            height: .8rem;
            background-color: #f5f5f5;
            border-radius: .4rem;
            padding: 0 .22667rem 0 .37333rem;
            border: 1px solid #ebebeb;
            img{
                width: .53333rem;
                height: .53333rem;
                display: block;
            }
            span{
                width: .53333rem;
                height: .53333rem;
                display: block;
            }
            input{
                height: .53333rem;
                line-height: .53333rem;
                width: 6.26667rem;
                font-size: .34667rem;
                letter-spacing: 0;
                color: #232323;
                background: transparent;
                border: none;
            }
        }
        >span{
            font-family: PingFang-SC-Medium;
            font-size: .37333rem;
            color: #666;
        }
      }
      section{
        position: absolute;
        left: 0;
        top:${r(44)};
        background:#fff;
        >div{
            >div{
                padding: .69333rem .4rem 0;
                >div{
                    margin-bottom: .8rem;
                    h3{
                        zoom:1;
                        height: .53333rem;
                        span:nth-child(1){
                            font-size: .34667rem;
                            font-weight: 400;
                            color: #666;
                            float: left;
                            display: block;
                            height: .53333rem;
                            line-height: .53333rem;
                        }
                        span:nth-child(2){
                            display: block;
                            font-size: .34667rem;
                            font-weight: 400;
                            color: #666;
                            float: right;
                            width: .53333rem;
                            height: .53333rem;
                            line-height: .53333rem;
                        }
                    }
                    ul{
                        display: flex;
                        justify-content:space-around;
                        flex-direction: row;
                        flex-wrap: wrap;
                        margin-top: .53333rem;
                        li{
                            font-family: PingFang-SC-Medium;
                            width:26%;
                            text-align:center;
                            margin-bottom: .34667rem;
                            height: .93333rem;
                            line-height: .93333rem;
                            font-size: .37333rem;
                            color: #232323;
                            background-color: #f5f5f5;
                            border-radius: .08rem;
                        }
                    }
                }
            }
        }
      }
      .sea{
        padding:0;
        padding-top: .26667rem;
        ul{
            padding-left: .4rem;
            padding-right: .4rem;
            margin-top: .53333rem;
            li{
                display: flex;
                margin-bottom: .86667rem;
                position: relative;
                display: flex;
                margin-bottom: .86667rem;
                position: relative;
                .db1{
                    width: 2.93333rem;
                    height: 4rem;
                    border-radius: .10667rem;
                    border: 1px solid #ebebeb;
                    position: relative;
                    overflow: hidden;
                    img{
                        border: none;
                        border-color: transparent;
                        vertical-align: middle;
                        width: 100%;
                        height: 100%;
                    }
                    div{
                            span:nth-child(1){
                                position: absolute;
                                right: .10667rem;
                                top: .10667rem;
                                display: block;
                            }
                            span:nth-child(2){
                                position: absolute;
                                left: .10667rem;
                                top: -.02667rem;
                                width: .77333rem;
                                height: .93333rem;
                                display: block;
                                background: url(${require('@/assets/img/juc.png')}) 50% no-repeat;
                                background-size: 100%;
                            }
                        }
                }
                .db2{
                    flex: 1;
                    margin-left: .4rem;
                    color: #232323;
                    padding-top: .13333rem;
                    .p1{
                        font-size: .32rem;
                        height: .64rem;
                        line-height: .64rem;
                        letter-spacing: 1px;
                        color: #666;
                        strong{
                            color: #232323;
                            font-size: .42667rem;
                            margin-right:${r(5)};
                        }
                    }
                    a{
                        display:block;
                        color: #232323;
                        h3{
                            width: 100%;
                            font-size: .45333rem;
                            line-height: .6rem;
                            min-height: .6rem;
                            max-height: 1.2rem;
                            margin-top: .33333rem;
                            word-break: break-all;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            span{
                                color:#ff6743!important;
                            }
                        }
                    }
                    .p2{
                        margin-top: .33333rem;
                        width: 5.33333rem;
                        font-size: .32rem;
                        height: .64rem;
                        line-height: .64rem;
                        color: #666;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .p3{
                        font-size: .29333rem;
                        color: #999;
                        height: .48rem;
                        line-height: .48rem;
                        margin-top: .26667rem;
                        strong{
                            font-size: .42667rem;
                            letter-spacing: 0;
                            margin-right: .13333rem;
                            font-weight: 400;
                            color: #ff6743!important;
                        }
                    }
                }
            }
        }
    }
  }
`


export const ToplistWrap=styled.div`
.d{
    padding: .53333rem .4rem 0;
margin-bottom: .53333rem;
  .d1{
    display: flex;
    justify-content: space-between;
    margin-bottom: .8rem; 
    text-align:center;  
    img{
        width: 1.36rem;
        height: 1.36rem;
    }
    p{
        font-size: .34667rem;
        color: #232323;
        margin-top: .2rem;
    }
  }
  .d2{
    width: 100%;
    border-radius: .08rem;
    background-color: rgba(255,252,245,.5);
    border: 1px solid hsla(30,55%,64%,.3);
    margin-bottom: .8rem;
    .d2-1{
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.06667rem;
        padding: 0 .4rem;
        box-sizing: border-box;
        justify-content: space-between;
        border-bottom: 1px dashed hsla(30,55%,64%,.3);
        div:nth-child(1){
            color: #6b4218;
            span:nth-child(1){
                font-size: .4rem;
                margin-right: .13333rem;
                font-weight: 700;
            }
            span:nth-child(2){
                font-size: .29333rem;
            }
        }
        div:nth-child(2){
            color: #6b4218;
            span:nth-child(1){
                font-size: .29333rem;
            }
            span:nth-child(2){
                width: .13333rem;
                height: .26667rem;
                margin-left: .13333rem;
            }
        }
    }
    .d2-2{
        display: flex;
        padding: .4rem .4rem .33333rem;
        position: relative;
        div:nth-child(1){
            width: 1.73333rem;
            height: 2.37333rem;
            border-radius: .05333rem;
            img{
                border: none;
                border-color: transparent;
                vertical-align: middle;
                width: 100%;
                height: auto;
            }
        }
        div:nth-child(2){
            padding-top: .06667rem;
            margin-left: .4rem;
            flex: 1;
            a{
                font-size: .37333rem;
                color: #232323;
                line-height: .53333rem;
                min-height: .53333rem;
                max-height: 1.06667rem;
                width:100%;
            }
            p:nth-child(2){
                margin-top: .26667rem;
                width: 5.33333rem;
                font-size: .32rem;
                height: .46667rem;
                line-height: .46667rem;
                color: #666;
            }
            p:nth-child(3){
                font-size: .34667rem;
                margin-top: .26667rem;
                span:nth-child(1){
                    color: #ff6743
                }
                span:nth-child(2){
                    color: #666;
                    margin-left: .13333rem;
                }
            }
        }
        >a{
            width:0;
            span{
                position: absolute;
                right: .4rem;
                bottom: .26667rem;
                width: 2.02667rem;
                height: .64rem;
                border-radius: .33333rem;
                font-size: .32rem;
                color: #ff6743;
                border: 1px solid #ff6743;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
  }
  .d3{
    background-color: #f5f5f5;
    box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
    .du1{
        display: flex;
        justify-content: space-between;
        li{
            display: flex;
            width: 4.52rem;
            height: 2.4rem;
            align-items: center;
            padding: 0 .46667rem;
            justify-content: space-between;
            border-radius: .08rem;
            box-sizing: border-box;
            background-color: #fefefe;
            div{
                h3{
                    height: .6rem;
                    line-height: .6rem;
                    font-size: .4rem;
                    color: #232323;
                    text-align: center;
                }
                >p{
                    height: .53333rem;
                    line-height: .53333rem;
                    font-size: .29333rem;
                    color: #666;
                    letter-spacing: 0;
                    span{
                        color: #ff6743
                    }
                }
            }
            img{
                width: 1.2rem;
                height: 1.2rem;
                border: none;
                border-color: transparent;
                vertical-align: middle;
            }
        }
    }
    .du2{
        margin-top: .16rem;
        justify-content: space-between;
        display: flex;
        li{
            display: flex;
            width: 2.96rem;
            height: 2.82667rem;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: .08rem;
            box-sizing: border-box;
            background-color: #fefefe;
            div{
                h3{
                    height: .6rem;
                    line-height: .6rem;
                    font-size: .4rem;
                    color: #232323;
                    text-align: center;
                }
                >p{
                    height: .53333rem;
                    line-height: .53333rem;
                    font-size: .29333rem;
                    color: #666;
                    letter-spacing: 0;
                    span{
                        color: #ff6743
                    }
                }
            }
            img{
                border: none;
                border-color: transparent;
                vertical-align: middle;
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }

}
}

`

export const HotsReWrap=styled.div`
padding-top: .53333rem;
padding-left: .4rem;
padding-bottom: .93333rem;
.dtop{
    overflow:hidden;
    h3{
        height: .61333rem;
        line-height: .61333rem;
        font-size: .53333rem;
        font-weight: 700;
        color: #232323;
        float: left;
    }
    a{
        display: block;
        float: right;
        width: .53333rem;
        height: .53333rem;
        margin-right: .26667rem;
        margin-top: .04rem;
        img{
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
        }
    }
}
.dbot{
    margin-top: .53333rem;
    .swiper-container{
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        .swiper-wrapper{
            transition-duration: 0ms;
            .swiper-slide{
                width: ${r(107)};
                margin-right: ${r(8)};
                a{
                    display: block;
                    text-decoration: none;
                    outline: none;
                    outline: none;
                    color: #232323;
                    div{
                        width: 2.85333rem;
                        height: 3.89333rem;
                        border-radius: .10667rem;
                        overflow: hidden;
                        border: 1px solid #ebebeb;
                        img{
                            border: none;
                            border-color: transparent;
                            vertical-align: middle;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    p{
                        height: .66667rem;
                        line-height: .66667rem;
                        font-size: .4rem;
                        color: #232323;
                        margin-top: .13333rem;
                        width: 100%;
                        font-weight: 700;
                        padding-right: .4rem;
                        box-sizing: border-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
}
`


export const TourReWrap=styled.div`
    background-color: #f5f5f5;
    padding-top: .53333rem;
    padding-bottom: .53333rem;
.dtop{
    overflow:hidden;
    h3{
        height: .61333rem;
        line-height: .61333rem;
        font-size: .53333rem;
        font-weight: 700;
        color: #232323;
        float: left;
        padding-left: .4rem;
    }
    a{
        display: block;
        float: right;
        width: .53333rem;
        height: .53333rem;
        margin-right: .26667rem;
        margin-top: .04rem;
        img{
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
        }
    }
}
.dbot{
    margin-top: .53333rem;
    .swiper-container{
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        .swiper-wrapper{
            transition-duration: 0ms;
            transform: translate3d(65px, 0px, 0px);
            .swiper-slide{
                width: 6.53333rem;
                transition: height .5s;  
                margin-right: 20px;
                a{
                    display: block;
                    text-decoration: none;
                    outline: none;
                    outline: none;
                    color: #232323;
                    div{
                        width: 100%;
                        height: 3.73333rem;
                        border-radius: .10667rem;
                        border: 1px solid #ebebeb;
                        overflow: hidden;
                        img{
                            border: none;
                            border-color: transparent;
                            vertical-align: middle;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    p{
                        height: .66667rem;
                        line-height: .66667rem;
                        font-size: .45333rem;
                        color: #232323;
                        margin-top: .33333rem;
                        width: 100%;
                        font-weight: 700;
                        padding-right: .4rem;
                        box-sizing: border-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    h3{
                        font-size: .34667rem;
                        height: .53333rem;
                        line-height: .53333rem;
                        color: #666;
                        text-align: center;
                    }
                }
            }
            >div:nth-child(1){
                margin-left:${r(60)}
            }
        }
    }
}
`
export const VipWrap=styled.div`
width: 100%;
.dtop{
    display: flex;
    align-items: center;
    width: 100%;
    height: 1.06667rem;
    padding: 0 .4rem;
    box-sizing: border-box;
    background-image: url(${require('@/assets/img/vipbg.png')});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
    justify-content: space-between;
    >div:nth-child(1){
        display: flex;
        align-items: center;
        span:nth-child(1){
            width: .53333rem;
            height: .48rem;
            background-image: url(${require('@/assets/img/vip.png')});
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100%;
            margin-right: .13333rem;
        }
        span:nth-child(2){
            font-size: .4rem;
            color: #f0d1b0;
            font-weight: 700;
        }
    }
    >div:nth-child(2){
        display: flex;
        align-items: center;
        span:nth-child(1){
            font-size: .37333rem;
            color: #f0d1b0;
        }
        span:nth-child(2){
            width: .13333rem;
            height: .26667rem;
            background-image: url(${require('@/assets/img/yj.png')});
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100%;
            margin-right: .13333rem;
        }
    }
}
.dbot{
    display: flex;
    justify-content: space-between;
    padding: 0 .4rem .4rem;
    background-color: #f5f5f5;
    >div:nth-child(1){
        h3{
            height: 1.10667rem;
            font-size: .42667rem;
            color: #232323;
            align-items: center;
            padding-right: .33333rem;
            display: flex;
            justify-content: space-between;
        }
        ul{
            margin-right: .22667rem;
            display:flex;
            li{
                margin-right: .2rem;
                width: 2.85333rem;
                overflow: hidden;
                div{
                    width: 2.82667rem;
                    height: 3.89333rem;
                    border-radius: .10667rem;
                    border: 1px solid #ebebeb;
                    overflow: hidden;
                    img{
                        border: none;
                        border-color: transparent;
                        vertical-align: middle;
                        width: 100%;
                        height: 100%;
                    }
                }
                p{
                    font-size: .29333rem;
                    color: #999;
                    line-height: .6rem;
                    margin-top: .13333rem;
                    padding-left: .32rem;
                    width: 100%;
                    box-sizing: border-box;
                    strong{
                        font-size: .48rem;
                        font-weight: 400;
                        color: #ff6743!important;
                    }
                }
            }
        }
    }
    >div:nth-child(2){
        
        h3{
            padding-left: .22667rem;
            height: 1.10667rem;
            font-size: .42667rem;
            color: #232323;
            align-items: center;
            display: flex;
            justify-content: space-between;
        }
        ul{
            padding-left: .22667rem;
            position: relative;
            li{
                width: 2.85333rem;
                overflow: hidden;
                div{
                    width: 2.82667rem;
                    height: 3.89333rem;
                    border-radius: .10667rem;
                    border: 1px solid #ebebeb;
                    overflow: hidden;
                    img{
                        border: none;
                        border-color: transparent;
                        vertical-align: middle;
                        width: 100%;
                        height: 100%;
                    }
                }
                p{
                    font-size: .29333rem;
                    color: #999;
                    line-height: .6rem;
                    margin-top: .13333rem;
                    padding-left: .32rem;
                    width: 100%;
                    box-sizing: border-box;
                    span:nth-child(1){
                        color: #ff6743!important;
                    }
                }
            }
        }
    }
}
`


export const FloorShowWrap=styled.div`
margin-bottom: .8rem;
margin-top: .8rem;
.dtop{
    overflow:hidden;
    h3{
        height: .61333rem;
        line-height: .61333rem;
        font-size: .53333rem;
        font-weight: 700;
        color: #232323;
        float: left;
        padding-left: .4rem;
    }
    a{
        display: block;
        float: right;
        width: .53333rem;
        height: .53333rem;
        margin-right: .26667rem;
        margin-top: .04rem;
        img{
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
        }
    }
}
.dbot{
    padding: .4rem 0 1.06667rem .4rem;
    .swiper-container{
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        .swiper-wrapper{
            transition-duration: 0ms;
            transform: translate3d(0px, 0px, 0px);
            .swiper-slide{
                width: ${r(107)};
                margin-right: ${r(8)};
                a{
                    display: block;
                    text-decoration: none;
                    outline: none;
                    color: #232323;
                    >div{
                        width: 2.85333rem;
                        height: 3.89333rem;
                        border-radius: .10667rem;
                        border: 1px solid #ebebeb;
                        position: relative;
                        overflow: hidden;
                        img{
                            border: none;
                            border-color: transparent;
                            vertical-align: middle;
                            width: 100%;
                            height: 100%;
                        }
                        div{
                            span{
                                position: absolute;
                                left: .10667rem;
                                top: -.02667rem;
                                width: .77333rem;
                                height: .93333rem;
                                display: block;
                                background: url(${require('@/assets/img/juc.png')}) 50% no-repeat;
                                background-size: 100%;
                            }
                        }
                    }
                    p{
                        height: .66667rem;
                        line-height: .66667rem;
                        font-size: .45333rem;
                        color: #232323;
                        margin-top: .33333rem;
                        width: 100%;
                        font-weight: 700;
                        padding-right: .4rem;
                        box-sizing: border-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    p:nth-child(3){
                        font-size: .29333rem;
                        color: #999;
                        height: .48rem;
                        line-height: .48rem;
                        margin-top: .13333rem;
                        strong{
                            font-size: .42667rem;
                            letter-spacing: 0;
                            margin-right: .13333rem;
                            font-weight: 400;
                            color: #ff6743!important;
                        }
                    }
                }
            }
        }
    }
}
.dc{
    background: rgb(104, 106, 113);
    margin-top: .53333rem;
    >div{
        padding: .37333rem 0 .37333rem .4rem;
        a{
            display: flex;
            text-decoration: none;
            outline: none;
            color: #232323;
            div:nth-child(1){
                width: 2.85333rem;
                height: 3.89333rem;
                border-radius: .10667rem;
                border: 1px solid #ebebeb;
                overflow: hidden;
                position: relative;
                img{
                    border: none;
                    border-color: transparent;
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                }
                div{
                    span:nth-child(1){
                        position: absolute;
                        right: .10667rem;
                        top: .10667rem;
                        display: block;
                    }
                    span:nth-child(2){
                        position: absolute;
                        left: .10667rem;
                        top: -.02667rem;
                        width: .77333rem;
                        height: .93333rem;
                        display: block;
                        background: url(${require('@/assets/img/juc.png')}) 50% no-repeat;
                        background-size: 100%;
                    }
                }
            }
            div:nth-child(2){
                flex: 1;
                margin-left: .4rem;
                color: #fefefe;
                padding-top: .42667rem;
                p{
                    font-size: .32rem;
                    height: .64rem;
                    line-height: .64rem;
                    letter-spacing: 1px;
                    strong{
                        font-size: .42667rem;
                    }
                }
                h3{
                    width: 90%;
                    font-size: .45333rem;
                    line-height: .6rem;
                    max-height: 1.2rem;
                    min-height: .6rem;
                    margin-top: .33333rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                p:nth-child(3){
                    width: 5.6rem;
                    font-size: .32rem;
                    height: .64rem;
                    line-height: .64rem;
                    margin-top: .33333rem;
                }
            }
        }
    }
}
>div:last-child .dbot{
    padding: .4rem 0 0 .4rem;
}
`


export const HotThWrap=styled.div`
    margin-bottom: .53333rem;
    padding-left: .4rem;
.dtop{
    overflow:hidden;
    h3{
        height: .61333rem;
        line-height: .61333rem;
        font-size: .53333rem;
        font-weight: 700;
        color: #232323;
        float: left;
    }
    a{
        display: block;
        float: right;
        width: .53333rem;
        height: .53333rem;
        margin-right: .26667rem;
        margin-top: .04rem;
        img{
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
        }
    }
}
.dbot{
    margin-top: .53333rem;
    .swiper-container{
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
        .swiper-wrapper{
            transition-duration: 0ms;
            transform: translate3d(0px, 0px, 0px);
            .swiper-slide{
                width: ${r(264)};
                margin-right: ${r(20)};
                height: 7.92rem;
                border-radius: .10667rem;
                border: 1px solid #ebebeb;
                padding: .53333rem .45333rem;
                box-sizing: border-box;
                .db1{
                    height: 1.36rem;
                    div:nth-child(1){
                        width: 1.33333rem;
                        height: 1.33333rem;
                        border-radius: .10667rem;
                        border: 1px solid #ebebeb;
                        float: left;
                        img{
                            border: none;
                            border-color: transparent;
                            vertical-align: middle;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    div:nth-child(2){
                        margin-left: .26667rem;
                        width: 3.33333rem;
                        float: left;
                        h3{
                            margin-top: .06667rem;
                            font-size: .45333rem;
                            color: #232323;
                            height: .6rem;
                            line-height: .6rem;
                            font-weight: 700;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        p{
                            margin-top: .2rem;
                            font-size: .32rem;
                            color: #666;
                            height: .4rem;
                            line-height: .4rem;
                        }
                    }
                    >p{
                        float: right;
                        width: .37333rem;
                        height: .37333rem;
                        margin-top: .49333rem;
                        color: #232323;
                        font-size:${r(25)};
                    }
                }
                .db2{
                    width: 100%;
                    height: .05333rem;
                    background-color: #ebebeb;
                    border-radius: .02667rem;
                    margin-top: 1.06667rem;
                    position: relative;
                    left: 0;
                    right: 0;
                    p{
                        width: 50%;
                        height: .90667rem;
                        position: absolute;
                        text-align: center;
                        bottom: -.06667rem;
                        span:nth-child(1){
                            display:block;
                            font-size: .37333rem;
                            color: #b3b3b3;
                            height: .46667rem;
                            line-height: .46667rem;
                        }
                        span:nth-child(2){
                            display: block;
                            width: .18667rem;
                            height: .18667rem;
                            background-color: #ccc;
                            border-radius: 50%;
                            margin: .25333rem auto 0;
                        }
                    }
                    p:nth-child(1){
                        left: 0;
                    }          
                    p:nth-child(2){
                        right:0
                    }
                }
                ul{
                    display: flex;
                    justify-content: space-between;
                    margin-top: .46667rem;
                    li{
                        width: 2.85333rem;
                        height: 3.89333rem;
                        border-radius: .10667rem;
                        border: 1px solid #ebebeb;
                        overflow: hidden;
                        img{
                            border: none;
                            border-color: transparent;
                            vertical-align: middle;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
}
`

export const ReShowWrap=styled.div`
    padding: 0 .4rem;
    margin-top: .8rem;
.dtop{
    overflow:hidden;
    h3{
        font-size: .53333rem;
        font-weight: 700;
        color: #232323;
        float: left;
    }
}
.dbot{
    margin-top: .53333rem;
    >div{
        width:100%;
        font-size: .45333rem;
        text-align:center;
        height:.7rem;
    }
    ul{
        li{
            display: flex;
            margin-bottom: .86667rem;
            position: relative;
            .db1{
                width: 2.93333rem;
                height: 4rem;
                border-radius: .10667rem;
                border: 1px solid #ebebeb;
                position: relative;
                overflow: hidden;
                img{
                    border: none;
                    border-color: transparent;
                    vertical-align: middle;
                    width: 100%;
                    height: 100%;
                }
                div{
                    i{
                        position: absolute;
                        left: .10667rem;
                        top: -.02667rem;
                        width: .77333rem;
                        height: .93333rem;
                        display: block;
                        background: url(${require('@/assets/img/juc.png')}) 50% no-repeat;
                        background-size: 100%;
                    }
                }
            }
            .db2{
                flex: 1;
                margin-left: .4rem;
                color: #232323;
                padding-top: .13333rem;
                .p1{
                    font-size: .32rem;
                    height: .64rem;
                    line-height: .64rem;
                    letter-spacing: 1px;
                    color: #666;
                    strong{
                        color: #232323;
                        font-size: .42667rem;
                        margin-right:${r(5)};
                    }
                }
                a{
                    display:block;
                    color: #232323;
                    h3{
                        width: 100%;
                        font-size: .45333rem;
                        line-height: .6rem;
                        min-height: .6rem;
                        max-height: 1.2rem;
                        margin-top: .33333rem;
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                .p2{
                    margin-top: .33333rem;
                    width: 5.33333rem;
                    font-size: .32rem;
                    height: .64rem;
                    line-height: .64rem;
                    color: #666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .p3{
                    font-size: .29333rem;
                    color: #999;
                    height: .48rem;
                    line-height: .48rem;
                    margin-top: .26667rem;
                    strong{
                        font-size: .42667rem;
                        letter-spacing: 0;
                        margin-right: .13333rem;
                        font-weight: 400;
                        color: #ff6743!important;
                    }
                }
            }
        }
    }
}`