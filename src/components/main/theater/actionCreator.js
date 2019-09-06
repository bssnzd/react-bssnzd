import request from "@/core/http/http"
export const GET_THEATER_LIST='index/get_theater_list'

const action = (val,type) => {
    return {
        type,
        val
    }//action
}
export const loadTheaterListAsync = (dispatch) => {
    return ()=>{
        request({
            method: "get",
            url: "/theatre/index/getTheatreList",
            params:{
                page: '1',
                version:"6.0.3",
                referer:"2"
            }
        }).then((res) => {
            dispatch(action(res,GET_THEATER_LIST));
        })
    }
}