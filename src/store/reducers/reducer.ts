import { combineReducers } from "redux";
import { cityReducer } from "./cities";

export const rootReducer = combineReducers({
    city: cityReducer 
})

export type RootState = ReturnType<typeof rootReducer>;