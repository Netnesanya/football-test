import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {competitionsReducer} from "./competitionsReducer";
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import {teamsReducer} from "./teamsReducer";

let rootReducers = combineReducers({
    competitionsList: competitionsReducer,
    teamsList: teamsReducer
})
//const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;

