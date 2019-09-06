import {fromJS} from "immutable"
import {GET_INDEX_HOTCITY, GET_INDEX_CITY, GET_INDEX_DATA, GET_HOTS_RECOMMEND,
     GET_TOUR_RECOMMEND, GET_FLOOR_SHOW, GET_HOT_THEATRE, GET_RECOMMEND_SHOW, GET_RECOMMEND_SHOWF,
     GET_SEARCH_HOT, GET_SEARCH_DATA} from './actionCreator'
const defaultStore=fromJS({
    currentCity:{
        city_id:0,
        abbreviation:"",
        name:"全国",
        page:1
    },
    hotcity:[],
    citys:[],
    indexdata:[],
    hotsRecommend:[],
    tourRecommend:[],
    floorShow:[],
    hotTheatre:[],
    recommendShow:[],
    bool:false,
    searchDate:[],
    searchHot:[]
})
export default (state=defaultStore,action)=>{
    switch(action.type){
        case GET_INDEX_HOTCITY :
            return state.update('hotcity',val=>val=fromJS(action.val.data.data.hot_city_List));
        case GET_INDEX_CITY :
                var res=action.val.data.data;
                var arr=[];
                for(let key in res){
                    arr.push(res[key])
                }
                return state.update('citys',val=>val=fromJS(arr));
        case GET_SEARCH_HOT :
            return state.update('searchHot',val=>val=action.val.data.data);
        case GET_SEARCH_DATA :
            console.log(action.val.data.data.list)
            return state.update('searchDate',val=>val=fromJS(action.val.data.data.list));
        case GET_INDEX_DATA :
                var currentCity=fromJS(action.val.currentCity);
                var indexdata=fromJS(action.val.data.data);
                return state.update('indexdata',val=>val=indexdata).update('currentCity',val=>val=currentCity);
        case GET_HOTS_RECOMMEND :
            var hotsRecommend=fromJS(action.val.data.data.hots_show_list);
            return state.update('hotsRecommend',val=>val=hotsRecommend);      
        case GET_TOUR_RECOMMEND :
            var tourRecommend=fromJS(action.val.data.data.tour_show_list);
            return state.update('tourRecommend',val=>val=tourRecommend);
        case GET_FLOOR_SHOW :
            var floorShow=fromJS(action.val.data.data);
            return state.update('floorShow',val=>val=floorShow);
        case GET_HOT_THEATRE :
                var hotTheatre=fromJS(action.val.data.data.theatre_list);   
                return state.update('hotTheatre',val=>val=hotTheatre);
        case GET_RECOMMEND_SHOW :
                var recommendShow=fromJS(action.val.data.data.recommend_show_list);
                return state.update('recommendShow',val=>val.concat(recommendShow));  
        case GET_RECOMMEND_SHOWF :
                return state.update('bool',val=>val=true).updateIn(['currentCity','page'],val=>val=action.val.page); 
        default:
            return state;
    }
}