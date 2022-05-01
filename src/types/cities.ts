export default interface CityState {
  country: string;
  cities: string[];
  activeCity: string;
  loading: string;
}

export enum CityActionType {
  GET_COUNTRY = "GET_COUNTRY",
  GET_CITY_LIST = "GET_CITY_LIST",
  SET_ACTIVE_CITY = "SET_ACTIVE_CITY",
  SET_LOADING_STATUS = "SET_LOADING_STATUS",
}

interface getCountry {
  type: CityActionType.GET_COUNTRY;
  payload: string;
}

interface getCityList {
  type: CityActionType.GET_CITY_LIST;
  payload: string[];
}

interface setActiveCity {
  type: CityActionType.SET_ACTIVE_CITY;
  payload: string;
}

interface setLoadingStatus {
  type: CityActionType.SET_LOADING_STATUS;
  payload: string;
}

export enum toggleCityListType {
  "Россия" = "rus",
  "Украина" = "ukr",
  "Беларусь" = "bel",
  "Казахстан" = "kaz",
}

export type CityAction =
  | getCountry
  | getCityList
  | setActiveCity
  | setLoadingStatus;