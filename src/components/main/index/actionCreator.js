import request from "@/core/http/http"
import axios from "axios";
export const GET_INDEX_CITY='index/get_index_city'
export const GET_INDEX_HOTCITY='index/get_index_hotcity'
export const GET_INDEX_DATA='index/get_index_data'
export const GET_HOTS_RECOMMEND='index/get_hots_recommend'
export const GET_TOUR_RECOMMEND='index/get_tour_recommend'
export const GET_FLOOR_SHOW='index/get_floor_show'
export const GET_HOT_THEATRE='index/get_hot_theatre'
export const GET_RECOMMEND_SHOW='index/get_recommend_show'
export const GET_RECOMMEND_SHOWF='index/get_recommend_showf'
export const GET_SEARCH_HOT='index/get_search_hot'
export const GET_SEARCH_DATA='index/get_recommend_showf'


const action = (val,type) => {
    return {
        type,
        val
    }//action
}
export const loadHotcityAsync = (dispatch) => {
    return ()=>{
        request({
            method: "get",
            url: "/city/city/getHotCityList?version=6.0.3&referer=2"
        }).then((res) => {
            dispatch(action(res,GET_INDEX_HOTCITY));
        })
    }
}

export const loadCityAsync = (dispatch) => {
    return ()=>{
        request({
            method: "get",
            url: "/city/city/getSortedCityList?version=6.0.3&referer=2"
        }).then((res) => {
            dispatch(action(res,GET_INDEX_CITY));
        })
    }
}
export const loadSearchHotAsync = (dispatch) => {
    return ()=>{
        axios({
            method: "get",
            // url: "/shapis"
            url:'https://m.juooo.com/Search/getHotWord?version=6.0.3&referer=2'
        }).then((res) => {
            dispatch(action(res,GET_SEARCH_HOT));
        })
    }
}

export const loadSearchDataAsync = (dispatch,search) => {
    return ()=>{
        axios({
            method: "get",
            url: "https://m.juooo.com/Search/getShowList",
            params:{
                keywords: search,
                page: "1",
                sort_type: "1",
                version: "6.0.3",
                referer: "2",
            }
        }).then((res) => {
            dispatch(action(res,GET_SEARCH_DATA));
        })
    }
}

export const loadIndexDataAsync = (dispatch,currentCity) => {
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getClassifyHome",
            params:{
                city_id: currentCity.city_id,
                abbreviation: currentCity.abbreviation||"",
                version:"6.0.3",
                referer:"1"
            }
        }).then((res) => {
            res.currentCity=currentCity;
            dispatch(action(res,GET_INDEX_DATA));
        })
    }
}

export const loadHotsRecommendAsync = (dispatch,currentCity) => {
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getHotsRecommendList",
            params:{
                city_id: currentCity.city_id,
                version:"6.0.3",
                referer:"1"
            }
        }).then((res) => {
            dispatch(action(res,GET_HOTS_RECOMMEND));
        })
    }
}

export const loadTourRecommendAsync = (dispatch,currentCity) => {
    return ()=>{
        axios({
            method: "get",
            url: "https://api.juooo.com/home/index/getTourRecommendList",
            params:{
                city_id: currentCity.city_id,
                version:"6.0.3",
                referer:"2"
            }
        }).then((res) => {
            dispatch(action(res,GET_TOUR_RECOMMEND));
        })
    }
}

export const loadFloorShowAsync = (dispatch,currentCity) => {
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getFloorShow",
            params:{
                city_id: currentCity.city_id,
                version:"6.0.3",
                referer:"1"
            }
        }).then((res) => {
            dispatch(action(res,GET_FLOOR_SHOW));
        })
    }
}

export const loadHotTheatreAsync = (dispatch,currentCity) => {
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getHotTheatre",
            params:{
                city_id: currentCity.city_id,
                version:"6.0.3",
                referer:"1"
            }
        }).then((res) => {
            dispatch(action(res,GET_HOT_THEATRE));
        })
    }
}

export const loadRecommendShowAsync = (dispatch,currentCity) => {
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getRecommendShow",
            params:{
                cityAdd: currentCity.abbreviation||'',
	            page: currentCity.page,
                version:"6.0.3",
                referer:"1"
            }
        }).then((res) => {
            if(res.data.data.recommend_show_list.length===0){
                res.page=currentCity.page-1
                dispatch(action(res,GET_RECOMMEND_SHOWF));
            }else{
                dispatch(action(res,GET_RECOMMEND_SHOW));
            }  
        })
    }
}