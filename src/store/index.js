import {createStore,applyMiddleware} from "redux"
// 让 dispatch支持传入函数体,进行异步回调
import thunk from "redux-thunk"
import reducers from "./reducers"
export default createStore(reducers,applyMiddleware(thunk));



