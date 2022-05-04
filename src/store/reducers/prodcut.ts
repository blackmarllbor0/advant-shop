import ProductState, {
  ProductAction,
  ProductActionType,
} from "../../types/prodcut";

const initialState: ProductState = {
  loading: "loading",
  productList: [],
};

export const ProductReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionType.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.payload,
      };
    case ProductActionType.GET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
};
