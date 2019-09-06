import {fromJS} from "immutable"
import {GET_THEATER_LIST} from './actionCreator'
const defaultStore=fromJS({
    theaterList:[],
})
export default (state=defaultStore,action)=>{
    if(action.type===GET_THEATER_LIST){
        var theaterList=fromJS(action.val.data.data.theatre_list);
        return state.update('theaterList',val=>val=theaterList);   
    }
    return state;
    
}