import {
  BasketAction,
  BasketActionType,
  BasketState,
} from "../../types/baskets";

const initialState: BasketState = {
  items: [],
  show: false
};

export const basketReduser = (
  state: BasketState = initialState,
  action: BasketAction
): BasketState => {
  switch (action.type) {
    case BasketActionType.SET_BASKET_ITEMS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case BasketActionType.SHOW_BASKET:
      return {
        ...state,
        show: action.payload
      }
    default:
      return state;
  }
};
