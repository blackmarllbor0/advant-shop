import { Dispatch } from "redux";
import { CityAction, CityActionType } from "../../types/cities";

export const setCountry =
  (country: string) => (dispatch: Dispatch<CityAction>) => {
    dispatch({
      type: CityActionType.GET_COUNTRY,
      payload: country,
    });
  };

export const setCityList =
  (city: string[]) => (dispatch: Dispatch<CityAction>) => {
    dispatch({
      type: CityActionType.SET_LOADING_STATUS,
      payload: "loading",
    });
    dispatch({
      type: CityActionType.GET_CITY_LIST,
      payload: city,
    });
    setTimeout(() => {
      dispatch({
        type: CityActionType.SET_LOADING_STATUS,
        payload: "uploaded",
      });
    }, 500);
  };

export const setActiveCity =
  (city: string) => (dispatch: Dispatch<CityAction>) => {
    dispatch({
      type: CityActionType.SET_ACTIVE_CITY,
      payload: city,
    });
  };
