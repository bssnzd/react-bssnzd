import {fromJS} from "immutable"
import {GET_SHOW_LIST, GET_CITY, GET_SHOW_CATEGORY, GET_SHOW_CHANGE} from './actionCreator'
const defaultStore=fromJS({
    showList:[],
    current:{
        category_id:0,
        city_id:0,
        name:'全国',
        page:1
    },
    city:[],
    showCategory:[]
})
export default (state=defaultStore,action)=>{
    if(action.type===GET_SHOW_LIST){
        var current=fromJS(action.val.current)
        var showList=fromJS(action.val.data.data.list);
        return state.update('showList',val=>val.concat(showList)).update('current',val=>val=current);   
    }else if(action.type===GET_CITY){
        var city=fromJS(action.val.data.data.city_list);
        return state.update('city',val=>val=city);  
    }else if(action.type===GET_SHOW_CATEGORY){
        var showCategory=fromJS(action.val.data.data.show_category_list);
        return state.update('showCategory',val=>val=showCategory);  
    }else if(action.type===GET_SHOW_CHANGE){
        var currentq=fromJS(action.val.current)
        var showListq=fromJS(action.val.data.data.list);
        return state.update('showList',val=>val=showListq).update('current',val=>val=currentq);
    }
    return state;
    
}