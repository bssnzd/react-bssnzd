import styled from "styled-components"
// function r(px) {
//     let baseSize = 75 /2;
//     return px / baseSize + "rem";
// }
export const TheaterWrap=styled.div`
.dt{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.17333rem;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;
    background-color: #fefefe;
    z-index: 100;
    h3{
        font-size: .48rem;
        font-weight: 400;
        color: #232323;
        line-height: 1.17333rem;
    }
}
.ds{
    height: 100%;
    background-color: #fdfdfd;
    padding-top: 1.49333rem;
    padding-bottom: 1.65333rem;
    width: 9.2rem;
    margin: 0 auto;
    ul{
        li{
            >div{
                background-color: #fefefe;
                box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                border-radius: .10667rem;
                border: 1px solid #ebebeb;
                margin-bottom: .4rem;
                padding: .54667rem .44rem .56rem;
                .ds1{
                    display: flex;
                    justify-content: space-between;
                    a{
                        display: flex;
                        color: #232323;
                        div:nth-child(1){
                            width: 1.33333rem;
                            height: 1.33333rem;
                            margin-right: .26667rem;
                            overflow: hidden;
                            img{
                                width: 100%;
                                height: 100%;
                                vertical-align: middle;
                                border-radius: .10667rem;
                            }
                        }
                        div:nth-child(2){
                            max-width: 6rem;
                            p{
                                width: 100%;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                padding: .08rem 0 .13333rem;
                                font-size: .45333rem;
                                color: #232323;
                                font-weight: 700;
                            }
                            p:nth-child(2){
                                color: #666;
                                font-size: .32rem;
                            }
                        }
                    }
                    a:last-child{
                        display: block;
                        padding: 0.1rem .26667rem 0  .26667rem;
                        width: .37333rem;
                        height: .37333rem;
                        font-size: 1rem;
                        line-height:.37333rem;
                    }
                }
                .ds2{
                    margin-top: .34667rem;
                    .swiper-slide{
                        width: 3.04rem;
                        >div{
                            position: relative;
                            width: 3.04rem;
                            border-bottom: .05333rem solid #ebebeb;
                            border-radius: .02667rem;
                            padding-bottom: .38667rem;
                            margin-bottom: .46667rem;
                            p{
                                color: #b3b3b3;
                                font-size: .37333rem;
                                padding-right: .18667rem;
                                text-align: center;
                                height: .33333rem;
                            }
                            span{
                                position: absolute;
                                left: 50%;
                                bottom: -.12rem;
                                display: inline-block;
                                width: .18667rem;
                                height: .18667rem;
                                margin-left: -.18667rem;
                                border-radius: 50%;
                                background-color: #ccc;
                            }
                        }
                        a{
                            display: block;
                            width: 3.04rem;
                            height: 3.89333rem;
                            line-height: 3.89333rem;
                            overflow: hidden;
                            outline: none;
                            color: #232323;
                            img{
                                border: none;
                                border-color: transparent;
                                vertical-align: middle;
                                width: 2.85333rem;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
}
`