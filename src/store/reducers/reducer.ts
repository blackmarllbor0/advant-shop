import { combineReducers } from "redux";
import { basketReduser } from "./basket";
import { cityReducer } from "./cities";
import { ProductReducer } from "./prodcut";

export const rootReducer = combineReducers({
  city: cityReducer,
  basket: basketReduser,
  product: ProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
