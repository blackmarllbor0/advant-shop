import { seacrList } from "../interfaces/searchList";

export default interface ProductState {
  loading: string;
  productList: seacrList[];
}

export enum ProductActionType {
  SET_LOADING_STATUS = "SET_LOADING_STATUS",
  GET_PRODUCT_LIST = "GET_PRODUCT_LIST",
}

interface setLoadingStatus {
  type: ProductActionType.SET_LOADING_STATUS;
  payload: string;
}

interface getCityList {
  type: ProductActionType.GET_PRODUCT_LIST;
  payload: seacrList[];
}

export type ProductAction = setLoadingStatus | getCityList;
