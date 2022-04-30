import { Dispatch } from "react";
import { BasketAction, BasketActionType } from "../../types/baskets";
import { seacrList } from "../../interfaces/searchList";

export const setBasketItems =
  (items: seacrList) => (dispatch: Dispatch<BasketAction>) => {
    dispatch({
      type: BasketActionType.SET_BASKET_ITEMS,
      payload: items,
    });
  };

export const showBasketPanel = (arg: boolean) => (dispatch: Dispatch<BasketAction>) => {
  dispatch({
    type: BasketActionType.SHOW_BASKET,
    payload: arg
  });
};
