import { combineReducers } from "redux";
import { basketReduser } from "./basket";
import { cityReducer } from "./cities";

export const rootReducer = combineReducers({
    city: cityReducer,
    basket: basketReduser
})

export type RootState = ReturnType<typeof rootReducer>;