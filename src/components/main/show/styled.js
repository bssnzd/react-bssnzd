import styled from "styled-components"
function r(px) {
    let baseSize = 75 /2;
    return px / baseSize + "rem";
}
export const ShowWrap=styled.div`
    
    box-sizing: border-box;
    position: relative;
    height:${r(667)};
    overflow:auto;
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
.dm{
    display: flex;
    padding-left: .4rem;
    padding-bottom: .26667rem;
    padding-top: .26667rem;
    background-color: #fefefe;
    position: fixed;
    left: 0;
    top: 1.17333rem;
    z-index: 1;
    width: 100%;
    box-sizing: border-box;
    .dm1{
        flex: 1;
        width: 7.33333rem;
        margin-right: .13333rem;
        overflow: auto;
        ul{
            width: ${r(660)};
            pointer-events: auto; 
            white-space: nowrap;
            display: flex;
            li{
                font-size: .4rem;
                color: #232323;
                padding: 0 .13333rem;
                border-bottom: .04rem solid transparent;
                border-radius: .02667rem;
                height: .64rem;
                line-height: .64rem;
                margin-right: .4rem;
                
            }
        }
        .active{
            color: #ff6743;
            border-color: #ff6743;
        }
    }
    .dm2{
        width: 2rem;
        border-left: .02667rem solid #e0e0e0;
        font-size: .4rem;
        color: #666;
        height: .37333rem;
        line-height: .37333rem;
        margin-top: .13333rem;
        text-align: center; 
        span:nth-child(2){
            display: inline-block;
            width: .29333rem;
            height: .34667rem;
            background: url(${require('@/assets/img/png.png')}) no-repeat ;
            background-size:${r(10)} ${r(13)};
            margin-left:${r(4)}
        }
    }
}
.df{
    padding-top: 2.61333rem;
    section{
        padding-left: .4rem;
        padding-right: .4rem;
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
        /* li:last-child{
            margin-bottom:0;
        } */
    }
}
.hed{
    position: fixed;
    left: 0;
    right: 0;
    top: 1.17333rem;
    bottom: 0;
    z-index: 100;
    height:86%;
    section{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
        >div:nth-child(1){
            width: 2.16rem;
            height: 100%;
            float: left;
        }
        >div:nth-child(2){
            width: 7.84rem;
            height: 100%;
            background-color: #fefefe;
            float: right;
            padding: .4rem .4rem 0;
            box-sizing: border-box;
            position: relative;
            div:nth-child(1){
                h3{
                    font-size: .4rem;
                    color: #666;
                    height: .53333rem;
                    line-height: .53333rem;
                }
                div{
                    height: 13.6rem;
                    padding-bottom: 1.2rem;
                    overflow: auto;
                    margin-top: .26667rem;
                    box-sizing: border-box;
                    ul{
                        overflow: hidden;
                        display:flex;
                        justify-content:space-between;
                        flex-wrap:wrap;
                        li{
                            text-align: center;
                            width: 2.24rem;
                            height: .85333rem;
                            line-height: .85333rem;
                            border-radius: .05333rem;
                            background-color: #f5f5f5;
                            color: #232323;
                            font-size: .32rem;
                            margin-bottom: .16rem;
                        }
                        .active{
                            background-color: #fff1e9;
                            color: #ff6743;
                        }
                    }
                }
            }
            >div:nth-child(2){
                height: 1.2rem;
                border-top: 1px solid #ebebeb;
                display: flex;
                align-items: center;
                text-align: center;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #fefefe;
                span{
                    flex: 1;
                    font-size: .37333rem;
                    color: #232323;
                    height: 1.2rem;
                    line-height: 1.2rem;
                }
                span:nth-child(2){
                    color: #fff;
                    background-color: #ff6743;
                }
            } 
        }
    }
    
}
`