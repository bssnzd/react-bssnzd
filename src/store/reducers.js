import {combineReducers} from "redux-immutable"
import indexReducer from "@/components/main/index/reducer"
import theaterReducer from "@/components/main/theater/reducer"
import showReducer from "@/components/main/show/reducer"


export default combineReducers({
    indexReducer,
    theaterReducer,
    showReducer
})