import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {competitionsReducer} from "./competitionsReducer";
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";

let rootReducers = combineReducers({
    competitionsList: competitionsReducer
})
//const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware)
);

window.store = store;

export default store;