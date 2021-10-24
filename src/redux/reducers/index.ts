import { combineReducers } from "redux";
import counter from "./config-reducer";

export const rootReducer = combineReducers({
    counter
})