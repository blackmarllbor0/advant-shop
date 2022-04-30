import { seacrList } from "../interfaces/searchList";

export interface BasketState {
  items: seacrList[];
  show: boolean;
}

export enum BasketActionType {
  SET_BASKET_ITEMS = "SET_BASKET_ITEMS",
  SHOW_BASKET = "SHOW_BASKET",
}

interface setBasketItems {
  type: BasketActionType.SET_BASKET_ITEMS;
  payload: seacrList
}

interface showBasketModal {
  type: BasketActionType.SHOW_BASKET;
  payload: boolean;
}

export type BasketAction = setBasketItems | showBasketModal;