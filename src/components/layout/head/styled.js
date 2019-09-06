import styled from "styled-components"
// function r(px) {
//     let baseSize = 75 / 2;
//     return px / baseSize + "rem";
// }
const Tab = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index:100;
    .am-tab-bar-tab:nth-child(1) .am-tab-bar-tab-image{
        /* ${props => {     //props是个对象，里面有传入的值
        return props.bool ? "red" : "green";
    }} */
        width:${props => {
        return props.index ===0 ? '37px' : '22px';
    }};
        height:${props => {
            return props.index ===0 ? '37px' : '22px';
        }};
    }
    .am-tab-bar-tab:nth-child(1) .am-tab-bar-tab-title{
        display:${props => {
            return props.index ===0 ? 'none' : '';
        }};
    }
`
export { Tab } 