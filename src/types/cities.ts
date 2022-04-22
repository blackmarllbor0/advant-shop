export default interface CityState {
  country: string;
  cities: string[];
}

export enum CityActionType {
  GET_COUNTRY = "GET_COUNTRY",
  GET_CITY_LIST = "GET_CITY_LIST",
}

interface getCountry {
  type: CityActionType.GET_COUNTRY;
  payload: string;
}

interface getCityList {
  type: CityActionType.GET_CITY_LIST;
  payload: string[];
}

export type CityAction = getCountry | getCityList;