// import request from "@/core/http/http"
import axios from 'axios'
export const GET_SHOW_LIST='index/get_show_list'
export const GET_CITY='index/get_city'
export const GET_SHOW_CATEGORY='index/get_show_category'
export const GET_SHOW_CHANGE='index/get_show_change'

const action = (val,type) => {
    return {
        type,
        val
    }//action
}
export const loadCityAsync = (dispatch) => {
    return ()=>{
        axios({
            method: "get",
            url: "https://m.juooo.com/Search/getCity",
            params:{
                version:"6.0.3",
                referer:"1"
            }
        }).then((res) => {
            dispatch(action(res,GET_CITY));
        })
    }
}
export const loadShowCategoryAsync = (dispatch) => {
    return ()=>{
        axios({
            method: "get",
            url: "https://m.juooo.com/Search/getShowCategory",
            params:{
                version:"6.0.3",
                referer:"1"
            }
        }).then((res) => {
            dispatch(action(res,GET_SHOW_CATEGORY));
        })
    }
}
export const loadShowListAsync = (dispatch,current) => {
    return ()=>{
        axios({
            method: "get",
            url: "https://m.juooo.com/Search/getShowList",
            params:{
                category:current.category_id,
                city_id:current.city_id,
                page: current.page,
                keywords:'',
                version:"6.0.3",
                referer:"2"
            }
        }).then((res) => {
            res.current=current;
            dispatch(action(res,GET_SHOW_LIST));
        })
    }
}

export const loadShowChangeAsync = (dispatch,current) => {
    return ()=>{
        axios({
            method: "get",
            url: "https://m.juooo.com/Search/getShowList",
            params:{
                category:current.category_id,
                city_id:current.city_id,
                page: current.page,
                keywords:'',
                version:"6.0.3",
                referer:"2"
            }
        }).then((res) => {
            res.current=current;
            dispatch(action(res,GET_SHOW_CHANGE));
        })
    }
}