import { Dispatch } from "react";
import { seacrList } from "../../interfaces/searchList";
import { ProductAction, ProductActionType } from "../../types/prodcut";

export const setProdcutList =
  (prodcut: seacrList[]) => (dispatch: Dispatch<ProductAction>) => {
    dispatch({
      type: ProductActionType.SET_LOADING_STATUS,
      payload: "loading",
    });
    dispatch({
      type: ProductActionType.GET_PRODUCT_LIST,
      payload: prodcut,
    });
    setTimeout(() => {
      dispatch({
        type: ProductActionType.SET_LOADING_STATUS,
        payload: "uploaded",
      });
    }, 800);
  };
